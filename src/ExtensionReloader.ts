import { readFileSync } from 'fs';
import JSON5 from 'json5';
import { merge } from 'lodash';
import {
  Chunk,
  Compilation,
  Compiler,
  Entry,
  version,
} from 'webpack';

import {
  IExtensionReloaderInstance,
  IPluginOptions,
} from '../typings/webpack-ext-reloader';
import { changesTriggerer } from './hot-reload';
import { onlyOnDevelopmentMsg } from './messages/warnings';
import { middlewareInjector } from './middleware';
import defaultOptions from './utils/default-options';
import { warn } from './utils/logger';
import { extractEntries } from './utils/manifest';
import AbstractPluginReloader from './webpack/AbstractExtensionReloader';
import CompilerEventsFacade from './webpack/CompilerEventsFacade';

export default class ExtensionReloaderImpl extends AbstractPluginReloader implements IExtensionReloaderInstance {
  private _opts?: IPluginOptions;

  constructor(options?: IPluginOptions) {
    super();
    this._opts = options;
    this._chunkVersions = {};
  }

  public _isWebpackGToEV5() {
    if (version) {
      const [major] = version.split(".");
      if (parseInt(major, 10) >= 5) {
        return true;
      }
    }
    return false;
  }

  public _whatChanged(chunks: Compilation["chunks"], { background, contentScript, extensionPage }: IEntriesOption) {
    const changedChunks = [] as Chunk[];

    // eslint-disable-next-line no-restricted-syntax
    for (const chunk of chunks) {
      const oldVersion = this._chunkVersions[chunk.name];
      this._chunkVersions[chunk.name] = chunk.hash;
      if (chunk.hash !== oldVersion) {
        changedChunks.push(chunk);
      }
    }

    const bgChanged = changedChunks.some(({ name }) => name === background);

    const contentChanged = changedChunks.some(({ name }) => {
      let _contentChanged = false;

      if (Array.isArray(contentScript)) {
        _contentChanged = contentScript.some((script) => script === name);
      } else {
        _contentChanged = name === contentScript;
      }

      return _contentChanged;
    });

    const pageChanged = changedChunks.some(({ name }) => {
      let _pageChanged = false;

      if (Array.isArray(extensionPage)) {
        _pageChanged = extensionPage.some((script) => script === name);
      } else {
        _pageChanged = name === extensionPage;
      }
      //

      return _pageChanged;
    });

    return { bgChanged, contentChanged, pageChanged };
  }

  public _registerPlugin(compiler: Compiler) {
    const { reloadPage, port, entries, manifest: manifestPath, manifestJSON } = merge(defaultOptions, this._opts);

    let manifest = manifestJSON
    if (!manifest && manifestPath) {
      manifest = JSON5.parse(readFileSync(manifestPath).toString())
    }

    const parsedEntries: IEntriesOption = manifest
      ? extractEntries(
          compiler.options.entry as Entry,
          manifest,
          compiler.options.output as Compiler["options"]["output"],
        )
      : entries;

    if (!parsedEntries) {
      throw new Error(`one of manifest/manifestJSON or entries must be passed to ExtReloader options`)
    }

    this._eventAPI = new CompilerEventsFacade(compiler);
    this._injector = middlewareInjector(parsedEntries, { port, reloadPage });
    this._eventAPI.afterOptimizeChunks((comp, chunks) => {
      comp.assets = {
        ...comp.assets,
        ...this._injector(comp.assets, chunks),
      };
    });

    this._eventAPI.afterEmit((comp) => {
      // reload page after first emit
      if (!this._triggerer) this._triggerer = changesTriggerer(port, reloadPage);

      const { bgChanged, contentChanged, pageChanged} = this._whatChanged(comp.chunks, parsedEntries);

      if (bgChanged || contentChanged || pageChanged) {
        this._triggerer(bgChanged, contentChanged, pageChanged);
      }
    });
  }

  public apply(compiler: Compiler) {
    if ((this._isWebpackGToEV5() ? compiler.options.mode : process.env.NODE_ENV) === "development") {
      this._registerPlugin(compiler);
    } else {
      warn(onlyOnDevelopmentMsg.get());
    }
  }
}
