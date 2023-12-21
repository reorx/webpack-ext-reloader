# Webpack Extension Reloader

A Webpack plugin to automatically reload chrome extensions during development.

[![npm version](https://img.shields.io/npm/v/@reorx/webpack-ext-reloader)](https://www.npmjs.com/package/@reorx/webpack-ext-reloader)

## Installing

npm

```bash
npm i -D @reorx/webpack-ext-reloader
```


## What is this?

This is a webpack plugin that allows you to bring hot reloading functionality to WebExtensions, essentially `webpack-dev-server`, but for (WebExtensions)[https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions].

This is a fork from [`webpack-extension-reloader`](https://github.com/SimplifyJobs/webpack-ext-reloader), maintained and updated by Reorx. The goal here is to continue to support the latest version of webpack and Chrome Extension Manifest V3.

**Note**: This plugin doesn't support [**Hot Module Replacement (HMR)**](https://webpack.js.org/concepts/hot-module-replacement/) yet.


## How to use

You can simply check [reorx/webpack-chrome-boilerplate](https://github.com/reorx/webpack-chrome-boilerplate) to see how it works in a demo project.

> [!CAUTION]
>
> 1. This plugin is supposed to work with extension with background page (which is called service worker in MV3), where the `chrome.runtime.reload()` is executed when changes happen. If your extension doesn't have a background page, you can separate the `manifest.json` file by environment, adding background for development mode. (Example can be found in this project: [github-toc-sidebar](https://github.com/reorx/github-toc-sidebar/blob/9b9e255d46561ece0f4109bbaf317a5a87063f36/webpack.config.js#L19))
>
> 2. Even with background page, the plugin is still not guaranteed to work all the time, due to the mechanism that Chrome would terminate a service worker when its not actively receiving events (see [The extension service worker lifecycle](https://developer.chrome.com/docs/extensions/develop/concepts/service-workers/lifecycle#idle-shutdown)). The easiest way to keep the service worker awake is to inspect it from the `chrome://extensions` page, see [Debugging the service worker](https://developer.chrome.com/docs/extensions/get-started/tutorial/service-worker-events).


### Using as a plugin

Add `@reorx/webpack-ext-reloader` to the plugins section of your webpack configuration file. Note that this plugin don't outputs the manifest (at most read it to gather information).
For outputing not only the `manifest.json` but other static files too, use `CopyWebpackPlugin`.

```js
const ExtReloader = require('@reorx/webpack-ext-reloader');

plugins: [
  new ExtReloader(),
  new CopyWebpackPlugin([
      { from: "./src/manifest.json" },
      { from: "./src/popup.html" },
    ]),
]
```

You can point to your `manifest.json file`...

```js
plugins: [
  new ExtReloader({
    manifest: path.resolve(__dirname, "manifest.json")
  }),
  // ...
]
```

... or you can also use some extra options (the following are the default ones):

```js
// webpack.dev.js
module.exports = {
  mode: "development", // The plugin is activated only if mode is set to development
  watch: true,
  entry: {
    'content-script': './my-content-script.js',
    background: './my-background-script.js',
    popup: 'popup',
  },
  //...
  plugins: [
    new ExtReloader({
      port: 9090, // Which port use to create the server
      reloadPage: true, // Force the reload of the page also
      entries: { // The entries used for the content/background scripts or extension pages
        contentScript: 'content-script',
        background: 'background',
        extensionPage: 'popup',
      }
    }),
    // ...
  ]
}
```

**Note I**: `entries` or `manifest` are needed. If both are given, `entries` will override the information comming from `manifest.json`. If none are given the default `entries` values (see above) are used.

And then just run your application with Webpack in watch mode:

```bash
NODE_ENV=development webpack --config myconfig.js --mode=development --watch
```

**Note II**: You need to set `--mode=development` to activate the plugin (only if you didn't set on the webpack.config.js already) then you need to run with `--watch`, as the plugin will be able to sign the extension only if webpack triggers the rebuild (again, only if you didn't set on webpack.config).

### Multiple Content Script and Extension Page support

If you use more than one content script or extension page in your extension, like:

```js
entry: {
  'my-first-content-script': './my-first-content-script.js',
  'my-second-content-script': './my-second-content-script.js',
  // and so on ...
  background: './my-background-script.js',
  'popup': './popup.js',
  'options': './options.js',
  // and so on ...
}
```

You can use the `entries.contentScript` or `entries.extensionPage` options as an array:

```js
plugins: [
  new ExtReloader({
    entries: {
      contentScript: ['my-first-content-script', 'my-second-content-script', /* and so on ... */],
      background: 'background',
      extensionPage: ['popup', 'options', /* and so on ... */],
    }
  }),
  // ...
]
```


### License

This project has been forked from [SimplifyJobs/webpack-ext-reloader](https://github.com/SimplifyJobs/webpack-ext-reloader), which is licensed under the [MIT license](https://github.com/SimplifyJobs/webpack-ext-reloader/blob/master/LICENSE). All changes made in this fork have been licensed via the [MIT license](https://github.com/reorx/webpack-ext-reloader/blob/master/LICENSE).
