#!/usr/bin/env node
/// <reference path="../typings/webpack-ext-reloader.d.ts" />
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("minimist"), require("webpack"), require("lodash"), require("useragent"), require("ws"), require("webpack-sources"));
	else if(typeof define === 'function' && define.amd)
		define(["minimist", "webpack", "lodash", "useragent", "ws", "webpack-sources"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("minimist"), require("webpack"), require("lodash"), require("useragent"), require("ws"), require("webpack-sources")) : factory(root["minimist"], root["webpack"], root["lodash"], root["useragent"], root["ws"], root["webpack-sources"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function(__WEBPACK_EXTERNAL_MODULE__3476__, __WEBPACK_EXTERNAL_MODULE__9582__, __WEBPACK_EXTERNAL_MODULE__467__, __WEBPACK_EXTERNAL_MODULE__6884__, __WEBPACK_EXTERNAL_MODULE__7836__, __WEBPACK_EXTERNAL_MODULE__5327__) {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5658:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var util_1 = __webpack_require__(3837);

var webpack = __webpack_require__(9582);

var ExtensionReloader_1 = __webpack_require__(6048);

var logger_1 = __webpack_require__(6373);

var ExtensionCompiler = /*#__PURE__*/function () {
  function ExtensionCompiler(config, pluginOptions) {
    _classCallCheck(this, ExtensionCompiler);

    this.compiler = webpack(config);
    new ExtensionReloader_1["default"](pluginOptions).apply(this.compiler);
  }

  _createClass(ExtensionCompiler, [{
    key: "watch",
    value: function watch() {
      // eslint-disable-next-line consistent-return
      this.compiler.watch({}, function (err, stats) {
        if (err) {
          return ExtensionCompiler.treatErrors(err);
        }

        (0, logger_1.info)(stats.toString({
          colors: true
        }));
      });
    }
  }], [{
    key: "treatErrors",
    value: function treatErrors(err) {
      (0, util_1.log)(err.stack || err);

      if (err.details) {
        (0, util_1.log)(err.details);
      }
    }
  }]);

  return ExtensionCompiler;
}();

exports["default"] = ExtensionCompiler;

/***/ }),

/***/ 5106:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/* eslint-disable no-throw-literal */

var path_1 = __webpack_require__(1017);

var process_1 = __webpack_require__(7282);

var util_1 = __webpack_require__(3837);

var options_constants_1 = __webpack_require__(8804);

var args_constant_1 = __webpack_require__(2205);

var events_constants_1 = __webpack_require__(3443);

var manual_1 = __webpack_require__(3128);

exports["default"] = function (args) {
  if (args[args_constant_1.HELP]) {
    (0, util_1.log)((0, manual_1["default"])());
    throw {
      type: events_constants_1.SIG_EXIT,
      payload: 0
    };
  }

  var config = args[args_constant_1.CONFIG] || options_constants_1.DEFAULT_CONFIG;
  var port = args[args_constant_1.PORT] || options_constants_1.DEFAULT_PORT;
  var manifest = args[args_constant_1.MANIFEST] || null;
  var pluginOptions = {
    manifest: manifest,
    port: port,
    reloadPage: !args[args_constant_1.NO_PAGE_RELOAD]
  };
  var optPath = (0, path_1.resolve)((0, process_1.cwd)(), config);

  try {
    // eslint-disable-next-line no-eval
    var webpackConfig = eval("require")(optPath);
    return {
      webpackConfig: webpackConfig,
      pluginOptions: pluginOptions
    };
  } catch (err) {
    (0, util_1.log)("[Error] Couldn't require the file: ".concat(optPath));
    (0, util_1.log)(err);
    throw {
      type: events_constants_1.SIG_EXIT,
      payload: 1
    };
  }
};

/***/ }),

/***/ 2205:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.MANIFEST = exports.NO_PAGE_RELOAD = exports.PORT = exports.CONFIG = exports.HELP = void 0;
exports.HELP = "help";
exports.CONFIG = "config";
exports.PORT = "port";
exports.NO_PAGE_RELOAD = "no-page-reload";
exports.MANIFEST = "manifest";

/***/ }),

/***/ 3443:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SIG_EXIT = void 0;
exports.SIG_EXIT = "SIG_EXIT";

/***/ }),

/***/ 8777:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var minimist = __webpack_require__(3476);

var source_map_support_1 = __webpack_require__(6252);

var util_1 = __webpack_require__(3837);

var args_parser_1 = __webpack_require__(5106);

var events_constants_1 = __webpack_require__(3443);

var ExtensionCompiler_1 = __webpack_require__(5658);

(0, source_map_support_1.install)();

var _a = minimist(process.argv.slice(2)),
    _ = _a._,
    args = __rest(_a, ["_"]);

try {
  var _ref = (0, args_parser_1["default"])(args),
      webpackConfig = _ref.webpackConfig,
      pluginOptions = _ref.pluginOptions;

  var compiler = new ExtensionCompiler_1["default"](webpackConfig, pluginOptions);
  compiler.watch();
} catch (err) {
  if (err.type === events_constants_1.SIG_EXIT) {
    process.exit(err.payload);
  } else {
    (0, util_1.log)(err);
    process.exit(err.code);
  }
}

/***/ }),

/***/ 3128:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/* eslint-disable no-useless-escape */

var options_constants_1 = __webpack_require__(8804);

exports["default"] = function () {
  return "\nUsage:\n    wer [--config <config_path>] [--port <port_number>] [--no-page-reload] [--content-script <content_script_paths>] [--background <bg_script_path>] [--extension-page <extension_page_paths>]\n\nComplete API:\n+------------------------------------------------------------------------------------------------------------+\n|        name        |    default        |                               description                         |\n|--------------------|-------------------|-------------------------------------------------------------------|\n| --help             |                   | Show this help\n| --config           | ".concat(options_constants_1.DEFAULT_CONFIG, " | The webpack configuration file path                               |\n| --port             | ").concat(options_constants_1.DEFAULT_PORT, "   | The port to run the server                                        |\n| --content-script   | ").concat(options_constants_1.DEFAULT_CONTENT_SCRIPT_ENTRY, "    | The **entry/entries** name(s) for the content script(s)           |\n| --background       | ").concat(options_constants_1.DEFAULT_BACKGROUND_ENTRY, "        | The **entry** name for the background script                      |\n| --extension-page   | ").concat(options_constants_1.DEFAULT_EXTENSION_PAGE_ENTRY, "             | The **entry/entries** name(s) for the extension pages(s)          |\n| --manifest         |        null       | The **manifest.json** path                                        |\n| --no-page-reload   |                   | Disable the auto reloading of all **pages** which runs the plugin |\n+------------------------------------------------------------------------------------------------------------+\n");
};

/***/ }),

/***/ 6048:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(467);

var webpack_1 = __webpack_require__(9582);

var hot_reload_1 = __webpack_require__(3009);

var warnings_1 = __webpack_require__(2436);

var middleware_1 = __webpack_require__(6392);

var default_options_1 = __webpack_require__(6961);

var logger_1 = __webpack_require__(6373);

var manifest_1 = __webpack_require__(6005);

var AbstractExtensionReloader_1 = __webpack_require__(4257);

var CompilerEventsFacade_1 = __webpack_require__(8675);

var ExtensionReloaderImpl = /*#__PURE__*/function (_AbstractExtensionRel) {
  _inherits(ExtensionReloaderImpl, _AbstractExtensionRel);

  var _super = _createSuper(ExtensionReloaderImpl);

  function ExtensionReloaderImpl(options) {
    var _this;

    _classCallCheck(this, ExtensionReloaderImpl);

    _this = _super.call(this);
    _this._opts = options;
    _this._chunkVersions = {};
    return _this;
  }

  _createClass(ExtensionReloaderImpl, [{
    key: "_isWebpackGToEV5",
    value: function _isWebpackGToEV5() {
      if (webpack_1.version) {
        var _webpack_1$version$sp = webpack_1.version.split("."),
            _webpack_1$version$sp2 = _slicedToArray(_webpack_1$version$sp, 1),
            major = _webpack_1$version$sp2[0];

        if (parseInt(major, 10) >= 5) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "_whatChanged",
    value: function _whatChanged(chunks, _ref) {
      var background = _ref.background,
          contentScript = _ref.contentScript,
          extensionPage = _ref.extensionPage;
      var changedChunks = []; // eslint-disable-next-line no-restricted-syntax

      var _iterator = _createForOfIteratorHelper(chunks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var chunk = _step.value;
          var oldVersion = this._chunkVersions[chunk.name];
          this._chunkVersions[chunk.name] = chunk.hash;

          if (chunk.hash !== oldVersion) {
            changedChunks.push(chunk);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var contentOrBgChanged = changedChunks.some(function (_ref2) {
        var name = _ref2.name;
        var contentChanged = false;
        var bgChanged = name === background;

        if (Array.isArray(contentScript)) {
          contentChanged = contentScript.some(function (script) {
            return script === name;
          });
        } else {
          contentChanged = name === contentScript;
        }

        return contentChanged || bgChanged;
      }); //

      var onlyPageChanged = !contentOrBgChanged && changedChunks.some(function (_ref3) {
        var name = _ref3.name;
        var pageChanged = false;

        if (Array.isArray(extensionPage)) {
          pageChanged = extensionPage.some(function (script) {
            return script === name;
          });
        } else {
          pageChanged = name === extensionPage;
        } //


        return pageChanged;
      });
      return {
        contentOrBgChanged: contentOrBgChanged,
        onlyPageChanged: onlyPageChanged
      };
    }
  }, {
    key: "_registerPlugin",
    value: function _registerPlugin(compiler) {
      var _this2 = this;

      var _ref4 = (0, lodash_1.merge)(default_options_1["default"], this._opts),
          reloadPage = _ref4.reloadPage,
          port = _ref4.port,
          entries = _ref4.entries,
          manifest = _ref4.manifest;

      var parsedEntries = manifest ? (0, manifest_1.extractEntries)(compiler.options.entry, manifest, compiler.options.output) : entries;
      this._eventAPI = new CompilerEventsFacade_1["default"](compiler);
      this._injector = (0, middleware_1.middlewareInjector)(parsedEntries, {
        port: port,
        reloadPage: reloadPage
      });
      this._triggerer = (0, hot_reload_1.changesTriggerer)(port, reloadPage);

      this._eventAPI.afterOptimizeChunks(function (comp, chunks) {
        comp.assets = Object.assign(Object.assign({}, comp.assets), _this2._injector(comp.assets, chunks));
      });

      this._eventAPI.afterEmit(function (comp) {
        var _this2$_whatChanged = _this2._whatChanged(comp.chunks, parsedEntries),
            contentOrBgChanged = _this2$_whatChanged.contentOrBgChanged,
            onlyPageChanged = _this2$_whatChanged.onlyPageChanged;

        if (contentOrBgChanged || onlyPageChanged) {
          _this2._triggerer(onlyPageChanged);
        }
      });
    }
  }, {
    key: "apply",
    value: function apply(compiler) {
      if ((this._isWebpackGToEV5() ? compiler.options.mode : process.env.NODE_ENV) === "development") {
        this._registerPlugin(compiler);
      } else {
        (0, logger_1.warn)(warnings_1.onlyOnDevelopmentMsg.get());
      }
    }
  }]);

  return ExtensionReloaderImpl;
}(AbstractExtensionReloader_1["default"]);

exports["default"] = ExtensionReloaderImpl;

/***/ }),

/***/ 9871:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.NEW_FAST_RELOAD_CALLS = exports.NEW_FAST_RELOAD_DEBOUNCING_FRAME = exports.NEW_FAST_RELOAD_CHROME_VERSION = exports.FAST_RELOAD_WAIT = exports.FAST_RELOAD_CALLS = exports.FAST_RELOAD_DEBOUNCING_FRAME = void 0;
/**
 * Chrome lets only a max number of calls in a time frame
 * before block the plugin for be reloading itself to much
 * @see https://github.com/rubenspgcavalcante/webpack-chrome-extension-reloader/issues/2
 */

exports.FAST_RELOAD_DEBOUNCING_FRAME = 2000;
exports.FAST_RELOAD_CALLS = 6;
exports.FAST_RELOAD_WAIT = 10 * 1000; // ================================================================================================================= //

/**
 * A new reloading rate was created after opening a bug ticket on
 * Chromium, and the revision was merged to master
 * @see https://chromium-review.googlesource.com/c/chromium/src/+/1340272
 */

/**
 * The Chrome/Chromium version number that includes the new rates
 * @see https://storage.googleapis.com/chromium-find-releases-static/d3b.html#d3b25e1380984b2f1f23d0e8dc1a337743c6caaf
 */

exports.NEW_FAST_RELOAD_CHROME_VERSION = [73, 0, 3637];
exports.NEW_FAST_RELOAD_DEBOUNCING_FRAME = 1000;
exports.NEW_FAST_RELOAD_CALLS = 30;

/***/ }),

/***/ 1918:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEBUG = exports.ERROR = exports.WARN = exports.INFO = exports.LOG = exports.NONE = void 0;
exports.NONE = 0;
exports.LOG = 1;
exports.INFO = 2;
exports.WARN = 3;
exports.ERROR = 4;
exports.DEBUG = 5;

/***/ }),

/***/ 5934:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SOCKET_ERR_CODE_REF = exports.RECONNECT_INTERVAL = void 0;
exports.RECONNECT_INTERVAL = 2000;
exports.SOCKET_ERR_CODE_REF = "https://tools.ietf.org/html/rfc6455#section-7.4.1";

/***/ }),

/***/ 8804:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_EXTENSION_PAGE_ENTRY = exports.DEFAULT_BACKGROUND_ENTRY = exports.DEFAULT_CONTENT_SCRIPT_ENTRY = exports.DEFAULT_RELOAD_PAGE = exports.DEFAULT_CONFIG = exports.DEFAULT_PORT = void 0;
exports.DEFAULT_PORT = 9090;
exports.DEFAULT_CONFIG = "webpack.config.js";
exports.DEFAULT_RELOAD_PAGE = true;
exports.DEFAULT_CONTENT_SCRIPT_ENTRY = "content-script";
exports.DEFAULT_BACKGROUND_ENTRY = "background";
exports.DEFAULT_EXTENSION_PAGE_ENTRY = "popup";

/***/ }),

/***/ 6578:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.REF_URL = void 0;
exports.REF_URL = "https://github.com/rubenspgcavalcante/webpack-extension-reloader/wiki/General-Information";

/***/ }),

/***/ 1692:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var useragent_1 = __webpack_require__(6884);

var ws_1 = __webpack_require__(7836);

var logger_1 = __webpack_require__(6373);

var SignEmitter_1 = __webpack_require__(7574);

var HotReloaderServer = /*#__PURE__*/function () {
  function HotReloaderServer(port) {
    _classCallCheck(this, HotReloaderServer);

    this._server = new ws_1.Server({
      port: port
    });
  }

  _createClass(HotReloaderServer, [{
    key: "listen",
    value: function listen() {
      var _this = this;

      this._server.on("connection", function (ws, msg) {
        var userAgent = (0, useragent_1.parse)(msg.headers["user-agent"]);
        _this._signEmitter = new SignEmitter_1["default"](_this._server, userAgent);
        ws.on("message", function (data) {
          return (0, logger_1.info)("Message from ".concat(userAgent.family, ": ").concat(JSON.parse(data).payload));
        });
        ws.on("error", function () {// NOOP - swallow socket errors due to http://git.io/vbhSN
        });
      });
    }
  }, {
    key: "signChange",
    value: function signChange(reloadPage, onlyPageChanged) {
      if (this._signEmitter) {
        return this._signEmitter.safeSignChange(reloadPage, onlyPageChanged);
      }

      return Promise.resolve(null);
    }
  }]);

  return HotReloaderServer;
}();

exports["default"] = HotReloaderServer;

/***/ }),

/***/ 7574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(467);

var ws_1 = __webpack_require__(7836);

var fast_reloading_constants_1 = __webpack_require__(9871);

var block_protection_1 = __webpack_require__(9832);

var signals_1 = __webpack_require__(1873);

var SignEmitter = /*#__PURE__*/function () {
  function SignEmitter(server, _ref) {
    var family = _ref.family,
        major = _ref.major,
        minor = _ref.minor,
        patch = _ref.patch;

    _classCallCheck(this, SignEmitter);

    this._server = server;

    if (family === "Chrome") {
      var _ref2 = this._satisfies([parseInt(major, 10), parseInt(minor, 10), parseInt(patch, 10)], fast_reloading_constants_1.NEW_FAST_RELOAD_CHROME_VERSION) ? [fast_reloading_constants_1.NEW_FAST_RELOAD_CALLS, fast_reloading_constants_1.NEW_FAST_RELOAD_DEBOUNCING_FRAME] : [fast_reloading_constants_1.FAST_RELOAD_CALLS, fast_reloading_constants_1.FAST_RELOAD_DEBOUNCING_FRAME],
          _ref3 = _slicedToArray(_ref2, 2),
          reloadCalls = _ref3[0],
          reloadDeboucingFrame = _ref3[1];

      var debouncer = (0, block_protection_1.debounceSignal)(reloadDeboucingFrame, this);
      var blocker = (0, block_protection_1.fastReloadBlocker)(reloadCalls, fast_reloading_constants_1.FAST_RELOAD_WAIT, this);
      this._safeSignChange = debouncer(blocker(this._setupSafeSignChange()));
    } else {
      this._safeSignChange = this._setupSafeSignChange();
    }
  }

  _createClass(SignEmitter, [{
    key: "safeSignChange",
    value: function safeSignChange(reloadPage, onlyPageChanged) {
      var _this = this;

      return new Promise(function (res, rej) {
        _this._safeSignChange(reloadPage, onlyPageChanged, res, rej);
      });
    }
  }, {
    key: "_setupSafeSignChange",
    value: function _setupSafeSignChange() {
      var _this2 = this;

      return function (reloadPage, onlyPageChanged, onSuccess, onError) {
        try {
          _this2._sendMsg((0, signals_1.signChange)({
            reloadPage: reloadPage,
            onlyPageChanged: onlyPageChanged
          }));

          onSuccess();
        } catch (err) {
          onError(err);
        }
      };
    }
  }, {
    key: "_sendMsg",
    value: function _sendMsg(msg) {
      this._server.clients.forEach(function (client) {
        if (client.readyState === ws_1.OPEN) {
          client.send(JSON.stringify(msg));
        }
      });
    }
  }, {
    key: "_satisfies",
    value: function _satisfies(browserVersion, targetVersion) {
      var versionPairs = (0, lodash_1.zip)(browserVersion, targetVersion); // eslint-disable-next-line no-restricted-syntax

      var _iterator = _createForOfIteratorHelper(versionPairs),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _step$value = _slicedToArray(_step.value, 2),
              _step$value$ = _step$value[0],
              version = _step$value$ === void 0 ? 0 : _step$value$,
              _step$value$2 = _step$value[1],
              target = _step$value$2 === void 0 ? 0 : _step$value$2;

          if (version !== target) {
            return version > target;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return true;
    }
  }]);

  return SignEmitter;
}();

exports["default"] = SignEmitter;

/***/ }),

/***/ 3362:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var logger_1 = __webpack_require__(6373);

var HotReloaderServer_1 = __webpack_require__(1692);

var changesTriggerer = function changesTriggerer(port, reloadPage) {
  var server = new HotReloaderServer_1["default"](port);
  (0, logger_1.info)("[ Starting the Web Extension Hot Reload Server... ]");
  server.listen();
  return function (onlyPageChanged) {
    return server.signChange(reloadPage, onlyPageChanged);
  };
};

exports["default"] = changesTriggerer;

/***/ }),

/***/ 3009:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.changesTriggerer = void 0;

var changes_triggerer_1 = __webpack_require__(3362);

exports.changesTriggerer = changes_triggerer_1["default"];

/***/ }),

/***/ 9197:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var safe_1 = __webpack_require__(4431);

var lodash_1 = __webpack_require__(467);

var log_constants_1 = __webpack_require__(1918);

var reference_docs_constants_1 = __webpack_require__(6578);

var Message = /*#__PURE__*/function () {
  function Message(type, referenceNumber, message) {
    _classCallCheck(this, Message);

    this.type = type;
    this.referenceNumber = referenceNumber;
    this.message = message;
  }

  _createClass(Message, [{
    key: "get",
    value: function get() {
      var additionalData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var code = "WER-".concat(this.getPrefix()).concat(this.referenceNumber);
      var refLink = (0, safe_1.bold)((0, safe_1.white)("".concat(reference_docs_constants_1.REF_URL, "#").concat(code)));
      return "[".concat(code, "] ").concat((0, lodash_1.template)(this.message, additionalData), ".\nVisit ").concat(refLink, " for complete details\n");
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.get();
    }
  }, {
    key: "getPrefix",
    value: function getPrefix() {
      switch (this.type) {
        case log_constants_1.INFO:
          return "I";

        case log_constants_1.WARN:
          return "W";

        case log_constants_1.ERROR:
          return "E";

        default:
          return "";
      }
    }
  }]);

  return Message;
}();

exports["default"] = Message;

/***/ }),

/***/ 1049:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.bgScriptManifestRequiredMsg = exports.bgScriptEntryErrorMsg = void 0;
/* eslint-disable no-multi-str */

var log_constants_1 = __webpack_require__(1918);

var Message_1 = __webpack_require__(9197);

exports.bgScriptEntryErrorMsg = new Message_1["default"](log_constants_1.ERROR, 1, "Background script webpack entry not found/match \
the provided on 'manifest.json' or 'entry.background' \
option of the plugin");
exports.bgScriptManifestRequiredMsg = new Message_1["default"](log_constants_1.ERROR, 2, "Background script on manifest is required");

/***/ }),

/***/ 2436:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.onlyOnDevelopmentMsg = void 0;
/* eslint-disable no-multi-str */

var log_constants_1 = __webpack_require__(1918);

var Message_1 = __webpack_require__(9197);

exports.onlyOnDevelopmentMsg = new Message_1["default"](log_constants_1.WARN, 1, "Warning, Extension Reloader Plugin was not enabled! \
It runs only on webpack --mode=development (v5 or more) \
or with NODE_ENV=development (lower versions)");

/***/ }),

/***/ 6392:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.middlewareInjector = void 0;

var middleware_injector_1 = __webpack_require__(91);

exports.middlewareInjector = middleware_injector_1["default"];

/***/ }),

/***/ 91:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var webpack_sources_1 = __webpack_require__(5327);

var middleware_source_builder_1 = __webpack_require__(6271);

var middlewareInjector = function middlewareInjector(_ref, _ref2) {
  var background = _ref.background,
      contentScript = _ref.contentScript,
      extensionPage = _ref.extensionPage;
  var port = _ref2.port,
      reloadPage = _ref2.reloadPage;
  var source = (0, middleware_source_builder_1["default"])({
    port: port,
    reloadPage: reloadPage
  });

  var sourceFactory = function sourceFactory() {
    for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
      sources[_key] = arguments[_key];
    }

    return _construct(webpack_sources_1.ConcatSource, sources);
  };

  var matchBgOrContentOrPage = function matchBgOrContentOrPage(name) {
    return name === background || name === contentScript || contentScript && contentScript.includes(name) || name === extensionPage || extensionPage && extensionPage.includes(name);
  };

  return function (assets, chunks) {
    return Array.from(chunks).reduce(function (prev, _ref3) {
      var name = _ref3.name,
          files = _ref3.files;

      if (matchBgOrContentOrPage(name)) {
        files.forEach(function (entryPoint) {
          if (/\.js$/.test(entryPoint)) {
            var finalSrc = sourceFactory(source, assets[entryPoint]);
            prev[entryPoint] = finalSrc;
          }
        });
      }

      return prev;
    }, {});
  };
};

exports["default"] = middlewareInjector;

/***/ }),

/***/ 6271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var lodash_1 = __webpack_require__(467);

var wer_middleware_raw_1 = __webpack_require__(3653);

var raw_loader_webextension_polyfill_1 = __webpack_require__(2634);

var webpack_sources_1 = __webpack_require__(5327);

var middleware_config_constants_1 = __webpack_require__(5934);

var signals = __webpack_require__(1873);

function middleWareSourceBuilder(_ref) {
  var port = _ref.port,
      reloadPage = _ref.reloadPage;
  var tmpl = (0, lodash_1.template)(wer_middleware_raw_1["default"]);
  return new webpack_sources_1.RawSource(tmpl({
    WSHost: "ws://localhost:".concat(port),
    config: JSON.stringify({
      RECONNECT_INTERVAL: middleware_config_constants_1.RECONNECT_INTERVAL,
      SOCKET_ERR_CODE_REF: middleware_config_constants_1.SOCKET_ERR_CODE_REF
    }),
    polyfillSource: "\"||".concat(raw_loader_webextension_polyfill_1["default"], "\""),
    reloadPage: "".concat(reloadPage),
    signals: JSON.stringify(signals)
  }));
}

exports["default"] = middleWareSourceBuilder;

/***/ }),

/***/ 9832:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.fastReloadBlocker = exports.debounceSignal = void 0;

var lodash_1 = __webpack_require__(467);

var logger_1 = __webpack_require__(6373);

var debounceSignal = function debounceSignal(deboucingFrame, context) {
  return function (func) {
    if (context) {
      (0, lodash_1.runInContext)(context);
    }

    return (0, lodash_1.debounce)(function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return func.apply(context, args);
    }, deboucingFrame);
  };
};

exports.debounceSignal = debounceSignal;

var fastReloadBlocker = function fastReloadBlocker(maxCalls, wait, context) {
  return function (func) {
    var calls = 0;
    var inWait = false; // eslint-disable-next-line consistent-return

    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (inWait) {
        /* do nothing */
      } else if (calls === maxCalls) {
        calls = 0;
        inWait = true;
        var interval = wait / 1000;
        (0, logger_1.warn)("Please wait ".concat(interval, " secs. for next reload to prevent your extension being blocked"));
        var logInterval = setInterval(function () {
          return (0, logger_1.warn)("".concat(--interval, " ..."));
        }, 1000);
        setTimeout(function () {
          clearInterval(logInterval);
          (0, logger_1.info)("Signing for reload now");
          func.apply(context, args);
          inWait = false;
        }, wait);
      } else {
        calls++;
        return func.apply(context, args);
      }
    };
  };
};

exports.fastReloadBlocker = fastReloadBlocker;

/***/ }),

/***/ 6961:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var options_constants_1 = __webpack_require__(8804);

exports["default"] = {
  entries: {
    background: options_constants_1.DEFAULT_BACKGROUND_ENTRY,
    contentScript: options_constants_1.DEFAULT_CONTENT_SCRIPT_ENTRY,
    extensionPage: options_constants_1.DEFAULT_EXTENSION_PAGE_ENTRY
  },
  port: options_constants_1.DEFAULT_PORT,
  reloadPage: options_constants_1.DEFAULT_RELOAD_PAGE
};

/***/ }),

/***/ 6373:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.debug = exports.error = exports.warn = exports.info = exports.log = exports.setLogLevel = void 0;

var safe_1 = __webpack_require__(4431);

var log_constants_1 = __webpack_require__(1918);

var logLevel; // eslint-disable-next-line no-return-assign

var setLogLevel = function setLogLevel(level) {
  return logLevel = level;
};

exports.setLogLevel = setLogLevel;

var log = function log(message) {
  return logLevel >= log_constants_1.LOG && console.log(message);
};

exports.log = log;

var info = function info(message) {
  return logLevel >= log_constants_1.INFO && console.info((0, safe_1.green)(message));
};

exports.info = info;

var warn = function warn(message) {
  return logLevel >= log_constants_1.WARN && console.warn((0, safe_1.yellow)(message));
};

exports.warn = warn;

var error = function error(message) {
  return logLevel >= log_constants_1.ERROR && console.error((0, safe_1.red)(message));
};

exports.error = error;

var debug = function debug(message) {
  return logLevel >= log_constants_1.DEBUG && console.debug((0, safe_1.white)((0, exports.debug)(message)));
};

exports.debug = debug;

/***/ }),

/***/ 6005:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.extractEntries = void 0;

var fs_1 = __webpack_require__(7147);

var lodash_1 = __webpack_require__(467);

var errors_1 = __webpack_require__(1049);

function extractEntries(webpackEntry, manifestPath) {
  var webpackOutput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var manifestJson = JSON.parse((0, fs_1.readFileSync)(manifestPath).toString());
  var background = manifestJson.background,
      content_scripts = manifestJson.content_scripts;
  var filename = webpackOutput.filename;

  if (!filename) {
    throw new Error("Please specify the `output.filename` in your webpack config.");
  }

  if (!(background === null || background === void 0 ? void 0 : background.scripts)) {
    throw new TypeError(errors_1.bgScriptManifestRequiredMsg.get());
  }

  var bgScriptFileNames = background.scripts;
  var toRemove = filename.replace("[name]", "");
  var bgWebpackEntry = Object.keys(webpackEntry).find(function (entryName) {
    return bgScriptFileNames.some(function (bgManifest) {
      return bgManifest.replace(toRemove, "") === entryName;
    });
  });

  if (!bgWebpackEntry) {
    throw new TypeError(errors_1.bgScriptEntryErrorMsg.get());
  }

  var contentEntries = content_scripts ? (0, lodash_1.flatMapDeep)(Object.keys(webpackEntry), function (entryName) {
    return content_scripts.map(function (_ref) {
      var js = _ref.js;
      return js.map(function (contentItem) {
        return contentItem.replace(toRemove, "");
      }).filter(function (contentItem) {
        return contentItem === entryName;
      });
    });
  }) : null;
  return {
    background: bgWebpackEntry,
    contentScript: contentEntries,
    extensionPage: null
  };
}

exports.extractEntries = extractEntries;

/***/ }),

/***/ 1873:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.signLog = exports.signReloaded = exports.signReload = exports.signChange = exports.SIGN_CONNECT = exports.SIGN_LOG = exports.SIGN_RELOADED = exports.SIGN_RELOAD = exports.SIGN_CHANGE = void 0;
exports.SIGN_CHANGE = "SIGN_CHANGE";
exports.SIGN_RELOAD = "SIGN_RELOAD";
exports.SIGN_RELOADED = "SIGN_RELOADED";
exports.SIGN_LOG = "SIGN_LOG";
exports.SIGN_CONNECT = "SIGN_CONNECT";

var signChange = function signChange(_ref) {
  var _ref$reloadPage = _ref.reloadPage,
      reloadPage = _ref$reloadPage === void 0 ? true : _ref$reloadPage,
      _ref$onlyPageChanged = _ref.onlyPageChanged,
      onlyPageChanged = _ref$onlyPageChanged === void 0 ? false : _ref$onlyPageChanged;
  return {
    payload: {
      reloadPage: reloadPage,
      onlyPageChanged: onlyPageChanged
    },
    type: exports.SIGN_CHANGE
  };
};

exports.signChange = signChange;

var signReload = function signReload() {
  return {
    type: exports.SIGN_RELOAD
  };
};

exports.signReload = signReload;

var signReloaded = function signReloaded(msg) {
  return {
    payload: msg,
    type: exports.SIGN_RELOADED
  };
};

exports.signReloaded = signReloaded;

var signLog = function signLog(msg) {
  return {
    payload: msg,
    type: exports.SIGN_LOG
  };
};

exports.signLog = signLog;

/***/ }),

/***/ 4257:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var AbstractExtensionReloader = /*#__PURE__*/_createClass(function AbstractExtensionReloader() {
  _classCallCheck(this, AbstractExtensionReloader);
});

exports["default"] = AbstractExtensionReloader;

/***/ }),

/***/ 8675:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var webpack_1 = __webpack_require__(9582);

var CompilerEventsFacade = /*#__PURE__*/function () {
  function CompilerEventsFacade(compiler) {
    _classCallCheck(this, CompilerEventsFacade);

    this._compiler = compiler;
  }

  _createClass(CompilerEventsFacade, [{
    key: "afterOptimizeChunks",
    value: function afterOptimizeChunks(call) {
      return this._compiler.hooks.compilation.tap(CompilerEventsFacade.extensionName, function (comp) {
        var chunks = new Set();

        var afterOptimizeChunkAssets = function afterOptimizeChunkAssets(chunksAfterOptimization) {
          call(comp, chunksAfterOptimization);
        };

        comp.hooks.processAssets.tap({
          name: CompilerEventsFacade.extensionName,
          stage: webpack_1.Compilation.PROCESS_ASSETS_STAGE_ANALYSE
        }, function () {
          comp.chunks.forEach(function (chunk) {
            chunks.add(chunk);
          });
          afterOptimizeChunkAssets(chunks);
        });
      });
    }
  }, {
    key: "afterEmit",
    value: function afterEmit(call) {
      return this._compiler.hooks.afterEmit.tap(CompilerEventsFacade.extensionName, call);
    }
  }]);

  return CompilerEventsFacade;
}();

exports["default"] = CompilerEventsFacade;
CompilerEventsFacade.extensionName = "webpack-ext-reloader";

/***/ }),

/***/ 5420:
/***/ ((module) => {

/* eslint-disable node/no-deprecated-api */

var toString = Object.prototype.toString

var isModern = (
  typeof Buffer !== 'undefined' &&
  typeof Buffer.alloc === 'function' &&
  typeof Buffer.allocUnsafe === 'function' &&
  typeof Buffer.from === 'function'
)

function isArrayBuffer (input) {
  return toString.call(input).slice(8, -1) === 'ArrayBuffer'
}

function fromArrayBuffer (obj, byteOffset, length) {
  byteOffset >>>= 0

  var maxLength = obj.byteLength - byteOffset

  if (maxLength < 0) {
    throw new RangeError("'offset' is out of bounds")
  }

  if (length === undefined) {
    length = maxLength
  } else {
    length >>>= 0

    if (length > maxLength) {
      throw new RangeError("'length' is out of bounds")
    }
  }

  return isModern
    ? Buffer.from(obj.slice(byteOffset, byteOffset + length))
    : new Buffer(new Uint8Array(obj.slice(byteOffset, byteOffset + length)))
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  return isModern
    ? Buffer.from(string, encoding)
    : new Buffer(string, encoding)
}

function bufferFrom (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return isModern
    ? Buffer.from(value)
    : new Buffer(value)
}

module.exports = bufferFrom


/***/ }),

/***/ 2517:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*

The MIT License (MIT)

Original Library
  - Copyright (c) Marak Squires

Additional functionality
 - Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var colors = {};
module['exports'] = colors;

colors.themes = {};

var util = __webpack_require__(3837);
var ansiStyles = colors.styles = __webpack_require__(5784);
var defineProps = Object.defineProperties;
var newLineRegex = new RegExp(/[\r\n]+/g);

colors.supportsColor = (__webpack_require__(6561).supportsColor);

if (typeof colors.enabled === 'undefined') {
  colors.enabled = colors.supportsColor() !== false;
}

colors.enable = function() {
  colors.enabled = true;
};

colors.disable = function() {
  colors.enabled = false;
};

colors.stripColors = colors.strip = function(str) {
  return ('' + str).replace(/\x1B\[\d+m/g, '');
};

// eslint-disable-next-line no-unused-vars
var stylize = colors.stylize = function stylize(str, style) {
  if (!colors.enabled) {
    return str+'';
  }

  var styleMap = ansiStyles[style];

  // Stylize should work for non-ANSI styles, too
  if(!styleMap && style in colors){
    // Style maps like trap operate as functions on strings;
    // they don't have properties like open or close.
    return colors[style](str);
  }

  return styleMap.open + str + styleMap.close;
};

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
var escapeStringRegexp = function(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }
  return str.replace(matchOperatorsRe, '\\$&');
};

function build(_styles) {
  var builder = function builder() {
    return applyStyle.apply(builder, arguments);
  };
  builder._styles = _styles;
  // __proto__ is used because we must return a function, but there is
  // no way to create a function with a different prototype.
  builder.__proto__ = proto;
  return builder;
}

var styles = (function() {
  var ret = {};
  ansiStyles.grey = ansiStyles.gray;
  Object.keys(ansiStyles).forEach(function(key) {
    ansiStyles[key].closeRe =
      new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');
    ret[key] = {
      get: function() {
        return build(this._styles.concat(key));
      },
    };
  });
  return ret;
})();

var proto = defineProps(function colors() {}, styles);

function applyStyle() {
  var args = Array.prototype.slice.call(arguments);

  var str = args.map(function(arg) {
    // Use weak equality check so we can colorize null/undefined in safe mode
    if (arg != null && arg.constructor === String) {
      return arg;
    } else {
      return util.inspect(arg);
    }
  }).join(' ');

  if (!colors.enabled || !str) {
    return str;
  }

  var newLinesPresent = str.indexOf('\n') != -1;

  var nestedStyles = this._styles;

  var i = nestedStyles.length;
  while (i--) {
    var code = ansiStyles[nestedStyles[i]];
    str = code.open + str.replace(code.closeRe, code.open) + code.close;
    if (newLinesPresent) {
      str = str.replace(newLineRegex, function(match) {
        return code.close + match + code.open;
      });
    }
  }

  return str;
}

colors.setTheme = function(theme) {
  if (typeof theme === 'string') {
    console.log('colors.setTheme now only accepts an object, not a string.  ' +
      'If you are trying to set a theme from a file, it is now your (the ' +
      'caller\'s) responsibility to require the file.  The old syntax ' +
      'looked like colors.setTheme(__dirname + ' +
      '\'/../themes/generic-logging.js\'); The new syntax looks like '+
      'colors.setTheme(require(__dirname + ' +
      '\'/../themes/generic-logging.js\'));');
    return;
  }
  for (var style in theme) {
    (function(style) {
      colors[style] = function(str) {
        if (typeof theme[style] === 'object') {
          var out = str;
          for (var i in theme[style]) {
            out = colors[theme[style][i]](out);
          }
          return out;
        }
        return colors[theme[style]](str);
      };
    })(style);
  }
};

function init() {
  var ret = {};
  Object.keys(styles).forEach(function(name) {
    ret[name] = {
      get: function() {
        return build([name]);
      },
    };
  });
  return ret;
}

var sequencer = function sequencer(map, str) {
  var exploded = str.split('');
  exploded = exploded.map(map);
  return exploded.join('');
};

// custom formatter methods
colors.trap = __webpack_require__(5117);
colors.zalgo = __webpack_require__(1492);

// maps
colors.maps = {};
colors.maps.america = __webpack_require__(6260)(colors);
colors.maps.zebra = __webpack_require__(3270)(colors);
colors.maps.rainbow = __webpack_require__(5920)(colors);
colors.maps.random = __webpack_require__(2449)(colors);

for (var map in colors.maps) {
  (function(map) {
    colors[map] = function(str) {
      return sequencer(colors.maps[map], str);
    };
  })(map);
}

defineProps(colors, init());


/***/ }),

/***/ 5117:
/***/ ((module) => {

module['exports'] = function runTheTrap(text, options) {
  var result = '';
  text = text || 'Run the trap, drop the bass';
  text = text.split('');
  var trap = {
    a: ['\u0040', '\u0104', '\u023a', '\u0245', '\u0394', '\u039b', '\u0414'],
    b: ['\u00df', '\u0181', '\u0243', '\u026e', '\u03b2', '\u0e3f'],
    c: ['\u00a9', '\u023b', '\u03fe'],
    d: ['\u00d0', '\u018a', '\u0500', '\u0501', '\u0502', '\u0503'],
    e: ['\u00cb', '\u0115', '\u018e', '\u0258', '\u03a3', '\u03be', '\u04bc',
      '\u0a6c'],
    f: ['\u04fa'],
    g: ['\u0262'],
    h: ['\u0126', '\u0195', '\u04a2', '\u04ba', '\u04c7', '\u050a'],
    i: ['\u0f0f'],
    j: ['\u0134'],
    k: ['\u0138', '\u04a0', '\u04c3', '\u051e'],
    l: ['\u0139'],
    m: ['\u028d', '\u04cd', '\u04ce', '\u0520', '\u0521', '\u0d69'],
    n: ['\u00d1', '\u014b', '\u019d', '\u0376', '\u03a0', '\u048a'],
    o: ['\u00d8', '\u00f5', '\u00f8', '\u01fe', '\u0298', '\u047a', '\u05dd',
      '\u06dd', '\u0e4f'],
    p: ['\u01f7', '\u048e'],
    q: ['\u09cd'],
    r: ['\u00ae', '\u01a6', '\u0210', '\u024c', '\u0280', '\u042f'],
    s: ['\u00a7', '\u03de', '\u03df', '\u03e8'],
    t: ['\u0141', '\u0166', '\u0373'],
    u: ['\u01b1', '\u054d'],
    v: ['\u05d8'],
    w: ['\u0428', '\u0460', '\u047c', '\u0d70'],
    x: ['\u04b2', '\u04fe', '\u04fc', '\u04fd'],
    y: ['\u00a5', '\u04b0', '\u04cb'],
    z: ['\u01b5', '\u0240'],
  };
  text.forEach(function(c) {
    c = c.toLowerCase();
    var chars = trap[c] || [' '];
    var rand = Math.floor(Math.random() * chars.length);
    if (typeof trap[c] !== 'undefined') {
      result += trap[c][rand];
    } else {
      result += c;
    }
  });
  return result;
};


/***/ }),

/***/ 1492:
/***/ ((module) => {

// please no
module['exports'] = function zalgo(text, options) {
  text = text || '   he is here   ';
  var soul = {
    'up': [
      '̍', '̎', '̄', '̅',
      '̿', '̑', '̆', '̐',
      '͒', '͗', '͑', '̇',
      '̈', '̊', '͂', '̓',
      '̈', '͊', '͋', '͌',
      '̃', '̂', '̌', '͐',
      '̀', '́', '̋', '̏',
      '̒', '̓', '̔', '̽',
      '̉', 'ͣ', 'ͤ', 'ͥ',
      'ͦ', 'ͧ', 'ͨ', 'ͩ',
      'ͪ', 'ͫ', 'ͬ', 'ͭ',
      'ͮ', 'ͯ', '̾', '͛',
      '͆', '̚',
    ],
    'down': [
      '̖', '̗', '̘', '̙',
      '̜', '̝', '̞', '̟',
      '̠', '̤', '̥', '̦',
      '̩', '̪', '̫', '̬',
      '̭', '̮', '̯', '̰',
      '̱', '̲', '̳', '̹',
      '̺', '̻', '̼', 'ͅ',
      '͇', '͈', '͉', '͍',
      '͎', '͓', '͔', '͕',
      '͖', '͙', '͚', '̣',
    ],
    'mid': [
      '̕', '̛', '̀', '́',
      '͘', '̡', '̢', '̧',
      '̨', '̴', '̵', '̶',
      '͜', '͝', '͞',
      '͟', '͠', '͢', '̸',
      '̷', '͡', ' ҉',
    ],
  };
  var all = [].concat(soul.up, soul.down, soul.mid);

  function randomNumber(range) {
    var r = Math.floor(Math.random() * range);
    return r;
  }

  function isChar(character) {
    var bool = false;
    all.filter(function(i) {
      bool = (i === character);
    });
    return bool;
  }


  function heComes(text, options) {
    var result = '';
    var counts;
    var l;
    options = options || {};
    options['up'] =
      typeof options['up'] !== 'undefined' ? options['up'] : true;
    options['mid'] =
      typeof options['mid'] !== 'undefined' ? options['mid'] : true;
    options['down'] =
      typeof options['down'] !== 'undefined' ? options['down'] : true;
    options['size'] =
      typeof options['size'] !== 'undefined' ? options['size'] : 'maxi';
    text = text.split('');
    for (l in text) {
      if (isChar(l)) {
        continue;
      }
      result = result + text[l];
      counts = {'up': 0, 'down': 0, 'mid': 0};
      switch (options.size) {
        case 'mini':
          counts.up = randomNumber(8);
          counts.mid = randomNumber(2);
          counts.down = randomNumber(8);
          break;
        case 'maxi':
          counts.up = randomNumber(16) + 3;
          counts.mid = randomNumber(4) + 1;
          counts.down = randomNumber(64) + 3;
          break;
        default:
          counts.up = randomNumber(8) + 1;
          counts.mid = randomNumber(6) / 2;
          counts.down = randomNumber(8) + 1;
          break;
      }

      var arr = ['up', 'mid', 'down'];
      for (var d in arr) {
        var index = arr[d];
        for (var i = 0; i <= counts[index]; i++) {
          if (options[index]) {
            result = result + soul[index][randomNumber(soul[index].length)];
          }
        }
      }
    }
    return result;
  }
  // don't summon him
  return heComes(text, options);
};



/***/ }),

/***/ 6260:
/***/ ((module) => {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    if (letter === ' ') return letter;
    switch (i%3) {
      case 0: return colors.red(letter);
      case 1: return colors.white(letter);
      case 2: return colors.blue(letter);
    }
  };
};


/***/ }),

/***/ 5920:
/***/ ((module) => {

module['exports'] = function(colors) {
  // RoY G BiV
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta'];
  return function(letter, i, exploded) {
    if (letter === ' ') {
      return letter;
    } else {
      return colors[rainbowColors[i++ % rainbowColors.length]](letter);
    }
  };
};



/***/ }),

/***/ 2449:
/***/ ((module) => {

module['exports'] = function(colors) {
  var available = ['underline', 'inverse', 'grey', 'yellow', 'red', 'green',
    'blue', 'white', 'cyan', 'magenta', 'brightYellow', 'brightRed',
    'brightGreen', 'brightBlue', 'brightWhite', 'brightCyan', 'brightMagenta'];
  return function(letter, i, exploded) {
    return letter === ' ' ? letter :
      colors[
          available[Math.round(Math.random() * (available.length - 2))]
      ](letter);
  };
};


/***/ }),

/***/ 3270:
/***/ ((module) => {

module['exports'] = function(colors) {
  return function(letter, i, exploded) {
    return i % 2 === 0 ? letter : colors.inverse(letter);
  };
};


/***/ }),

/***/ 5784:
/***/ ((module) => {

/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

var styles = {};
module['exports'] = styles;

var codes = {
  reset: [0, 0],

  bold: [1, 22],
  dim: [2, 22],
  italic: [3, 23],
  underline: [4, 24],
  inverse: [7, 27],
  hidden: [8, 28],
  strikethrough: [9, 29],

  black: [30, 39],
  red: [31, 39],
  green: [32, 39],
  yellow: [33, 39],
  blue: [34, 39],
  magenta: [35, 39],
  cyan: [36, 39],
  white: [37, 39],
  gray: [90, 39],
  grey: [90, 39],

  brightRed: [91, 39],
  brightGreen: [92, 39],
  brightYellow: [93, 39],
  brightBlue: [94, 39],
  brightMagenta: [95, 39],
  brightCyan: [96, 39],
  brightWhite: [97, 39],

  bgBlack: [40, 49],
  bgRed: [41, 49],
  bgGreen: [42, 49],
  bgYellow: [43, 49],
  bgBlue: [44, 49],
  bgMagenta: [45, 49],
  bgCyan: [46, 49],
  bgWhite: [47, 49],
  bgGray: [100, 49],
  bgGrey: [100, 49],

  bgBrightRed: [101, 49],
  bgBrightGreen: [102, 49],
  bgBrightYellow: [103, 49],
  bgBrightBlue: [104, 49],
  bgBrightMagenta: [105, 49],
  bgBrightCyan: [106, 49],
  bgBrightWhite: [107, 49],

  // legacy styles for colors pre v1.0.0
  blackBG: [40, 49],
  redBG: [41, 49],
  greenBG: [42, 49],
  yellowBG: [43, 49],
  blueBG: [44, 49],
  magentaBG: [45, 49],
  cyanBG: [46, 49],
  whiteBG: [47, 49],

};

Object.keys(codes).forEach(function(key) {
  var val = codes[key];
  var style = styles[key] = [];
  style.open = '\u001b[' + val[0] + 'm';
  style.close = '\u001b[' + val[1] + 'm';
});


/***/ }),

/***/ 4340:
/***/ ((module) => {

"use strict";
/*
MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/



module.exports = function(flag, argv) {
  argv = argv || process.argv;

  var terminatorPos = argv.indexOf('--');
  var prefix = /^-{1,2}/.test(flag) ? '' : '--';
  var pos = argv.indexOf(prefix + flag);

  return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
};


/***/ }),

/***/ 6561:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/*
The MIT License (MIT)

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/



var os = __webpack_require__(2037);
var hasFlag = __webpack_require__(4340);

var env = process.env;

var forceColor = void 0;
if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
  forceColor = false;
} else if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true')
           || hasFlag('color=always')) {
  forceColor = true;
}
if ('FORCE_COLOR' in env) {
  forceColor = env.FORCE_COLOR.length === 0
    || parseInt(env.FORCE_COLOR, 10) !== 0;
}

function translateLevel(level) {
  if (level === 0) {
    return false;
  }

  return {
    level: level,
    hasBasic: true,
    has256: level >= 2,
    has16m: level >= 3,
  };
}

function supportsColor(stream) {
  if (forceColor === false) {
    return 0;
  }

  if (hasFlag('color=16m') || hasFlag('color=full')
      || hasFlag('color=truecolor')) {
    return 3;
  }

  if (hasFlag('color=256')) {
    return 2;
  }

  if (stream && !stream.isTTY && forceColor !== true) {
    return 0;
  }

  var min = forceColor ? 1 : 0;

  if (process.platform === 'win32') {
    // Node.js 7.5.0 is the first version of Node.js to include a patch to
    // libuv that enables 256 color output on Windows. Anything earlier and it
    // won't work. However, here we target Node.js 8 at minimum as it is an LTS
    // release, and Node.js 7 is not. Windows 10 build 10586 is the first
    // Windows release that supports 256 colors. Windows 10 build 14931 is the
    // first release that supports 16m/TrueColor.
    var osRelease = os.release().split('.');
    if (Number(process.versions.node.split('.')[0]) >= 8
        && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
      return Number(osRelease[2]) >= 14931 ? 3 : 2;
    }

    return 1;
  }

  if ('CI' in env) {
    if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI'].some(function(sign) {
      return sign in env;
    }) || env.CI_NAME === 'codeship') {
      return 1;
    }

    return min;
  }

  if ('TEAMCITY_VERSION' in env) {
    return (/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0
    );
  }

  if ('TERM_PROGRAM' in env) {
    var version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

    switch (env.TERM_PROGRAM) {
      case 'iTerm.app':
        return version >= 3 ? 3 : 2;
      case 'Hyper':
        return 3;
      case 'Apple_Terminal':
        return 2;
      // No default
    }
  }

  if (/-256(color)?$/i.test(env.TERM)) {
    return 2;
  }

  if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    return 1;
  }

  if ('COLORTERM' in env) {
    return 1;
  }

  if (env.TERM === 'dumb') {
    return min;
  }

  return min;
}

function getSupportLevel(stream) {
  var level = supportsColor(stream);
  return translateLevel(level);
}

module.exports = {
  supportsColor: getSupportLevel,
  stdout: getSupportLevel(process.stdout),
  stderr: getSupportLevel(process.stderr),
};


/***/ }),

/***/ 4431:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//
// Remark: Requiring this file will use the "safe" colors API,
// which will not touch String.prototype.
//
//   var colors = require('colors/safe');
//   colors.red("foo")
//
//
var colors = __webpack_require__(2517);
module['exports'] = colors;


/***/ }),

/***/ 3653:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint:disable */\n\n/* -------------------------------------------------- */\n\n/*      Start of Webpack Hot Extension Middleware     */\n\n/* ================================================== */\n\n/*  This will be converted into a lodash templ., any  */\n\n/*  external argument must be provided using it       */\n\n/* -------------------------------------------------- */\n(function (_window) {\n  var window;\n\n  if (_window.document !== undefined) {\n    window = _window;\n  }\n\n  var injectionContext = this || {\n    browser: null\n  };\n\n  (function () {\n    \"<%= polyfillSource %>\";\n  })();\n\n  var _ref = injectionContext || {},\n      browser = _ref.browser;\n\n  var signals = JSON.parse('<%= signals %>');\n  var config = JSON.parse('<%= config %>');\n  var reloadPage = \"<%= reloadPage %>\" === \"true\";\n  var wsHost = \"<%= WSHost %>\";\n  var SIGN_CHANGE = signals.SIGN_CHANGE,\n      SIGN_RELOAD = signals.SIGN_RELOAD,\n      SIGN_RELOADED = signals.SIGN_RELOADED,\n      SIGN_LOG = signals.SIGN_LOG,\n      SIGN_CONNECT = signals.SIGN_CONNECT;\n  var RECONNECT_INTERVAL = config.RECONNECT_INTERVAL,\n      SOCKET_ERR_CODE_REF = config.SOCKET_ERR_CODE_REF;\n  var extension = browser.extension,\n      runtime = browser.runtime,\n      tabs = browser.tabs;\n  var manifest = runtime.getManifest(); // =============================== Helper functions ======================================= //\n\n  var formatter = function formatter(msg) {\n    return \"[ WER: \".concat(msg, \" ]\");\n  };\n\n  var logger = function logger(msg) {\n    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : \"info\";\n    return console[level](formatter(msg));\n  };\n\n  var timeFormatter = function timeFormatter(date) {\n    return date.toTimeString().replace(/.*(\\d{2}:\\d{2}:\\d{2}).*/, \"$1\");\n  }; // ========================== Called only on content scripts ============================== //\n\n\n  function contentScriptWorker() {\n    // console.log('contentScriptWorker')\n    runtime.sendMessage({\n      type: SIGN_CONNECT\n    }).then(function (msg) {\n      return console.info(msg);\n    });\n    runtime.onMessage.addListener(function (_ref2) {\n      var type = _ref2.type,\n          payload = _ref2.payload;\n\n      switch (type) {\n        case SIGN_RELOAD:\n          logger(\"Detected Changes. Reloading...\");\n          reloadPage && (window === null || window === void 0 ? void 0 : window.location.reload());\n          break;\n\n        case SIGN_LOG:\n          console.info(payload);\n          break;\n\n        default:\n          break;\n      }\n    });\n  } // ======================== Called only on background scripts ============================= //\n\n\n  function backgroundWorker(socket) {\n    // console.log('backgroundWorker')\n    runtime.onMessage.addListener(function (action, sender) {\n      if (action.type === SIGN_CONNECT) {\n        return Promise.resolve(formatter(\"Connected to Web Extension Hot Reloader\"));\n      }\n\n      return true;\n    });\n    socket.addEventListener(\"message\", function (_ref3) {\n      var data = _ref3.data;\n\n      var _JSON$parse = JSON.parse(data),\n          type = _JSON$parse.type,\n          payload = _JSON$parse.payload;\n\n      if (type === SIGN_CHANGE && (!payload || !payload.onlyPageChanged)) {\n        tabs.query({\n          status: \"complete\"\n        }).then(function (loadedTabs) {\n          loadedTabs.forEach(function (tab) {\n            return tab.id && tabs.sendMessage(tab.id, {\n              type: SIGN_RELOAD\n            });\n          });\n          socket.send(JSON.stringify({\n            type: SIGN_RELOADED,\n            payload: formatter(\"\".concat(timeFormatter(new Date()), \" - \").concat(manifest.name, \" successfully reloaded\"))\n          }));\n          runtime.reload();\n        });\n      } else {\n        runtime.sendMessage({\n          type: type,\n          payload: payload\n        });\n      }\n    });\n    socket.addEventListener(\"close\", function (_ref4) {\n      var code = _ref4.code;\n      logger(\"Socket connection closed. Code \".concat(code, \". See more in \").concat(SOCKET_ERR_CODE_REF), \"warn\");\n      var intId = setInterval(function () {\n        logger(\"Attempting to reconnect (tip: Check if Webpack is running)\");\n        var ws = new WebSocket(wsHost);\n\n        ws.onerror = function () {\n          return logger(\"Error trying to re-connect. Reattempting in \".concat(RECONNECT_INTERVAL / 1000, \"s\"), \"warn\");\n        };\n\n        ws.addEventListener(\"open\", function () {\n          clearInterval(intId);\n          logger(\"Reconnected. Reloading plugin\");\n          runtime.reload();\n        });\n      }, RECONNECT_INTERVAL);\n    });\n  } // ======================== Called only on extension pages that are not the background ============================= //\n\n\n  function extensionPageWorker() {\n    // console.log('extensionPageWorker')\n    runtime.sendMessage({\n      type: SIGN_CONNECT\n    }).then(function (msg) {\n      return console.info(msg);\n    });\n    runtime.onMessage.addListener(function (_ref5) {\n      var type = _ref5.type,\n          payload = _ref5.payload;\n\n      switch (type) {\n        case SIGN_CHANGE:\n          logger(\"Detected Changes. Reloading...\");\n          reloadPage && (window === null || window === void 0 ? void 0 : window.location.reload());\n          break;\n\n        case SIGN_LOG:\n          console.info(payload);\n          break;\n\n        default:\n          break;\n      }\n    });\n  } // ======================= Bootstraps the middleware =========================== //\n\n\n  runtime.reload ? !window ? backgroundWorker(new WebSocket(wsHost)) : extensionPageWorker() : contentScriptWorker();\n})(this);\n/* ----------------------------------------------- */\n\n/* End of Webpack Hot Extension Middleware  */\n\n/* ----------------------------------------------- */");

/***/ }),

/***/ 2634:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("(function (global, factory) {\n  if (typeof define === \"function\" && define.amd) {\n    define(\"webextension-polyfill\", [\"module\"], factory);\n  } else if (typeof exports !== \"undefined\") {\n    factory(module);\n  } else {\n    var mod = {\n      exports: {}\n    };\n    factory(mod);\n    global.browser = mod.exports;\n  }\n})(typeof globalThis !== \"undefined\" ? globalThis : typeof self !== \"undefined\" ? self : this, function (module) {\n  /* webextension-polyfill - v0.8.0 - Tue Apr 20 2021 11:27:38 */\n\n  /* -*- Mode: indent-tabs-mode: nil; js-indent-level: 2 -*- */\n\n  /* vim: set sts=2 sw=2 et tw=80: */\n\n  /* This Source Code Form is subject to the terms of the Mozilla Public\n   * License, v. 2.0. If a copy of the MPL was not distributed with this\n   * file, You can obtain one at http://mozilla.org/MPL/2.0/. */\n  \"use strict\";\n\n  if (typeof browser === \"undefined\" || Object.getPrototypeOf(browser) !== Object.prototype) {\n    const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = \"The message port closed before a response was received.\";\n    const SEND_RESPONSE_DEPRECATION_WARNING = \"Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)\"; // Wrapping the bulk of this polyfill in a one-time-use function is a minor\n    // optimization for Firefox. Since Spidermonkey does not fully parse the\n    // contents of a function until the first time it's called, and since it will\n    // never actually need to be called, this allows the polyfill to be included\n    // in Firefox nearly for free.\n\n    const wrapAPIs = extensionAPIs => {\n      // NOTE: apiMetadata is associated to the content of the api-metadata.json file\n      // at build time by replacing the following \"include\" with the content of the\n      // JSON file.\n      const apiMetadata = {\n        \"alarms\": {\n          \"clear\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"clearAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"get\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"bookmarks\": {\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getChildren\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getRecent\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getSubTree\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTree\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"move\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeTree\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"browserAction\": {\n          \"disable\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"enable\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"getBadgeBackgroundColor\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getBadgeText\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"openPopup\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"setBadgeBackgroundColor\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setBadgeText\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"setPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"browsingData\": {\n          \"remove\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"removeCache\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeCookies\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeDownloads\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeFormData\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeHistory\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeLocalStorage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removePasswords\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removePluginData\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"settings\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"commands\": {\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"contextMenus\": {\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"cookies\": {\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAllCookieStores\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"set\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"devtools\": {\n          \"inspectedWindow\": {\n            \"eval\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 2,\n              \"singleCallbackArg\": false\n            }\n          },\n          \"panels\": {\n            \"create\": {\n              \"minArgs\": 3,\n              \"maxArgs\": 3,\n              \"singleCallbackArg\": true\n            },\n            \"elements\": {\n              \"createSidebarPane\": {\n                \"minArgs\": 1,\n                \"maxArgs\": 1\n              }\n            }\n          }\n        },\n        \"downloads\": {\n          \"cancel\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"download\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"erase\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getFileIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"open\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"pause\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeFile\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"resume\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"show\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"extension\": {\n          \"isAllowedFileSchemeAccess\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"isAllowedIncognitoAccess\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"history\": {\n          \"addUrl\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"deleteAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"deleteRange\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"deleteUrl\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getVisits\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"search\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"i18n\": {\n          \"detectLanguage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAcceptLanguages\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"identity\": {\n          \"launchWebAuthFlow\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"idle\": {\n          \"queryState\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"management\": {\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getSelf\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"setEnabled\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"uninstallSelf\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          }\n        },\n        \"notifications\": {\n          \"clear\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getPermissionLevel\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        },\n        \"pageAction\": {\n          \"getPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"hide\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setIcon\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"setPopup\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"setTitle\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          },\n          \"show\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1,\n            \"fallbackToNoCallback\": true\n          }\n        },\n        \"permissions\": {\n          \"contains\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"request\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"runtime\": {\n          \"getBackgroundPage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getPlatformInfo\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"openOptionsPage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"requestUpdateCheck\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"sendMessage\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 3\n          },\n          \"sendNativeMessage\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"setUninstallURL\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"sessions\": {\n          \"getDevices\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getRecentlyClosed\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"restore\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          }\n        },\n        \"storage\": {\n          \"local\": {\n            \"clear\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 0\n            },\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"remove\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            },\n            \"set\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            }\n          },\n          \"managed\": {\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            }\n          },\n          \"sync\": {\n            \"clear\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 0\n            },\n            \"get\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"getBytesInUse\": {\n              \"minArgs\": 0,\n              \"maxArgs\": 1\n            },\n            \"remove\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            },\n            \"set\": {\n              \"minArgs\": 1,\n              \"maxArgs\": 1\n            }\n          }\n        },\n        \"tabs\": {\n          \"captureVisibleTab\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 2\n          },\n          \"create\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"detectLanguage\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"discard\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"duplicate\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"executeScript\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getCurrent\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          },\n          \"getZoom\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getZoomSettings\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"goBack\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"goForward\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"highlight\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"insertCSS\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"move\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          },\n          \"query\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"reload\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 2\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"removeCSS\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"sendMessage\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 3\n          },\n          \"setZoom\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"setZoomSettings\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"update\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          }\n        },\n        \"topSites\": {\n          \"get\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"webNavigation\": {\n          \"getAllFrames\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"getFrame\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          }\n        },\n        \"webRequest\": {\n          \"handlerBehaviorChanged\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 0\n          }\n        },\n        \"windows\": {\n          \"create\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"get\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 2\n          },\n          \"getAll\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getCurrent\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"getLastFocused\": {\n            \"minArgs\": 0,\n            \"maxArgs\": 1\n          },\n          \"remove\": {\n            \"minArgs\": 1,\n            \"maxArgs\": 1\n          },\n          \"update\": {\n            \"minArgs\": 2,\n            \"maxArgs\": 2\n          }\n        }\n      };\n\n      if (Object.keys(apiMetadata).length === 0) {\n        throw new Error(\"api-metadata.json has not been included in browser-polyfill\");\n      }\n      /**\n       * A WeakMap subclass which creates and stores a value for any key which does\n       * not exist when accessed, but behaves exactly as an ordinary WeakMap\n       * otherwise.\n       *\n       * @param {function} createItem\n       *        A function which will be called in order to create the value for any\n       *        key which does not exist, the first time it is accessed. The\n       *        function receives, as its only argument, the key being created.\n       */\n\n\n      class DefaultWeakMap extends WeakMap {\n        constructor(createItem, items = undefined) {\n          super(items);\n          this.createItem = createItem;\n        }\n\n        get(key) {\n          if (!this.has(key)) {\n            this.set(key, this.createItem(key));\n          }\n\n          return super.get(key);\n        }\n\n      }\n      /**\n       * Returns true if the given object is an object with a `then` method, and can\n       * therefore be assumed to behave as a Promise.\n       *\n       * @param {*} value The value to test.\n       * @returns {boolean} True if the value is thenable.\n       */\n\n\n      const isThenable = value => {\n        return value && typeof value === \"object\" && typeof value.then === \"function\";\n      };\n      /**\n       * Creates and returns a function which, when called, will resolve or reject\n       * the given promise based on how it is called:\n       *\n       * - If, when called, `chrome.runtime.lastError` contains a non-null object,\n       *   the promise is rejected with that value.\n       * - If the function is called with exactly one argument, the promise is\n       *   resolved to that value.\n       * - Otherwise, the promise is resolved to an array containing all of the\n       *   function's arguments.\n       *\n       * @param {object} promise\n       *        An object containing the resolution and rejection functions of a\n       *        promise.\n       * @param {function} promise.resolve\n       *        The promise's resolution function.\n       * @param {function} promise.reject\n       *        The promise's rejection function.\n       * @param {object} metadata\n       *        Metadata about the wrapped method which has created the callback.\n       * @param {boolean} metadata.singleCallbackArg\n       *        Whether or not the promise is resolved with only the first\n       *        argument of the callback, alternatively an array of all the\n       *        callback arguments is resolved. By default, if the callback\n       *        function is invoked with only a single argument, that will be\n       *        resolved to the promise, while all arguments will be resolved as\n       *        an array if multiple are given.\n       *\n       * @returns {function}\n       *        The generated callback function.\n       */\n\n\n      const makeCallback = (promise, metadata) => {\n        return (...callbackArgs) => {\n          if (extensionAPIs.runtime.lastError) {\n            promise.reject(new Error(extensionAPIs.runtime.lastError.message));\n          } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {\n            promise.resolve(callbackArgs[0]);\n          } else {\n            promise.resolve(callbackArgs);\n          }\n        };\n      };\n\n      const pluralizeArguments = numArgs => numArgs == 1 ? \"argument\" : \"arguments\";\n      /**\n       * Creates a wrapper function for a method with the given name and metadata.\n       *\n       * @param {string} name\n       *        The name of the method which is being wrapped.\n       * @param {object} metadata\n       *        Metadata about the method being wrapped.\n       * @param {integer} metadata.minArgs\n       *        The minimum number of arguments which must be passed to the\n       *        function. If called with fewer than this number of arguments, the\n       *        wrapper will raise an exception.\n       * @param {integer} metadata.maxArgs\n       *        The maximum number of arguments which may be passed to the\n       *        function. If called with more than this number of arguments, the\n       *        wrapper will raise an exception.\n       * @param {boolean} metadata.singleCallbackArg\n       *        Whether or not the promise is resolved with only the first\n       *        argument of the callback, alternatively an array of all the\n       *        callback arguments is resolved. By default, if the callback\n       *        function is invoked with only a single argument, that will be\n       *        resolved to the promise, while all arguments will be resolved as\n       *        an array if multiple are given.\n       *\n       * @returns {function(object, ...*)}\n       *       The generated wrapper function.\n       */\n\n\n      const wrapAsyncFunction = (name, metadata) => {\n        return function asyncFunctionWrapper(target, ...args) {\n          if (args.length < metadata.minArgs) {\n            throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);\n          }\n\n          if (args.length > metadata.maxArgs) {\n            throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);\n          }\n\n          return new Promise((resolve, reject) => {\n            if (metadata.fallbackToNoCallback) {\n              // This API method has currently no callback on Chrome, but it return a promise on Firefox,\n              // and so the polyfill will try to call it with a callback first, and it will fallback\n              // to not passing the callback if the first call fails.\n              try {\n                target[name](...args, makeCallback({\n                  resolve,\n                  reject\n                }, metadata));\n              } catch (cbError) {\n                console.warn(`${name} API method doesn't seem to support the callback parameter, ` + \"falling back to call it without a callback: \", cbError);\n                target[name](...args); // Update the API method metadata, so that the next API calls will not try to\n                // use the unsupported callback anymore.\n\n                metadata.fallbackToNoCallback = false;\n                metadata.noCallback = true;\n                resolve();\n              }\n            } else if (metadata.noCallback) {\n              target[name](...args);\n              resolve();\n            } else {\n              target[name](...args, makeCallback({\n                resolve,\n                reject\n              }, metadata));\n            }\n          });\n        };\n      };\n      /**\n       * Wraps an existing method of the target object, so that calls to it are\n       * intercepted by the given wrapper function. The wrapper function receives,\n       * as its first argument, the original `target` object, followed by each of\n       * the arguments passed to the original method.\n       *\n       * @param {object} target\n       *        The original target object that the wrapped method belongs to.\n       * @param {function} method\n       *        The method being wrapped. This is used as the target of the Proxy\n       *        object which is created to wrap the method.\n       * @param {function} wrapper\n       *        The wrapper function which is called in place of a direct invocation\n       *        of the wrapped method.\n       *\n       * @returns {Proxy<function>}\n       *        A Proxy object for the given method, which invokes the given wrapper\n       *        method in its place.\n       */\n\n\n      const wrapMethod = (target, method, wrapper) => {\n        return new Proxy(method, {\n          apply(targetMethod, thisObj, args) {\n            return wrapper.call(thisObj, target, ...args);\n          }\n\n        });\n      };\n\n      let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);\n      /**\n       * Wraps an object in a Proxy which intercepts and wraps certain methods\n       * based on the given `wrappers` and `metadata` objects.\n       *\n       * @param {object} target\n       *        The target object to wrap.\n       *\n       * @param {object} [wrappers = {}]\n       *        An object tree containing wrapper functions for special cases. Any\n       *        function present in this object tree is called in place of the\n       *        method in the same location in the `target` object tree. These\n       *        wrapper methods are invoked as described in {@see wrapMethod}.\n       *\n       * @param {object} [metadata = {}]\n       *        An object tree containing metadata used to automatically generate\n       *        Promise-based wrapper functions for asynchronous. Any function in\n       *        the `target` object tree which has a corresponding metadata object\n       *        in the same location in the `metadata` tree is replaced with an\n       *        automatically-generated wrapper function, as described in\n       *        {@see wrapAsyncFunction}\n       *\n       * @returns {Proxy<object>}\n       */\n\n      const wrapObject = (target, wrappers = {}, metadata = {}) => {\n        let cache = Object.create(null);\n        let handlers = {\n          has(proxyTarget, prop) {\n            return prop in target || prop in cache;\n          },\n\n          get(proxyTarget, prop, receiver) {\n            if (prop in cache) {\n              return cache[prop];\n            }\n\n            if (!(prop in target)) {\n              return undefined;\n            }\n\n            let value = target[prop];\n\n            if (typeof value === \"function\") {\n              // This is a method on the underlying object. Check if we need to do\n              // any wrapping.\n              if (typeof wrappers[prop] === \"function\") {\n                // We have a special-case wrapper for this method.\n                value = wrapMethod(target, target[prop], wrappers[prop]);\n              } else if (hasOwnProperty(metadata, prop)) {\n                // This is an async method that we have metadata for. Create a\n                // Promise wrapper for it.\n                let wrapper = wrapAsyncFunction(prop, metadata[prop]);\n                value = wrapMethod(target, target[prop], wrapper);\n              } else {\n                // This is a method that we don't know or care about. Return the\n                // original method, bound to the underlying object.\n                value = value.bind(target);\n              }\n            } else if (typeof value === \"object\" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {\n              // This is an object that we need to do some wrapping for the children\n              // of. Create a sub-object wrapper for it with the appropriate child\n              // metadata.\n              value = wrapObject(value, wrappers[prop], metadata[prop]);\n            } else if (hasOwnProperty(metadata, \"*\")) {\n              // Wrap all properties in * namespace.\n              value = wrapObject(value, wrappers[prop], metadata[\"*\"]);\n            } else {\n              // We don't need to do any wrapping for this property,\n              // so just forward all access to the underlying object.\n              Object.defineProperty(cache, prop, {\n                configurable: true,\n                enumerable: true,\n\n                get() {\n                  return target[prop];\n                },\n\n                set(value) {\n                  target[prop] = value;\n                }\n\n              });\n              return value;\n            }\n\n            cache[prop] = value;\n            return value;\n          },\n\n          set(proxyTarget, prop, value, receiver) {\n            if (prop in cache) {\n              cache[prop] = value;\n            } else {\n              target[prop] = value;\n            }\n\n            return true;\n          },\n\n          defineProperty(proxyTarget, prop, desc) {\n            return Reflect.defineProperty(cache, prop, desc);\n          },\n\n          deleteProperty(proxyTarget, prop) {\n            return Reflect.deleteProperty(cache, prop);\n          }\n\n        }; // Per contract of the Proxy API, the \"get\" proxy handler must return the\n        // original value of the target if that value is declared read-only and\n        // non-configurable. For this reason, we create an object with the\n        // prototype set to `target` instead of using `target` directly.\n        // Otherwise we cannot return a custom object for APIs that\n        // are declared read-only and non-configurable, such as `chrome.devtools`.\n        //\n        // The proxy handlers themselves will still use the original `target`\n        // instead of the `proxyTarget`, so that the methods and properties are\n        // dereferenced via the original targets.\n\n        let proxyTarget = Object.create(target);\n        return new Proxy(proxyTarget, handlers);\n      };\n      /**\n       * Creates a set of wrapper functions for an event object, which handles\n       * wrapping of listener functions that those messages are passed.\n       *\n       * A single wrapper is created for each listener function, and stored in a\n       * map. Subsequent calls to `addListener`, `hasListener`, or `removeListener`\n       * retrieve the original wrapper, so that  attempts to remove a\n       * previously-added listener work as expected.\n       *\n       * @param {DefaultWeakMap<function, function>} wrapperMap\n       *        A DefaultWeakMap object which will create the appropriate wrapper\n       *        for a given listener function when one does not exist, and retrieve\n       *        an existing one when it does.\n       *\n       * @returns {object}\n       */\n\n\n      const wrapEvent = wrapperMap => ({\n        addListener(target, listener, ...args) {\n          target.addListener(wrapperMap.get(listener), ...args);\n        },\n\n        hasListener(target, listener) {\n          return target.hasListener(wrapperMap.get(listener));\n        },\n\n        removeListener(target, listener) {\n          target.removeListener(wrapperMap.get(listener));\n        }\n\n      });\n\n      const onRequestFinishedWrappers = new DefaultWeakMap(listener => {\n        if (typeof listener !== \"function\") {\n          return listener;\n        }\n        /**\n         * Wraps an onRequestFinished listener function so that it will return a\n         * `getContent()` property which returns a `Promise` rather than using a\n         * callback API.\n         *\n         * @param {object} req\n         *        The HAR entry object representing the network request.\n         */\n\n\n        return function onRequestFinished(req) {\n          const wrappedReq = wrapObject(req, {}\n          /* wrappers */\n          , {\n            getContent: {\n              minArgs: 0,\n              maxArgs: 0\n            }\n          });\n          listener(wrappedReq);\n        };\n      }); // Keep track if the deprecation warning has been logged at least once.\n\n      let loggedSendResponseDeprecationWarning = false;\n      const onMessageWrappers = new DefaultWeakMap(listener => {\n        if (typeof listener !== \"function\") {\n          return listener;\n        }\n        /**\n         * Wraps a message listener function so that it may send responses based on\n         * its return value, rather than by returning a sentinel value and calling a\n         * callback. If the listener function returns a Promise, the response is\n         * sent when the promise either resolves or rejects.\n         *\n         * @param {*} message\n         *        The message sent by the other end of the channel.\n         * @param {object} sender\n         *        Details about the sender of the message.\n         * @param {function(*)} sendResponse\n         *        A callback which, when called with an arbitrary argument, sends\n         *        that value as a response.\n         * @returns {boolean}\n         *        True if the wrapped listener returned a Promise, which will later\n         *        yield a response. False otherwise.\n         */\n\n\n        return function onMessage(message, sender, sendResponse) {\n          let didCallSendResponse = false;\n          let wrappedSendResponse;\n          let sendResponsePromise = new Promise(resolve => {\n            wrappedSendResponse = function (response) {\n              if (!loggedSendResponseDeprecationWarning) {\n                console.warn(SEND_RESPONSE_DEPRECATION_WARNING, new Error().stack);\n                loggedSendResponseDeprecationWarning = true;\n              }\n\n              didCallSendResponse = true;\n              resolve(response);\n            };\n          });\n          let result;\n\n          try {\n            result = listener(message, sender, wrappedSendResponse);\n          } catch (err) {\n            result = Promise.reject(err);\n          }\n\n          const isResultThenable = result !== true && isThenable(result); // If the listener didn't returned true or a Promise, or called\n          // wrappedSendResponse synchronously, we can exit earlier\n          // because there will be no response sent from this listener.\n\n          if (result !== true && !isResultThenable && !didCallSendResponse) {\n            return false;\n          } // A small helper to send the message if the promise resolves\n          // and an error if the promise rejects (a wrapped sendMessage has\n          // to translate the message into a resolved promise or a rejected\n          // promise).\n\n\n          const sendPromisedResult = promise => {\n            promise.then(msg => {\n              // send the message value.\n              sendResponse(msg);\n            }, error => {\n              // Send a JSON representation of the error if the rejected value\n              // is an instance of error, or the object itself otherwise.\n              let message;\n\n              if (error && (error instanceof Error || typeof error.message === \"string\")) {\n                message = error.message;\n              } else {\n                message = \"An unexpected error occurred\";\n              }\n\n              sendResponse({\n                __mozWebExtensionPolyfillReject__: true,\n                message\n              });\n            }).catch(err => {\n              // Print an error on the console if unable to send the response.\n              console.error(\"Failed to send onMessage rejected reply\", err);\n            });\n          }; // If the listener returned a Promise, send the resolved value as a\n          // result, otherwise wait the promise related to the wrappedSendResponse\n          // callback to resolve and send it as a response.\n\n\n          if (isResultThenable) {\n            sendPromisedResult(result);\n          } else {\n            sendPromisedResult(sendResponsePromise);\n          } // Let Chrome know that the listener is replying.\n\n\n          return true;\n        };\n      });\n\n      const wrappedSendMessageCallback = ({\n        reject,\n        resolve\n      }, reply) => {\n        if (extensionAPIs.runtime.lastError) {\n          // Detect when none of the listeners replied to the sendMessage call and resolve\n          // the promise to undefined as in Firefox.\n          // See https://github.com/mozilla/webextension-polyfill/issues/130\n          if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {\n            resolve();\n          } else {\n            reject(new Error(extensionAPIs.runtime.lastError.message));\n          }\n        } else if (reply && reply.__mozWebExtensionPolyfillReject__) {\n          // Convert back the JSON representation of the error into\n          // an Error instance.\n          reject(new Error(reply.message));\n        } else {\n          resolve(reply);\n        }\n      };\n\n      const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {\n        if (args.length < metadata.minArgs) {\n          throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);\n        }\n\n        if (args.length > metadata.maxArgs) {\n          throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);\n        }\n\n        return new Promise((resolve, reject) => {\n          const wrappedCb = wrappedSendMessageCallback.bind(null, {\n            resolve,\n            reject\n          });\n          args.push(wrappedCb);\n          apiNamespaceObj.sendMessage(...args);\n        });\n      };\n\n      const staticWrappers = {\n        devtools: {\n          network: {\n            onRequestFinished: wrapEvent(onRequestFinishedWrappers)\n          }\n        },\n        runtime: {\n          onMessage: wrapEvent(onMessageWrappers),\n          onMessageExternal: wrapEvent(onMessageWrappers),\n          sendMessage: wrappedSendMessage.bind(null, \"sendMessage\", {\n            minArgs: 1,\n            maxArgs: 3\n          })\n        },\n        tabs: {\n          sendMessage: wrappedSendMessage.bind(null, \"sendMessage\", {\n            minArgs: 2,\n            maxArgs: 3\n          })\n        }\n      };\n      const settingMetadata = {\n        clear: {\n          minArgs: 1,\n          maxArgs: 1\n        },\n        get: {\n          minArgs: 1,\n          maxArgs: 1\n        },\n        set: {\n          minArgs: 1,\n          maxArgs: 1\n        }\n      };\n      apiMetadata.privacy = {\n        network: {\n          \"*\": settingMetadata\n        },\n        services: {\n          \"*\": settingMetadata\n        },\n        websites: {\n          \"*\": settingMetadata\n        }\n      };\n      return wrapObject(extensionAPIs, staticWrappers, apiMetadata);\n    };\n\n    if (typeof chrome != \"object\" || !chrome || !chrome.runtime || !chrome.runtime.id) {\n      throw new Error(\"This script should only be loaded in a browser extension.\");\n    } // The build process adds a UMD wrapper around this file, which makes the\n    // `module` variable available.\n\n\n    module.exports = wrapAPIs(chrome);\n  } else {\n    module.exports = browser;\n  }\n});\n//# sourceMappingURL=browser-polyfill.js.map\n");

/***/ }),

/***/ 6252:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var SourceMapConsumer = (__webpack_require__(9125).SourceMapConsumer);
var path = __webpack_require__(1017);

var fs;
try {
  fs = __webpack_require__(7147);
  if (!fs.existsSync || !fs.readFileSync) {
    // fs doesn't have all methods we need
    fs = null;
  }
} catch (err) {
  /* nop */
}

var bufferFrom = __webpack_require__(5420);

/**
 * Requires a module which is protected against bundler minification.
 *
 * @param {NodeModule} mod
 * @param {string} request
 */
function dynamicRequire(mod, request) {
  return mod.require(request);
}

// Only install once if called multiple times
var errorFormatterInstalled = false;
var uncaughtShimInstalled = false;

// If true, the caches are reset before a stack trace formatting operation
var emptyCacheBetweenOperations = false;

// Supports {browser, node, auto}
var environment = "auto";

// Maps a file path to a string containing the file contents
var fileContentsCache = {};

// Maps a file path to a source map for that file
var sourceMapCache = {};

// Regex for detecting source maps
var reSourceMap = /^data:application\/json[^,]+base64,/;

// Priority list of retrieve handlers
var retrieveFileHandlers = [];
var retrieveMapHandlers = [];

function isInBrowser() {
  if (environment === "browser")
    return true;
  if (environment === "node")
    return false;
  return ((typeof window !== 'undefined') && (typeof XMLHttpRequest === 'function') && !(window.require && window.module && window.process && window.process.type === "renderer"));
}

function hasGlobalProcessEventEmitter() {
  return ((typeof process === 'object') && (process !== null) && (typeof process.on === 'function'));
}

function globalProcessVersion() {
  if ((typeof process === 'object') && (process !== null)) {
    return process.version;
  } else {
    return '';
  }
}

function globalProcessStderr() {
  if ((typeof process === 'object') && (process !== null)) {
    return process.stderr;
  }
}

function globalProcessExit(code) {
  if ((typeof process === 'object') && (process !== null) && (typeof process.exit === 'function')) {
    return process.exit(code);
  }
}

function handlerExec(list) {
  return function(arg) {
    for (var i = 0; i < list.length; i++) {
      var ret = list[i](arg);
      if (ret) {
        return ret;
      }
    }
    return null;
  };
}

var retrieveFile = handlerExec(retrieveFileHandlers);

retrieveFileHandlers.push(function(path) {
  // Trim the path to make sure there is no extra whitespace.
  path = path.trim();
  if (/^file:/.test(path)) {
    // existsSync/readFileSync can't handle file protocol, but once stripped, it works
    path = path.replace(/file:\/\/\/(\w:)?/, function(protocol, drive) {
      return drive ?
        '' : // file:///C:/dir/file -> C:/dir/file
        '/'; // file:///root-dir/file -> /root-dir/file
    });
  }
  if (path in fileContentsCache) {
    return fileContentsCache[path];
  }

  var contents = '';
  try {
    if (!fs) {
      // Use SJAX if we are in the browser
      var xhr = new XMLHttpRequest();
      xhr.open('GET', path, /** async */ false);
      xhr.send(null);
      if (xhr.readyState === 4 && xhr.status === 200) {
        contents = xhr.responseText;
      }
    } else if (fs.existsSync(path)) {
      // Otherwise, use the filesystem
      contents = fs.readFileSync(path, 'utf8');
    }
  } catch (er) {
    /* ignore any errors */
  }

  return fileContentsCache[path] = contents;
});

// Support URLs relative to a directory, but be careful about a protocol prefix
// in case we are in the browser (i.e. directories may start with "http://" or "file:///")
function supportRelativeURL(file, url) {
  if (!file) return url;
  var dir = path.dirname(file);
  var match = /^\w+:\/\/[^\/]*/.exec(dir);
  var protocol = match ? match[0] : '';
  var startPath = dir.slice(protocol.length);
  if (protocol && /^\/\w\:/.test(startPath)) {
    // handle file:///C:/ paths
    protocol += '/';
    return protocol + path.resolve(dir.slice(protocol.length), url).replace(/\\/g, '/');
  }
  return protocol + path.resolve(dir.slice(protocol.length), url);
}

function retrieveSourceMapURL(source) {
  var fileData;

  if (isInBrowser()) {
     try {
       var xhr = new XMLHttpRequest();
       xhr.open('GET', source, false);
       xhr.send(null);
       fileData = xhr.readyState === 4 ? xhr.responseText : null;

       // Support providing a sourceMappingURL via the SourceMap header
       var sourceMapHeader = xhr.getResponseHeader("SourceMap") ||
                             xhr.getResponseHeader("X-SourceMap");
       if (sourceMapHeader) {
         return sourceMapHeader;
       }
     } catch (e) {
     }
  }

  // Get the URL of the source map
  fileData = retrieveFile(source);
  var re = /(?:\/\/[@#][\s]*sourceMappingURL=([^\s'"]+)[\s]*$)|(?:\/\*[@#][\s]*sourceMappingURL=([^\s*'"]+)[\s]*(?:\*\/)[\s]*$)/mg;
  // Keep executing the search to find the *last* sourceMappingURL to avoid
  // picking up sourceMappingURLs from comments, strings, etc.
  var lastMatch, match;
  while (match = re.exec(fileData)) lastMatch = match;
  if (!lastMatch) return null;
  return lastMatch[1];
};

// Can be overridden by the retrieveSourceMap option to install. Takes a
// generated source filename; returns a {map, optional url} object, or null if
// there is no source map.  The map field may be either a string or the parsed
// JSON object (ie, it must be a valid argument to the SourceMapConsumer
// constructor).
var retrieveSourceMap = handlerExec(retrieveMapHandlers);
retrieveMapHandlers.push(function(source) {
  var sourceMappingURL = retrieveSourceMapURL(source);
  if (!sourceMappingURL) return null;

  // Read the contents of the source map
  var sourceMapData;
  if (reSourceMap.test(sourceMappingURL)) {
    // Support source map URL as a data url
    var rawData = sourceMappingURL.slice(sourceMappingURL.indexOf(',') + 1);
    sourceMapData = bufferFrom(rawData, "base64").toString();
    sourceMappingURL = source;
  } else {
    // Support source map URLs relative to the source URL
    sourceMappingURL = supportRelativeURL(source, sourceMappingURL);
    sourceMapData = retrieveFile(sourceMappingURL);
  }

  if (!sourceMapData) {
    return null;
  }

  return {
    url: sourceMappingURL,
    map: sourceMapData
  };
});

function mapSourcePosition(position) {
  var sourceMap = sourceMapCache[position.source];
  if (!sourceMap) {
    // Call the (overrideable) retrieveSourceMap function to get the source map.
    var urlAndMap = retrieveSourceMap(position.source);
    if (urlAndMap) {
      sourceMap = sourceMapCache[position.source] = {
        url: urlAndMap.url,
        map: new SourceMapConsumer(urlAndMap.map)
      };

      // Load all sources stored inline with the source map into the file cache
      // to pretend like they are already loaded. They may not exist on disk.
      if (sourceMap.map.sourcesContent) {
        sourceMap.map.sources.forEach(function(source, i) {
          var contents = sourceMap.map.sourcesContent[i];
          if (contents) {
            var url = supportRelativeURL(sourceMap.url, source);
            fileContentsCache[url] = contents;
          }
        });
      }
    } else {
      sourceMap = sourceMapCache[position.source] = {
        url: null,
        map: null
      };
    }
  }

  // Resolve the source URL relative to the URL of the source map
  if (sourceMap && sourceMap.map && typeof sourceMap.map.originalPositionFor === 'function') {
    var originalPosition = sourceMap.map.originalPositionFor(position);

    // Only return the original position if a matching line was found. If no
    // matching line is found then we return position instead, which will cause
    // the stack trace to print the path and line for the compiled file. It is
    // better to give a precise location in the compiled file than a vague
    // location in the original file.
    if (originalPosition.source !== null) {
      originalPosition.source = supportRelativeURL(
        sourceMap.url, originalPosition.source);
      return originalPosition;
    }
  }

  return position;
}

// Parses code generated by FormatEvalOrigin(), a function inside V8:
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js
function mapEvalOrigin(origin) {
  // Most eval() calls are in this format
  var match = /^eval at ([^(]+) \((.+):(\d+):(\d+)\)$/.exec(origin);
  if (match) {
    var position = mapSourcePosition({
      source: match[2],
      line: +match[3],
      column: match[4] - 1
    });
    return 'eval at ' + match[1] + ' (' + position.source + ':' +
      position.line + ':' + (position.column + 1) + ')';
  }

  // Parse nested eval() calls using recursion
  match = /^eval at ([^(]+) \((.+)\)$/.exec(origin);
  if (match) {
    return 'eval at ' + match[1] + ' (' + mapEvalOrigin(match[2]) + ')';
  }

  // Make sure we still return useful information if we didn't find anything
  return origin;
}

// This is copied almost verbatim from the V8 source code at
// https://code.google.com/p/v8/source/browse/trunk/src/messages.js. The
// implementation of wrapCallSite() used to just forward to the actual source
// code of CallSite.prototype.toString but unfortunately a new release of V8
// did something to the prototype chain and broke the shim. The only fix I
// could find was copy/paste.
function CallSiteToString() {
  var fileName;
  var fileLocation = "";
  if (this.isNative()) {
    fileLocation = "native";
  } else {
    fileName = this.getScriptNameOrSourceURL();
    if (!fileName && this.isEval()) {
      fileLocation = this.getEvalOrigin();
      fileLocation += ", ";  // Expecting source position to follow.
    }

    if (fileName) {
      fileLocation += fileName;
    } else {
      // Source code does not originate from a file and is not native, but we
      // can still get the source position inside the source string, e.g. in
      // an eval string.
      fileLocation += "<anonymous>";
    }
    var lineNumber = this.getLineNumber();
    if (lineNumber != null) {
      fileLocation += ":" + lineNumber;
      var columnNumber = this.getColumnNumber();
      if (columnNumber) {
        fileLocation += ":" + columnNumber;
      }
    }
  }

  var line = "";
  var functionName = this.getFunctionName();
  var addSuffix = true;
  var isConstructor = this.isConstructor();
  var isMethodCall = !(this.isToplevel() || isConstructor);
  if (isMethodCall) {
    var typeName = this.getTypeName();
    // Fixes shim to be backward compatable with Node v0 to v4
    if (typeName === "[object Object]") {
      typeName = "null";
    }
    var methodName = this.getMethodName();
    if (functionName) {
      if (typeName && functionName.indexOf(typeName) != 0) {
        line += typeName + ".";
      }
      line += functionName;
      if (methodName && functionName.indexOf("." + methodName) != functionName.length - methodName.length - 1) {
        line += " [as " + methodName + "]";
      }
    } else {
      line += typeName + "." + (methodName || "<anonymous>");
    }
  } else if (isConstructor) {
    line += "new " + (functionName || "<anonymous>");
  } else if (functionName) {
    line += functionName;
  } else {
    line += fileLocation;
    addSuffix = false;
  }
  if (addSuffix) {
    line += " (" + fileLocation + ")";
  }
  return line;
}

function cloneCallSite(frame) {
  var object = {};
  Object.getOwnPropertyNames(Object.getPrototypeOf(frame)).forEach(function(name) {
    object[name] = /^(?:is|get)/.test(name) ? function() { return frame[name].call(frame); } : frame[name];
  });
  object.toString = CallSiteToString;
  return object;
}

function wrapCallSite(frame, state) {
  // provides interface backward compatibility
  if (state === undefined) {
    state = { nextPosition: null, curPosition: null }
  }
  if(frame.isNative()) {
    state.curPosition = null;
    return frame;
  }

  // Most call sites will return the source file from getFileName(), but code
  // passed to eval() ending in "//# sourceURL=..." will return the source file
  // from getScriptNameOrSourceURL() instead
  var source = frame.getFileName() || frame.getScriptNameOrSourceURL();
  if (source) {
    var line = frame.getLineNumber();
    var column = frame.getColumnNumber() - 1;

    // Fix position in Node where some (internal) code is prepended.
    // See https://github.com/evanw/node-source-map-support/issues/36
    // Header removed in node at ^10.16 || >=11.11.0
    // v11 is not an LTS candidate, we can just test the one version with it.
    // Test node versions for: 10.16-19, 10.20+, 12-19, 20-99, 100+, or 11.11
    var noHeader = /^v(10\.1[6-9]|10\.[2-9][0-9]|10\.[0-9]{3,}|1[2-9]\d*|[2-9]\d|\d{3,}|11\.11)/;
    var headerLength = noHeader.test(globalProcessVersion()) ? 0 : 62;
    if (line === 1 && column > headerLength && !isInBrowser() && !frame.isEval()) {
      column -= headerLength;
    }

    var position = mapSourcePosition({
      source: source,
      line: line,
      column: column
    });
    state.curPosition = position;
    frame = cloneCallSite(frame);
    var originalFunctionName = frame.getFunctionName;
    frame.getFunctionName = function() {
      if (state.nextPosition == null) {
        return originalFunctionName();
      }
      return state.nextPosition.name || originalFunctionName();
    };
    frame.getFileName = function() { return position.source; };
    frame.getLineNumber = function() { return position.line; };
    frame.getColumnNumber = function() { return position.column + 1; };
    frame.getScriptNameOrSourceURL = function() { return position.source; };
    return frame;
  }

  // Code called using eval() needs special handling
  var origin = frame.isEval() && frame.getEvalOrigin();
  if (origin) {
    origin = mapEvalOrigin(origin);
    frame = cloneCallSite(frame);
    frame.getEvalOrigin = function() { return origin; };
    return frame;
  }

  // If we get here then we were unable to change the source position
  return frame;
}

// This function is part of the V8 stack trace API, for more info see:
// https://v8.dev/docs/stack-trace-api
function prepareStackTrace(error, stack) {
  if (emptyCacheBetweenOperations) {
    fileContentsCache = {};
    sourceMapCache = {};
  }

  var name = error.name || 'Error';
  var message = error.message || '';
  var errorString = name + ": " + message;

  var state = { nextPosition: null, curPosition: null };
  var processedStack = [];
  for (var i = stack.length - 1; i >= 0; i--) {
    processedStack.push('\n    at ' + wrapCallSite(stack[i], state));
    state.nextPosition = state.curPosition;
  }
  state.curPosition = state.nextPosition = null;
  return errorString + processedStack.reverse().join('');
}

// Generate position and snippet of original source with pointer
function getErrorSource(error) {
  var match = /\n    at [^(]+ \((.*):(\d+):(\d+)\)/.exec(error.stack);
  if (match) {
    var source = match[1];
    var line = +match[2];
    var column = +match[3];

    // Support the inline sourceContents inside the source map
    var contents = fileContentsCache[source];

    // Support files on disk
    if (!contents && fs && fs.existsSync(source)) {
      try {
        contents = fs.readFileSync(source, 'utf8');
      } catch (er) {
        contents = '';
      }
    }

    // Format the line from the original source code like node does
    if (contents) {
      var code = contents.split(/(?:\r\n|\r|\n)/)[line - 1];
      if (code) {
        return source + ':' + line + '\n' + code + '\n' +
          new Array(column).join(' ') + '^';
      }
    }
  }
  return null;
}

function printErrorAndExit (error) {
  var source = getErrorSource(error);

  // Ensure error is printed synchronously and not truncated
  var stderr = globalProcessStderr();
  if (stderr && stderr._handle && stderr._handle.setBlocking) {
    stderr._handle.setBlocking(true);
  }

  if (source) {
    console.error();
    console.error(source);
  }

  console.error(error.stack);
  globalProcessExit(1);
}

function shimEmitUncaughtException () {
  var origEmit = process.emit;

  process.emit = function (type) {
    if (type === 'uncaughtException') {
      var hasStack = (arguments[1] && arguments[1].stack);
      var hasListeners = (this.listeners(type).length > 0);

      if (hasStack && !hasListeners) {
        return printErrorAndExit(arguments[1]);
      }
    }

    return origEmit.apply(this, arguments);
  };
}

var originalRetrieveFileHandlers = retrieveFileHandlers.slice(0);
var originalRetrieveMapHandlers = retrieveMapHandlers.slice(0);

exports.wrapCallSite = wrapCallSite;
exports.getErrorSource = getErrorSource;
exports.mapSourcePosition = mapSourcePosition;
exports.retrieveSourceMap = retrieveSourceMap;

exports.install = function(options) {
  options = options || {};

  if (options.environment) {
    environment = options.environment;
    if (["node", "browser", "auto"].indexOf(environment) === -1) {
      throw new Error("environment " + environment + " was unknown. Available options are {auto, browser, node}")
    }
  }

  // Allow sources to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveFile) {
    if (options.overrideRetrieveFile) {
      retrieveFileHandlers.length = 0;
    }

    retrieveFileHandlers.unshift(options.retrieveFile);
  }

  // Allow source maps to be found by methods other than reading the files
  // directly from disk.
  if (options.retrieveSourceMap) {
    if (options.overrideRetrieveSourceMap) {
      retrieveMapHandlers.length = 0;
    }

    retrieveMapHandlers.unshift(options.retrieveSourceMap);
  }

  // Support runtime transpilers that include inline source maps
  if (options.hookRequire && !isInBrowser()) {
    // Use dynamicRequire to avoid including in browser bundles
    var Module = dynamicRequire(module, 'module');
    var $compile = Module.prototype._compile;

    if (!$compile.__sourceMapSupport) {
      Module.prototype._compile = function(content, filename) {
        fileContentsCache[filename] = content;
        sourceMapCache[filename] = undefined;
        return $compile.call(this, content, filename);
      };

      Module.prototype._compile.__sourceMapSupport = true;
    }
  }

  // Configure options
  if (!emptyCacheBetweenOperations) {
    emptyCacheBetweenOperations = 'emptyCacheBetweenOperations' in options ?
      options.emptyCacheBetweenOperations : false;
  }

  // Install the error reformatter
  if (!errorFormatterInstalled) {
    errorFormatterInstalled = true;
    Error.prepareStackTrace = prepareStackTrace;
  }

  if (!uncaughtShimInstalled) {
    var installHandler = 'handleUncaughtExceptions' in options ?
      options.handleUncaughtExceptions : true;

    // Do not override 'uncaughtException' with our own handler in Node.js
    // Worker threads. Workers pass the error to the main thread as an event,
    // rather than printing something to stderr and exiting.
    try {
      // We need to use `dynamicRequire` because `require` on it's own will be optimized by WebPack/Browserify.
      var worker_threads = dynamicRequire(module, 'worker_threads');
      if (worker_threads.isMainThread === false) {
        installHandler = false;
      }
    } catch(e) {}

    // Provide the option to not install the uncaught exception handler. This is
    // to support other uncaught exception handlers (in test frameworks, for
    // example). If this handler is not installed and there are no other uncaught
    // exception handlers, uncaught exceptions will be caught by node's built-in
    // exception handler and the process will still be terminated. However, the
    // generated JavaScript code will be shown above the stack trace instead of
    // the original source code.
    if (installHandler && hasGlobalProcessEventEmitter()) {
      uncaughtShimInstalled = true;
      shimEmitUncaughtException();
    }
  }
};

exports.resetRetrieveHandlers = function() {
  retrieveFileHandlers.length = 0;
  retrieveMapHandlers.length = 0;

  retrieveFileHandlers = originalRetrieveFileHandlers.slice(0);
  retrieveMapHandlers = originalRetrieveMapHandlers.slice(0);

  retrieveSourceMap = handlerExec(retrieveMapHandlers);
  retrieveFile = handlerExec(retrieveFileHandlers);
}


/***/ }),

/***/ 8213:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(2728);
var has = Object.prototype.hasOwnProperty;
var hasNativeMap = typeof Map !== "undefined";

/**
 * A data structure which is a combination of an array and a set. Adding a new
 * member is O(1), testing for membership is O(1), and finding the index of an
 * element is O(1). Removing elements from the set is not supported. Only
 * strings are supported for membership.
 */
function ArraySet() {
  this._array = [];
  this._set = hasNativeMap ? new Map() : Object.create(null);
}

/**
 * Static method for creating ArraySet instances from an existing array.
 */
ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
  var set = new ArraySet();
  for (var i = 0, len = aArray.length; i < len; i++) {
    set.add(aArray[i], aAllowDuplicates);
  }
  return set;
};

/**
 * Return how many unique items are in this ArraySet. If duplicates have been
 * added, than those do not count towards the size.
 *
 * @returns Number
 */
ArraySet.prototype.size = function ArraySet_size() {
  return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};

/**
 * Add the given string to this set.
 *
 * @param String aStr
 */
ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
  var sStr = hasNativeMap ? aStr : util.toSetString(aStr);
  var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
  var idx = this._array.length;
  if (!isDuplicate || aAllowDuplicates) {
    this._array.push(aStr);
  }
  if (!isDuplicate) {
    if (hasNativeMap) {
      this._set.set(aStr, idx);
    } else {
      this._set[sStr] = idx;
    }
  }
};

/**
 * Is the given string a member of this set?
 *
 * @param String aStr
 */
ArraySet.prototype.has = function ArraySet_has(aStr) {
  if (hasNativeMap) {
    return this._set.has(aStr);
  } else {
    var sStr = util.toSetString(aStr);
    return has.call(this._set, sStr);
  }
};

/**
 * What is the index of the given string in the array?
 *
 * @param String aStr
 */
ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
  if (hasNativeMap) {
    var idx = this._set.get(aStr);
    if (idx >= 0) {
        return idx;
    }
  } else {
    var sStr = util.toSetString(aStr);
    if (has.call(this._set, sStr)) {
      return this._set[sStr];
    }
  }

  throw new Error('"' + aStr + '" is not in the set.');
};

/**
 * What is the element at the given index?
 *
 * @param Number aIdx
 */
ArraySet.prototype.at = function ArraySet_at(aIdx) {
  if (aIdx >= 0 && aIdx < this._array.length) {
    return this._array[aIdx];
  }
  throw new Error('No element indexed by ' + aIdx);
};

/**
 * Returns the array representation of this set (which has the proper indices
 * indicated by indexOf). Note that this is a copy of the internal array used
 * for storing the members so that no one can mess with internal state.
 */
ArraySet.prototype.toArray = function ArraySet_toArray() {
  return this._array.slice();
};

exports.I = ArraySet;


/***/ }),

/***/ 6400:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 *
 * Based on the Base 64 VLQ implementation in Closure Compiler:
 * https://code.google.com/p/closure-compiler/source/browse/trunk/src/com/google/debugging/sourcemap/Base64VLQ.java
 *
 * Copyright 2011 The Closure Compiler Authors. All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are
 * met:
 *
 *  * Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *  * Redistributions in binary form must reproduce the above
 *    copyright notice, this list of conditions and the following
 *    disclaimer in the documentation and/or other materials provided
 *    with the distribution.
 *  * Neither the name of Google Inc. nor the names of its
 *    contributors may be used to endorse or promote products derived
 *    from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

var base64 = __webpack_require__(7923);

// A single base 64 digit can contain 6 bits of data. For the base 64 variable
// length quantities we use in the source map spec, the first bit is the sign,
// the next four bits are the actual value, and the 6th bit is the
// continuation bit. The continuation bit tells us whether there are more
// digits in this value following this digit.
//
//   Continuation
//   |    Sign
//   |    |
//   V    V
//   101011

var VLQ_BASE_SHIFT = 5;

// binary: 100000
var VLQ_BASE = 1 << VLQ_BASE_SHIFT;

// binary: 011111
var VLQ_BASE_MASK = VLQ_BASE - 1;

// binary: 100000
var VLQ_CONTINUATION_BIT = VLQ_BASE;

/**
 * Converts from a two-complement value to a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   1 becomes 2 (10 binary), -1 becomes 3 (11 binary)
 *   2 becomes 4 (100 binary), -2 becomes 5 (101 binary)
 */
function toVLQSigned(aValue) {
  return aValue < 0
    ? ((-aValue) << 1) + 1
    : (aValue << 1) + 0;
}

/**
 * Converts to a two-complement value from a value where the sign bit is
 * placed in the least significant bit.  For example, as decimals:
 *   2 (10 binary) becomes 1, 3 (11 binary) becomes -1
 *   4 (100 binary) becomes 2, 5 (101 binary) becomes -2
 */
function fromVLQSigned(aValue) {
  var isNegative = (aValue & 1) === 1;
  var shifted = aValue >> 1;
  return isNegative
    ? -shifted
    : shifted;
}

/**
 * Returns the base 64 VLQ encoded value.
 */
exports.encode = function base64VLQ_encode(aValue) {
  var encoded = "";
  var digit;

  var vlq = toVLQSigned(aValue);

  do {
    digit = vlq & VLQ_BASE_MASK;
    vlq >>>= VLQ_BASE_SHIFT;
    if (vlq > 0) {
      // There are still more digits in this value, so we must make sure the
      // continuation bit is marked.
      digit |= VLQ_CONTINUATION_BIT;
    }
    encoded += base64.encode(digit);
  } while (vlq > 0);

  return encoded;
};

/**
 * Decodes the next base 64 VLQ value from the given string and returns the
 * value and the rest of the string via the out parameter.
 */
exports.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
  var strLen = aStr.length;
  var result = 0;
  var shift = 0;
  var continuation, digit;

  do {
    if (aIndex >= strLen) {
      throw new Error("Expected more digits in base 64 VLQ value.");
    }

    digit = base64.decode(aStr.charCodeAt(aIndex++));
    if (digit === -1) {
      throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
    }

    continuation = !!(digit & VLQ_CONTINUATION_BIT);
    digit &= VLQ_BASE_MASK;
    result = result + (digit << shift);
    shift += VLQ_BASE_SHIFT;
  } while (continuation);

  aOutParam.value = fromVLQSigned(result);
  aOutParam.rest = aIndex;
};


/***/ }),

/***/ 7923:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var intToCharMap = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');

/**
 * Encode an integer in the range of 0 to 63 to a single base 64 digit.
 */
exports.encode = function (number) {
  if (0 <= number && number < intToCharMap.length) {
    return intToCharMap[number];
  }
  throw new TypeError("Must be between 0 and 63: " + number);
};

/**
 * Decode a single base 64 character code digit to an integer. Returns -1 on
 * failure.
 */
exports.decode = function (charCode) {
  var bigA = 65;     // 'A'
  var bigZ = 90;     // 'Z'

  var littleA = 97;  // 'a'
  var littleZ = 122; // 'z'

  var zero = 48;     // '0'
  var nine = 57;     // '9'

  var plus = 43;     // '+'
  var slash = 47;    // '/'

  var littleOffset = 26;
  var numberOffset = 52;

  // 0 - 25: ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (bigA <= charCode && charCode <= bigZ) {
    return (charCode - bigA);
  }

  // 26 - 51: abcdefghijklmnopqrstuvwxyz
  if (littleA <= charCode && charCode <= littleZ) {
    return (charCode - littleA + littleOffset);
  }

  // 52 - 61: 0123456789
  if (zero <= charCode && charCode <= nine) {
    return (charCode - zero + numberOffset);
  }

  // 62: +
  if (charCode == plus) {
    return 62;
  }

  // 63: /
  if (charCode == slash) {
    return 63;
  }

  // Invalid base64 digit.
  return -1;
};


/***/ }),

/***/ 9216:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

exports.GREATEST_LOWER_BOUND = 1;
exports.LEAST_UPPER_BOUND = 2;

/**
 * Recursive implementation of binary search.
 *
 * @param aLow Indices here and lower do not contain the needle.
 * @param aHigh Indices here and higher do not contain the needle.
 * @param aNeedle The element being searched for.
 * @param aHaystack The non-empty array being searched.
 * @param aCompare Function which takes two elements and returns -1, 0, or 1.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 */
function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
  // This function terminates when one of the following is true:
  //
  //   1. We find the exact element we are looking for.
  //
  //   2. We did not find the exact element, but we can return the index of
  //      the next-closest element.
  //
  //   3. We did not find the exact element, and there is no next-closest
  //      element than the one we are searching for, so we return -1.
  var mid = Math.floor((aHigh - aLow) / 2) + aLow;
  var cmp = aCompare(aNeedle, aHaystack[mid], true);
  if (cmp === 0) {
    // Found the element we are looking for.
    return mid;
  }
  else if (cmp > 0) {
    // Our needle is greater than aHaystack[mid].
    if (aHigh - mid > 1) {
      // The element is in the upper half.
      return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
    }

    // The exact needle element was not found in this haystack. Determine if
    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return aHigh < aHaystack.length ? aHigh : -1;
    } else {
      return mid;
    }
  }
  else {
    // Our needle is less than aHaystack[mid].
    if (mid - aLow > 1) {
      // The element is in the lower half.
      return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
    }

    // we are in termination case (3) or (2) and return the appropriate thing.
    if (aBias == exports.LEAST_UPPER_BOUND) {
      return mid;
    } else {
      return aLow < 0 ? -1 : aLow;
    }
  }
}

/**
 * This is an implementation of binary search which will always try and return
 * the index of the closest element if there is no exact hit. This is because
 * mappings between original and generated line/col pairs are single points,
 * and there is an implicit region between each of them, so a miss just means
 * that you aren't on the very start of a region.
 *
 * @param aNeedle The element you are looking for.
 * @param aHaystack The array that is being searched.
 * @param aCompare A function which takes the needle and an element in the
 *     array and returns -1, 0, or 1 depending on whether the needle is less
 *     than, equal to, or greater than the element, respectively.
 * @param aBias Either 'binarySearch.GREATEST_LOWER_BOUND' or
 *     'binarySearch.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'binarySearch.GREATEST_LOWER_BOUND'.
 */
exports.search = function search(aNeedle, aHaystack, aCompare, aBias) {
  if (aHaystack.length === 0) {
    return -1;
  }

  var index = recursiveSearch(-1, aHaystack.length, aNeedle, aHaystack,
                              aCompare, aBias || exports.GREATEST_LOWER_BOUND);
  if (index < 0) {
    return -1;
  }

  // We have found either the exact element, or the next-closest element than
  // the one we are searching for. However, there may be more than one such
  // element. Make sure we always return the smallest of these.
  while (index - 1 >= 0) {
    if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
      break;
    }
    --index;
  }

  return index;
};


/***/ }),

/***/ 1188:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2014 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(2728);

/**
 * Determine whether mappingB is after mappingA with respect to generated
 * position.
 */
function generatedPositionAfter(mappingA, mappingB) {
  // Optimized for most common case
  var lineA = mappingA.generatedLine;
  var lineB = mappingB.generatedLine;
  var columnA = mappingA.generatedColumn;
  var columnB = mappingB.generatedColumn;
  return lineB > lineA || lineB == lineA && columnB >= columnA ||
         util.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
}

/**
 * A data structure to provide a sorted view of accumulated mappings in a
 * performance conscious manner. It trades a neglibable overhead in general
 * case for a large speedup in case of mappings being added in order.
 */
function MappingList() {
  this._array = [];
  this._sorted = true;
  // Serves as infimum
  this._last = {generatedLine: -1, generatedColumn: 0};
}

/**
 * Iterate through internal items. This method takes the same arguments that
 * `Array.prototype.forEach` takes.
 *
 * NOTE: The order of the mappings is NOT guaranteed.
 */
MappingList.prototype.unsortedForEach =
  function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };

/**
 * Add the given source mapping.
 *
 * @param Object aMapping
 */
MappingList.prototype.add = function MappingList_add(aMapping) {
  if (generatedPositionAfter(this._last, aMapping)) {
    this._last = aMapping;
    this._array.push(aMapping);
  } else {
    this._sorted = false;
    this._array.push(aMapping);
  }
};

/**
 * Returns the flat, sorted array of mappings. The mappings are sorted by
 * generated position.
 *
 * WARNING: This method returns internal data without copying, for
 * performance. The return value must NOT be mutated, and should be treated as
 * an immutable borrow. If you want to take ownership, you must make your own
 * copy.
 */
MappingList.prototype.toArray = function MappingList_toArray() {
  if (!this._sorted) {
    this._array.sort(util.compareByGeneratedPositionsInflated);
    this._sorted = true;
  }
  return this._array;
};

exports.H = MappingList;


/***/ }),

/***/ 2826:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

// It turns out that some (most?) JavaScript engines don't self-host
// `Array.prototype.sort`. This makes sense because C++ will likely remain
// faster than JS when doing raw CPU-intensive sorting. However, when using a
// custom comparator function, calling back and forth between the VM's C++ and
// JIT'd JS is rather slow *and* loses JIT type information, resulting in
// worse generated code for the comparator function than would be optimal. In
// fact, when sorting with a comparator, these costs outweigh the benefits of
// sorting in C++. By using our own JS-implemented Quick Sort (below), we get
// a ~3500ms mean speed-up in `bench/bench.html`.

/**
 * Swap the elements indexed by `x` and `y` in the array `ary`.
 *
 * @param {Array} ary
 *        The array.
 * @param {Number} x
 *        The index of the first item.
 * @param {Number} y
 *        The index of the second item.
 */
function swap(ary, x, y) {
  var temp = ary[x];
  ary[x] = ary[y];
  ary[y] = temp;
}

/**
 * Returns a random integer within the range `low .. high` inclusive.
 *
 * @param {Number} low
 *        The lower bound on the range.
 * @param {Number} high
 *        The upper bound on the range.
 */
function randomIntInRange(low, high) {
  return Math.round(low + (Math.random() * (high - low)));
}

/**
 * The Quick Sort algorithm.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 * @param {Number} p
 *        Start index of the array
 * @param {Number} r
 *        End index of the array
 */
function doQuickSort(ary, comparator, p, r) {
  // If our lower bound is less than our upper bound, we (1) partition the
  // array into two pieces and (2) recurse on each half. If it is not, this is
  // the empty array and our base case.

  if (p < r) {
    // (1) Partitioning.
    //
    // The partitioning chooses a pivot between `p` and `r` and moves all
    // elements that are less than or equal to the pivot to the before it, and
    // all the elements that are greater than it after it. The effect is that
    // once partition is done, the pivot is in the exact place it will be when
    // the array is put in sorted order, and it will not need to be moved
    // again. This runs in O(n) time.

    // Always choose a random pivot so that an input array which is reverse
    // sorted does not cause O(n^2) running time.
    var pivotIndex = randomIntInRange(p, r);
    var i = p - 1;

    swap(ary, pivotIndex, r);
    var pivot = ary[r];

    // Immediately after `j` is incremented in this loop, the following hold
    // true:
    //
    //   * Every element in `ary[p .. i]` is less than or equal to the pivot.
    //
    //   * Every element in `ary[i+1 .. j-1]` is greater than the pivot.
    for (var j = p; j < r; j++) {
      if (comparator(ary[j], pivot) <= 0) {
        i += 1;
        swap(ary, i, j);
      }
    }

    swap(ary, i + 1, j);
    var q = i + 1;

    // (2) Recurse on each half.

    doQuickSort(ary, comparator, p, q - 1);
    doQuickSort(ary, comparator, q + 1, r);
  }
}

/**
 * Sort the given array in-place with the given comparator function.
 *
 * @param {Array} ary
 *        An array to sort.
 * @param {function} comparator
 *        Function to use to compare two items.
 */
exports.U = function (ary, comparator) {
  doQuickSort(ary, comparator, 0, ary.length - 1);
};


/***/ }),

/***/ 6771:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var util = __webpack_require__(2728);
var binarySearch = __webpack_require__(9216);
var ArraySet = (__webpack_require__(8213)/* .ArraySet */ .I);
var base64VLQ = __webpack_require__(6400);
var quickSort = (__webpack_require__(2826)/* .quickSort */ .U);

function SourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  return sourceMap.sections != null
    ? new IndexedSourceMapConsumer(sourceMap, aSourceMapURL)
    : new BasicSourceMapConsumer(sourceMap, aSourceMapURL);
}

SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
  return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
}

/**
 * The version of the source mapping spec that we are consuming.
 */
SourceMapConsumer.prototype._version = 3;

// `__generatedMappings` and `__originalMappings` are arrays that hold the
// parsed mapping coordinates from the source map's "mappings" attribute. They
// are lazily instantiated, accessed via the `_generatedMappings` and
// `_originalMappings` getters respectively, and we only parse the mappings
// and create these arrays once queried for a source location. We jump through
// these hoops because there can be many thousands of mappings, and parsing
// them is expensive, so we only want to do it if we must.
//
// Each object in the arrays is of the form:
//
//     {
//       generatedLine: The line number in the generated code,
//       generatedColumn: The column number in the generated code,
//       source: The path to the original source file that generated this
//               chunk of code,
//       originalLine: The line number in the original source that
//                     corresponds to this chunk of generated code,
//       originalColumn: The column number in the original source that
//                       corresponds to this chunk of generated code,
//       name: The name of the original symbol which generated this chunk of
//             code.
//     }
//
// All properties except for `generatedLine` and `generatedColumn` can be
// `null`.
//
// `_generatedMappings` is ordered by the generated positions.
//
// `_originalMappings` is ordered by the original positions.

SourceMapConsumer.prototype.__generatedMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_generatedMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__generatedMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__generatedMappings;
  }
});

SourceMapConsumer.prototype.__originalMappings = null;
Object.defineProperty(SourceMapConsumer.prototype, '_originalMappings', {
  configurable: true,
  enumerable: true,
  get: function () {
    if (!this.__originalMappings) {
      this._parseMappings(this._mappings, this.sourceRoot);
    }

    return this.__originalMappings;
  }
});

SourceMapConsumer.prototype._charIsMappingSeparator =
  function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
SourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };

SourceMapConsumer.GENERATED_ORDER = 1;
SourceMapConsumer.ORIGINAL_ORDER = 2;

SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
SourceMapConsumer.LEAST_UPPER_BOUND = 2;

/**
 * Iterate over each mapping between an original source/line/column and a
 * generated line/column in this source map.
 *
 * @param Function aCallback
 *        The function that is called with each mapping.
 * @param Object aContext
 *        Optional. If specified, this object will be the value of `this` every
 *        time that `aCallback` is called.
 * @param aOrder
 *        Either `SourceMapConsumer.GENERATED_ORDER` or
 *        `SourceMapConsumer.ORIGINAL_ORDER`. Specifies whether you want to
 *        iterate over the mappings sorted by the generated file's line/column
 *        order or the original's source/line/column order, respectively. Defaults to
 *        `SourceMapConsumer.GENERATED_ORDER`.
 */
SourceMapConsumer.prototype.eachMapping =
  function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;

    var mappings;
    switch (order) {
    case SourceMapConsumer.GENERATED_ORDER:
      mappings = this._generatedMappings;
      break;
    case SourceMapConsumer.ORIGINAL_ORDER:
      mappings = this._originalMappings;
      break;
    default:
      throw new Error("Unknown order of iteration.");
    }

    var sourceRoot = this.sourceRoot;
    mappings.map(function (mapping) {
      var source = mapping.source === null ? null : this._sources.at(mapping.source);
      source = util.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source: source,
        generatedLine: mapping.generatedLine,
        generatedColumn: mapping.generatedColumn,
        originalLine: mapping.originalLine,
        originalColumn: mapping.originalColumn,
        name: mapping.name === null ? null : this._names.at(mapping.name)
      };
    }, this).forEach(aCallback, context);
  };

/**
 * Returns all generated line and column information for the original source,
 * line, and column provided. If no column is provided, returns all mappings
 * corresponding to a either the line we are searching for or the next
 * closest line that has any mappings. Otherwise, returns all mappings
 * corresponding to the given line and either the column we are searching for
 * or the next closest column that has any offsets.
 *
 * The only argument is an object with the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number is 1-based.
 *   - column: Optional. the column number in the original source.
 *    The column number is 0-based.
 *
 * and an array of objects is returned, each with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *    line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *    The column number is 0-based.
 */
SourceMapConsumer.prototype.allGeneratedPositionsFor =
  function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util.getArg(aArgs, 'line');

    // When there is no exact match, BasicSourceMapConsumer.prototype._findMapping
    // returns the index of the closest mapping less than the needle. By
    // setting needle.originalColumn to 0, we thus find the last mapping for
    // the given line, provided such a mapping exists.
    var needle = {
      source: util.getArg(aArgs, 'source'),
      originalLine: line,
      originalColumn: util.getArg(aArgs, 'column', 0)
    };

    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }

    var mappings = [];

    var index = this._findMapping(needle,
                                  this._originalMappings,
                                  "originalLine",
                                  "originalColumn",
                                  util.compareByOriginalPositions,
                                  binarySearch.LEAST_UPPER_BOUND);
    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (aArgs.column === undefined) {
        var originalLine = mapping.originalLine;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we found. Since
        // mappings are sorted, this is guaranteed to find all mappings for
        // the line we found.
        while (mapping && mapping.originalLine === originalLine) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping.originalColumn;

        // Iterate until either we run out of mappings, or we run into
        // a mapping for a different line than the one we were searching for.
        // Since mappings are sorted, this is guaranteed to find all mappings for
        // the line we are searching for.
        while (mapping &&
               mapping.originalLine === line &&
               mapping.originalColumn == originalColumn) {
          mappings.push({
            line: util.getArg(mapping, 'generatedLine', null),
            column: util.getArg(mapping, 'generatedColumn', null),
            lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
          });

          mapping = this._originalMappings[++index];
        }
      }
    }

    return mappings;
  };

exports.SourceMapConsumer = SourceMapConsumer;

/**
 * A BasicSourceMapConsumer instance represents a parsed source map which we can
 * query for information about the original file positions by giving it a file
 * position in the generated source.
 *
 * The first parameter is the raw source map (either as a JSON string, or
 * already parsed to an object). According to the spec, source maps have the
 * following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - sources: An array of URLs to the original source files.
 *   - names: An array of identifiers which can be referrenced by individual mappings.
 *   - sourceRoot: Optional. The URL root from which all sources are relative.
 *   - sourcesContent: Optional. An array of contents of the original source files.
 *   - mappings: A string of base64 VLQs which contain the actual mappings.
 *   - file: Optional. The generated file this source map is associated with.
 *
 * Here is an example source map, taken from the source map spec[0]:
 *
 *     {
 *       version : 3,
 *       file: "out.js",
 *       sourceRoot : "",
 *       sources: ["foo.js", "bar.js"],
 *       names: ["src", "maps", "are", "fun"],
 *       mappings: "AA,AB;;ABCDE;"
 *     }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit?pli=1#
 */
function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sources = util.getArg(sourceMap, 'sources');
  // Sass 3.3 leaves out the 'names' array, so we deviate from the spec (which
  // requires the array) to play nice here.
  var names = util.getArg(sourceMap, 'names', []);
  var sourceRoot = util.getArg(sourceMap, 'sourceRoot', null);
  var sourcesContent = util.getArg(sourceMap, 'sourcesContent', null);
  var mappings = util.getArg(sourceMap, 'mappings');
  var file = util.getArg(sourceMap, 'file', null);

  // Once again, Sass deviates from the spec and supplies the version as a
  // string rather than a number, so we use loose equality checking here.
  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  if (sourceRoot) {
    sourceRoot = util.normalize(sourceRoot);
  }

  sources = sources
    .map(String)
    // Some source maps produce relative source paths like "./foo.js" instead of
    // "foo.js".  Normalize these first so that future comparisons will succeed.
    // See bugzil.la/1090768.
    .map(util.normalize)
    // Always ensure that absolute sources are internally stored relative to
    // the source root, if the source root is absolute. Not doing this would
    // be particularly problematic when the source root is a prefix of the
    // source (valid, but why??). See github issue #199 and bugzil.la/1188982.
    .map(function (source) {
      return sourceRoot && util.isAbsolute(sourceRoot) && util.isAbsolute(source)
        ? util.relative(sourceRoot, source)
        : source;
    });

  // Pass `true` below to allow duplicate names and sources. While source maps
  // are intended to be compressed and deduplicated, the TypeScript compiler
  // sometimes generates source maps with duplicates in them. See Github issue
  // #72 and bugzil.la/889492.
  this._names = ArraySet.fromArray(names.map(String), true);
  this._sources = ArraySet.fromArray(sources, true);

  this._absoluteSources = this._sources.toArray().map(function (s) {
    return util.computeSourceURL(sourceRoot, s, aSourceMapURL);
  });

  this.sourceRoot = sourceRoot;
  this.sourcesContent = sourcesContent;
  this._mappings = mappings;
  this._sourceMapURL = aSourceMapURL;
  this.file = file;
}

BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;

/**
 * Utility function to find the index of a source.  Returns -1 if not
 * found.
 */
BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
  var relativeSource = aSource;
  if (this.sourceRoot != null) {
    relativeSource = util.relative(this.sourceRoot, relativeSource);
  }

  if (this._sources.has(relativeSource)) {
    return this._sources.indexOf(relativeSource);
  }

  // Maybe aSource is an absolute URL as returned by |sources|.  In
  // this case we can't simply undo the transform.
  var i;
  for (i = 0; i < this._absoluteSources.length; ++i) {
    if (this._absoluteSources[i] == aSource) {
      return i;
    }
  }

  return -1;
};

/**
 * Create a BasicSourceMapConsumer from a SourceMapGenerator.
 *
 * @param SourceMapGenerator aSourceMap
 *        The source map that will be consumed.
 * @param String aSourceMapURL
 *        The URL at which the source map can be found (optional)
 * @returns BasicSourceMapConsumer
 */
BasicSourceMapConsumer.fromSourceMap =
  function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);

    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(smc._sources.toArray(),
                                                            smc.sourceRoot);
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function (s) {
      return util.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });

    // Because we are modifying the entries (by converting string sources and
    // names to indices into the sources and names ArraySets), we have to make
    // a copy of the entry or else bad things happen. Shared mutable state
    // strikes again! See github issue #191.

    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];

    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping;
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;

      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;

        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }

        destOriginalMappings.push(destMapping);
      }

      destGeneratedMappings.push(destMapping);
    }

    quickSort(smc.__originalMappings, util.compareByOriginalPositions);

    return smc;
  };

/**
 * The version of the source mapping spec that we are consuming.
 */
BasicSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(BasicSourceMapConsumer.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});

/**
 * Provide the JIT with a nice shape / hidden class.
 */
function Mapping() {
  this.generatedLine = 0;
  this.generatedColumn = 0;
  this.source = null;
  this.originalLine = null;
  this.originalColumn = null;
  this.name = null;
}

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
BasicSourceMapConsumer.prototype._parseMappings =
  function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping, str, segment, end, value;

    while (index < length) {
      if (aStr.charAt(index) === ';') {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      }
      else if (aStr.charAt(index) === ',') {
        index++;
      }
      else {
        mapping = new Mapping();
        mapping.generatedLine = generatedLine;

        // Because each offset is encoded relative to the previous one,
        // many segments often have the same encoding. We can exploit this
        // fact by caching the parsed variable length fields of each segment,
        // allowing us to avoid a second parse if we encounter the same
        // segment again.
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);

        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }

          if (segment.length === 2) {
            throw new Error('Found a source, but no line and column');
          }

          if (segment.length === 3) {
            throw new Error('Found a source and line, but no column');
          }

          cachedSegments[str] = segment;
        }

        // Generated column.
        mapping.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping.generatedColumn;

        if (segment.length > 1) {
          // Original source.
          mapping.source = previousSource + segment[1];
          previousSource += segment[1];

          // Original line.
          mapping.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping.originalLine;
          // Lines are stored 0-based
          mapping.originalLine += 1;

          // Original column.
          mapping.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping.originalColumn;

          if (segment.length > 4) {
            // Original name.
            mapping.name = previousName + segment[4];
            previousName += segment[4];
          }
        }

        generatedMappings.push(mapping);
        if (typeof mapping.originalLine === 'number') {
          originalMappings.push(mapping);
        }
      }
    }

    quickSort(generatedMappings, util.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;

    quickSort(originalMappings, util.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };

/**
 * Find the mapping that best matches the hypothetical "needle" mapping that
 * we are searching for in the given "haystack" of mappings.
 */
BasicSourceMapConsumer.prototype._findMapping =
  function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName,
                                         aColumnName, aComparator, aBias) {
    // To return the position we are searching for, we must first find the
    // mapping for the given position and then return the opposite position it
    // points to. Because the mappings are sorted, we can use binary search to
    // find the best mapping.

    if (aNeedle[aLineName] <= 0) {
      throw new TypeError('Line must be greater than or equal to 1, got '
                          + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError('Column must be greater than or equal to 0, got '
                          + aNeedle[aColumnName]);
    }

    return binarySearch.search(aNeedle, aMappings, aComparator, aBias);
  };

/**
 * Compute the last column for each generated mapping. The last column is
 * inclusive.
 */
BasicSourceMapConsumer.prototype.computeColumnSpans =
  function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping = this._generatedMappings[index];

      // Mappings do not contain a field for the last generated columnt. We
      // can come up with an optimistic estimate, however, by assuming that
      // mappings are contiguous (i.e. given two consecutive mappings, the
      // first mapping ends where the second one starts).
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];

        if (mapping.generatedLine === nextMapping.generatedLine) {
          mapping.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }

      // The last mapping for each line spans the entire line.
      mapping.lastGeneratedColumn = Infinity;
    }
  };

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
BasicSourceMapConsumer.prototype.originalPositionFor =
  function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util.compareByGeneratedPositionsDeflated,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._generatedMappings[index];

      if (mapping.generatedLine === needle.generatedLine) {
        var source = util.getArg(mapping, 'source', null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util.getArg(mapping, 'name', null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source: source,
          line: util.getArg(mapping, 'originalLine', null),
          column: util.getArg(mapping, 'originalColumn', null),
          name: name
        };
      }
    }

    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
BasicSourceMapConsumer.prototype.hasContentsOfAllSources =
  function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() &&
      !this.sourcesContent.some(function (sc) { return sc == null; });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
BasicSourceMapConsumer.prototype.sourceContentFor =
  function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }

    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }

    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util.relative(this.sourceRoot, relativeSource);
    }

    var url;
    if (this.sourceRoot != null
        && (url = util.urlParse(this.sourceRoot))) {
      // XXX: file:// URIs and absolute paths lead to unexpected behavior for
      // many users. We can help them out when they expect file:// URIs to
      // behave like it would if they were running a local HTTP server. See
      // https://bugzilla.mozilla.org/show_bug.cgi?id=885597.
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url.scheme == "file"
          && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)]
      }

      if ((!url.path || url.path == "/")
          && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }

    // This function is used recursively from
    // IndexedSourceMapConsumer.prototype.sourceContentFor. In that case, we
    // don't want to throw if we can't find the source - we just want to
    // return null, so we provide a flag to exit gracefully.
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *   - bias: Either 'SourceMapConsumer.GREATEST_LOWER_BOUND' or
 *     'SourceMapConsumer.LEAST_UPPER_BOUND'. Specifies whether to return the
 *     closest element that is smaller than or greater than the one we are
 *     searching for, respectively, if the exact element cannot be found.
 *     Defaults to 'SourceMapConsumer.GREATEST_LOWER_BOUND'.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
BasicSourceMapConsumer.prototype.generatedPositionFor =
  function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util.getArg(aArgs, 'source');
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }

    var needle = {
      source: source,
      originalLine: util.getArg(aArgs, 'line'),
      originalColumn: util.getArg(aArgs, 'column')
    };

    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util.compareByOriginalPositions,
      util.getArg(aArgs, 'bias', SourceMapConsumer.GREATEST_LOWER_BOUND)
    );

    if (index >= 0) {
      var mapping = this._originalMappings[index];

      if (mapping.source === needle.source) {
        return {
          line: util.getArg(mapping, 'generatedLine', null),
          column: util.getArg(mapping, 'generatedColumn', null),
          lastColumn: util.getArg(mapping, 'lastGeneratedColumn', null)
        };
      }
    }

    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };

__webpack_unused_export__ = BasicSourceMapConsumer;

/**
 * An IndexedSourceMapConsumer instance represents a parsed source map which
 * we can query for information. It differs from BasicSourceMapConsumer in
 * that it takes "indexed" source maps (i.e. ones with a "sections" field) as
 * input.
 *
 * The first parameter is a raw source map (either as a JSON string, or already
 * parsed to an object). According to the spec for indexed source maps, they
 * have the following attributes:
 *
 *   - version: Which version of the source map spec this map is following.
 *   - file: Optional. The generated file this source map is associated with.
 *   - sections: A list of section definitions.
 *
 * Each value under the "sections" field has two fields:
 *   - offset: The offset into the original specified at which this section
 *       begins to apply, defined as an object with a "line" and "column"
 *       field.
 *   - map: A source map definition. This source map could also be indexed,
 *       but doesn't have to be.
 *
 * Instead of the "map" field, it's also possible to have a "url" field
 * specifying a URL to retrieve a source map from, but that's currently
 * unsupported.
 *
 * Here's an example source map, taken from the source map spec[0], but
 * modified to omit a section which uses the "url" field.
 *
 *  {
 *    version : 3,
 *    file: "app.js",
 *    sections: [{
 *      offset: {line:100, column:10},
 *      map: {
 *        version : 3,
 *        file: "section.js",
 *        sources: ["foo.js", "bar.js"],
 *        names: ["src", "maps", "are", "fun"],
 *        mappings: "AAAA,E;;ABCDE;"
 *      }
 *    }],
 *  }
 *
 * The second parameter, if given, is a string whose value is the URL
 * at which the source map was found.  This URL is used to compute the
 * sources array.
 *
 * [0]: https://docs.google.com/document/d/1U1RGAehQwRypUTovF1KRlpiOFze0b-_2gc6fAH0KY0k/edit#heading=h.535es3xeprgt
 */
function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
  var sourceMap = aSourceMap;
  if (typeof aSourceMap === 'string') {
    sourceMap = util.parseSourceMapInput(aSourceMap);
  }

  var version = util.getArg(sourceMap, 'version');
  var sections = util.getArg(sourceMap, 'sections');

  if (version != this._version) {
    throw new Error('Unsupported version: ' + version);
  }

  this._sources = new ArraySet();
  this._names = new ArraySet();

  var lastOffset = {
    line: -1,
    column: 0
  };
  this._sections = sections.map(function (s) {
    if (s.url) {
      // The url field will require support for asynchronicity.
      // See https://github.com/mozilla/source-map/issues/16
      throw new Error('Support for url field in sections not implemented.');
    }
    var offset = util.getArg(s, 'offset');
    var offsetLine = util.getArg(offset, 'line');
    var offsetColumn = util.getArg(offset, 'column');

    if (offsetLine < lastOffset.line ||
        (offsetLine === lastOffset.line && offsetColumn < lastOffset.column)) {
      throw new Error('Section offsets must be ordered and non-overlapping.');
    }
    lastOffset = offset;

    return {
      generatedOffset: {
        // The offset fields are 0-based, but we use 1-based indices when
        // encoding/decoding from VLQ.
        generatedLine: offsetLine + 1,
        generatedColumn: offsetColumn + 1
      },
      consumer: new SourceMapConsumer(util.getArg(s, 'map'), aSourceMapURL)
    }
  });
}

IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;

/**
 * The version of the source mapping spec that we are consuming.
 */
IndexedSourceMapConsumer.prototype._version = 3;

/**
 * The list of original sources.
 */
Object.defineProperty(IndexedSourceMapConsumer.prototype, 'sources', {
  get: function () {
    var sources = [];
    for (var i = 0; i < this._sections.length; i++) {
      for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
        sources.push(this._sections[i].consumer.sources[j]);
      }
    }
    return sources;
  }
});

/**
 * Returns the original source, line, and column information for the generated
 * source's line and column positions provided. The only argument is an object
 * with the following properties:
 *
 *   - line: The line number in the generated source.  The line number
 *     is 1-based.
 *   - column: The column number in the generated source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - source: The original source file, or null.
 *   - line: The line number in the original source, or null.  The
 *     line number is 1-based.
 *   - column: The column number in the original source, or null.  The
 *     column number is 0-based.
 *   - name: The original identifier, or null.
 */
IndexedSourceMapConsumer.prototype.originalPositionFor =
  function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util.getArg(aArgs, 'line'),
      generatedColumn: util.getArg(aArgs, 'column')
    };

    // Find the section containing the generated position we're trying to map
    // to an original position.
    var sectionIndex = binarySearch.search(needle, this._sections,
      function(needle, section) {
        var cmp = needle.generatedLine - section.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }

        return (needle.generatedColumn -
                section.generatedOffset.generatedColumn);
      });
    var section = this._sections[sectionIndex];

    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }

    return section.consumer.originalPositionFor({
      line: needle.generatedLine -
        (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn -
        (section.generatedOffset.generatedLine === needle.generatedLine
         ? section.generatedOffset.generatedColumn - 1
         : 0),
      bias: aArgs.bias
    });
  };

/**
 * Return true if we have the source content for every source in the source
 * map, false otherwise.
 */
IndexedSourceMapConsumer.prototype.hasContentsOfAllSources =
  function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function (s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };

/**
 * Returns the original source content. The only argument is the url of the
 * original source file. Returns null if no original source content is
 * available.
 */
IndexedSourceMapConsumer.prototype.sourceContentFor =
  function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    }
    else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };

/**
 * Returns the generated line and column information for the original source,
 * line, and column positions provided. The only argument is an object with
 * the following properties:
 *
 *   - source: The filename of the original source.
 *   - line: The line number in the original source.  The line number
 *     is 1-based.
 *   - column: The column number in the original source.  The column
 *     number is 0-based.
 *
 * and an object is returned with the following properties:
 *
 *   - line: The line number in the generated source, or null.  The
 *     line number is 1-based. 
 *   - column: The column number in the generated source, or null.
 *     The column number is 0-based.
 */
IndexedSourceMapConsumer.prototype.generatedPositionFor =
  function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];

      // Only consider this section if the requested source is in the list of
      // sources of the consumer.
      if (section.consumer._findSourceIndex(util.getArg(aArgs, 'source')) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line +
            (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column +
            (section.generatedOffset.generatedLine === generatedPosition.line
             ? section.generatedOffset.generatedColumn - 1
             : 0)
        };
        return ret;
      }
    }

    return {
      line: null,
      column: null
    };
  };

/**
 * Parse the mappings in a string in to a data structure which we can easily
 * query (the ordered arrays in the `this.__generatedMappings` and
 * `this.__originalMappings` properties).
 */
IndexedSourceMapConsumer.prototype._parseMappings =
  function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping = sectionMappings[j];

        var source = section.consumer._sources.at(mapping.source);
        source = util.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);

        var name = null;
        if (mapping.name) {
          name = section.consumer._names.at(mapping.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }

        // The mappings coming from the consumer for the section have
        // generated positions relative to the start of the section, so we
        // need to offset them to be relative to the start of the concatenated
        // generated file.
        var adjustedMapping = {
          source: source,
          generatedLine: mapping.generatedLine +
            (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping.generatedColumn +
            (section.generatedOffset.generatedLine === mapping.generatedLine
            ? section.generatedOffset.generatedColumn - 1
            : 0),
          originalLine: mapping.originalLine,
          originalColumn: mapping.originalColumn,
          name: name
        };

        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === 'number') {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }

    quickSort(this.__generatedMappings, util.compareByGeneratedPositionsDeflated);
    quickSort(this.__originalMappings, util.compareByOriginalPositions);
  };

__webpack_unused_export__ = IndexedSourceMapConsumer;


/***/ }),

/***/ 4433:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var base64VLQ = __webpack_require__(6400);
var util = __webpack_require__(2728);
var ArraySet = (__webpack_require__(8213)/* .ArraySet */ .I);
var MappingList = (__webpack_require__(1188)/* .MappingList */ .H);

/**
 * An instance of the SourceMapGenerator represents a source map which is
 * being built incrementally. You may pass an object with the following
 * properties:
 *
 *   - file: The filename of the generated source.
 *   - sourceRoot: A root for all relative URLs in this source map.
 */
function SourceMapGenerator(aArgs) {
  if (!aArgs) {
    aArgs = {};
  }
  this._file = util.getArg(aArgs, 'file', null);
  this._sourceRoot = util.getArg(aArgs, 'sourceRoot', null);
  this._skipValidation = util.getArg(aArgs, 'skipValidation', false);
  this._sources = new ArraySet();
  this._names = new ArraySet();
  this._mappings = new MappingList();
  this._sourcesContents = null;
}

SourceMapGenerator.prototype._version = 3;

/**
 * Creates a new SourceMapGenerator based on a SourceMapConsumer
 *
 * @param aSourceMapConsumer The SourceMap.
 */
SourceMapGenerator.fromSourceMap =
  function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot: sourceRoot
    });
    aSourceMapConsumer.eachMapping(function (mapping) {
      var newMapping = {
        generated: {
          line: mapping.generatedLine,
          column: mapping.generatedColumn
        }
      };

      if (mapping.source != null) {
        newMapping.source = mapping.source;
        if (sourceRoot != null) {
          newMapping.source = util.relative(sourceRoot, newMapping.source);
        }

        newMapping.original = {
          line: mapping.originalLine,
          column: mapping.originalColumn
        };

        if (mapping.name != null) {
          newMapping.name = mapping.name;
        }
      }

      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util.relative(sourceRoot, sourceFile);
      }

      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }

      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };

/**
 * Add a single mapping from original source line and column to the generated
 * source's line and column for this source map being created. The mapping
 * object should have the following properties:
 *
 *   - generated: An object with the generated line and column positions.
 *   - original: An object with the original line and column positions.
 *   - source: The original source file (relative to the sourceRoot).
 *   - name: An optional original token name for this mapping.
 */
SourceMapGenerator.prototype.addMapping =
  function SourceMapGenerator_addMapping(aArgs) {
    var generated = util.getArg(aArgs, 'generated');
    var original = util.getArg(aArgs, 'original', null);
    var source = util.getArg(aArgs, 'source', null);
    var name = util.getArg(aArgs, 'name', null);

    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }

    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }

    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }

    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source: source,
      name: name
    });
  };

/**
 * Set the source content for a source file.
 */
SourceMapGenerator.prototype.setSourceContent =
  function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util.relative(this._sourceRoot, source);
    }

    if (aSourceContent != null) {
      // Add the source content to the _sourcesContents map.
      // Create a new _sourcesContents map if the property is null.
      if (!this._sourcesContents) {
        this._sourcesContents = Object.create(null);
      }
      this._sourcesContents[util.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      // Remove the source file from the _sourcesContents map.
      // If the _sourcesContents map is empty, set the property to null.
      delete this._sourcesContents[util.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };

/**
 * Applies the mappings of a sub-source-map for a specific source file to the
 * source map being generated. Each mapping to the supplied source file is
 * rewritten using the supplied source map. Note: The resolution for the
 * resulting mappings is the minimium of this map and the supplied map.
 *
 * @param aSourceMapConsumer The source map to be applied.
 * @param aSourceFile Optional. The filename of the source file.
 *        If omitted, SourceMapConsumer's file property will be used.
 * @param aSourceMapPath Optional. The dirname of the path to the source map
 *        to be applied. If relative, it is relative to the SourceMapConsumer.
 *        This parameter is needed when the two source maps aren't in the same
 *        directory, and the source map to be applied contains relative source
 *        paths. If so, those relative source paths need to be rewritten
 *        relative to the SourceMapGenerator.
 */
SourceMapGenerator.prototype.applySourceMap =
  function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    // If aSourceFile is omitted, we will use the file property of the SourceMap
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          'SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, ' +
          'or the source map\'s "file" property. Both were omitted.'
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    // Make "sourceFile" relative if an absolute Url is passed.
    if (sourceRoot != null) {
      sourceFile = util.relative(sourceRoot, sourceFile);
    }
    // Applying the SourceMap can add and remove items from the sources and
    // the names array.
    var newSources = new ArraySet();
    var newNames = new ArraySet();

    // Find mappings for the "sourceFile"
    this._mappings.unsortedForEach(function (mapping) {
      if (mapping.source === sourceFile && mapping.originalLine != null) {
        // Check if it can be mapped by the source map, then update the mapping.
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping.originalLine,
          column: mapping.originalColumn
        });
        if (original.source != null) {
          // Copy mapping
          mapping.source = original.source;
          if (aSourceMapPath != null) {
            mapping.source = util.join(aSourceMapPath, mapping.source)
          }
          if (sourceRoot != null) {
            mapping.source = util.relative(sourceRoot, mapping.source);
          }
          mapping.originalLine = original.line;
          mapping.originalColumn = original.column;
          if (original.name != null) {
            mapping.name = original.name;
          }
        }
      }

      var source = mapping.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }

      var name = mapping.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }

    }, this);
    this._sources = newSources;
    this._names = newNames;

    // Copy sourcesContents of applied map.
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile = util.join(aSourceMapPath, sourceFile);
        }
        if (sourceRoot != null) {
          sourceFile = util.relative(sourceRoot, sourceFile);
        }
        this.setSourceContent(sourceFile, content);
      }
    }, this);
  };

/**
 * A mapping can have one of the three levels of data:
 *
 *   1. Just the generated position.
 *   2. The Generated position, original position, and original source.
 *   3. Generated and original position, original source, as well as a name
 *      token.
 *
 * To maintain consistency, we validate that any new mapping being added falls
 * in to one of these categories.
 */
SourceMapGenerator.prototype._validateMapping =
  function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource,
                                              aName) {
    // When aOriginal is truthy but has empty values for .line and .column,
    // it is most likely a programmer error. In this case we throw a very
    // specific error message to try to guide them the right way.
    // For example: https://github.com/Polymer/polymer-bundler/pull/519
    if (aOriginal && typeof aOriginal.line !== 'number' && typeof aOriginal.column !== 'number') {
        throw new Error(
            'original.line and original.column are not numbers -- you probably meant to omit ' +
            'the original mapping entirely and only map the generated position. If so, pass ' +
            'null for the original mapping instead of an object with empty or null values.'
        );
    }

    if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
        && aGenerated.line > 0 && aGenerated.column >= 0
        && !aOriginal && !aSource && !aName) {
      // Case 1.
      return;
    }
    else if (aGenerated && 'line' in aGenerated && 'column' in aGenerated
             && aOriginal && 'line' in aOriginal && 'column' in aOriginal
             && aGenerated.line > 0 && aGenerated.column >= 0
             && aOriginal.line > 0 && aOriginal.column >= 0
             && aSource) {
      // Cases 2 and 3.
      return;
    }
    else {
      throw new Error('Invalid mapping: ' + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };

/**
 * Serialize the accumulated mappings in to the stream of base 64 VLQs
 * specified by the source map format.
 */
SourceMapGenerator.prototype._serializeMappings =
  function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = '';
    var next;
    var mapping;
    var nameIdx;
    var sourceIdx;

    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping = mappings[i];
      next = ''

      if (mapping.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping.generatedLine !== previousGeneratedLine) {
          next += ';';
          previousGeneratedLine++;
        }
      }
      else {
        if (i > 0) {
          if (!util.compareByGeneratedPositionsInflated(mapping, mappings[i - 1])) {
            continue;
          }
          next += ',';
        }
      }

      next += base64VLQ.encode(mapping.generatedColumn
                                 - previousGeneratedColumn);
      previousGeneratedColumn = mapping.generatedColumn;

      if (mapping.source != null) {
        sourceIdx = this._sources.indexOf(mapping.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;

        // lines are stored 0-based in SourceMap spec version 3
        next += base64VLQ.encode(mapping.originalLine - 1
                                   - previousOriginalLine);
        previousOriginalLine = mapping.originalLine - 1;

        next += base64VLQ.encode(mapping.originalColumn
                                   - previousOriginalColumn);
        previousOriginalColumn = mapping.originalColumn;

        if (mapping.name != null) {
          nameIdx = this._names.indexOf(mapping.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }

      result += next;
    }

    return result;
  };

SourceMapGenerator.prototype._generateSourcesContent =
  function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function (source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util.relative(aSourceRoot, source);
      }
      var key = util.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key)
        ? this._sourcesContents[key]
        : null;
    }, this);
  };

/**
 * Externalize the source map.
 */
SourceMapGenerator.prototype.toJSON =
  function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }

    return map;
  };

/**
 * Render the source map being generated to a string.
 */
SourceMapGenerator.prototype.toString =
  function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };

exports.h = SourceMapGenerator;


/***/ }),

/***/ 7085:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;
/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

var SourceMapGenerator = (__webpack_require__(4433)/* .SourceMapGenerator */ .h);
var util = __webpack_require__(2728);

// Matches a Windows-style `\r\n` newline or a `\n` newline used by all other
// operating systems these days (capturing the result).
var REGEX_NEWLINE = /(\r?\n)/;

// Newline character code for charCodeAt() comparisons
var NEWLINE_CODE = 10;

// Private symbol for identifying `SourceNode`s when multiple versions of
// the source-map library are loaded. This MUST NOT CHANGE across
// versions!
var isSourceNode = "$$$isSourceNode$$$";

/**
 * SourceNodes provide a way to abstract over interpolating/concatenating
 * snippets of generated JavaScript source code while maintaining the line and
 * column information associated with the original source code.
 *
 * @param aLine The original line number.
 * @param aColumn The original column number.
 * @param aSource The original source's filename.
 * @param aChunks Optional. An array of strings which are snippets of
 *        generated JS, or other SourceNodes.
 * @param aName The original identifier.
 */
function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
  this.children = [];
  this.sourceContents = {};
  this.line = aLine == null ? null : aLine;
  this.column = aColumn == null ? null : aColumn;
  this.source = aSource == null ? null : aSource;
  this.name = aName == null ? null : aName;
  this[isSourceNode] = true;
  if (aChunks != null) this.add(aChunks);
}

/**
 * Creates a SourceNode from generated code and a SourceMapConsumer.
 *
 * @param aGeneratedCode The generated code
 * @param aSourceMapConsumer The SourceMap for the generated code
 * @param aRelativePath Optional. The path that relative sources in the
 *        SourceMapConsumer should be relative to.
 */
SourceNode.fromStringWithSourceMap =
  function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    // The SourceNode we want to fill with the generated code
    // and the SourceMap
    var node = new SourceNode();

    // All even indices of this array are one line of the generated code,
    // while all odd indices are the newlines between two adjacent lines
    // (since `REGEX_NEWLINE` captures its match).
    // Processed fragments are accessed by calling `shiftNextLine`.
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      // The last line of a file might not have a newline.
      var newLine = getNextLine() || "";
      return lineContents + newLine;

      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ?
            remainingLines[remainingLinesIndex++] : undefined;
      }
    };

    // We need to remember the position of "remainingLines"
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;

    // The generate SourceNodes we need a code range.
    // To extract it current and last mapping is used.
    // Here we store the last mapping.
    var lastMapping = null;

    aSourceMapConsumer.eachMapping(function (mapping) {
      if (lastMapping !== null) {
        // We add the code from "lastMapping" to "mapping":
        // First check if there is a new line in between.
        if (lastGeneratedLine < mapping.generatedLine) {
          // Associate first line with "lastMapping"
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
          // The remaining code is added without mapping
        } else {
          // There is no new line in between.
          // Associate the code between "lastGeneratedColumn" and
          // "mapping.generatedColumn" with "lastMapping"
          var nextLine = remainingLines[remainingLinesIndex] || '';
          var code = nextLine.substr(0, mapping.generatedColumn -
                                        lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn -
                                              lastGeneratedColumn);
          lastGeneratedColumn = mapping.generatedColumn;
          addMappingWithCode(lastMapping, code);
          // No more remaining code, continue
          lastMapping = mapping;
          return;
        }
      }
      // We add the generated code until the first mapping
      // to the SourceNode without any mapping.
      // Each line is added as separate string.
      while (lastGeneratedLine < mapping.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || '';
        node.add(nextLine.substr(0, mapping.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping.generatedColumn);
        lastGeneratedColumn = mapping.generatedColumn;
      }
      lastMapping = mapping;
    }, this);
    // We have processed all mappings.
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        // Associate the remaining code in the current line with "lastMapping"
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      // and add the remaining lines without any mapping
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }

    // Copy sourcesContent into SourceNode
    aSourceMapConsumer.sources.forEach(function (sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });

    return node;

    function addMappingWithCode(mapping, code) {
      if (mapping === null || mapping.source === undefined) {
        node.add(code);
      } else {
        var source = aRelativePath
          ? util.join(aRelativePath, mapping.source)
          : mapping.source;
        node.add(new SourceNode(mapping.originalLine,
                                mapping.originalColumn,
                                source,
                                code,
                                mapping.name));
      }
    }
  };

/**
 * Add a chunk of generated JS to this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.add = function SourceNode_add(aChunk) {
  if (Array.isArray(aChunk)) {
    aChunk.forEach(function (chunk) {
      this.add(chunk);
    }, this);
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    if (aChunk) {
      this.children.push(aChunk);
    }
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Add a chunk of generated JS to the beginning of this source node.
 *
 * @param aChunk A string snippet of generated JS code, another instance of
 *        SourceNode, or an array where each member is one of those things.
 */
SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
  if (Array.isArray(aChunk)) {
    for (var i = aChunk.length-1; i >= 0; i--) {
      this.prepend(aChunk[i]);
    }
  }
  else if (aChunk[isSourceNode] || typeof aChunk === "string") {
    this.children.unshift(aChunk);
  }
  else {
    throw new TypeError(
      "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
    );
  }
  return this;
};

/**
 * Walk over the tree of JS snippets in this node and its children. The
 * walking function is called once for each snippet of JS and is passed that
 * snippet and the its original associated source's line/column location.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walk = function SourceNode_walk(aFn) {
  var chunk;
  for (var i = 0, len = this.children.length; i < len; i++) {
    chunk = this.children[i];
    if (chunk[isSourceNode]) {
      chunk.walk(aFn);
    }
    else {
      if (chunk !== '') {
        aFn(chunk, { source: this.source,
                     line: this.line,
                     column: this.column,
                     name: this.name });
      }
    }
  }
};

/**
 * Like `String.prototype.join` except for SourceNodes. Inserts `aStr` between
 * each of `this.children`.
 *
 * @param aSep The separator.
 */
SourceNode.prototype.join = function SourceNode_join(aSep) {
  var newChildren;
  var i;
  var len = this.children.length;
  if (len > 0) {
    newChildren = [];
    for (i = 0; i < len-1; i++) {
      newChildren.push(this.children[i]);
      newChildren.push(aSep);
    }
    newChildren.push(this.children[i]);
    this.children = newChildren;
  }
  return this;
};

/**
 * Call String.prototype.replace on the very right-most source snippet. Useful
 * for trimming whitespace from the end of a source node, etc.
 *
 * @param aPattern The pattern to replace.
 * @param aReplacement The thing to replace the pattern with.
 */
SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
  var lastChild = this.children[this.children.length - 1];
  if (lastChild[isSourceNode]) {
    lastChild.replaceRight(aPattern, aReplacement);
  }
  else if (typeof lastChild === 'string') {
    this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
  }
  else {
    this.children.push(''.replace(aPattern, aReplacement));
  }
  return this;
};

/**
 * Set the source content for a source file. This will be added to the SourceMapGenerator
 * in the sourcesContent field.
 *
 * @param aSourceFile The filename of the source file
 * @param aSourceContent The content of the source file
 */
SourceNode.prototype.setSourceContent =
  function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util.toSetString(aSourceFile)] = aSourceContent;
  };

/**
 * Walk over the tree of SourceNodes. The walking function is called for each
 * source file content and is passed the filename and source content.
 *
 * @param aFn The traversal function.
 */
SourceNode.prototype.walkSourceContents =
  function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }

    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };

/**
 * Return the string representation of this source node. Walks over the tree
 * and concatenates all the various snippets together to one string.
 */
SourceNode.prototype.toString = function SourceNode_toString() {
  var str = "";
  this.walk(function (chunk) {
    str += chunk;
  });
  return str;
};

/**
 * Returns the string representation of this source node along with a source
 * map.
 */
SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
  var generated = {
    code: "",
    line: 1,
    column: 0
  };
  var map = new SourceMapGenerator(aArgs);
  var sourceMappingActive = false;
  var lastOriginalSource = null;
  var lastOriginalLine = null;
  var lastOriginalColumn = null;
  var lastOriginalName = null;
  this.walk(function (chunk, original) {
    generated.code += chunk;
    if (original.source !== null
        && original.line !== null
        && original.column !== null) {
      if(lastOriginalSource !== original.source
         || lastOriginalLine !== original.line
         || lastOriginalColumn !== original.column
         || lastOriginalName !== original.name) {
        map.addMapping({
          source: original.source,
          original: {
            line: original.line,
            column: original.column
          },
          generated: {
            line: generated.line,
            column: generated.column
          },
          name: original.name
        });
      }
      lastOriginalSource = original.source;
      lastOriginalLine = original.line;
      lastOriginalColumn = original.column;
      lastOriginalName = original.name;
      sourceMappingActive = true;
    } else if (sourceMappingActive) {
      map.addMapping({
        generated: {
          line: generated.line,
          column: generated.column
        }
      });
      lastOriginalSource = null;
      sourceMappingActive = false;
    }
    for (var idx = 0, length = chunk.length; idx < length; idx++) {
      if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
        generated.line++;
        generated.column = 0;
        // Mappings end at eol
        if (idx + 1 === length) {
          lastOriginalSource = null;
          sourceMappingActive = false;
        } else if (sourceMappingActive) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
      } else {
        generated.column++;
      }
    }
  });
  this.walkSourceContents(function (sourceFile, sourceContent) {
    map.setSourceContent(sourceFile, sourceContent);
  });

  return { code: generated.code, map: map };
};

__webpack_unused_export__ = SourceNode;


/***/ }),

/***/ 2728:
/***/ ((__unused_webpack_module, exports) => {

/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

/**
 * This is a helper function for getting values from parameter/options
 * objects.
 *
 * @param args The object we are extracting values from
 * @param name The name of the property we are getting.
 * @param defaultValue An optional value to return if the property is missing
 * from the object. If this is not specified and the property is missing, an
 * error will be thrown.
 */
function getArg(aArgs, aName, aDefaultValue) {
  if (aName in aArgs) {
    return aArgs[aName];
  } else if (arguments.length === 3) {
    return aDefaultValue;
  } else {
    throw new Error('"' + aName + '" is a required argument.');
  }
}
exports.getArg = getArg;

var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
var dataUrlRegexp = /^data:.+\,.+$/;

function urlParse(aUrl) {
  var match = aUrl.match(urlRegexp);
  if (!match) {
    return null;
  }
  return {
    scheme: match[1],
    auth: match[2],
    host: match[3],
    port: match[4],
    path: match[5]
  };
}
exports.urlParse = urlParse;

function urlGenerate(aParsedUrl) {
  var url = '';
  if (aParsedUrl.scheme) {
    url += aParsedUrl.scheme + ':';
  }
  url += '//';
  if (aParsedUrl.auth) {
    url += aParsedUrl.auth + '@';
  }
  if (aParsedUrl.host) {
    url += aParsedUrl.host;
  }
  if (aParsedUrl.port) {
    url += ":" + aParsedUrl.port
  }
  if (aParsedUrl.path) {
    url += aParsedUrl.path;
  }
  return url;
}
exports.urlGenerate = urlGenerate;

/**
 * Normalizes a path, or the path portion of a URL:
 *
 * - Replaces consecutive slashes with one slash.
 * - Removes unnecessary '.' parts.
 * - Removes unnecessary '<dir>/..' parts.
 *
 * Based on code in the Node.js 'path' core module.
 *
 * @param aPath The path or url to normalize.
 */
function normalize(aPath) {
  var path = aPath;
  var url = urlParse(aPath);
  if (url) {
    if (!url.path) {
      return aPath;
    }
    path = url.path;
  }
  var isAbsolute = exports.isAbsolute(path);

  var parts = path.split(/\/+/);
  for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
    part = parts[i];
    if (part === '.') {
      parts.splice(i, 1);
    } else if (part === '..') {
      up++;
    } else if (up > 0) {
      if (part === '') {
        // The first part is blank if the path is absolute. Trying to go
        // above the root is a no-op. Therefore we can remove all '..' parts
        // directly after the root.
        parts.splice(i + 1, up);
        up = 0;
      } else {
        parts.splice(i, 2);
        up--;
      }
    }
  }
  path = parts.join('/');

  if (path === '') {
    path = isAbsolute ? '/' : '.';
  }

  if (url) {
    url.path = path;
    return urlGenerate(url);
  }
  return path;
}
exports.normalize = normalize;

/**
 * Joins two paths/URLs.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be joined with the root.
 *
 * - If aPath is a URL or a data URI, aPath is returned, unless aPath is a
 *   scheme-relative URL: Then the scheme of aRoot, if any, is prepended
 *   first.
 * - Otherwise aPath is a path. If aRoot is a URL, then its path portion
 *   is updated with the result and aRoot is returned. Otherwise the result
 *   is returned.
 *   - If aPath is absolute, the result is aPath.
 *   - Otherwise the two paths are joined with a slash.
 * - Joining for example 'http://' and 'www.example.com' is also supported.
 */
function join(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }
  if (aPath === "") {
    aPath = ".";
  }
  var aPathUrl = urlParse(aPath);
  var aRootUrl = urlParse(aRoot);
  if (aRootUrl) {
    aRoot = aRootUrl.path || '/';
  }

  // `join(foo, '//www.example.org')`
  if (aPathUrl && !aPathUrl.scheme) {
    if (aRootUrl) {
      aPathUrl.scheme = aRootUrl.scheme;
    }
    return urlGenerate(aPathUrl);
  }

  if (aPathUrl || aPath.match(dataUrlRegexp)) {
    return aPath;
  }

  // `join('http://', 'www.example.com')`
  if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
    aRootUrl.host = aPath;
    return urlGenerate(aRootUrl);
  }

  var joined = aPath.charAt(0) === '/'
    ? aPath
    : normalize(aRoot.replace(/\/+$/, '') + '/' + aPath);

  if (aRootUrl) {
    aRootUrl.path = joined;
    return urlGenerate(aRootUrl);
  }
  return joined;
}
exports.join = join;

exports.isAbsolute = function (aPath) {
  return aPath.charAt(0) === '/' || urlRegexp.test(aPath);
};

/**
 * Make a path relative to a URL or another path.
 *
 * @param aRoot The root path or URL.
 * @param aPath The path or URL to be made relative to aRoot.
 */
function relative(aRoot, aPath) {
  if (aRoot === "") {
    aRoot = ".";
  }

  aRoot = aRoot.replace(/\/$/, '');

  // It is possible for the path to be above the root. In this case, simply
  // checking whether the root is a prefix of the path won't work. Instead, we
  // need to remove components from the root one by one, until either we find
  // a prefix that fits, or we run out of components to remove.
  var level = 0;
  while (aPath.indexOf(aRoot + '/') !== 0) {
    var index = aRoot.lastIndexOf("/");
    if (index < 0) {
      return aPath;
    }

    // If the only part of the root that is left is the scheme (i.e. http://,
    // file:///, etc.), one or more slashes (/), or simply nothing at all, we
    // have exhausted all components, so the path is not relative to the root.
    aRoot = aRoot.slice(0, index);
    if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
      return aPath;
    }

    ++level;
  }

  // Make sure we add a "../" for each component we removed from the root.
  return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
}
exports.relative = relative;

var supportsNullProto = (function () {
  var obj = Object.create(null);
  return !('__proto__' in obj);
}());

function identity (s) {
  return s;
}

/**
 * Because behavior goes wacky when you set `__proto__` on objects, we
 * have to prefix all the strings in our set with an arbitrary character.
 *
 * See https://github.com/mozilla/source-map/pull/31 and
 * https://github.com/mozilla/source-map/issues/30
 *
 * @param String aStr
 */
function toSetString(aStr) {
  if (isProtoString(aStr)) {
    return '$' + aStr;
  }

  return aStr;
}
exports.toSetString = supportsNullProto ? identity : toSetString;

function fromSetString(aStr) {
  if (isProtoString(aStr)) {
    return aStr.slice(1);
  }

  return aStr;
}
exports.fromSetString = supportsNullProto ? identity : fromSetString;

function isProtoString(s) {
  if (!s) {
    return false;
  }

  var length = s.length;

  if (length < 9 /* "__proto__".length */) {
    return false;
  }

  if (s.charCodeAt(length - 1) !== 95  /* '_' */ ||
      s.charCodeAt(length - 2) !== 95  /* '_' */ ||
      s.charCodeAt(length - 3) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 4) !== 116 /* 't' */ ||
      s.charCodeAt(length - 5) !== 111 /* 'o' */ ||
      s.charCodeAt(length - 6) !== 114 /* 'r' */ ||
      s.charCodeAt(length - 7) !== 112 /* 'p' */ ||
      s.charCodeAt(length - 8) !== 95  /* '_' */ ||
      s.charCodeAt(length - 9) !== 95  /* '_' */) {
    return false;
  }

  for (var i = length - 10; i >= 0; i--) {
    if (s.charCodeAt(i) !== 36 /* '$' */) {
      return false;
    }
  }

  return true;
}

/**
 * Comparator between two mappings where the original positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same original source/line/column, but different generated
 * line and column the same. Useful when searching for a mapping with a
 * stubbed out mapping.
 */
function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
  var cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0 || onlyCompareOriginal) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByOriginalPositions = compareByOriginalPositions;

/**
 * Comparator between two mappings with deflated source and name indices where
 * the generated positions are compared.
 *
 * Optionally pass in `true` as `onlyCompareGenerated` to consider two
 * mappings with the same generated line and column, but different
 * source/name/original line and column the same. Useful when searching for a
 * mapping with a stubbed out mapping.
 */
function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0 || onlyCompareGenerated) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;

function strcmp(aStr1, aStr2) {
  if (aStr1 === aStr2) {
    return 0;
  }

  if (aStr1 === null) {
    return 1; // aStr2 !== null
  }

  if (aStr2 === null) {
    return -1; // aStr1 !== null
  }

  if (aStr1 > aStr2) {
    return 1;
  }

  return -1;
}

/**
 * Comparator between two mappings with inflated source and name strings where
 * the generated positions are compared.
 */
function compareByGeneratedPositionsInflated(mappingA, mappingB) {
  var cmp = mappingA.generatedLine - mappingB.generatedLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.generatedColumn - mappingB.generatedColumn;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = strcmp(mappingA.source, mappingB.source);
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalLine - mappingB.originalLine;
  if (cmp !== 0) {
    return cmp;
  }

  cmp = mappingA.originalColumn - mappingB.originalColumn;
  if (cmp !== 0) {
    return cmp;
  }

  return strcmp(mappingA.name, mappingB.name);
}
exports.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;

/**
 * Strip any JSON XSSI avoidance prefix from the string (as documented
 * in the source maps specification), and then parse the string as
 * JSON.
 */
function parseSourceMapInput(str) {
  return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ''));
}
exports.parseSourceMapInput = parseSourceMapInput;

/**
 * Compute the URL of a source given the the source root, the source's
 * URL, and the source map's URL.
 */
function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
  sourceURL = sourceURL || '';

  if (sourceRoot) {
    // This follows what Chrome does.
    if (sourceRoot[sourceRoot.length - 1] !== '/' && sourceURL[0] !== '/') {
      sourceRoot += '/';
    }
    // The spec says:
    //   Line 4: An optional source root, useful for relocating source
    //   files on a server or removing repeated values in the
    //   “sources” entry.  This value is prepended to the individual
    //   entries in the “source” field.
    sourceURL = sourceRoot + sourceURL;
  }

  // Historically, SourceMapConsumer did not take the sourceMapURL as
  // a parameter.  This mode is still somewhat supported, which is why
  // this code block is conditional.  However, it's preferable to pass
  // the source map URL to SourceMapConsumer, so that this function
  // can implement the source URL resolution algorithm as outlined in
  // the spec.  This block is basically the equivalent of:
  //    new URL(sourceURL, sourceMapURL).toString()
  // ... except it avoids using URL, which wasn't available in the
  // older releases of node still supported by this library.
  //
  // The spec says:
  //   If the sources are not absolute URLs after prepending of the
  //   “sourceRoot”, the sources are resolved relative to the
  //   SourceMap (like resolving script src in a html document).
  if (sourceMapURL) {
    var parsed = urlParse(sourceMapURL);
    if (!parsed) {
      throw new Error("sourceMapURL could not be parsed");
    }
    if (parsed.path) {
      // Strip the last path component, but keep the "/".
      var index = parsed.path.lastIndexOf('/');
      if (index >= 0) {
        parsed.path = parsed.path.substring(0, index + 1);
      }
    }
    sourceURL = join(urlGenerate(parsed), sourceURL);
  }

  return normalize(sourceURL);
}
exports.computeSourceURL = computeSourceURL;


/***/ }),

/***/ 9125:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*
 * Copyright 2009-2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE.txt or:
 * http://opensource.org/licenses/BSD-3-Clause
 */
/* unused reexport */ __webpack_require__(4433)/* .SourceMapGenerator */ .h;
exports.SourceMapConsumer = __webpack_require__(6771).SourceMapConsumer;
/* unused reexport */ __webpack_require__(7085);


/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 2037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 7282:
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 467:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__467__;

/***/ }),

/***/ 3476:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__3476__;

/***/ }),

/***/ 6884:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__6884__;

/***/ }),

/***/ 9582:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__9582__;

/***/ }),

/***/ 5327:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__5327__;

/***/ }),

/***/ 7836:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__7836__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(8777);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDSkE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7QUM5RkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVhOztBQUViO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIs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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxrQ0FBa0M7QUFDN0YsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELEdBQUcsc0JBQXNCLEdBQUc7QUFDdkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7O0FBRVg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUI7O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLE1BQU07QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsa0NBQWtDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHVEQUF1RCxZQUFZO0FBQ25FO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsY0FBYztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdDQUF3QztBQUNoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxvQkFBb0I7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBOEI7O0FBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsTUFBTTtBQUNuQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMkJBQTJCO0FBQy9DLHNCQUFzQiwrQ0FBK0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQkFBMkI7QUFDL0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0Esc0JBQXNCLDRCQUE0QjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5QkFBZ0M7Ozs7Ozs7O0FDeG5DaEMsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixtQkFBTyxDQUFDLElBQWM7QUFDdEMsV0FBVyxtQkFBTyxDQUFDLElBQVE7QUFDM0IsZUFBZSw2Q0FBK0I7QUFDOUMsa0JBQWtCLGdEQUFxQzs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUEwQjs7Ozs7Ozs7O0FDeGExQixpQkFBaUIsb0JBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLHVEQUFvRDtBQUM3RSxXQUFXLG1CQUFPLENBQUMsSUFBUTs7QUFFM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVosa0JBQWtCO0FBQ2xCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQkFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMkNBQTJDOztBQUUzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBLGVBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDJDQUEyQzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0EsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0I7Ozs7Ozs7O0FDdmV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQXFGO0FBQ3JGLHVFQUFrRjtBQUNsRiwrQ0FBNEQ7Ozs7Ozs7OztBQ1A1RDs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztVRUpBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vY2xpZW50L0V4dGVuc2lvbkNvbXBpbGVyLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vY2xpZW50L2FyZ3MtcGFyc2VyLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vY2xpZW50L2FyZ3MuY29uc3RhbnQudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9jbGllbnQvZXZlbnRzLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL2NsaWVudC9pbmRleC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL2NsaWVudC9tYW51YWwudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9zcmMvRXh0ZW5zaW9uUmVsb2FkZXIudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9zcmMvY29uc3RhbnRzL2Zhc3QtcmVsb2FkaW5nLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvbG9nLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvbWlkZGxld2FyZS1jb25maWcuY29uc3RhbnRzLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vc3JjL2NvbnN0YW50cy9vcHRpb25zLmNvbnN0YW50cy50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9jb25zdGFudHMvcmVmZXJlbmNlLWRvY3MuY29uc3RhbnRzLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vc3JjL2hvdC1yZWxvYWQvSG90UmVsb2FkZXJTZXJ2ZXIudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9zcmMvaG90LXJlbG9hZC9TaWduRW1pdHRlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9ob3QtcmVsb2FkL2NoYW5nZXMtdHJpZ2dlcmVyLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vc3JjL2hvdC1yZWxvYWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9zcmMvbWVzc2FnZXMvTWVzc2FnZS50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9tZXNzYWdlcy9lcnJvcnMudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9zcmMvbWVzc2FnZXMvd2FybmluZ3MudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9zcmMvbWlkZGxld2FyZS9pbmRleC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy9taWRkbGV3YXJlL21pZGRsZXdhcmUtaW5qZWN0b3IudHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9zcmMvbWlkZGxld2FyZS9taWRkbGV3YXJlLXNvdXJjZS1idWlsZGVyLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vc3JjL3V0aWxzL2Jsb2NrLXByb3RlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9zcmMvdXRpbHMvZGVmYXVsdC1vcHRpb25zLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vc3JjL3V0aWxzL2xvZ2dlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy91dGlscy9tYW5pZmVzdC50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy91dGlscy9zaWduYWxzLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vc3JjL3dlYnBhY2svQWJzdHJhY3RFeHRlbnNpb25SZWxvYWRlci50cyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL3NyYy93ZWJwYWNrL0NvbXBpbGVyRXZlbnRzRmFjYWRlLnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2J1ZmZlci1mcm9tL2luZGV4LmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvY29sb3JzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9saWIvY3VzdG9tL3RyYXAuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9jdXN0b20vemFsZ28uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL2FtZXJpY2EuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL3JhaW5ib3cuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9tYXBzL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9jb2xvcnMvbGliL21hcHMvemVicmEuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zeXN0ZW0vaGFzLWZsYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvY29sb3JzL2xpYi9zeXN0ZW0vc3VwcG9ydHMtY29sb3JzLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL2NvbG9ycy9zYWZlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vc3JjL21pZGRsZXdhcmUvd2VyLW1pZGRsZXdhcmUucmF3LnRzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3dlYmV4dGVuc2lvbi1wb2x5ZmlsbC9kaXN0L2Jyb3dzZXItcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC1zdXBwb3J0L3NvdXJjZS1tYXAtc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9hcnJheS1zZXQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvYmFzZTY0LXZscS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9iYXNlNjQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvYmluYXJ5LXNlYXJjaC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9tYXBwaW5nLWxpc3QuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9saWIvcXVpY2stc29ydC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci8uL25vZGVfbW9kdWxlcy9zb3VyY2UtbWFwL2xpYi9zb3VyY2UtbWFwLWNvbnN1bWVyLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3NvdXJjZS1tYXAtZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3NvdXJjZS1ub2RlLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyLy4vbm9kZV9tb2R1bGVzL3NvdXJjZS1tYXAvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvLi9ub2RlX21vZHVsZXMvc291cmNlLW1hcC9zb3VyY2UtbWFwLmpzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJmc1wiIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJvc1wiIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcInByb2Nlc3NcIiIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwidXRpbFwiIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyL2V4dGVybmFsIHVtZCBcImxvZGFzaFwiIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyL2V4dGVybmFsIHVtZCBcIm1pbmltaXN0XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvZXh0ZXJuYWwgdW1kIFwidXNlcmFnZW50XCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvZXh0ZXJuYWwgdW1kIFwid2VicGFja1wiIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyL2V4dGVybmFsIHVtZCBcIndlYnBhY2stc291cmNlc1wiIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyL2V4dGVybmFsIHVtZCBcIndzXCIiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWV4dC1yZWxvYWRlci93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1leHQtcmVsb2FkZXIvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3dlYnBhY2stZXh0LXJlbG9hZGVyL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJtaW5pbWlzdFwiKSwgcmVxdWlyZShcIndlYnBhY2tcIiksIHJlcXVpcmUoXCJsb2Rhc2hcIiksIHJlcXVpcmUoXCJ1c2VyYWdlbnRcIiksIHJlcXVpcmUoXCJ3c1wiKSwgcmVxdWlyZShcIndlYnBhY2stc291cmNlc1wiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJtaW5pbWlzdFwiLCBcIndlYnBhY2tcIiwgXCJsb2Rhc2hcIiwgXCJ1c2VyYWdlbnRcIiwgXCJ3c1wiLCBcIndlYnBhY2stc291cmNlc1wiXSwgZmFjdG9yeSk7XG5cdGVsc2Uge1xuXHRcdHZhciBhID0gdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZmFjdG9yeShyZXF1aXJlKFwibWluaW1pc3RcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrXCIpLCByZXF1aXJlKFwibG9kYXNoXCIpLCByZXF1aXJlKFwidXNlcmFnZW50XCIpLCByZXF1aXJlKFwid3NcIiksIHJlcXVpcmUoXCJ3ZWJwYWNrLXNvdXJjZXNcIikpIDogZmFjdG9yeShyb290W1wibWluaW1pc3RcIl0sIHJvb3RbXCJ3ZWJwYWNrXCJdLCByb290W1wibG9kYXNoXCJdLCByb290W1widXNlcmFnZW50XCJdLCByb290W1wid3NcIl0sIHJvb3RbXCJ3ZWJwYWNrLXNvdXJjZXNcIl0pO1xuXHRcdGZvcih2YXIgaSBpbiBhKSAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnID8gZXhwb3J0cyA6IHJvb3QpW2ldID0gYVtpXTtcblx0fVxufSkoZ2xvYmFsLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18zNDc2X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzk1ODJfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNDY3X18sIF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfXzY4ODRfXywgX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNzgzNl9fLCBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX181MzI3X18pIHtcbnJldHVybiAiLCJpbXBvcnQgeyBsb2cgfSBmcm9tIFwidXRpbFwiO1xuaW1wb3J0ICogYXMgd2VicGFjayBmcm9tIFwid2VicGFja1wiO1xuaW1wb3J0IEV4dGVuc2lvblJlbG9hZGVySW1wbCBmcm9tIFwiLi4vc3JjL0V4dGVuc2lvblJlbG9hZGVyXCI7XG5pbXBvcnQgeyBpbmZvIH0gZnJvbSBcIi4uL3NyYy91dGlscy9sb2dnZXJcIjtcbmltcG9ydCB7IElQbHVnaW5PcHRpb25zIH0gZnJvbSBcIi4uL3R5cGluZ3Mvd2VicGFjay1leHQtcmVsb2FkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0ZW5zaW9uQ29tcGlsZXIge1xuICBwcml2YXRlIHN0YXRpYyB0cmVhdEVycm9ycyhlcnIpIHtcbiAgICBsb2coZXJyLnN0YWNrIHx8IGVycik7XG4gICAgaWYgKGVyci5kZXRhaWxzKSB7XG4gICAgICBsb2coZXJyLmRldGFpbHMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29tcGlsZXI7XG5cbiAgY29uc3RydWN0b3IoY29uZmlnOiB3ZWJwYWNrLkNvbmZpZ3VyYXRpb24sIHBsdWdpbk9wdGlvbnM6IElQbHVnaW5PcHRpb25zKSB7XG4gICAgdGhpcy5jb21waWxlciA9IHdlYnBhY2soY29uZmlnKTtcbiAgICBuZXcgRXh0ZW5zaW9uUmVsb2FkZXJJbXBsKHBsdWdpbk9wdGlvbnMpLmFwcGx5KHRoaXMuY29tcGlsZXIpO1xuICB9XG5cbiAgcHVibGljIHdhdGNoKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxuICAgIHRoaXMuY29tcGlsZXIud2F0Y2goe30sIChlcnIsIHN0YXRzKSA9PiB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIHJldHVybiBFeHRlbnNpb25Db21waWxlci50cmVhdEVycm9ycyhlcnIpO1xuICAgICAgfVxuICAgICAgaW5mbyhzdGF0cy50b1N0cmluZyh7IGNvbG9yczogdHJ1ZSB9KSk7XG4gICAgfSk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXRocm93LWxpdGVyYWwgKi9cbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgY3dkIH0gZnJvbSBcInByb2Nlc3NcIjtcbmltcG9ydCB7IGxvZyB9IGZyb20gXCJ1dGlsXCI7XG5pbXBvcnQgeyBERUZBVUxUX0NPTkZJRywgREVGQVVMVF9QT1JUIH0gZnJvbSBcIi4uL3NyYy9jb25zdGFudHMvb3B0aW9ucy5jb25zdGFudHNcIjtcbmltcG9ydCB7IElQbHVnaW5PcHRpb25zIH0gZnJvbSBcIi4uL3R5cGluZ3Mvd2VicGFjay1leHQtcmVsb2FkZXJcIjtcbmltcG9ydCB7IENPTkZJRywgSEVMUCwgTUFOSUZFU1QsIE5PX1BBR0VfUkVMT0FELCBQT1JUIH0gZnJvbSBcIi4vYXJncy5jb25zdGFudFwiO1xuaW1wb3J0IHsgU0lHX0VYSVQgfSBmcm9tIFwiLi9ldmVudHMuY29uc3RhbnRzXCI7XG5pbXBvcnQgbWFudWFsIGZyb20gXCIuL21hbnVhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoYXJnczogb2JqZWN0KSA9PiB7XG4gIGlmIChhcmdzW0hFTFBdKSB7XG4gICAgbG9nKG1hbnVhbCgpKTtcbiAgICB0aHJvdyB7IHR5cGU6IFNJR19FWElULCBwYXlsb2FkOiAwIH07XG4gIH1cblxuICBjb25zdCBjb25maWcgPSBhcmdzW0NPTkZJR10gfHwgREVGQVVMVF9DT05GSUc7XG4gIGNvbnN0IHBvcnQgPSBhcmdzW1BPUlRdIHx8IERFRkFVTFRfUE9SVDtcbiAgY29uc3QgbWFuaWZlc3QgPSBhcmdzW01BTklGRVNUXSB8fCBudWxsO1xuXG4gIGNvbnN0IHBsdWdpbk9wdGlvbnM6IElQbHVnaW5PcHRpb25zID0ge1xuICAgIG1hbmlmZXN0LFxuICAgIHBvcnQsXG4gICAgcmVsb2FkUGFnZTogIWFyZ3NbTk9fUEFHRV9SRUxPQURdLFxuICB9O1xuXG4gIGNvbnN0IG9wdFBhdGggPSByZXNvbHZlKGN3ZCgpLCBjb25maWcpO1xuXG4gIHRyeSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcbiAgICBjb25zdCB3ZWJwYWNrQ29uZmlnID0gZXZhbChcInJlcXVpcmVcIikob3B0UGF0aCk7XG4gICAgcmV0dXJuIHsgd2VicGFja0NvbmZpZywgcGx1Z2luT3B0aW9ucyB9O1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBsb2coYFtFcnJvcl0gQ291bGRuJ3QgcmVxdWlyZSB0aGUgZmlsZTogJHtvcHRQYXRofWApO1xuICAgIGxvZyhlcnIpO1xuICAgIHRocm93IHsgdHlwZTogU0lHX0VYSVQsIHBheWxvYWQ6IDEgfTtcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBIRUxQID0gXCJoZWxwXCI7XG5leHBvcnQgY29uc3QgQ09ORklHID0gXCJjb25maWdcIjtcbmV4cG9ydCBjb25zdCBQT1JUID0gXCJwb3J0XCI7XG5leHBvcnQgY29uc3QgTk9fUEFHRV9SRUxPQUQgPSBcIm5vLXBhZ2UtcmVsb2FkXCI7XG5leHBvcnQgY29uc3QgTUFOSUZFU1QgPSBcIm1hbmlmZXN0XCI7XG4iLCJleHBvcnQgY29uc3QgU0lHX0VYSVQgPSBcIlNJR19FWElUXCI7XG4iLCJpbXBvcnQgKiBhcyBtaW5pbWlzdCBmcm9tIFwibWluaW1pc3RcIjtcbmltcG9ydCB7IGluc3RhbGwgfSBmcm9tIFwic291cmNlLW1hcC1zdXBwb3J0XCI7XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwidXRpbFwiO1xuaW1wb3J0IGFyZ3NQYXJzZXIgZnJvbSBcIi4vYXJncy1wYXJzZXJcIjtcbmltcG9ydCB7IFNJR19FWElUIH0gZnJvbSBcIi4vZXZlbnRzLmNvbnN0YW50c1wiO1xuaW1wb3J0IEV4dGVuc2lvbkNvbXBpbGVyIGZyb20gXCIuL0V4dGVuc2lvbkNvbXBpbGVyXCI7XG5cbmluc3RhbGwoKTtcbmNvbnN0IHsgXywgLi4uYXJncyB9ID0gbWluaW1pc3QocHJvY2Vzcy5hcmd2LnNsaWNlKDIpKTtcblxudHJ5IHtcbiAgY29uc3QgeyB3ZWJwYWNrQ29uZmlnLCBwbHVnaW5PcHRpb25zIH0gPSBhcmdzUGFyc2VyKGFyZ3MpO1xuICBjb25zdCBjb21waWxlciA9IG5ldyBFeHRlbnNpb25Db21waWxlcih3ZWJwYWNrQ29uZmlnLCBwbHVnaW5PcHRpb25zKTtcbiAgY29tcGlsZXIud2F0Y2goKTtcbn0gY2F0Y2ggKGVycikge1xuICBpZiAoZXJyLnR5cGUgPT09IFNJR19FWElUKSB7XG4gICAgcHJvY2Vzcy5leGl0KGVyci5wYXlsb2FkKTtcbiAgfSBlbHNlIHtcbiAgICBsb2coZXJyKTtcbiAgICBwcm9jZXNzLmV4aXQoZXJyLmNvZGUpO1xuICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2VsZXNzLWVzY2FwZSAqL1xuaW1wb3J0IHtcbiAgREVGQVVMVF9CQUNLR1JPVU5EX0VOVFJZLFxuICBERUZBVUxUX0NPTkZJRyxcbiAgREVGQVVMVF9DT05URU5UX1NDUklQVF9FTlRSWSxcbiAgREVGQVVMVF9FWFRFTlNJT05fUEFHRV9FTlRSWSxcbiAgREVGQVVMVF9QT1JULFxufSBmcm9tIFwiLi4vc3JjL2NvbnN0YW50cy9vcHRpb25zLmNvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiBgXG5Vc2FnZTpcbiAgICB3ZXIgWy0tY29uZmlnIDxjb25maWdfcGF0aD5dIFstLXBvcnQgPHBvcnRfbnVtYmVyPl0gWy0tbm8tcGFnZS1yZWxvYWRdIFstLWNvbnRlbnQtc2NyaXB0IDxjb250ZW50X3NjcmlwdF9wYXRocz5dIFstLWJhY2tncm91bmQgPGJnX3NjcmlwdF9wYXRoPl0gWy0tZXh0ZW5zaW9uLXBhZ2UgPGV4dGVuc2lvbl9wYWdlX3BhdGhzPl1cblxuQ29tcGxldGUgQVBJOlxuKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcbnwgICAgICAgIG5hbWUgICAgICAgIHwgICAgZGVmYXVsdCAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICB8XG58LS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxufCAtLWhlbHAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICB8IFNob3cgdGhpcyBoZWxwXG58IC0tY29uZmlnICAgICAgICAgICB8ICR7REVGQVVMVF9DT05GSUd9IFxcfCBUaGUgd2VicGFjayBjb25maWd1cmF0aW9uIGZpbGUgcGF0aCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG58IC0tcG9ydCAgICAgICAgICAgICB8ICR7REVGQVVMVF9QT1JUfSAgIHwgVGhlIHBvcnQgdG8gcnVuIHRoZSBzZXJ2ZXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxufCAtLWNvbnRlbnQtc2NyaXB0ICAgfCAke0RFRkFVTFRfQ09OVEVOVF9TQ1JJUFRfRU5UUll9ICAgIHwgVGhlICoqZW50cnkvZW50cmllcyoqIG5hbWUocykgZm9yIHRoZSBjb250ZW50IHNjcmlwdChzKSAgICAgICAgICAgfFxufCAtLWJhY2tncm91bmQgICAgICAgfCAke0RFRkFVTFRfQkFDS0dST1VORF9FTlRSWX0gICAgICAgIHwgVGhlICoqZW50cnkqKiBuYW1lIGZvciB0aGUgYmFja2dyb3VuZCBzY3JpcHQgICAgICAgICAgICAgICAgICAgICAgfFxufCAtLWV4dGVuc2lvbi1wYWdlICAgfCAke0RFRkFVTFRfRVhURU5TSU9OX1BBR0VfRU5UUll9ICAgICAgICAgICAgIHwgVGhlICoqZW50cnkvZW50cmllcyoqIG5hbWUocykgZm9yIHRoZSBleHRlbnNpb24gcGFnZXMocykgICAgICAgICAgfFxufCAtLW1hbmlmZXN0ICAgICAgICAgfCAgICAgICAgbnVsbCAgICAgICB8IFRoZSAqKm1hbmlmZXN0Lmpzb24qKiBwYXRoICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbnwgLS1uby1wYWdlLXJlbG9hZCAgIHwgICAgICAgICAgICAgICAgICAgfCBEaXNhYmxlIHRoZSBhdXRvIHJlbG9hZGluZyBvZiBhbGwgKipwYWdlcyoqIHdoaWNoIHJ1bnMgdGhlIHBsdWdpbiB8XG4rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xuYDtcbiIsImltcG9ydCB7IG1lcmdlIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgQ2h1bmssIENvbXBpbGF0aW9uLCBDb21waWxlciwgRW50cnksIHZlcnNpb24gfSBmcm9tIFwid2VicGFja1wiO1xuaW1wb3J0IHsgY2hhbmdlc1RyaWdnZXJlciB9IGZyb20gXCIuL2hvdC1yZWxvYWRcIjtcbmltcG9ydCB7IG9ubHlPbkRldmVsb3BtZW50TXNnIH0gZnJvbSBcIi4vbWVzc2FnZXMvd2FybmluZ3NcIjtcbmltcG9ydCB7IG1pZGRsZXdhcmVJbmplY3RvciB9IGZyb20gXCIuL21pZGRsZXdhcmVcIjtcbmltcG9ydCBkZWZhdWx0T3B0aW9ucyBmcm9tIFwiLi91dGlscy9kZWZhdWx0LW9wdGlvbnNcIjtcbmltcG9ydCB7IHdhcm4gfSBmcm9tIFwiLi91dGlscy9sb2dnZXJcIjtcbmltcG9ydCB7IGV4dHJhY3RFbnRyaWVzIH0gZnJvbSBcIi4vdXRpbHMvbWFuaWZlc3RcIjtcbmltcG9ydCBBYnN0cmFjdFBsdWdpblJlbG9hZGVyIGZyb20gXCIuL3dlYnBhY2svQWJzdHJhY3RFeHRlbnNpb25SZWxvYWRlclwiO1xuaW1wb3J0IENvbXBpbGVyRXZlbnRzRmFjYWRlIGZyb20gXCIuL3dlYnBhY2svQ29tcGlsZXJFdmVudHNGYWNhZGVcIjtcblxuaW1wb3J0IHsgSUV4dGVuc2lvblJlbG9hZGVySW5zdGFuY2UsIElQbHVnaW5PcHRpb25zIH0gZnJvbSBcIi4uL3R5cGluZ3Mvd2VicGFjay1leHQtcmVsb2FkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0ZW5zaW9uUmVsb2FkZXJJbXBsIGV4dGVuZHMgQWJzdHJhY3RQbHVnaW5SZWxvYWRlciBpbXBsZW1lbnRzIElFeHRlbnNpb25SZWxvYWRlckluc3RhbmNlIHtcbiAgcHJpdmF0ZSBfb3B0cz86IElQbHVnaW5PcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM/OiBJUGx1Z2luT3B0aW9ucykge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fb3B0cyA9IG9wdGlvbnM7XG4gICAgdGhpcy5fY2h1bmtWZXJzaW9ucyA9IHt9O1xuICB9XG5cbiAgcHVibGljIF9pc1dlYnBhY2tHVG9FVjUoKSB7XG4gICAgaWYgKHZlcnNpb24pIHtcbiAgICAgIGNvbnN0IFttYWpvcl0gPSB2ZXJzaW9uLnNwbGl0KFwiLlwiKTtcbiAgICAgIGlmIChwYXJzZUludChtYWpvciwgMTApID49IDUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBfd2hhdENoYW5nZWQoY2h1bmtzOiBDb21waWxhdGlvbltcImNodW5rc1wiXSwgeyBiYWNrZ3JvdW5kLCBjb250ZW50U2NyaXB0LCBleHRlbnNpb25QYWdlIH06IElFbnRyaWVzT3B0aW9uKSB7XG4gICAgY29uc3QgY2hhbmdlZENodW5rcyA9IFtdIGFzIENodW5rW107XG5cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICBmb3IgKGNvbnN0IGNodW5rIG9mIGNodW5rcykge1xuICAgICAgY29uc3Qgb2xkVmVyc2lvbiA9IHRoaXMuX2NodW5rVmVyc2lvbnNbY2h1bmsubmFtZV07XG4gICAgICB0aGlzLl9jaHVua1ZlcnNpb25zW2NodW5rLm5hbWVdID0gY2h1bmsuaGFzaDtcbiAgICAgIGlmIChjaHVuay5oYXNoICE9PSBvbGRWZXJzaW9uKSB7XG4gICAgICAgIGNoYW5nZWRDaHVua3MucHVzaChjaHVuayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29udGVudE9yQmdDaGFuZ2VkID0gY2hhbmdlZENodW5rcy5zb21lKCh7IG5hbWUgfSkgPT4ge1xuICAgICAgbGV0IGNvbnRlbnRDaGFuZ2VkID0gZmFsc2U7XG4gICAgICBjb25zdCBiZ0NoYW5nZWQgPSBuYW1lID09PSBiYWNrZ3JvdW5kO1xuXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjb250ZW50U2NyaXB0KSkge1xuICAgICAgICBjb250ZW50Q2hhbmdlZCA9IGNvbnRlbnRTY3JpcHQuc29tZSgoc2NyaXB0KSA9PiBzY3JpcHQgPT09IG5hbWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudENoYW5nZWQgPSBuYW1lID09PSBjb250ZW50U2NyaXB0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudENoYW5nZWQgfHwgYmdDaGFuZ2VkO1xuICAgIH0pO1xuXG4gICAgLy9cbiAgICBjb25zdCBvbmx5UGFnZUNoYW5nZWQgPVxuICAgICAgIWNvbnRlbnRPckJnQ2hhbmdlZCAmJlxuICAgICAgY2hhbmdlZENodW5rcy5zb21lKCh7IG5hbWUgfSkgPT4ge1xuICAgICAgICBsZXQgcGFnZUNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShleHRlbnNpb25QYWdlKSkge1xuICAgICAgICAgIHBhZ2VDaGFuZ2VkID0gZXh0ZW5zaW9uUGFnZS5zb21lKChzY3JpcHQpID0+IHNjcmlwdCA9PT0gbmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFnZUNoYW5nZWQgPSBuYW1lID09PSBleHRlbnNpb25QYWdlO1xuICAgICAgICB9XG4gICAgICAgIC8vXG5cbiAgICAgICAgcmV0dXJuIHBhZ2VDaGFuZ2VkO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4geyBjb250ZW50T3JCZ0NoYW5nZWQsIG9ubHlQYWdlQ2hhbmdlZCB9O1xuICB9XG5cbiAgcHVibGljIF9yZWdpc3RlclBsdWdpbihjb21waWxlcjogQ29tcGlsZXIpIHtcbiAgICBjb25zdCB7IHJlbG9hZFBhZ2UsIHBvcnQsIGVudHJpZXMsIG1hbmlmZXN0IH0gPSBtZXJnZShkZWZhdWx0T3B0aW9ucywgdGhpcy5fb3B0cyk7XG5cbiAgICBjb25zdCBwYXJzZWRFbnRyaWVzOiBJRW50cmllc09wdGlvbiA9IG1hbmlmZXN0XG4gICAgICA/IGV4dHJhY3RFbnRyaWVzKFxuICAgICAgICAgIGNvbXBpbGVyLm9wdGlvbnMuZW50cnkgYXMgRW50cnksXG4gICAgICAgICAgbWFuaWZlc3QsXG4gICAgICAgICAgY29tcGlsZXIub3B0aW9ucy5vdXRwdXQgYXMgQ29tcGlsZXJbXCJvcHRpb25zXCJdW1wib3V0cHV0XCJdLFxuICAgICAgICApXG4gICAgICA6IGVudHJpZXM7XG5cbiAgICB0aGlzLl9ldmVudEFQSSA9IG5ldyBDb21waWxlckV2ZW50c0ZhY2FkZShjb21waWxlcik7XG4gICAgdGhpcy5faW5qZWN0b3IgPSBtaWRkbGV3YXJlSW5qZWN0b3IocGFyc2VkRW50cmllcywgeyBwb3J0LCByZWxvYWRQYWdlIH0pO1xuICAgIHRoaXMuX3RyaWdnZXJlciA9IGNoYW5nZXNUcmlnZ2VyZXIocG9ydCwgcmVsb2FkUGFnZSk7XG4gICAgdGhpcy5fZXZlbnRBUEkuYWZ0ZXJPcHRpbWl6ZUNodW5rcygoY29tcCwgY2h1bmtzKSA9PiB7XG4gICAgICBjb21wLmFzc2V0cyA9IHtcbiAgICAgICAgLi4uY29tcC5hc3NldHMsXG4gICAgICAgIC4uLnRoaXMuX2luamVjdG9yKGNvbXAuYXNzZXRzLCBjaHVua3MpLFxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2V2ZW50QVBJLmFmdGVyRW1pdCgoY29tcCkgPT4ge1xuICAgICAgY29uc3QgeyBjb250ZW50T3JCZ0NoYW5nZWQsIG9ubHlQYWdlQ2hhbmdlZCB9ID0gdGhpcy5fd2hhdENoYW5nZWQoY29tcC5jaHVua3MsIHBhcnNlZEVudHJpZXMpO1xuXG4gICAgICBpZiAoY29udGVudE9yQmdDaGFuZ2VkIHx8IG9ubHlQYWdlQ2hhbmdlZCkge1xuICAgICAgICB0aGlzLl90cmlnZ2VyZXIob25seVBhZ2VDaGFuZ2VkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBseShjb21waWxlcjogQ29tcGlsZXIpIHtcbiAgICBpZiAoKHRoaXMuX2lzV2VicGFja0dUb0VWNSgpID8gY29tcGlsZXIub3B0aW9ucy5tb2RlIDogcHJvY2Vzcy5lbnYuTk9ERV9FTlYpID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgICAgIHRoaXMuX3JlZ2lzdGVyUGx1Z2luKGNvbXBpbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2Fybihvbmx5T25EZXZlbG9wbWVudE1zZy5nZXQoKSk7XG4gICAgfVxuICB9XG59XG4iLCIvKipcbiAqIENocm9tZSBsZXRzIG9ubHkgYSBtYXggbnVtYmVyIG9mIGNhbGxzIGluIGEgdGltZSBmcmFtZVxuICogYmVmb3JlIGJsb2NrIHRoZSBwbHVnaW4gZm9yIGJlIHJlbG9hZGluZyBpdHNlbGYgdG8gbXVjaFxuICogQHNlZSBodHRwczovL2dpdGh1Yi5jb20vcnViZW5zcGdjYXZhbGNhbnRlL3dlYnBhY2stY2hyb21lLWV4dGVuc2lvbi1yZWxvYWRlci9pc3N1ZXMvMlxuICovXG5leHBvcnQgY29uc3QgRkFTVF9SRUxPQURfREVCT1VOQ0lOR19GUkFNRSA9IDIwMDA7XG5cbmV4cG9ydCBjb25zdCBGQVNUX1JFTE9BRF9DQUxMUyA9IDY7XG5leHBvcnQgY29uc3QgRkFTVF9SRUxPQURfV0FJVCA9IDEwICogMTAwMDtcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cblxuLyoqXG4gKiBBIG5ldyByZWxvYWRpbmcgcmF0ZSB3YXMgY3JlYXRlZCBhZnRlciBvcGVuaW5nIGEgYnVnIHRpY2tldCBvblxuICogQ2hyb21pdW0sIGFuZCB0aGUgcmV2aXNpb24gd2FzIG1lcmdlZCB0byBtYXN0ZXJcbiAqIEBzZWUgaHR0cHM6Ly9jaHJvbWl1bS1yZXZpZXcuZ29vZ2xlc291cmNlLmNvbS9jL2Nocm9taXVtL3NyYy8rLzEzNDAyNzJcbiAqL1xuXG4vKipcbiAqIFRoZSBDaHJvbWUvQ2hyb21pdW0gdmVyc2lvbiBudW1iZXIgdGhhdCBpbmNsdWRlcyB0aGUgbmV3IHJhdGVzXG4gKiBAc2VlIGh0dHBzOi8vc3RvcmFnZS5nb29nbGVhcGlzLmNvbS9jaHJvbWl1bS1maW5kLXJlbGVhc2VzLXN0YXRpYy9kM2IuaHRtbCNkM2IyNWUxMzgwOTg0YjJmMWYyM2QwZThkYzFhMzM3NzQzYzZjYWFmXG4gKi9cbmV4cG9ydCBjb25zdCBORVdfRkFTVF9SRUxPQURfQ0hST01FX1ZFUlNJT046IEJyb3dzZXJWZXJzaW9uID0gWzczLCAwLCAzNjM3XTtcblxuZXhwb3J0IGNvbnN0IE5FV19GQVNUX1JFTE9BRF9ERUJPVU5DSU5HX0ZSQU1FID0gMTAwMDtcbmV4cG9ydCBjb25zdCBORVdfRkFTVF9SRUxPQURfQ0FMTFMgPSAzMDtcbiIsImV4cG9ydCBjb25zdCBOT05FOiBMT0dfTk9ORSA9IDA7XG5leHBvcnQgY29uc3QgTE9HOiBMT0dfTE9HID0gMTtcbmV4cG9ydCBjb25zdCBJTkZPOiBMT0dfSU5GTyA9IDI7XG5leHBvcnQgY29uc3QgV0FSTjogTE9HX1dBUk4gPSAzO1xuZXhwb3J0IGNvbnN0IEVSUk9SOiBMT0dfRVJST1IgPSA0O1xuZXhwb3J0IGNvbnN0IERFQlVHOiBMT0dfREVCVUcgPSA1O1xuIiwiZXhwb3J0IGNvbnN0IFJFQ09OTkVDVF9JTlRFUlZBTCA9IDIwMDA7XG5leHBvcnQgY29uc3QgU09DS0VUX0VSUl9DT0RFX1JFRiA9IFwiaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzY0NTUjc2VjdGlvbi03LjQuMVwiO1xuIiwiZXhwb3J0IGNvbnN0IERFRkFVTFRfUE9SVCA9IDkwOTA7XG5leHBvcnQgY29uc3QgREVGQVVMVF9DT05GSUcgPSBcIndlYnBhY2suY29uZmlnLmpzXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9SRUxPQURfUEFHRSA9IHRydWU7XG5leHBvcnQgY29uc3QgREVGQVVMVF9DT05URU5UX1NDUklQVF9FTlRSWSA9IFwiY29udGVudC1zY3JpcHRcIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0JBQ0tHUk9VTkRfRU5UUlkgPSBcImJhY2tncm91bmRcIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUX0VYVEVOU0lPTl9QQUdFX0VOVFJZID0gXCJwb3B1cFwiO1xuIiwiZXhwb3J0IGNvbnN0IFJFRl9VUkwgPSBcImh0dHBzOi8vZ2l0aHViLmNvbS9ydWJlbnNwZ2NhdmFsY2FudGUvd2VicGFjay1leHRlbnNpb24tcmVsb2FkZXIvd2lraS9HZW5lcmFsLUluZm9ybWF0aW9uXCI7XG4iLCJpbXBvcnQgeyBwYXJzZSB9IGZyb20gXCJ1c2VyYWdlbnRcIjtcbmltcG9ydCB7IFNlcnZlciB9IGZyb20gXCJ3c1wiO1xuaW1wb3J0IHsgaW5mbyB9IGZyb20gXCIuLi91dGlscy9sb2dnZXJcIjtcbmltcG9ydCBTaWduRW1pdHRlciBmcm9tIFwiLi9TaWduRW1pdHRlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb3RSZWxvYWRlclNlcnZlciB7XG4gIHByaXZhdGUgX3NlcnZlcjogU2VydmVyO1xuXG4gIHByaXZhdGUgX3NpZ25FbWl0dGVyOiBTaWduRW1pdHRlcjtcblxuICBjb25zdHJ1Y3Rvcihwb3J0OiBudW1iZXIpIHtcbiAgICB0aGlzLl9zZXJ2ZXIgPSBuZXcgU2VydmVyKHsgcG9ydCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBsaXN0ZW4oKSB7XG4gICAgdGhpcy5fc2VydmVyLm9uKFwiY29ubmVjdGlvblwiLCAod3MsIG1zZykgPT4ge1xuICAgICAgY29uc3QgdXNlckFnZW50ID0gcGFyc2UobXNnLmhlYWRlcnNbXCJ1c2VyLWFnZW50XCJdKTtcbiAgICAgIHRoaXMuX3NpZ25FbWl0dGVyID0gbmV3IFNpZ25FbWl0dGVyKHRoaXMuX3NlcnZlciwgdXNlckFnZW50KTtcblxuICAgICAgd3Mub24oXCJtZXNzYWdlXCIsIChkYXRhOiBzdHJpbmcpID0+IGluZm8oYE1lc3NhZ2UgZnJvbSAke3VzZXJBZ2VudC5mYW1pbHl9OiAke0pTT04ucGFyc2UoZGF0YSkucGF5bG9hZH1gKSk7XG4gICAgICB3cy5vbihcImVycm9yXCIsICgpID0+IHtcbiAgICAgICAgLy8gTk9PUCAtIHN3YWxsb3cgc29ja2V0IGVycm9ycyBkdWUgdG8gaHR0cDovL2dpdC5pby92YmhTTlxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc2lnbkNoYW5nZShyZWxvYWRQYWdlOiBib29sZWFuLCBvbmx5UGFnZUNoYW5nZWQ6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLl9zaWduRW1pdHRlcikge1xuICAgICAgcmV0dXJuIHRoaXMuX3NpZ25FbWl0dGVyLnNhZmVTaWduQ2hhbmdlKHJlbG9hZFBhZ2UsIG9ubHlQYWdlQ2hhbmdlZCk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobnVsbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IHppcCB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IEFnZW50IH0gZnJvbSBcInVzZXJhZ2VudFwiO1xuaW1wb3J0IHsgT1BFTiwgU2VydmVyIH0gZnJvbSBcIndzXCI7XG5cbmltcG9ydCB7XG4gIEZBU1RfUkVMT0FEX0NBTExTLFxuICBGQVNUX1JFTE9BRF9ERUJPVU5DSU5HX0ZSQU1FLFxuICBGQVNUX1JFTE9BRF9XQUlULFxuICBORVdfRkFTVF9SRUxPQURfQ0FMTFMsXG4gIE5FV19GQVNUX1JFTE9BRF9DSFJPTUVfVkVSU0lPTixcbiAgTkVXX0ZBU1RfUkVMT0FEX0RFQk9VTkNJTkdfRlJBTUUsXG59IGZyb20gXCIuLi9jb25zdGFudHMvZmFzdC1yZWxvYWRpbmcuY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBkZWJvdW5jZVNpZ25hbCwgZmFzdFJlbG9hZEJsb2NrZXIgfSBmcm9tIFwiLi4vdXRpbHMvYmxvY2stcHJvdGVjdGlvblwiO1xuaW1wb3J0IHsgc2lnbkNoYW5nZSB9IGZyb20gXCIuLi91dGlscy9zaWduYWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25FbWl0dGVyIHtcbiAgcHJpdmF0ZSBfc2FmZVNpZ25DaGFuZ2U6IChcbiAgICByZWxvYWRQYWdlOiBib29sZWFuLFxuICAgIG9ubHlQYWdlQ2hhbmdlZDogYm9vbGVhbixcbiAgICBvblN1Y2Nlc3M6ICh2YWw/OiBhbnkpID0+IHZvaWQsXG4gICAgb25FcnJvcjogKGVycjogRXJyb3IpID0+IHZvaWQsXG4gICkgPT4gdm9pZDtcblxuICBwcml2YXRlIF9zZXJ2ZXI6IFNlcnZlcjtcblxuICBjb25zdHJ1Y3RvcihzZXJ2ZXI6IFNlcnZlciwgeyBmYW1pbHksIG1ham9yLCBtaW5vciwgcGF0Y2ggfTogQWdlbnQpIHtcbiAgICB0aGlzLl9zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgaWYgKGZhbWlseSA9PT0gXCJDaHJvbWVcIikge1xuICAgICAgY29uc3QgW3JlbG9hZENhbGxzLCByZWxvYWREZWJvdWNpbmdGcmFtZV0gPSB0aGlzLl9zYXRpc2ZpZXMoXG4gICAgICAgIFtwYXJzZUludChtYWpvciwgMTApLCBwYXJzZUludChtaW5vciwgMTApLCBwYXJzZUludChwYXRjaCwgMTApXSxcbiAgICAgICAgTkVXX0ZBU1RfUkVMT0FEX0NIUk9NRV9WRVJTSU9OLFxuICAgICAgKVxuICAgICAgICA/IFtORVdfRkFTVF9SRUxPQURfQ0FMTFMsIE5FV19GQVNUX1JFTE9BRF9ERUJPVU5DSU5HX0ZSQU1FXVxuICAgICAgICA6IFtGQVNUX1JFTE9BRF9DQUxMUywgRkFTVF9SRUxPQURfREVCT1VOQ0lOR19GUkFNRV07XG5cbiAgICAgIGNvbnN0IGRlYm91bmNlciA9IGRlYm91bmNlU2lnbmFsKHJlbG9hZERlYm91Y2luZ0ZyYW1lLCB0aGlzKTtcbiAgICAgIGNvbnN0IGJsb2NrZXIgPSBmYXN0UmVsb2FkQmxvY2tlcihyZWxvYWRDYWxscywgRkFTVF9SRUxPQURfV0FJVCwgdGhpcyk7XG4gICAgICB0aGlzLl9zYWZlU2lnbkNoYW5nZSA9IGRlYm91bmNlcihibG9ja2VyKHRoaXMuX3NldHVwU2FmZVNpZ25DaGFuZ2UoKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zYWZlU2lnbkNoYW5nZSA9IHRoaXMuX3NldHVwU2FmZVNpZ25DaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgc2FmZVNpZ25DaGFuZ2UocmVsb2FkUGFnZTogYm9vbGVhbiwgb25seVBhZ2VDaGFuZ2VkOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKSA9PiB7XG4gICAgICB0aGlzLl9zYWZlU2lnbkNoYW5nZShyZWxvYWRQYWdlLCBvbmx5UGFnZUNoYW5nZWQsIHJlcywgcmVqKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldHVwU2FmZVNpZ25DaGFuZ2UoKSB7XG4gICAgcmV0dXJuIChyZWxvYWRQYWdlOiBib29sZWFuLCBvbmx5UGFnZUNoYW5nZWQ6IGJvb2xlYW4sIG9uU3VjY2VzczogKCkgPT4gdm9pZCwgb25FcnJvcjogKGVycjogRXJyb3IpID0+IHZvaWQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuX3NlbmRNc2coc2lnbkNoYW5nZSh7IHJlbG9hZFBhZ2UsIG9ubHlQYWdlQ2hhbmdlZCB9KSk7XG4gICAgICAgIG9uU3VjY2VzcygpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIG9uRXJyb3IoZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2VuZE1zZyhtc2c6IGFueSkge1xuICAgIHRoaXMuX3NlcnZlci5jbGllbnRzLmZvckVhY2goKGNsaWVudCkgPT4ge1xuICAgICAgaWYgKGNsaWVudC5yZWFkeVN0YXRlID09PSBPUEVOKSB7XG4gICAgICAgIGNsaWVudC5zZW5kKEpTT04uc3RyaW5naWZ5KG1zZykpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2F0aXNmaWVzKGJyb3dzZXJWZXJzaW9uOiBCcm93c2VyVmVyc2lvbiwgdGFyZ2V0VmVyc2lvbjogQnJvd3NlclZlcnNpb24pIHtcbiAgICBjb25zdCB2ZXJzaW9uUGFpcnM6IFZlcnNpb25QYWlyW10gPSB6aXAoYnJvd3NlclZlcnNpb24sIHRhcmdldFZlcnNpb24pO1xuXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgZm9yIChjb25zdCBbdmVyc2lvbiA9IDAsIHRhcmdldCA9IDBdIG9mIHZlcnNpb25QYWlycykge1xuICAgICAgaWYgKHZlcnNpb24gIT09IHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdmVyc2lvbiA+IHRhcmdldDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluZm8gfSBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XG5pbXBvcnQgSG90UmVsb2FkZXJTZXJ2ZXIgZnJvbSBcIi4vSG90UmVsb2FkZXJTZXJ2ZXJcIjtcblxuY29uc3QgY2hhbmdlc1RyaWdnZXJlcjogVHJpZ2dlcmVyRmFjdG9yeSA9IChwb3J0OiBudW1iZXIsIHJlbG9hZFBhZ2U6IGJvb2xlYW4pID0+IHtcbiAgY29uc3Qgc2VydmVyID0gbmV3IEhvdFJlbG9hZGVyU2VydmVyKHBvcnQpO1xuXG4gIGluZm8oXCJbIFN0YXJ0aW5nIHRoZSBXZWIgRXh0ZW5zaW9uIEhvdCBSZWxvYWQgU2VydmVyLi4uIF1cIik7XG4gIHNlcnZlci5saXN0ZW4oKTtcblxuICByZXR1cm4gKG9ubHlQYWdlQ2hhbmdlZDogYm9vbGVhbik6IFByb21pc2U8YW55PiA9PiBzZXJ2ZXIuc2lnbkNoYW5nZShyZWxvYWRQYWdlLCBvbmx5UGFnZUNoYW5nZWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2hhbmdlc1RyaWdnZXJlcjtcbiIsImltcG9ydCBfY2hhbmdlc1RyaWdnZXJlciBmcm9tIFwiLi9jaGFuZ2VzLXRyaWdnZXJlclwiO1xuXG5leHBvcnQgY29uc3QgY2hhbmdlc1RyaWdnZXJlciA9IF9jaGFuZ2VzVHJpZ2dlcmVyO1xuIiwiaW1wb3J0IHsgYm9sZCwgd2hpdGUgfSBmcm9tIFwiY29sb3JzL3NhZmVcIjtcbmltcG9ydCB7IHRlbXBsYXRlIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHsgRVJST1IsIElORk8sIFdBUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzL2xvZy5jb25zdGFudHNcIjtcbmltcG9ydCB7IFJFRl9VUkwgfSBmcm9tIFwiLi4vY29uc3RhbnRzL3JlZmVyZW5jZS1kb2NzLmNvbnN0YW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlIHtcbiAgcHJpdmF0ZSByZWZlcmVuY2VOdW1iZXI6IG51bWJlcjtcblxuICBwcml2YXRlIHR5cGU6IExPR19JTkZPIHwgTE9HX1dBUk4gfCBMT0dfRVJST1I7XG5cbiAgcHJpdmF0ZSBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IodHlwZSwgcmVmZXJlbmNlTnVtYmVyLCBtZXNzYWdlKSB7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnJlZmVyZW5jZU51bWJlciA9IHJlZmVyZW5jZU51bWJlcjtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICB9XG5cbiAgcHVibGljIGdldChhZGRpdGlvbmFsRGF0YTogb2JqZWN0ID0ge30pIHtcbiAgICBjb25zdCBjb2RlID0gYFdFUi0ke3RoaXMuZ2V0UHJlZml4KCl9JHt0aGlzLnJlZmVyZW5jZU51bWJlcn1gO1xuICAgIGNvbnN0IHJlZkxpbmsgPSBib2xkKHdoaXRlKGAke1JFRl9VUkx9IyR7Y29kZX1gKSk7XG4gICAgcmV0dXJuIGBbJHtjb2RlfV0gJHt0ZW1wbGF0ZSh0aGlzLm1lc3NhZ2UsIGFkZGl0aW9uYWxEYXRhKX0uXFxuVmlzaXQgJHtyZWZMaW5rfSBmb3IgY29tcGxldGUgZGV0YWlsc1xcbmA7XG4gIH1cblxuICBwdWJsaWMgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0KCk7XG4gIH1cblxuICBwcml2YXRlIGdldFByZWZpeCgpIHtcbiAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuICAgICAgY2FzZSBJTkZPOlxuICAgICAgICByZXR1cm4gXCJJXCI7XG4gICAgICBjYXNlIFdBUk46XG4gICAgICAgIHJldHVybiBcIldcIjtcbiAgICAgIGNhc2UgRVJST1I6XG4gICAgICAgIHJldHVybiBcIkVcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tbXVsdGktc3RyICovXG5pbXBvcnQgeyBFUlJPUiB9IGZyb20gXCIuLi9jb25zdGFudHMvbG9nLmNvbnN0YW50c1wiO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vTWVzc2FnZVwiO1xuXG5leHBvcnQgY29uc3QgYmdTY3JpcHRFbnRyeUVycm9yTXNnID0gbmV3IE1lc3NhZ2UoXG4gIEVSUk9SLFxuICAxLFxuICBcIkJhY2tncm91bmQgc2NyaXB0IHdlYnBhY2sgZW50cnkgbm90IGZvdW5kL21hdGNoIFxcXG50aGUgcHJvdmlkZWQgb24gJ21hbmlmZXN0Lmpzb24nIG9yICdlbnRyeS5iYWNrZ3JvdW5kJyBcXFxub3B0aW9uIG9mIHRoZSBwbHVnaW5cIixcbik7XG5cbmV4cG9ydCBjb25zdCBiZ1NjcmlwdE1hbmlmZXN0UmVxdWlyZWRNc2cgPSBuZXcgTWVzc2FnZShFUlJPUiwgMiwgXCJCYWNrZ3JvdW5kIHNjcmlwdCBvbiBtYW5pZmVzdCBpcyByZXF1aXJlZFwiKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLW11bHRpLXN0ciAqL1xuaW1wb3J0IHsgV0FSTiB9IGZyb20gXCIuLi9jb25zdGFudHMvbG9nLmNvbnN0YW50c1wiO1xuaW1wb3J0IE1lc3NhZ2UgZnJvbSBcIi4vTWVzc2FnZVwiO1xuXG5leHBvcnQgY29uc3Qgb25seU9uRGV2ZWxvcG1lbnRNc2cgPSBuZXcgTWVzc2FnZShcbiAgV0FSTixcbiAgMSxcbiAgXCJXYXJuaW5nLCBFeHRlbnNpb24gUmVsb2FkZXIgUGx1Z2luIHdhcyBub3QgZW5hYmxlZCEgXFxcbkl0IHJ1bnMgb25seSBvbiB3ZWJwYWNrIC0tbW9kZT1kZXZlbG9wbWVudCAodjUgb3IgbW9yZSkgXFxcbm9yIHdpdGggTk9ERV9FTlY9ZGV2ZWxvcG1lbnQgKGxvd2VyIHZlcnNpb25zKVwiLFxuKTtcbiIsImltcG9ydCBfbWlkZGxld2FyZUluamVjdG9yIGZyb20gXCIuL21pZGRsZXdhcmUtaW5qZWN0b3JcIjtcblxuZXhwb3J0IGNvbnN0IG1pZGRsZXdhcmVJbmplY3RvciA9IF9taWRkbGV3YXJlSW5qZWN0b3I7XG4iLCJpbXBvcnQgeyBDb21waWxhdGlvbiB9IGZyb20gXCJ3ZWJwYWNrXCI7XG5pbXBvcnQgeyBDb25jYXRTb3VyY2UsIFNvdXJjZSB9IGZyb20gXCJ3ZWJwYWNrLXNvdXJjZXNcIjtcbmltcG9ydCB7IFNvdXJjZUZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vdHlwaW5nc1wiO1xuaW1wb3J0IG1pZGRsZVdhcmVTb3VyY2VCdWlsZGVyIGZyb20gXCIuL21pZGRsZXdhcmUtc291cmNlLWJ1aWxkZXJcIjtcblxuY29uc3QgbWlkZGxld2FyZUluamVjdG9yOiBNaWRkbGV3YXJlSW5qZWN0b3IgPSAoeyBiYWNrZ3JvdW5kLCBjb250ZW50U2NyaXB0LCBleHRlbnNpb25QYWdlIH0sIHsgcG9ydCwgcmVsb2FkUGFnZSB9KSA9PiB7XG4gIGNvbnN0IHNvdXJjZTogU291cmNlID0gbWlkZGxlV2FyZVNvdXJjZUJ1aWxkZXIoeyBwb3J0LCByZWxvYWRQYWdlIH0pO1xuICBjb25zdCBzb3VyY2VGYWN0b3J5OiBTb3VyY2VGYWN0b3J5ID0gKC4uLnNvdXJjZXMpOiBTb3VyY2UgPT4gbmV3IENvbmNhdFNvdXJjZSguLi5zb3VyY2VzKTtcblxuICBjb25zdCBtYXRjaEJnT3JDb250ZW50T3JQYWdlID0gKG5hbWU6IHN0cmluZykgPT5cbiAgICBuYW1lID09PSBiYWNrZ3JvdW5kIHx8XG4gICAgbmFtZSA9PT0gY29udGVudFNjcmlwdCB8fFxuICAgIChjb250ZW50U2NyaXB0ICYmIGNvbnRlbnRTY3JpcHQuaW5jbHVkZXMobmFtZSkpIHx8XG4gICAgbmFtZSA9PT0gZXh0ZW5zaW9uUGFnZSB8fFxuICAgIChleHRlbnNpb25QYWdlICYmIGV4dGVuc2lvblBhZ2UuaW5jbHVkZXMobmFtZSkpO1xuXG4gIHJldHVybiAoYXNzZXRzLCBjaHVua3M6IENvbXBpbGF0aW9uW1wiY2h1bmtzXCJdKSA9PlxuICAgIEFycmF5LmZyb20oY2h1bmtzKS5yZWR1Y2UoKHByZXYsIHsgbmFtZSwgZmlsZXMgfSkgPT4ge1xuICAgICAgaWYgKG1hdGNoQmdPckNvbnRlbnRPclBhZ2UobmFtZSkpIHtcbiAgICAgICAgZmlsZXMuZm9yRWFjaCgoZW50cnlQb2ludCkgPT4ge1xuICAgICAgICAgIGlmICgvXFwuanMkLy50ZXN0KGVudHJ5UG9pbnQpKSB7XG4gICAgICAgICAgICBjb25zdCBmaW5hbFNyYyA9IHNvdXJjZUZhY3Rvcnkoc291cmNlLCBhc3NldHNbZW50cnlQb2ludF0pO1xuICAgICAgICAgICAgcHJldltlbnRyeVBvaW50XSA9IGZpbmFsU3JjO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcHJldjtcbiAgICB9LCB7fSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtaWRkbGV3YXJlSW5qZWN0b3I7XG4iLCJpbXBvcnQgeyB0ZW1wbGF0ZSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCByYXdTb3VyY2UgZnJvbSBcInJhdy1sb2FkZXIhLi93ZXItbWlkZGxld2FyZS5yYXdcIjtcbmltcG9ydCBwb2x5ZmlsbFNvdXJjZSBmcm9tIFwicmF3LWxvYWRlciF3ZWJleHRlbnNpb24tcG9seWZpbGxcIjtcbmltcG9ydCB7IFJhd1NvdXJjZSwgU291cmNlIH0gZnJvbSBcIndlYnBhY2stc291cmNlc1wiO1xuXG5pbXBvcnQgeyBSRUNPTk5FQ1RfSU5URVJWQUwsIFNPQ0tFVF9FUlJfQ09ERV9SRUYgfSBmcm9tIFwiLi4vY29uc3RhbnRzL21pZGRsZXdhcmUtY29uZmlnLmNvbnN0YW50c1wiO1xuaW1wb3J0ICogYXMgc2lnbmFscyBmcm9tIFwiLi4vdXRpbHMvc2lnbmFsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaWRkbGVXYXJlU291cmNlQnVpbGRlcih7IHBvcnQsIHJlbG9hZFBhZ2UgfTogSU1pZGRsZXdhcmVUZW1wbGF0ZVBhcmFtcyk6IFNvdXJjZSB7XG4gIGNvbnN0IHRtcGwgPSB0ZW1wbGF0ZShyYXdTb3VyY2UpO1xuXG4gIHJldHVybiBuZXcgUmF3U291cmNlKFxuICAgIHRtcGwoe1xuICAgICAgV1NIb3N0OiBgd3M6Ly9sb2NhbGhvc3Q6JHtwb3J0fWAsXG4gICAgICBjb25maWc6IEpTT04uc3RyaW5naWZ5KHsgUkVDT05ORUNUX0lOVEVSVkFMLCBTT0NLRVRfRVJSX0NPREVfUkVGIH0pLFxuICAgICAgcG9seWZpbGxTb3VyY2U6IGBcInx8JHtwb2x5ZmlsbFNvdXJjZX1cImAsXG4gICAgICByZWxvYWRQYWdlOiBgJHtyZWxvYWRQYWdlfWAsXG4gICAgICBzaWduYWxzOiBKU09OLnN0cmluZ2lmeShzaWduYWxzKSxcbiAgICB9KSxcbiAgKTtcbn1cbiIsImltcG9ydCB7IGRlYm91bmNlLCBydW5JbkNvbnRleHQgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgeyBpbmZvLCB3YXJuIH0gZnJvbSBcIi4vbG9nZ2VyXCI7XG5cbmV4cG9ydCBjb25zdCBkZWJvdW5jZVNpZ25hbCA9IChkZWJvdWNpbmdGcmFtZTogbnVtYmVyLCBjb250ZXh0Pzogb2JqZWN0KSA9PiAoZnVuYzogKC4uLmFyZ3M6IGFueVtdKSA9PiBhbnkpID0+IHtcbiAgaWYgKGNvbnRleHQpIHtcbiAgICBydW5JbkNvbnRleHQoY29udGV4dCk7XG4gIH1cblxuICByZXR1cm4gZGVib3VuY2UoKC4uLmFyZ3MpID0+IGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyksIGRlYm91Y2luZ0ZyYW1lKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmYXN0UmVsb2FkQmxvY2tlciA9IChtYXhDYWxsczogbnVtYmVyLCB3YWl0OiBudW1iZXIsIGNvbnRleHQpID0+IChmdW5jOiAoLi4uYXJnczogYW55W10pID0+IGFueSkgPT4ge1xuICBsZXQgY2FsbHMgPSAwO1xuICBsZXQgaW5XYWl0ID0gZmFsc2U7XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtcmV0dXJuXG4gIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgIGlmIChpbldhaXQpIHtcbiAgICAgIC8qIGRvIG5vdGhpbmcgKi9cbiAgICB9IGVsc2UgaWYgKGNhbGxzID09PSBtYXhDYWxscykge1xuICAgICAgY2FsbHMgPSAwO1xuICAgICAgaW5XYWl0ID0gdHJ1ZTtcblxuICAgICAgbGV0IGludGVydmFsID0gd2FpdCAvIDEwMDA7XG4gICAgICB3YXJuKGBQbGVhc2Ugd2FpdCAke2ludGVydmFsfSBzZWNzLiBmb3IgbmV4dCByZWxvYWQgdG8gcHJldmVudCB5b3VyIGV4dGVuc2lvbiBiZWluZyBibG9ja2VkYCk7XG4gICAgICBjb25zdCBsb2dJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHdhcm4oYCR7LS1pbnRlcnZhbH0gLi4uYCksIDEwMDApO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChsb2dJbnRlcnZhbCk7XG4gICAgICAgIGluZm8oXCJTaWduaW5nIGZvciByZWxvYWQgbm93XCIpO1xuICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICBpbldhaXQgPSBmYWxzZTtcbiAgICAgIH0sIHdhaXQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWxscysrO1xuICAgICAgcmV0dXJuIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCB7XG4gIERFRkFVTFRfQkFDS0dST1VORF9FTlRSWSxcbiAgREVGQVVMVF9DT05URU5UX1NDUklQVF9FTlRSWSxcbiAgREVGQVVMVF9FWFRFTlNJT05fUEFHRV9FTlRSWSxcbiAgREVGQVVMVF9QT1JULFxuICBERUZBVUxUX1JFTE9BRF9QQUdFLFxufSBmcm9tIFwiLi4vY29uc3RhbnRzL29wdGlvbnMuY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZW50cmllczoge1xuICAgIGJhY2tncm91bmQ6IERFRkFVTFRfQkFDS0dST1VORF9FTlRSWSxcbiAgICBjb250ZW50U2NyaXB0OiBERUZBVUxUX0NPTlRFTlRfU0NSSVBUX0VOVFJZLFxuICAgIGV4dGVuc2lvblBhZ2U6IERFRkFVTFRfRVhURU5TSU9OX1BBR0VfRU5UUlksXG4gIH0sXG4gIHBvcnQ6IERFRkFVTFRfUE9SVCxcbiAgcmVsb2FkUGFnZTogREVGQVVMVF9SRUxPQURfUEFHRSxcbn07XG4iLCJpbXBvcnQgeyBncmVlbiwgcmVkLCB3aGl0ZSwgeWVsbG93IH0gZnJvbSBcImNvbG9ycy9zYWZlXCI7XG5pbXBvcnQgeyBERUJVRywgRVJST1IsIElORk8sIExPRywgV0FSTiB9IGZyb20gXCIuLi9jb25zdGFudHMvbG9nLmNvbnN0YW50c1wiO1xuXG5sZXQgbG9nTGV2ZWw7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmV0dXJuLWFzc2lnblxuZXhwb3J0IGNvbnN0IHNldExvZ0xldmVsID0gKGxldmVsOiBMT0dfTEVWRUwpID0+IChsb2dMZXZlbCA9IGxldmVsKTtcblxuZXhwb3J0IGNvbnN0IGxvZyA9IChtZXNzYWdlOiBzdHJpbmcpID0+IGxvZ0xldmVsID49IExPRyAmJiBjb25zb2xlLmxvZyhtZXNzYWdlKTtcbmV4cG9ydCBjb25zdCBpbmZvID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gbG9nTGV2ZWwgPj0gSU5GTyAmJiBjb25zb2xlLmluZm8oZ3JlZW4obWVzc2FnZSkpO1xuZXhwb3J0IGNvbnN0IHdhcm4gPSAobWVzc2FnZTogc3RyaW5nKSA9PiBsb2dMZXZlbCA+PSBXQVJOICYmIGNvbnNvbGUud2Fybih5ZWxsb3cobWVzc2FnZSkpO1xuZXhwb3J0IGNvbnN0IGVycm9yID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gbG9nTGV2ZWwgPj0gRVJST1IgJiYgY29uc29sZS5lcnJvcihyZWQobWVzc2FnZSkpO1xuZXhwb3J0IGNvbnN0IGRlYnVnID0gKG1lc3NhZ2U6IHN0cmluZykgPT4gbG9nTGV2ZWwgPj0gREVCVUcgJiYgY29uc29sZS5kZWJ1Zyh3aGl0ZShkZWJ1ZyhtZXNzYWdlKSkpO1xuIiwiaW1wb3J0IHsgcmVhZEZpbGVTeW5jIH0gZnJvbSBcImZzXCI7XG5pbXBvcnQgeyBmbGF0TWFwRGVlcCB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IENvbXBpbGVyLCBFbnRyeSB9IGZyb20gXCJ3ZWJwYWNrXCI7XG5pbXBvcnQgeyBiZ1NjcmlwdEVudHJ5RXJyb3JNc2csIGJnU2NyaXB0TWFuaWZlc3RSZXF1aXJlZE1zZyB9IGZyb20gXCIuLi9tZXNzYWdlcy9lcnJvcnNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RFbnRyaWVzKFxuICB3ZWJwYWNrRW50cnk6IEVudHJ5LFxuICBtYW5pZmVzdFBhdGg6IHN0cmluZyxcbiAgd2VicGFja091dHB1dDogQ29tcGlsZXJbXCJvcHRpb25zXCJdW1wib3V0cHV0XCJdID0ge30sXG4pOiBJRW50cmllc09wdGlvbiB7XG4gIGNvbnN0IG1hbmlmZXN0SnNvbiA9IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKG1hbmlmZXN0UGF0aCkudG9TdHJpbmcoKSkgYXMgSUV4dGVuc2lvbk1hbmlmZXN0O1xuICBjb25zdCB7IGJhY2tncm91bmQsIGNvbnRlbnRfc2NyaXB0cyB9ID0gbWFuaWZlc3RKc29uO1xuICBjb25zdCB7IGZpbGVuYW1lIH0gPSB3ZWJwYWNrT3V0cHV0O1xuXG4gIGlmICghZmlsZW5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQbGVhc2Ugc3BlY2lmeSB0aGUgYG91dHB1dC5maWxlbmFtZWAgaW4geW91ciB3ZWJwYWNrIGNvbmZpZy5cIik7XG4gIH1cblxuICBpZiAoIWJhY2tncm91bmQ/LnNjcmlwdHMpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGJnU2NyaXB0TWFuaWZlc3RSZXF1aXJlZE1zZy5nZXQoKSk7XG4gIH1cblxuICBjb25zdCBiZ1NjcmlwdEZpbGVOYW1lcyA9IGJhY2tncm91bmQuc2NyaXB0cztcbiAgY29uc3QgdG9SZW1vdmUgPSAoZmlsZW5hbWUgYXMgc3RyaW5nKS5yZXBsYWNlKFwiW25hbWVdXCIsIFwiXCIpO1xuXG4gIGNvbnN0IGJnV2VicGFja0VudHJ5ID0gT2JqZWN0LmtleXMod2VicGFja0VudHJ5KS5maW5kKChlbnRyeU5hbWUpID0+XG4gICAgYmdTY3JpcHRGaWxlTmFtZXMuc29tZSgoYmdNYW5pZmVzdCkgPT4gYmdNYW5pZmVzdC5yZXBsYWNlKHRvUmVtb3ZlLCBcIlwiKSA9PT0gZW50cnlOYW1lKSxcbiAgKTtcblxuICBpZiAoIWJnV2VicGFja0VudHJ5KSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihiZ1NjcmlwdEVudHJ5RXJyb3JNc2cuZ2V0KCkpO1xuICB9XG5cbiAgY29uc3QgY29udGVudEVudHJpZXM6IHVua25vd24gPSBjb250ZW50X3NjcmlwdHNcbiAgICA/IGZsYXRNYXBEZWVwKE9iamVjdC5rZXlzKHdlYnBhY2tFbnRyeSksIChlbnRyeU5hbWUpID0+XG4gICAgICAgIGNvbnRlbnRfc2NyaXB0cy5tYXAoKHsganMgfSkgPT5cbiAgICAgICAgICBqcy5tYXAoKGNvbnRlbnRJdGVtKSA9PiBjb250ZW50SXRlbS5yZXBsYWNlKHRvUmVtb3ZlLCBcIlwiKSkuZmlsdGVyKChjb250ZW50SXRlbSkgPT4gY29udGVudEl0ZW0gPT09IGVudHJ5TmFtZSksXG4gICAgICAgICksXG4gICAgICApXG4gICAgOiBudWxsO1xuICByZXR1cm4ge1xuICAgIGJhY2tncm91bmQ6IGJnV2VicGFja0VudHJ5LFxuICAgIGNvbnRlbnRTY3JpcHQ6IGNvbnRlbnRFbnRyaWVzIGFzIHN0cmluZ1tdLFxuICAgIGV4dGVuc2lvblBhZ2U6IG51bGwsXG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgU0lHTl9DSEFOR0U6IEFjdGlvblR5cGUgPSBcIlNJR05fQ0hBTkdFXCI7XG5leHBvcnQgY29uc3QgU0lHTl9SRUxPQUQ6IEFjdGlvblR5cGUgPSBcIlNJR05fUkVMT0FEXCI7XG5leHBvcnQgY29uc3QgU0lHTl9SRUxPQURFRDogQWN0aW9uVHlwZSA9IFwiU0lHTl9SRUxPQURFRFwiO1xuZXhwb3J0IGNvbnN0IFNJR05fTE9HOiBBY3Rpb25UeXBlID0gXCJTSUdOX0xPR1wiO1xuZXhwb3J0IGNvbnN0IFNJR05fQ09OTkVDVDogQWN0aW9uVHlwZSA9IFwiU0lHTl9DT05ORUNUXCI7XG5cbmV4cG9ydCBjb25zdCBzaWduQ2hhbmdlOiBBY3Rpb25GYWN0b3J5ID0gKHsgcmVsb2FkUGFnZSA9IHRydWUsIG9ubHlQYWdlQ2hhbmdlZCA9IGZhbHNlIH0pID0+ICh7XG4gIHBheWxvYWQ6IHsgcmVsb2FkUGFnZSwgb25seVBhZ2VDaGFuZ2VkIH0sXG4gIHR5cGU6IFNJR05fQ0hBTkdFLFxufSk7XG5leHBvcnQgY29uc3Qgc2lnblJlbG9hZDogQWN0aW9uRmFjdG9yeSA9ICgpID0+ICh7IHR5cGU6IFNJR05fUkVMT0FEIH0pO1xuZXhwb3J0IGNvbnN0IHNpZ25SZWxvYWRlZDogQWN0aW9uRmFjdG9yeSA9IChtc2c6IHN0cmluZykgPT4gKHtcbiAgcGF5bG9hZDogbXNnLFxuICB0eXBlOiBTSUdOX1JFTE9BREVELFxufSk7XG5leHBvcnQgY29uc3Qgc2lnbkxvZzogQWN0aW9uRmFjdG9yeSA9IChtc2c6IHN0cmluZykgPT4gKHtcbiAgcGF5bG9hZDogbXNnLFxuICB0eXBlOiBTSUdOX0xPRyxcbn0pO1xuIiwiaW1wb3J0IHsgQ29tcGlsZXIgfSBmcm9tIFwid2VicGFja1wiO1xuaW1wb3J0IENvbXBpbGVyRXZlbnRzRmFjYWRlIGZyb20gXCIuL0NvbXBpbGVyRXZlbnRzRmFjYWRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0RXh0ZW5zaW9uUmVsb2FkZXIge1xuICBwdWJsaWMgY29udGV4dDogYW55O1xuXG4gIHByb3RlY3RlZCBfaW5qZWN0b3I6IEluamVjdE1pZGRsZXdhcmU7XG5cbiAgcHJvdGVjdGVkIF90cmlnZ2VyZXI6IFRyaWdnZXJlcjtcblxuICBwcm90ZWN0ZWQgX2V2ZW50QVBJOiBDb21waWxlckV2ZW50c0ZhY2FkZTtcblxuICBwcm90ZWN0ZWQgX2NodW5rVmVyc2lvbnM6IFJlY29yZDxzdHJpbmcsIGFueT47XG5cbiAgcHVibGljIGFic3RyYWN0IGFwcGx5KGNvbXBpbGVyOiBDb21waWxlcik7XG59XG4iLCJpbXBvcnQgeyBDb21waWxhdGlvbiwgQ29tcGlsZXIgfSBmcm9tIFwid2VicGFja1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21waWxlckV2ZW50c0ZhY2FkZSB7XG4gIHB1YmxpYyBzdGF0aWMgZXh0ZW5zaW9uTmFtZSA9IFwid2VicGFjay1leHQtcmVsb2FkZXJcIjtcblxuICBwcml2YXRlIF9jb21waWxlcjogQ29tcGlsZXI7XG5cbiAgY29uc3RydWN0b3IoY29tcGlsZXI6IENvbXBpbGVyKSB7XG4gICAgdGhpcy5fY29tcGlsZXIgPSBjb21waWxlcjtcbiAgfVxuXG4gIHB1YmxpYyBhZnRlck9wdGltaXplQ2h1bmtzKGNhbGw6IChjb21waWxhdGlvbjogQ29tcGlsYXRpb24sIGNodW5rczogQ29tcGlsYXRpb25bXCJjaHVua3NcIl0pID0+IHZvaWQpIHtcbiAgICByZXR1cm4gdGhpcy5fY29tcGlsZXIuaG9va3MuY29tcGlsYXRpb24udGFwKENvbXBpbGVyRXZlbnRzRmFjYWRlLmV4dGVuc2lvbk5hbWUsIChjb21wKSA9PiB7XG4gICAgICBjb25zdCBjaHVua3MgPSBuZXcgU2V0KCk7XG4gICAgICBjb25zdCBhZnRlck9wdGltaXplQ2h1bmtBc3NldHMgPSAoY2h1bmtzQWZ0ZXJPcHRpbWl6YXRpb24pID0+IHtcbiAgICAgICAgY2FsbChjb21wLCBjaHVua3NBZnRlck9wdGltaXphdGlvbik7XG4gICAgICB9O1xuICAgICAgY29tcC5ob29rcy5wcm9jZXNzQXNzZXRzLnRhcChcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IENvbXBpbGVyRXZlbnRzRmFjYWRlLmV4dGVuc2lvbk5hbWUsXG4gICAgICAgICAgc3RhZ2U6IENvbXBpbGF0aW9uLlBST0NFU1NfQVNTRVRTX1NUQUdFX0FOQUxZU0UsXG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBjb21wLmNodW5rcy5mb3JFYWNoKChjaHVuaykgPT4ge1xuICAgICAgICAgICAgY2h1bmtzLmFkZChjaHVuayk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYWZ0ZXJPcHRpbWl6ZUNodW5rQXNzZXRzKGNodW5rcyk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGFmdGVyRW1pdChjYWxsOiAoY29tcGlsYXRpb246IENvbXBpbGF0aW9uKSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbXBpbGVyLmhvb2tzLmFmdGVyRW1pdC50YXAoQ29tcGlsZXJFdmVudHNGYWNhZGUuZXh0ZW5zaW9uTmFtZSwgY2FsbCk7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vZGUvbm8tZGVwcmVjYXRlZC1hcGkgKi9cblxudmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG52YXIgaXNNb2Rlcm4gPSAoXG4gIHR5cGVvZiBCdWZmZXIgIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBCdWZmZXIuYWxsb2MgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIEJ1ZmZlci5hbGxvY1Vuc2FmZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgQnVmZmVyLmZyb20gPT09ICdmdW5jdGlvbidcbilcblxuZnVuY3Rpb24gaXNBcnJheUJ1ZmZlciAoaW5wdXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaW5wdXQpLnNsaWNlKDgsIC0xKSA9PT0gJ0FycmF5QnVmZmVyJ1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlCdWZmZXIgKG9iaiwgYnl0ZU9mZnNldCwgbGVuZ3RoKSB7XG4gIGJ5dGVPZmZzZXQgPj4+PSAwXG5cbiAgdmFyIG1heExlbmd0aCA9IG9iai5ieXRlTGVuZ3RoIC0gYnl0ZU9mZnNldFxuXG4gIGlmIChtYXhMZW5ndGggPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCInb2Zmc2V0JyBpcyBvdXQgb2YgYm91bmRzXCIpXG4gIH1cblxuICBpZiAobGVuZ3RoID09PSB1bmRlZmluZWQpIHtcbiAgICBsZW5ndGggPSBtYXhMZW5ndGhcbiAgfSBlbHNlIHtcbiAgICBsZW5ndGggPj4+PSAwXG5cbiAgICBpZiAobGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIidsZW5ndGgnIGlzIG91dCBvZiBib3VuZHNcIilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaXNNb2Rlcm5cbiAgICA/IEJ1ZmZlci5mcm9tKG9iai5zbGljZShieXRlT2Zmc2V0LCBieXRlT2Zmc2V0ICsgbGVuZ3RoKSlcbiAgICA6IG5ldyBCdWZmZXIobmV3IFVpbnQ4QXJyYXkob2JqLnNsaWNlKGJ5dGVPZmZzZXQsIGJ5dGVPZmZzZXQgKyBsZW5ndGgpKSlcbn1cblxuZnVuY3Rpb24gZnJvbVN0cmluZyAoc3RyaW5nLCBlbmNvZGluZykge1xuICBpZiAodHlwZW9mIGVuY29kaW5nICE9PSAnc3RyaW5nJyB8fCBlbmNvZGluZyA9PT0gJycpIHtcbiAgICBlbmNvZGluZyA9ICd1dGY4J1xuICB9XG5cbiAgaWYgKCFCdWZmZXIuaXNFbmNvZGluZyhlbmNvZGluZykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcImVuY29kaW5nXCIgbXVzdCBiZSBhIHZhbGlkIHN0cmluZyBlbmNvZGluZycpXG4gIH1cblxuICByZXR1cm4gaXNNb2Rlcm5cbiAgICA/IEJ1ZmZlci5mcm9tKHN0cmluZywgZW5jb2RpbmcpXG4gICAgOiBuZXcgQnVmZmVyKHN0cmluZywgZW5jb2RpbmcpXG59XG5cbmZ1bmN0aW9uIGJ1ZmZlckZyb20gKHZhbHVlLCBlbmNvZGluZ09yT2Zmc2V0LCBsZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKVxuICB9XG5cbiAgaWYgKGlzQXJyYXlCdWZmZXIodmFsdWUpKSB7XG4gICAgcmV0dXJuIGZyb21BcnJheUJ1ZmZlcih2YWx1ZSwgZW5jb2RpbmdPck9mZnNldCwgbGVuZ3RoKVxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZnJvbVN0cmluZyh2YWx1ZSwgZW5jb2RpbmdPck9mZnNldClcbiAgfVxuXG4gIHJldHVybiBpc01vZGVyblxuICAgID8gQnVmZmVyLmZyb20odmFsdWUpXG4gICAgOiBuZXcgQnVmZmVyKHZhbHVlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJ1ZmZlckZyb21cbiIsIi8qXG5cblRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXG5PcmlnaW5hbCBMaWJyYXJ5XG4gIC0gQ29weXJpZ2h0IChjKSBNYXJhayBTcXVpcmVzXG5cbkFkZGl0aW9uYWwgZnVuY3Rpb25hbGl0eVxuIC0gQ29weXJpZ2h0IChjKSBTaW5kcmUgU29yaHVzIDxzaW5kcmVzb3JodXNAZ21haWwuY29tPiAoc2luZHJlc29yaHVzLmNvbSlcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxub2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xudG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5mdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbklNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5BVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG5MSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTlxuVEhFIFNPRlRXQVJFLlxuXG4qL1xuXG52YXIgY29sb3JzID0ge307XG5tb2R1bGVbJ2V4cG9ydHMnXSA9IGNvbG9ycztcblxuY29sb3JzLnRoZW1lcyA9IHt9O1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBhbnNpU3R5bGVzID0gY29sb3JzLnN0eWxlcyA9IHJlcXVpcmUoJy4vc3R5bGVzJyk7XG52YXIgZGVmaW5lUHJvcHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydGllcztcbnZhciBuZXdMaW5lUmVnZXggPSBuZXcgUmVnRXhwKC9bXFxyXFxuXSsvZyk7XG5cbmNvbG9ycy5zdXBwb3J0c0NvbG9yID0gcmVxdWlyZSgnLi9zeXN0ZW0vc3VwcG9ydHMtY29sb3JzJykuc3VwcG9ydHNDb2xvcjtcblxuaWYgKHR5cGVvZiBjb2xvcnMuZW5hYmxlZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgY29sb3JzLmVuYWJsZWQgPSBjb2xvcnMuc3VwcG9ydHNDb2xvcigpICE9PSBmYWxzZTtcbn1cblxuY29sb3JzLmVuYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBjb2xvcnMuZW5hYmxlZCA9IHRydWU7XG59O1xuXG5jb2xvcnMuZGlzYWJsZSA9IGZ1bmN0aW9uKCkge1xuICBjb2xvcnMuZW5hYmxlZCA9IGZhbHNlO1xufTtcblxuY29sb3JzLnN0cmlwQ29sb3JzID0gY29sb3JzLnN0cmlwID0gZnVuY3Rpb24oc3RyKSB7XG4gIHJldHVybiAoJycgKyBzdHIpLnJlcGxhY2UoL1xceDFCXFxbXFxkK20vZywgJycpO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG52YXIgc3R5bGl6ZSA9IGNvbG9ycy5zdHlsaXplID0gZnVuY3Rpb24gc3R5bGl6ZShzdHIsIHN0eWxlKSB7XG4gIGlmICghY29sb3JzLmVuYWJsZWQpIHtcbiAgICByZXR1cm4gc3RyKycnO1xuICB9XG5cbiAgdmFyIHN0eWxlTWFwID0gYW5zaVN0eWxlc1tzdHlsZV07XG5cbiAgLy8gU3R5bGl6ZSBzaG91bGQgd29yayBmb3Igbm9uLUFOU0kgc3R5bGVzLCB0b29cbiAgaWYoIXN0eWxlTWFwICYmIHN0eWxlIGluIGNvbG9ycyl7XG4gICAgLy8gU3R5bGUgbWFwcyBsaWtlIHRyYXAgb3BlcmF0ZSBhcyBmdW5jdGlvbnMgb24gc3RyaW5ncztcbiAgICAvLyB0aGV5IGRvbid0IGhhdmUgcHJvcGVydGllcyBsaWtlIG9wZW4gb3IgY2xvc2UuXG4gICAgcmV0dXJuIGNvbG9yc1tzdHlsZV0oc3RyKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZU1hcC5vcGVuICsgc3RyICsgc3R5bGVNYXAuY2xvc2U7XG59O1xuXG52YXIgbWF0Y2hPcGVyYXRvcnNSZSA9IC9bfFxcXFx7fSgpW1xcXV4kKyo/Ll0vZztcbnZhciBlc2NhcGVTdHJpbmdSZWdleHAgPSBmdW5jdGlvbihzdHIpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcbiAgfVxuICByZXR1cm4gc3RyLnJlcGxhY2UobWF0Y2hPcGVyYXRvcnNSZSwgJ1xcXFwkJicpO1xufTtcblxuZnVuY3Rpb24gYnVpbGQoX3N0eWxlcykge1xuICB2YXIgYnVpbGRlciA9IGZ1bmN0aW9uIGJ1aWxkZXIoKSB7XG4gICAgcmV0dXJuIGFwcGx5U3R5bGUuYXBwbHkoYnVpbGRlciwgYXJndW1lbnRzKTtcbiAgfTtcbiAgYnVpbGRlci5fc3R5bGVzID0gX3N0eWxlcztcbiAgLy8gX19wcm90b19fIGlzIHVzZWQgYmVjYXVzZSB3ZSBtdXN0IHJldHVybiBhIGZ1bmN0aW9uLCBidXQgdGhlcmUgaXNcbiAgLy8gbm8gd2F5IHRvIGNyZWF0ZSBhIGZ1bmN0aW9uIHdpdGggYSBkaWZmZXJlbnQgcHJvdG90eXBlLlxuICBidWlsZGVyLl9fcHJvdG9fXyA9IHByb3RvO1xuICByZXR1cm4gYnVpbGRlcjtcbn1cblxudmFyIHN0eWxlcyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBhbnNpU3R5bGVzLmdyZXkgPSBhbnNpU3R5bGVzLmdyYXk7XG4gIE9iamVjdC5rZXlzKGFuc2lTdHlsZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgYW5zaVN0eWxlc1trZXldLmNsb3NlUmUgPVxuICAgICAgbmV3IFJlZ0V4cChlc2NhcGVTdHJpbmdSZWdleHAoYW5zaVN0eWxlc1trZXldLmNsb3NlKSwgJ2cnKTtcbiAgICByZXRba2V5XSA9IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBidWlsZCh0aGlzLl9zdHlsZXMuY29uY2F0KGtleSkpO1xuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn0pKCk7XG5cbnZhciBwcm90byA9IGRlZmluZVByb3BzKGZ1bmN0aW9uIGNvbG9ycygpIHt9LCBzdHlsZXMpO1xuXG5mdW5jdGlvbiBhcHBseVN0eWxlKCkge1xuICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgdmFyIHN0ciA9IGFyZ3MubWFwKGZ1bmN0aW9uKGFyZykge1xuICAgIC8vIFVzZSB3ZWFrIGVxdWFsaXR5IGNoZWNrIHNvIHdlIGNhbiBjb2xvcml6ZSBudWxsL3VuZGVmaW5lZCBpbiBzYWZlIG1vZGVcbiAgICBpZiAoYXJnICE9IG51bGwgJiYgYXJnLmNvbnN0cnVjdG9yID09PSBTdHJpbmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1dGlsLmluc3BlY3QoYXJnKTtcbiAgICB9XG4gIH0pLmpvaW4oJyAnKTtcblxuICBpZiAoIWNvbG9ycy5lbmFibGVkIHx8ICFzdHIpIHtcbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgdmFyIG5ld0xpbmVzUHJlc2VudCA9IHN0ci5pbmRleE9mKCdcXG4nKSAhPSAtMTtcblxuICB2YXIgbmVzdGVkU3R5bGVzID0gdGhpcy5fc3R5bGVzO1xuXG4gIHZhciBpID0gbmVzdGVkU3R5bGVzLmxlbmd0aDtcbiAgd2hpbGUgKGktLSkge1xuICAgIHZhciBjb2RlID0gYW5zaVN0eWxlc1tuZXN0ZWRTdHlsZXNbaV1dO1xuICAgIHN0ciA9IGNvZGUub3BlbiArIHN0ci5yZXBsYWNlKGNvZGUuY2xvc2VSZSwgY29kZS5vcGVuKSArIGNvZGUuY2xvc2U7XG4gICAgaWYgKG5ld0xpbmVzUHJlc2VudCkge1xuICAgICAgc3RyID0gc3RyLnJlcGxhY2UobmV3TGluZVJlZ2V4LCBmdW5jdGlvbihtYXRjaCkge1xuICAgICAgICByZXR1cm4gY29kZS5jbG9zZSArIG1hdGNoICsgY29kZS5vcGVuO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0cjtcbn1cblxuY29sb3JzLnNldFRoZW1lID0gZnVuY3Rpb24odGhlbWUpIHtcbiAgaWYgKHR5cGVvZiB0aGVtZSA9PT0gJ3N0cmluZycpIHtcbiAgICBjb25zb2xlLmxvZygnY29sb3JzLnNldFRoZW1lIG5vdyBvbmx5IGFjY2VwdHMgYW4gb2JqZWN0LCBub3QgYSBzdHJpbmcuICAnICtcbiAgICAgICdJZiB5b3UgYXJlIHRyeWluZyB0byBzZXQgYSB0aGVtZSBmcm9tIGEgZmlsZSwgaXQgaXMgbm93IHlvdXIgKHRoZSAnICtcbiAgICAgICdjYWxsZXJcXCdzKSByZXNwb25zaWJpbGl0eSB0byByZXF1aXJlIHRoZSBmaWxlLiAgVGhlIG9sZCBzeW50YXggJyArXG4gICAgICAnbG9va2VkIGxpa2UgY29sb3JzLnNldFRoZW1lKF9fZGlybmFtZSArICcgK1xuICAgICAgJ1xcJy8uLi90aGVtZXMvZ2VuZXJpYy1sb2dnaW5nLmpzXFwnKTsgVGhlIG5ldyBzeW50YXggbG9va3MgbGlrZSAnK1xuICAgICAgJ2NvbG9ycy5zZXRUaGVtZShyZXF1aXJlKF9fZGlybmFtZSArICcgK1xuICAgICAgJ1xcJy8uLi90aGVtZXMvZ2VuZXJpYy1sb2dnaW5nLmpzXFwnKSk7Jyk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAodmFyIHN0eWxlIGluIHRoZW1lKSB7XG4gICAgKGZ1bmN0aW9uKHN0eWxlKSB7XG4gICAgICBjb2xvcnNbc3R5bGVdID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhlbWVbc3R5bGVdID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHZhciBvdXQgPSBzdHI7XG4gICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGVtZVtzdHlsZV0pIHtcbiAgICAgICAgICAgIG91dCA9IGNvbG9yc1t0aGVtZVtzdHlsZV1baV1dKG91dCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBvdXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbG9yc1t0aGVtZVtzdHlsZV1dKHN0cik7XG4gICAgICB9O1xuICAgIH0pKHN0eWxlKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgdmFyIHJldCA9IHt9O1xuICBPYmplY3Qua2V5cyhzdHlsZXMpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xuICAgIHJldFtuYW1lXSA9IHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBidWlsZChbbmFtZV0pO1xuICAgICAgfSxcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cblxudmFyIHNlcXVlbmNlciA9IGZ1bmN0aW9uIHNlcXVlbmNlcihtYXAsIHN0cikge1xuICB2YXIgZXhwbG9kZWQgPSBzdHIuc3BsaXQoJycpO1xuICBleHBsb2RlZCA9IGV4cGxvZGVkLm1hcChtYXApO1xuICByZXR1cm4gZXhwbG9kZWQuam9pbignJyk7XG59O1xuXG4vLyBjdXN0b20gZm9ybWF0dGVyIG1ldGhvZHNcbmNvbG9ycy50cmFwID0gcmVxdWlyZSgnLi9jdXN0b20vdHJhcCcpO1xuY29sb3JzLnphbGdvID0gcmVxdWlyZSgnLi9jdXN0b20vemFsZ28nKTtcblxuLy8gbWFwc1xuY29sb3JzLm1hcHMgPSB7fTtcbmNvbG9ycy5tYXBzLmFtZXJpY2EgPSByZXF1aXJlKCcuL21hcHMvYW1lcmljYScpKGNvbG9ycyk7XG5jb2xvcnMubWFwcy56ZWJyYSA9IHJlcXVpcmUoJy4vbWFwcy96ZWJyYScpKGNvbG9ycyk7XG5jb2xvcnMubWFwcy5yYWluYm93ID0gcmVxdWlyZSgnLi9tYXBzL3JhaW5ib3cnKShjb2xvcnMpO1xuY29sb3JzLm1hcHMucmFuZG9tID0gcmVxdWlyZSgnLi9tYXBzL3JhbmRvbScpKGNvbG9ycyk7XG5cbmZvciAodmFyIG1hcCBpbiBjb2xvcnMubWFwcykge1xuICAoZnVuY3Rpb24obWFwKSB7XG4gICAgY29sb3JzW21hcF0gPSBmdW5jdGlvbihzdHIpIHtcbiAgICAgIHJldHVybiBzZXF1ZW5jZXIoY29sb3JzLm1hcHNbbWFwXSwgc3RyKTtcbiAgICB9O1xuICB9KShtYXApO1xufVxuXG5kZWZpbmVQcm9wcyhjb2xvcnMsIGluaXQoKSk7XG4iLCJtb2R1bGVbJ2V4cG9ydHMnXSA9IGZ1bmN0aW9uIHJ1blRoZVRyYXAodGV4dCwgb3B0aW9ucykge1xuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHRleHQgPSB0ZXh0IHx8ICdSdW4gdGhlIHRyYXAsIGRyb3AgdGhlIGJhc3MnO1xuICB0ZXh0ID0gdGV4dC5zcGxpdCgnJyk7XG4gIHZhciB0cmFwID0ge1xuICAgIGE6IFsnXFx1MDA0MCcsICdcXHUwMTA0JywgJ1xcdTAyM2EnLCAnXFx1MDI0NScsICdcXHUwMzk0JywgJ1xcdTAzOWInLCAnXFx1MDQxNCddLFxuICAgIGI6IFsnXFx1MDBkZicsICdcXHUwMTgxJywgJ1xcdTAyNDMnLCAnXFx1MDI2ZScsICdcXHUwM2IyJywgJ1xcdTBlM2YnXSxcbiAgICBjOiBbJ1xcdTAwYTknLCAnXFx1MDIzYicsICdcXHUwM2ZlJ10sXG4gICAgZDogWydcXHUwMGQwJywgJ1xcdTAxOGEnLCAnXFx1MDUwMCcsICdcXHUwNTAxJywgJ1xcdTA1MDInLCAnXFx1MDUwMyddLFxuICAgIGU6IFsnXFx1MDBjYicsICdcXHUwMTE1JywgJ1xcdTAxOGUnLCAnXFx1MDI1OCcsICdcXHUwM2EzJywgJ1xcdTAzYmUnLCAnXFx1MDRiYycsXG4gICAgICAnXFx1MGE2YyddLFxuICAgIGY6IFsnXFx1MDRmYSddLFxuICAgIGc6IFsnXFx1MDI2MiddLFxuICAgIGg6IFsnXFx1MDEyNicsICdcXHUwMTk1JywgJ1xcdTA0YTInLCAnXFx1MDRiYScsICdcXHUwNGM3JywgJ1xcdTA1MGEnXSxcbiAgICBpOiBbJ1xcdTBmMGYnXSxcbiAgICBqOiBbJ1xcdTAxMzQnXSxcbiAgICBrOiBbJ1xcdTAxMzgnLCAnXFx1MDRhMCcsICdcXHUwNGMzJywgJ1xcdTA1MWUnXSxcbiAgICBsOiBbJ1xcdTAxMzknXSxcbiAgICBtOiBbJ1xcdTAyOGQnLCAnXFx1MDRjZCcsICdcXHUwNGNlJywgJ1xcdTA1MjAnLCAnXFx1MDUyMScsICdcXHUwZDY5J10sXG4gICAgbjogWydcXHUwMGQxJywgJ1xcdTAxNGInLCAnXFx1MDE5ZCcsICdcXHUwMzc2JywgJ1xcdTAzYTAnLCAnXFx1MDQ4YSddLFxuICAgIG86IFsnXFx1MDBkOCcsICdcXHUwMGY1JywgJ1xcdTAwZjgnLCAnXFx1MDFmZScsICdcXHUwMjk4JywgJ1xcdTA0N2EnLCAnXFx1MDVkZCcsXG4gICAgICAnXFx1MDZkZCcsICdcXHUwZTRmJ10sXG4gICAgcDogWydcXHUwMWY3JywgJ1xcdTA0OGUnXSxcbiAgICBxOiBbJ1xcdTA5Y2QnXSxcbiAgICByOiBbJ1xcdTAwYWUnLCAnXFx1MDFhNicsICdcXHUwMjEwJywgJ1xcdTAyNGMnLCAnXFx1MDI4MCcsICdcXHUwNDJmJ10sXG4gICAgczogWydcXHUwMGE3JywgJ1xcdTAzZGUnLCAnXFx1MDNkZicsICdcXHUwM2U4J10sXG4gICAgdDogWydcXHUwMTQxJywgJ1xcdTAxNjYnLCAnXFx1MDM3MyddLFxuICAgIHU6IFsnXFx1MDFiMScsICdcXHUwNTRkJ10sXG4gICAgdjogWydcXHUwNWQ4J10sXG4gICAgdzogWydcXHUwNDI4JywgJ1xcdTA0NjAnLCAnXFx1MDQ3YycsICdcXHUwZDcwJ10sXG4gICAgeDogWydcXHUwNGIyJywgJ1xcdTA0ZmUnLCAnXFx1MDRmYycsICdcXHUwNGZkJ10sXG4gICAgeTogWydcXHUwMGE1JywgJ1xcdTA0YjAnLCAnXFx1MDRjYiddLFxuICAgIHo6IFsnXFx1MDFiNScsICdcXHUwMjQwJ10sXG4gIH07XG4gIHRleHQuZm9yRWFjaChmdW5jdGlvbihjKSB7XG4gICAgYyA9IGMudG9Mb3dlckNhc2UoKTtcbiAgICB2YXIgY2hhcnMgPSB0cmFwW2NdIHx8IFsnICddO1xuICAgIHZhciByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcnMubGVuZ3RoKTtcbiAgICBpZiAodHlwZW9mIHRyYXBbY10gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICByZXN1bHQgKz0gdHJhcFtjXVtyYW5kXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ICs9IGM7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyBwbGVhc2Ugbm9cbm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24gemFsZ28odGV4dCwgb3B0aW9ucykge1xuICB0ZXh0ID0gdGV4dCB8fCAnICAgaGUgaXMgaGVyZSAgICc7XG4gIHZhciBzb3VsID0ge1xuICAgICd1cCc6IFtcbiAgICAgICfMjScsICfMjicsICfMhCcsICfMhScsXG4gICAgICAnzL8nLCAnzJEnLCAnzIYnLCAnzJAnLFxuICAgICAgJ82SJywgJ82XJywgJ82RJywgJ8yHJyxcbiAgICAgICfMiCcsICfMiicsICfNgicsICfMkycsXG4gICAgICAnzIgnLCAnzYonLCAnzYsnLCAnzYwnLFxuICAgICAgJ8yDJywgJ8yCJywgJ8yMJywgJ82QJyxcbiAgICAgICfMgCcsICfMgScsICfMiycsICfMjycsXG4gICAgICAnzJInLCAnzJMnLCAnzJQnLCAnzL0nLFxuICAgICAgJ8yJJywgJ82jJywgJ82kJywgJ82lJyxcbiAgICAgICfNpicsICfNpycsICfNqCcsICfNqScsXG4gICAgICAnzaonLCAnzasnLCAnzawnLCAnza0nLFxuICAgICAgJ82uJywgJ82vJywgJ8y+JywgJ82bJyxcbiAgICAgICfNhicsICfMmicsXG4gICAgXSxcbiAgICAnZG93bic6IFtcbiAgICAgICfMlicsICfMlycsICfMmCcsICfMmScsXG4gICAgICAnzJwnLCAnzJ0nLCAnzJ4nLCAnzJ8nLFxuICAgICAgJ8ygJywgJ8ykJywgJ8ylJywgJ8ymJyxcbiAgICAgICfMqScsICfMqicsICfMqycsICfMrCcsXG4gICAgICAnzK0nLCAnzK4nLCAnzK8nLCAnzLAnLFxuICAgICAgJ8yxJywgJ8yyJywgJ8yzJywgJ8y5JyxcbiAgICAgICfMuicsICfMuycsICfMvCcsICfNhScsXG4gICAgICAnzYcnLCAnzYgnLCAnzYknLCAnzY0nLFxuICAgICAgJ82OJywgJ82TJywgJ82UJywgJ82VJyxcbiAgICAgICfNlicsICfNmScsICfNmicsICfMoycsXG4gICAgXSxcbiAgICAnbWlkJzogW1xuICAgICAgJ8yVJywgJ8ybJywgJ8yAJywgJ8yBJyxcbiAgICAgICfNmCcsICfMoScsICfMoicsICfMpycsXG4gICAgICAnzKgnLCAnzLQnLCAnzLUnLCAnzLYnLFxuICAgICAgJ82cJywgJ82dJywgJ82eJyxcbiAgICAgICfNnycsICfNoCcsICfNoicsICfMuCcsXG4gICAgICAnzLcnLCAnzaEnLCAnINKJJyxcbiAgICBdLFxuICB9O1xuICB2YXIgYWxsID0gW10uY29uY2F0KHNvdWwudXAsIHNvdWwuZG93biwgc291bC5taWQpO1xuXG4gIGZ1bmN0aW9uIHJhbmRvbU51bWJlcihyYW5nZSkge1xuICAgIHZhciByID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UpO1xuICAgIHJldHVybiByO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNDaGFyKGNoYXJhY3Rlcikge1xuICAgIHZhciBib29sID0gZmFsc2U7XG4gICAgYWxsLmZpbHRlcihmdW5jdGlvbihpKSB7XG4gICAgICBib29sID0gKGkgPT09IGNoYXJhY3Rlcik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGJvb2w7XG4gIH1cblxuXG4gIGZ1bmN0aW9uIGhlQ29tZXModGV4dCwgb3B0aW9ucykge1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgY291bnRzO1xuICAgIHZhciBsO1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIG9wdGlvbnNbJ3VwJ10gPVxuICAgICAgdHlwZW9mIG9wdGlvbnNbJ3VwJ10gIT09ICd1bmRlZmluZWQnID8gb3B0aW9uc1sndXAnXSA6IHRydWU7XG4gICAgb3B0aW9uc1snbWlkJ10gPVxuICAgICAgdHlwZW9mIG9wdGlvbnNbJ21pZCddICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnNbJ21pZCddIDogdHJ1ZTtcbiAgICBvcHRpb25zWydkb3duJ10gPVxuICAgICAgdHlwZW9mIG9wdGlvbnNbJ2Rvd24nXSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zWydkb3duJ10gOiB0cnVlO1xuICAgIG9wdGlvbnNbJ3NpemUnXSA9XG4gICAgICB0eXBlb2Ygb3B0aW9uc1snc2l6ZSddICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnNbJ3NpemUnXSA6ICdtYXhpJztcbiAgICB0ZXh0ID0gdGV4dC5zcGxpdCgnJyk7XG4gICAgZm9yIChsIGluIHRleHQpIHtcbiAgICAgIGlmIChpc0NoYXIobCkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICByZXN1bHQgPSByZXN1bHQgKyB0ZXh0W2xdO1xuICAgICAgY291bnRzID0geyd1cCc6IDAsICdkb3duJzogMCwgJ21pZCc6IDB9O1xuICAgICAgc3dpdGNoIChvcHRpb25zLnNpemUpIHtcbiAgICAgICAgY2FzZSAnbWluaSc6XG4gICAgICAgICAgY291bnRzLnVwID0gcmFuZG9tTnVtYmVyKDgpO1xuICAgICAgICAgIGNvdW50cy5taWQgPSByYW5kb21OdW1iZXIoMik7XG4gICAgICAgICAgY291bnRzLmRvd24gPSByYW5kb21OdW1iZXIoOCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21heGknOlxuICAgICAgICAgIGNvdW50cy51cCA9IHJhbmRvbU51bWJlcigxNikgKyAzO1xuICAgICAgICAgIGNvdW50cy5taWQgPSByYW5kb21OdW1iZXIoNCkgKyAxO1xuICAgICAgICAgIGNvdW50cy5kb3duID0gcmFuZG9tTnVtYmVyKDY0KSArIDM7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY291bnRzLnVwID0gcmFuZG9tTnVtYmVyKDgpICsgMTtcbiAgICAgICAgICBjb3VudHMubWlkID0gcmFuZG9tTnVtYmVyKDYpIC8gMjtcbiAgICAgICAgICBjb3VudHMuZG93biA9IHJhbmRvbU51bWJlcig4KSArIDE7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHZhciBhcnIgPSBbJ3VwJywgJ21pZCcsICdkb3duJ107XG4gICAgICBmb3IgKHZhciBkIGluIGFycikge1xuICAgICAgICB2YXIgaW5kZXggPSBhcnJbZF07XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IGNvdW50c1tpbmRleF07IGkrKykge1xuICAgICAgICAgIGlmIChvcHRpb25zW2luZGV4XSkge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0ICsgc291bFtpbmRleF1bcmFuZG9tTnVtYmVyKHNvdWxbaW5kZXhdLmxlbmd0aCldO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIC8vIGRvbid0IHN1bW1vbiBoaW1cbiAgcmV0dXJuIGhlQ29tZXModGV4dCwgb3B0aW9ucyk7XG59O1xuXG4iLCJtb2R1bGVbJ2V4cG9ydHMnXSA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICByZXR1cm4gZnVuY3Rpb24obGV0dGVyLCBpLCBleHBsb2RlZCkge1xuICAgIGlmIChsZXR0ZXIgPT09ICcgJykgcmV0dXJuIGxldHRlcjtcbiAgICBzd2l0Y2ggKGklMykge1xuICAgICAgY2FzZSAwOiByZXR1cm4gY29sb3JzLnJlZChsZXR0ZXIpO1xuICAgICAgY2FzZSAxOiByZXR1cm4gY29sb3JzLndoaXRlKGxldHRlcik7XG4gICAgICBjYXNlIDI6IHJldHVybiBjb2xvcnMuYmx1ZShsZXR0ZXIpO1xuICAgIH1cbiAgfTtcbn07XG4iLCJtb2R1bGVbJ2V4cG9ydHMnXSA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICAvLyBSb1kgRyBCaVZcbiAgdmFyIHJhaW5ib3dDb2xvcnMgPSBbJ3JlZCcsICd5ZWxsb3cnLCAnZ3JlZW4nLCAnYmx1ZScsICdtYWdlbnRhJ107XG4gIHJldHVybiBmdW5jdGlvbihsZXR0ZXIsIGksIGV4cGxvZGVkKSB7XG4gICAgaWYgKGxldHRlciA9PT0gJyAnKSB7XG4gICAgICByZXR1cm4gbGV0dGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29sb3JzW3JhaW5ib3dDb2xvcnNbaSsrICUgcmFpbmJvd0NvbG9ycy5sZW5ndGhdXShsZXR0ZXIpO1xuICAgIH1cbiAgfTtcbn07XG5cbiIsIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gIHZhciBhdmFpbGFibGUgPSBbJ3VuZGVybGluZScsICdpbnZlcnNlJywgJ2dyZXknLCAneWVsbG93JywgJ3JlZCcsICdncmVlbicsXG4gICAgJ2JsdWUnLCAnd2hpdGUnLCAnY3lhbicsICdtYWdlbnRhJywgJ2JyaWdodFllbGxvdycsICdicmlnaHRSZWQnLFxuICAgICdicmlnaHRHcmVlbicsICdicmlnaHRCbHVlJywgJ2JyaWdodFdoaXRlJywgJ2JyaWdodEN5YW4nLCAnYnJpZ2h0TWFnZW50YSddO1xuICByZXR1cm4gZnVuY3Rpb24obGV0dGVyLCBpLCBleHBsb2RlZCkge1xuICAgIHJldHVybiBsZXR0ZXIgPT09ICcgJyA/IGxldHRlciA6XG4gICAgICBjb2xvcnNbXG4gICAgICAgICAgYXZhaWxhYmxlW01hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChhdmFpbGFibGUubGVuZ3RoIC0gMikpXVxuICAgICAgXShsZXR0ZXIpO1xuICB9O1xufTtcbiIsIm1vZHVsZVsnZXhwb3J0cyddID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gIHJldHVybiBmdW5jdGlvbihsZXR0ZXIsIGksIGV4cGxvZGVkKSB7XG4gICAgcmV0dXJuIGkgJSAyID09PSAwID8gbGV0dGVyIDogY29sb3JzLmludmVyc2UobGV0dGVyKTtcbiAgfTtcbn07XG4iLCIvKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgU2luZHJlIFNvcmh1cyA8c2luZHJlc29yaHVzQGdtYWlsLmNvbT4gKHNpbmRyZXNvcmh1cy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cblxudmFyIHN0eWxlcyA9IHt9O1xubW9kdWxlWydleHBvcnRzJ10gPSBzdHlsZXM7XG5cbnZhciBjb2RlcyA9IHtcbiAgcmVzZXQ6IFswLCAwXSxcblxuICBib2xkOiBbMSwgMjJdLFxuICBkaW06IFsyLCAyMl0sXG4gIGl0YWxpYzogWzMsIDIzXSxcbiAgdW5kZXJsaW5lOiBbNCwgMjRdLFxuICBpbnZlcnNlOiBbNywgMjddLFxuICBoaWRkZW46IFs4LCAyOF0sXG4gIHN0cmlrZXRocm91Z2g6IFs5LCAyOV0sXG5cbiAgYmxhY2s6IFszMCwgMzldLFxuICByZWQ6IFszMSwgMzldLFxuICBncmVlbjogWzMyLCAzOV0sXG4gIHllbGxvdzogWzMzLCAzOV0sXG4gIGJsdWU6IFszNCwgMzldLFxuICBtYWdlbnRhOiBbMzUsIDM5XSxcbiAgY3lhbjogWzM2LCAzOV0sXG4gIHdoaXRlOiBbMzcsIDM5XSxcbiAgZ3JheTogWzkwLCAzOV0sXG4gIGdyZXk6IFs5MCwgMzldLFxuXG4gIGJyaWdodFJlZDogWzkxLCAzOV0sXG4gIGJyaWdodEdyZWVuOiBbOTIsIDM5XSxcbiAgYnJpZ2h0WWVsbG93OiBbOTMsIDM5XSxcbiAgYnJpZ2h0Qmx1ZTogWzk0LCAzOV0sXG4gIGJyaWdodE1hZ2VudGE6IFs5NSwgMzldLFxuICBicmlnaHRDeWFuOiBbOTYsIDM5XSxcbiAgYnJpZ2h0V2hpdGU6IFs5NywgMzldLFxuXG4gIGJnQmxhY2s6IFs0MCwgNDldLFxuICBiZ1JlZDogWzQxLCA0OV0sXG4gIGJnR3JlZW46IFs0MiwgNDldLFxuICBiZ1llbGxvdzogWzQzLCA0OV0sXG4gIGJnQmx1ZTogWzQ0LCA0OV0sXG4gIGJnTWFnZW50YTogWzQ1LCA0OV0sXG4gIGJnQ3lhbjogWzQ2LCA0OV0sXG4gIGJnV2hpdGU6IFs0NywgNDldLFxuICBiZ0dyYXk6IFsxMDAsIDQ5XSxcbiAgYmdHcmV5OiBbMTAwLCA0OV0sXG5cbiAgYmdCcmlnaHRSZWQ6IFsxMDEsIDQ5XSxcbiAgYmdCcmlnaHRHcmVlbjogWzEwMiwgNDldLFxuICBiZ0JyaWdodFllbGxvdzogWzEwMywgNDldLFxuICBiZ0JyaWdodEJsdWU6IFsxMDQsIDQ5XSxcbiAgYmdCcmlnaHRNYWdlbnRhOiBbMTA1LCA0OV0sXG4gIGJnQnJpZ2h0Q3lhbjogWzEwNiwgNDldLFxuICBiZ0JyaWdodFdoaXRlOiBbMTA3LCA0OV0sXG5cbiAgLy8gbGVnYWN5IHN0eWxlcyBmb3IgY29sb3JzIHByZSB2MS4wLjBcbiAgYmxhY2tCRzogWzQwLCA0OV0sXG4gIHJlZEJHOiBbNDEsIDQ5XSxcbiAgZ3JlZW5CRzogWzQyLCA0OV0sXG4gIHllbGxvd0JHOiBbNDMsIDQ5XSxcbiAgYmx1ZUJHOiBbNDQsIDQ5XSxcbiAgbWFnZW50YUJHOiBbNDUsIDQ5XSxcbiAgY3lhbkJHOiBbNDYsIDQ5XSxcbiAgd2hpdGVCRzogWzQ3LCA0OV0sXG5cbn07XG5cbk9iamVjdC5rZXlzKGNvZGVzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICB2YXIgdmFsID0gY29kZXNba2V5XTtcbiAgdmFyIHN0eWxlID0gc3R5bGVzW2tleV0gPSBbXTtcbiAgc3R5bGUub3BlbiA9ICdcXHUwMDFiWycgKyB2YWxbMF0gKyAnbSc7XG4gIHN0eWxlLmNsb3NlID0gJ1xcdTAwMWJbJyArIHZhbFsxXSArICdtJztcbn0pO1xuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgU2luZHJlIFNvcmh1cyA8c2luZHJlc29yaHVzQGdtYWlsLmNvbT4gKHNpbmRyZXNvcmh1cy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2ZcbnRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW5cbnRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG9cbnVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzXG5vZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG9cbnNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG5jb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5TT0ZUV0FSRS5cbiovXG5cbid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbGFnLCBhcmd2KSB7XG4gIGFyZ3YgPSBhcmd2IHx8IHByb2Nlc3MuYXJndjtcblxuICB2YXIgdGVybWluYXRvclBvcyA9IGFyZ3YuaW5kZXhPZignLS0nKTtcbiAgdmFyIHByZWZpeCA9IC9eLXsxLDJ9Ly50ZXN0KGZsYWcpID8gJycgOiAnLS0nO1xuICB2YXIgcG9zID0gYXJndi5pbmRleE9mKHByZWZpeCArIGZsYWcpO1xuXG4gIHJldHVybiBwb3MgIT09IC0xICYmICh0ZXJtaW5hdG9yUG9zID09PSAtMSA/IHRydWUgOiBwb3MgPCB0ZXJtaW5hdG9yUG9zKTtcbn07XG4iLCIvKlxuVGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cbkNvcHlyaWdodCAoYykgU2luZHJlIFNvcmh1cyA8c2luZHJlc29yaHVzQGdtYWlsLmNvbT4gKHNpbmRyZXNvcmh1cy5jb20pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbm9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbmluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbnRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbmNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW5cbmFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5JTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbkZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbk9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cblRIRSBTT0ZUV0FSRS5cblxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgb3MgPSByZXF1aXJlKCdvcycpO1xudmFyIGhhc0ZsYWcgPSByZXF1aXJlKCcuL2hhcy1mbGFnLmpzJyk7XG5cbnZhciBlbnYgPSBwcm9jZXNzLmVudjtcblxudmFyIGZvcmNlQ29sb3IgPSB2b2lkIDA7XG5pZiAoaGFzRmxhZygnbm8tY29sb3InKSB8fCBoYXNGbGFnKCduby1jb2xvcnMnKSB8fCBoYXNGbGFnKCdjb2xvcj1mYWxzZScpKSB7XG4gIGZvcmNlQ29sb3IgPSBmYWxzZTtcbn0gZWxzZSBpZiAoaGFzRmxhZygnY29sb3InKSB8fCBoYXNGbGFnKCdjb2xvcnMnKSB8fCBoYXNGbGFnKCdjb2xvcj10cnVlJylcbiAgICAgICAgICAgfHwgaGFzRmxhZygnY29sb3I9YWx3YXlzJykpIHtcbiAgZm9yY2VDb2xvciA9IHRydWU7XG59XG5pZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcbiAgZm9yY2VDb2xvciA9IGVudi5GT1JDRV9DT0xPUi5sZW5ndGggPT09IDBcbiAgICB8fCBwYXJzZUludChlbnYuRk9SQ0VfQ09MT1IsIDEwKSAhPT0gMDtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpIHtcbiAgaWYgKGxldmVsID09PSAwKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBsZXZlbDogbGV2ZWwsXG4gICAgaGFzQmFzaWM6IHRydWUsXG4gICAgaGFzMjU2OiBsZXZlbCA+PSAyLFxuICAgIGhhczE2bTogbGV2ZWwgPj0gMyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3VwcG9ydHNDb2xvcihzdHJlYW0pIHtcbiAgaWYgKGZvcmNlQ29sb3IgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICBpZiAoaGFzRmxhZygnY29sb3I9MTZtJykgfHwgaGFzRmxhZygnY29sb3I9ZnVsbCcpXG4gICAgICB8fCBoYXNGbGFnKCdjb2xvcj10cnVlY29sb3InKSkge1xuICAgIHJldHVybiAzO1xuICB9XG5cbiAgaWYgKGhhc0ZsYWcoJ2NvbG9yPTI1NicpKSB7XG4gICAgcmV0dXJuIDI7XG4gIH1cblxuICBpZiAoc3RyZWFtICYmICFzdHJlYW0uaXNUVFkgJiYgZm9yY2VDb2xvciAhPT0gdHJ1ZSkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIG1pbiA9IGZvcmNlQ29sb3IgPyAxIDogMDtcblxuICBpZiAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJykge1xuICAgIC8vIE5vZGUuanMgNy41LjAgaXMgdGhlIGZpcnN0IHZlcnNpb24gb2YgTm9kZS5qcyB0byBpbmNsdWRlIGEgcGF0Y2ggdG9cbiAgICAvLyBsaWJ1diB0aGF0IGVuYWJsZXMgMjU2IGNvbG9yIG91dHB1dCBvbiBXaW5kb3dzLiBBbnl0aGluZyBlYXJsaWVyIGFuZCBpdFxuICAgIC8vIHdvbid0IHdvcmsuIEhvd2V2ZXIsIGhlcmUgd2UgdGFyZ2V0IE5vZGUuanMgOCBhdCBtaW5pbXVtIGFzIGl0IGlzIGFuIExUU1xuICAgIC8vIHJlbGVhc2UsIGFuZCBOb2RlLmpzIDcgaXMgbm90LiBXaW5kb3dzIDEwIGJ1aWxkIDEwNTg2IGlzIHRoZSBmaXJzdFxuICAgIC8vIFdpbmRvd3MgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDI1NiBjb2xvcnMuIFdpbmRvd3MgMTAgYnVpbGQgMTQ5MzEgaXMgdGhlXG4gICAgLy8gZmlyc3QgcmVsZWFzZSB0aGF0IHN1cHBvcnRzIDE2bS9UcnVlQ29sb3IuXG4gICAgdmFyIG9zUmVsZWFzZSA9IG9zLnJlbGVhc2UoKS5zcGxpdCgnLicpO1xuICAgIGlmIChOdW1iZXIocHJvY2Vzcy52ZXJzaW9ucy5ub2RlLnNwbGl0KCcuJylbMF0pID49IDhcbiAgICAgICAgJiYgTnVtYmVyKG9zUmVsZWFzZVswXSkgPj0gMTAgJiYgTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTA1ODYpIHtcbiAgICAgIHJldHVybiBOdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxNDkzMSA/IDMgOiAyO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgaWYgKCdDSScgaW4gZW52KSB7XG4gICAgaWYgKFsnVFJBVklTJywgJ0NJUkNMRUNJJywgJ0FQUFZFWU9SJywgJ0dJVExBQl9DSSddLnNvbWUoZnVuY3Rpb24oc2lnbikge1xuICAgICAgcmV0dXJuIHNpZ24gaW4gZW52O1xuICAgIH0pIHx8IGVudi5DSV9OQU1FID09PSAnY29kZXNoaXAnKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWluO1xuICB9XG5cbiAgaWYgKCdURUFNQ0lUWV9WRVJTSU9OJyBpbiBlbnYpIHtcbiAgICByZXR1cm4gKC9eKDlcXC4oMCpbMS05XVxcZCopXFwufFxcZHsyLH1cXC4pLy50ZXN0KGVudi5URUFNQ0lUWV9WRVJTSU9OKSA/IDEgOiAwXG4gICAgKTtcbiAgfVxuXG4gIGlmICgnVEVSTV9QUk9HUkFNJyBpbiBlbnYpIHtcbiAgICB2YXIgdmVyc2lvbiA9IHBhcnNlSW50KChlbnYuVEVSTV9QUk9HUkFNX1ZFUlNJT04gfHwgJycpLnNwbGl0KCcuJylbMF0sIDEwKTtcblxuICAgIHN3aXRjaCAoZW52LlRFUk1fUFJPR1JBTSkge1xuICAgICAgY2FzZSAnaVRlcm0uYXBwJzpcbiAgICAgICAgcmV0dXJuIHZlcnNpb24gPj0gMyA/IDMgOiAyO1xuICAgICAgY2FzZSAnSHlwZXInOlxuICAgICAgICByZXR1cm4gMztcbiAgICAgIGNhc2UgJ0FwcGxlX1Rlcm1pbmFsJzpcbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICAvLyBObyBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgaWYgKC8tMjU2KGNvbG9yKT8kL2kudGVzdChlbnYuVEVSTSkpIHtcbiAgICByZXR1cm4gMjtcbiAgfVxuXG4gIGlmICgvXnNjcmVlbnxeeHRlcm18XnZ0MTAwfF5yeHZ0fGNvbG9yfGFuc2l8Y3lnd2lufGxpbnV4L2kudGVzdChlbnYuVEVSTSkpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmICgnQ09MT1JURVJNJyBpbiBlbnYpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIGlmIChlbnYuVEVSTSA9PT0gJ2R1bWInKSB7XG4gICAgcmV0dXJuIG1pbjtcbiAgfVxuXG4gIHJldHVybiBtaW47XG59XG5cbmZ1bmN0aW9uIGdldFN1cHBvcnRMZXZlbChzdHJlYW0pIHtcbiAgdmFyIGxldmVsID0gc3VwcG9ydHNDb2xvcihzdHJlYW0pO1xuICByZXR1cm4gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3VwcG9ydHNDb2xvcjogZ2V0U3VwcG9ydExldmVsLFxuICBzdGRvdXQ6IGdldFN1cHBvcnRMZXZlbChwcm9jZXNzLnN0ZG91dCksXG4gIHN0ZGVycjogZ2V0U3VwcG9ydExldmVsKHByb2Nlc3Muc3RkZXJyKSxcbn07XG4iLCIvL1xuLy8gUmVtYXJrOiBSZXF1aXJpbmcgdGhpcyBmaWxlIHdpbGwgdXNlIHRoZSBcInNhZmVcIiBjb2xvcnMgQVBJLFxuLy8gd2hpY2ggd2lsbCBub3QgdG91Y2ggU3RyaW5nLnByb3RvdHlwZS5cbi8vXG4vLyAgIHZhciBjb2xvcnMgPSByZXF1aXJlKCdjb2xvcnMvc2FmZScpO1xuLy8gICBjb2xvcnMucmVkKFwiZm9vXCIpXG4vL1xuLy9cbnZhciBjb2xvcnMgPSByZXF1aXJlKCcuL2xpYi9jb2xvcnMnKTtcbm1vZHVsZVsnZXhwb3J0cyddID0gY29sb3JzO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCIvKiBlc2xpbnQ6ZGlzYWJsZSAqL1xcblxcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXFxuXFxuLyogICAgICBTdGFydCBvZiBXZWJwYWNrIEhvdCBFeHRlbnNpb24gTWlkZGxld2FyZSAgICAgKi9cXG5cXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qICBUaGlzIHdpbGwgYmUgY29udmVydGVkIGludG8gYSBsb2Rhc2ggdGVtcGwuLCBhbnkgICovXFxuXFxuLyogIGV4dGVybmFsIGFyZ3VtZW50IG11c3QgYmUgcHJvdmlkZWQgdXNpbmcgaXQgICAgICAgKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcbihmdW5jdGlvbiAoX3dpbmRvdykge1xcbiAgdmFyIHdpbmRvdztcXG5cXG4gIGlmIChfd2luZG93LmRvY3VtZW50ICE9PSB1bmRlZmluZWQpIHtcXG4gICAgd2luZG93ID0gX3dpbmRvdztcXG4gIH1cXG5cXG4gIHZhciBpbmplY3Rpb25Db250ZXh0ID0gdGhpcyB8fCB7XFxuICAgIGJyb3dzZXI6IG51bGxcXG4gIH07XFxuXFxuICAoZnVuY3Rpb24gKCkge1xcbiAgICBcXFwiPCU9IHBvbHlmaWxsU291cmNlICU+XFxcIjtcXG4gIH0pKCk7XFxuXFxuICB2YXIgX3JlZiA9IGluamVjdGlvbkNvbnRleHQgfHwge30sXFxuICAgICAgYnJvd3NlciA9IF9yZWYuYnJvd3NlcjtcXG5cXG4gIHZhciBzaWduYWxzID0gSlNPTi5wYXJzZSgnPCU9IHNpZ25hbHMgJT4nKTtcXG4gIHZhciBjb25maWcgPSBKU09OLnBhcnNlKCc8JT0gY29uZmlnICU+Jyk7XFxuICB2YXIgcmVsb2FkUGFnZSA9IFxcXCI8JT0gcmVsb2FkUGFnZSAlPlxcXCIgPT09IFxcXCJ0cnVlXFxcIjtcXG4gIHZhciB3c0hvc3QgPSBcXFwiPCU9IFdTSG9zdCAlPlxcXCI7XFxuICB2YXIgU0lHTl9DSEFOR0UgPSBzaWduYWxzLlNJR05fQ0hBTkdFLFxcbiAgICAgIFNJR05fUkVMT0FEID0gc2lnbmFscy5TSUdOX1JFTE9BRCxcXG4gICAgICBTSUdOX1JFTE9BREVEID0gc2lnbmFscy5TSUdOX1JFTE9BREVELFxcbiAgICAgIFNJR05fTE9HID0gc2lnbmFscy5TSUdOX0xPRyxcXG4gICAgICBTSUdOX0NPTk5FQ1QgPSBzaWduYWxzLlNJR05fQ09OTkVDVDtcXG4gIHZhciBSRUNPTk5FQ1RfSU5URVJWQUwgPSBjb25maWcuUkVDT05ORUNUX0lOVEVSVkFMLFxcbiAgICAgIFNPQ0tFVF9FUlJfQ09ERV9SRUYgPSBjb25maWcuU09DS0VUX0VSUl9DT0RFX1JFRjtcXG4gIHZhciBleHRlbnNpb24gPSBicm93c2VyLmV4dGVuc2lvbixcXG4gICAgICBydW50aW1lID0gYnJvd3Nlci5ydW50aW1lLFxcbiAgICAgIHRhYnMgPSBicm93c2VyLnRhYnM7XFxuICB2YXIgbWFuaWZlc3QgPSBydW50aW1lLmdldE1hbmlmZXN0KCk7IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gSGVscGVyIGZ1bmN0aW9ucyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cXG5cXG4gIHZhciBmb3JtYXR0ZXIgPSBmdW5jdGlvbiBmb3JtYXR0ZXIobXNnKSB7XFxuICAgIHJldHVybiBcXFwiWyBXRVI6IFxcXCIuY29uY2F0KG1zZywgXFxcIiBdXFxcIik7XFxuICB9O1xcblxcbiAgdmFyIGxvZ2dlciA9IGZ1bmN0aW9uIGxvZ2dlcihtc2cpIHtcXG4gICAgdmFyIGxldmVsID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBcXFwiaW5mb1xcXCI7XFxuICAgIHJldHVybiBjb25zb2xlW2xldmVsXShmb3JtYXR0ZXIobXNnKSk7XFxuICB9O1xcblxcbiAgdmFyIHRpbWVGb3JtYXR0ZXIgPSBmdW5jdGlvbiB0aW1lRm9ybWF0dGVyKGRhdGUpIHtcXG4gICAgcmV0dXJuIGRhdGUudG9UaW1lU3RyaW5nKCkucmVwbGFjZSgvLiooXFxcXGR7Mn06XFxcXGR7Mn06XFxcXGR7Mn0pLiovLCBcXFwiJDFcXFwiKTtcXG4gIH07IC8vID09PT09PT09PT09PT09PT09PT09PT09PT09IENhbGxlZCBvbmx5IG9uIGNvbnRlbnQgc2NyaXB0cyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cXG5cXG5cXG4gIGZ1bmN0aW9uIGNvbnRlbnRTY3JpcHRXb3JrZXIoKSB7XFxuICAgIC8vIGNvbnNvbGUubG9nKCdjb250ZW50U2NyaXB0V29ya2VyJylcXG4gICAgcnVudGltZS5zZW5kTWVzc2FnZSh7XFxuICAgICAgdHlwZTogU0lHTl9DT05ORUNUXFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKG1zZykge1xcbiAgICAgIHJldHVybiBjb25zb2xlLmluZm8obXNnKTtcXG4gICAgfSk7XFxuICAgIHJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChfcmVmMikge1xcbiAgICAgIHZhciB0eXBlID0gX3JlZjIudHlwZSxcXG4gICAgICAgICAgcGF5bG9hZCA9IF9yZWYyLnBheWxvYWQ7XFxuXFxuICAgICAgc3dpdGNoICh0eXBlKSB7XFxuICAgICAgICBjYXNlIFNJR05fUkVMT0FEOlxcbiAgICAgICAgICBsb2dnZXIoXFxcIkRldGVjdGVkIENoYW5nZXMuIFJlbG9hZGluZy4uLlxcXCIpO1xcbiAgICAgICAgICByZWxvYWRQYWdlICYmICh3aW5kb3cgPT09IG51bGwgfHwgd2luZG93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCkpO1xcbiAgICAgICAgICBicmVhaztcXG5cXG4gICAgICAgIGNhc2UgU0lHTl9MT0c6XFxuICAgICAgICAgIGNvbnNvbGUuaW5mbyhwYXlsb2FkKTtcXG4gICAgICAgICAgYnJlYWs7XFxuXFxuICAgICAgICBkZWZhdWx0OlxcbiAgICAgICAgICBicmVhaztcXG4gICAgICB9XFxuICAgIH0pO1xcbiAgfSAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0gQ2FsbGVkIG9ubHkgb24gYmFja2dyb3VuZCBzY3JpcHRzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXFxuXFxuXFxuICBmdW5jdGlvbiBiYWNrZ3JvdW5kV29ya2VyKHNvY2tldCkge1xcbiAgICAvLyBjb25zb2xlLmxvZygnYmFja2dyb3VuZFdvcmtlcicpXFxuICAgIHJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChhY3Rpb24sIHNlbmRlcikge1xcbiAgICAgIGlmIChhY3Rpb24udHlwZSA9PT0gU0lHTl9DT05ORUNUKSB7XFxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZvcm1hdHRlcihcXFwiQ29ubmVjdGVkIHRvIFdlYiBFeHRlbnNpb24gSG90IFJlbG9hZGVyXFxcIikpO1xcbiAgICAgIH1cXG5cXG4gICAgICByZXR1cm4gdHJ1ZTtcXG4gICAgfSk7XFxuICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFxcXCJtZXNzYWdlXFxcIiwgZnVuY3Rpb24gKF9yZWYzKSB7XFxuICAgICAgdmFyIGRhdGEgPSBfcmVmMy5kYXRhO1xcblxcbiAgICAgIHZhciBfSlNPTiRwYXJzZSA9IEpTT04ucGFyc2UoZGF0YSksXFxuICAgICAgICAgIHR5cGUgPSBfSlNPTiRwYXJzZS50eXBlLFxcbiAgICAgICAgICBwYXlsb2FkID0gX0pTT04kcGFyc2UucGF5bG9hZDtcXG5cXG4gICAgICBpZiAodHlwZSA9PT0gU0lHTl9DSEFOR0UgJiYgKCFwYXlsb2FkIHx8ICFwYXlsb2FkLm9ubHlQYWdlQ2hhbmdlZCkpIHtcXG4gICAgICAgIHRhYnMucXVlcnkoe1xcbiAgICAgICAgICBzdGF0dXM6IFxcXCJjb21wbGV0ZVxcXCJcXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKGxvYWRlZFRhYnMpIHtcXG4gICAgICAgICAgbG9hZGVkVGFicy5mb3JFYWNoKGZ1bmN0aW9uICh0YWIpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGFiLmlkICYmIHRhYnMuc2VuZE1lc3NhZ2UodGFiLmlkLCB7XFxuICAgICAgICAgICAgICB0eXBlOiBTSUdOX1JFTE9BRFxcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9KTtcXG4gICAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xcbiAgICAgICAgICAgIHR5cGU6IFNJR05fUkVMT0FERUQsXFxuICAgICAgICAgICAgcGF5bG9hZDogZm9ybWF0dGVyKFxcXCJcXFwiLmNvbmNhdCh0aW1lRm9ybWF0dGVyKG5ldyBEYXRlKCkpLCBcXFwiIC0gXFxcIikuY29uY2F0KG1hbmlmZXN0Lm5hbWUsIFxcXCIgc3VjY2Vzc2Z1bGx5IHJlbG9hZGVkXFxcIikpXFxuICAgICAgICAgIH0pKTtcXG4gICAgICAgICAgcnVudGltZS5yZWxvYWQoKTtcXG4gICAgICAgIH0pO1xcbiAgICAgIH0gZWxzZSB7XFxuICAgICAgICBydW50aW1lLnNlbmRNZXNzYWdlKHtcXG4gICAgICAgICAgdHlwZTogdHlwZSxcXG4gICAgICAgICAgcGF5bG9hZDogcGF5bG9hZFxcbiAgICAgICAgfSk7XFxuICAgICAgfVxcbiAgICB9KTtcXG4gICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXFxcImNsb3NlXFxcIiwgZnVuY3Rpb24gKF9yZWY0KSB7XFxuICAgICAgdmFyIGNvZGUgPSBfcmVmNC5jb2RlO1xcbiAgICAgIGxvZ2dlcihcXFwiU29ja2V0IGNvbm5lY3Rpb24gY2xvc2VkLiBDb2RlIFxcXCIuY29uY2F0KGNvZGUsIFxcXCIuIFNlZSBtb3JlIGluIFxcXCIpLmNvbmNhdChTT0NLRVRfRVJSX0NPREVfUkVGKSwgXFxcIndhcm5cXFwiKTtcXG4gICAgICB2YXIgaW50SWQgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XFxuICAgICAgICBsb2dnZXIoXFxcIkF0dGVtcHRpbmcgdG8gcmVjb25uZWN0ICh0aXA6IENoZWNrIGlmIFdlYnBhY2sgaXMgcnVubmluZylcXFwiKTtcXG4gICAgICAgIHZhciB3cyA9IG5ldyBXZWJTb2NrZXQod3NIb3N0KTtcXG5cXG4gICAgICAgIHdzLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XFxuICAgICAgICAgIHJldHVybiBsb2dnZXIoXFxcIkVycm9yIHRyeWluZyB0byByZS1jb25uZWN0LiBSZWF0dGVtcHRpbmcgaW4gXFxcIi5jb25jYXQoUkVDT05ORUNUX0lOVEVSVkFMIC8gMTAwMCwgXFxcInNcXFwiKSwgXFxcIndhcm5cXFwiKTtcXG4gICAgICAgIH07XFxuXFxuICAgICAgICB3cy5hZGRFdmVudExpc3RlbmVyKFxcXCJvcGVuXFxcIiwgZnVuY3Rpb24gKCkge1xcbiAgICAgICAgICBjbGVhckludGVydmFsKGludElkKTtcXG4gICAgICAgICAgbG9nZ2VyKFxcXCJSZWNvbm5lY3RlZC4gUmVsb2FkaW5nIHBsdWdpblxcXCIpO1xcbiAgICAgICAgICBydW50aW1lLnJlbG9hZCgpO1xcbiAgICAgICAgfSk7XFxuICAgICAgfSwgUkVDT05ORUNUX0lOVEVSVkFMKTtcXG4gICAgfSk7XFxuICB9IC8vID09PT09PT09PT09PT09PT09PT09PT09PSBDYWxsZWQgb25seSBvbiBleHRlbnNpb24gcGFnZXMgdGhhdCBhcmUgbm90IHRoZSBiYWNrZ3JvdW5kID09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXFxuXFxuXFxuICBmdW5jdGlvbiBleHRlbnNpb25QYWdlV29ya2VyKCkge1xcbiAgICAvLyBjb25zb2xlLmxvZygnZXh0ZW5zaW9uUGFnZVdvcmtlcicpXFxuICAgIHJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xcbiAgICAgIHR5cGU6IFNJR05fQ09OTkVDVFxcbiAgICB9KS50aGVuKGZ1bmN0aW9uIChtc2cpIHtcXG4gICAgICByZXR1cm4gY29uc29sZS5pbmZvKG1zZyk7XFxuICAgIH0pO1xcbiAgICBydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoX3JlZjUpIHtcXG4gICAgICB2YXIgdHlwZSA9IF9yZWY1LnR5cGUsXFxuICAgICAgICAgIHBheWxvYWQgPSBfcmVmNS5wYXlsb2FkO1xcblxcbiAgICAgIHN3aXRjaCAodHlwZSkge1xcbiAgICAgICAgY2FzZSBTSUdOX0NIQU5HRTpcXG4gICAgICAgICAgbG9nZ2VyKFxcXCJEZXRlY3RlZCBDaGFuZ2VzLiBSZWxvYWRpbmcuLi5cXFwiKTtcXG4gICAgICAgICAgcmVsb2FkUGFnZSAmJiAod2luZG93ID09PSBudWxsIHx8IHdpbmRvdyA9PT0gdm9pZCAwID8gdm9pZCAwIDogd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpKTtcXG4gICAgICAgICAgYnJlYWs7XFxuXFxuICAgICAgICBjYXNlIFNJR05fTE9HOlxcbiAgICAgICAgICBjb25zb2xlLmluZm8ocGF5bG9hZCk7XFxuICAgICAgICAgIGJyZWFrO1xcblxcbiAgICAgICAgZGVmYXVsdDpcXG4gICAgICAgICAgYnJlYWs7XFxuICAgICAgfVxcbiAgICB9KTtcXG4gIH0gLy8gPT09PT09PT09PT09PT09PT09PT09PT0gQm9vdHN0cmFwcyB0aGUgbWlkZGxld2FyZSA9PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cXG5cXG5cXG4gIHJ1bnRpbWUucmVsb2FkID8gIXdpbmRvdyA/IGJhY2tncm91bmRXb3JrZXIobmV3IFdlYlNvY2tldCh3c0hvc3QpKSA6IGV4dGVuc2lvblBhZ2VXb3JrZXIoKSA6IGNvbnRlbnRTY3JpcHRXb3JrZXIoKTtcXG59KSh0aGlzKTtcXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xcblxcbi8qIEVuZCBvZiBXZWJwYWNrIEhvdCBFeHRlbnNpb24gTWlkZGxld2FyZSAgKi9cXG5cXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcXFwiZnVuY3Rpb25cXFwiICYmIGRlZmluZS5hbWQpIHtcXG4gICAgZGVmaW5lKFxcXCJ3ZWJleHRlbnNpb24tcG9seWZpbGxcXFwiLCBbXFxcIm1vZHVsZVxcXCJdLCBmYWN0b3J5KTtcXG4gIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgIT09IFxcXCJ1bmRlZmluZWRcXFwiKSB7XFxuICAgIGZhY3RvcnkobW9kdWxlKTtcXG4gIH0gZWxzZSB7XFxuICAgIHZhciBtb2QgPSB7XFxuICAgICAgZXhwb3J0czoge31cXG4gICAgfTtcXG4gICAgZmFjdG9yeShtb2QpO1xcbiAgICBnbG9iYWwuYnJvd3NlciA9IG1vZC5leHBvcnRzO1xcbiAgfVxcbn0pKHR5cGVvZiBnbG9iYWxUaGlzICE9PSBcXFwidW5kZWZpbmVkXFxcIiA/IGdsb2JhbFRoaXMgOiB0eXBlb2Ygc2VsZiAhPT0gXFxcInVuZGVmaW5lZFxcXCIgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKG1vZHVsZSkge1xcbiAgLyogd2ViZXh0ZW5zaW9uLXBvbHlmaWxsIC0gdjAuOC4wIC0gVHVlIEFwciAyMCAyMDIxIDExOjI3OjM4ICovXFxuXFxuICAvKiAtKi0gTW9kZTogaW5kZW50LXRhYnMtbW9kZTogbmlsOyBqcy1pbmRlbnQtbGV2ZWw6IDIgLSotICovXFxuXFxuICAvKiB2aW06IHNldCBzdHM9MiBzdz0yIGV0IHR3PTgwOiAqL1xcblxcbiAgLyogVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xcbiAgICogTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xcbiAgICogZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy4gKi9cXG4gIFxcXCJ1c2Ugc3RyaWN0XFxcIjtcXG5cXG4gIGlmICh0eXBlb2YgYnJvd3NlciA9PT0gXFxcInVuZGVmaW5lZFxcXCIgfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKGJyb3dzZXIpICE9PSBPYmplY3QucHJvdG90eXBlKSB7XFxuICAgIGNvbnN0IENIUk9NRV9TRU5EX01FU1NBR0VfQ0FMTEJBQ0tfTk9fUkVTUE9OU0VfTUVTU0FHRSA9IFxcXCJUaGUgbWVzc2FnZSBwb3J0IGNsb3NlZCBiZWZvcmUgYSByZXNwb25zZSB3YXMgcmVjZWl2ZWQuXFxcIjtcXG4gICAgY29uc3QgU0VORF9SRVNQT05TRV9ERVBSRUNBVElPTl9XQVJOSU5HID0gXFxcIlJldHVybmluZyBhIFByb21pc2UgaXMgdGhlIHByZWZlcnJlZCB3YXkgdG8gc2VuZCBhIHJlcGx5IGZyb20gYW4gb25NZXNzYWdlL29uTWVzc2FnZUV4dGVybmFsIGxpc3RlbmVyLCBhcyB0aGUgc2VuZFJlc3BvbnNlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIHRoZSBzcGVjcyAoU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2RvY3MvTW96aWxsYS9BZGQtb25zL1dlYkV4dGVuc2lvbnMvQVBJL3J1bnRpbWUvb25NZXNzYWdlKVxcXCI7IC8vIFdyYXBwaW5nIHRoZSBidWxrIG9mIHRoaXMgcG9seWZpbGwgaW4gYSBvbmUtdGltZS11c2UgZnVuY3Rpb24gaXMgYSBtaW5vclxcbiAgICAvLyBvcHRpbWl6YXRpb24gZm9yIEZpcmVmb3guIFNpbmNlIFNwaWRlcm1vbmtleSBkb2VzIG5vdCBmdWxseSBwYXJzZSB0aGVcXG4gICAgLy8gY29udGVudHMgb2YgYSBmdW5jdGlvbiB1bnRpbCB0aGUgZmlyc3QgdGltZSBpdCdzIGNhbGxlZCwgYW5kIHNpbmNlIGl0IHdpbGxcXG4gICAgLy8gbmV2ZXIgYWN0dWFsbHkgbmVlZCB0byBiZSBjYWxsZWQsIHRoaXMgYWxsb3dzIHRoZSBwb2x5ZmlsbCB0byBiZSBpbmNsdWRlZFxcbiAgICAvLyBpbiBGaXJlZm94IG5lYXJseSBmb3IgZnJlZS5cXG5cXG4gICAgY29uc3Qgd3JhcEFQSXMgPSBleHRlbnNpb25BUElzID0+IHtcXG4gICAgICAvLyBOT1RFOiBhcGlNZXRhZGF0YSBpcyBhc3NvY2lhdGVkIHRvIHRoZSBjb250ZW50IG9mIHRoZSBhcGktbWV0YWRhdGEuanNvbiBmaWxlXFxuICAgICAgLy8gYXQgYnVpbGQgdGltZSBieSByZXBsYWNpbmcgdGhlIGZvbGxvd2luZyBcXFwiaW5jbHVkZVxcXCIgd2l0aCB0aGUgY29udGVudCBvZiB0aGVcXG4gICAgICAvLyBKU09OIGZpbGUuXFxuICAgICAgY29uc3QgYXBpTWV0YWRhdGEgPSB7XFxuICAgICAgICBcXFwiYWxhcm1zXFxcIjoge1xcbiAgICAgICAgICBcXFwiY2xlYXJcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiY2xlYXJBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiYm9va21hcmtzXFxcIjoge1xcbiAgICAgICAgICBcXFwiY3JlYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRDaGlsZHJlblxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRSZWNlbnRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0U3ViVHJlZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRUcmVlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIm1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAyLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZVRyZWVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2VhcmNoXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInVwZGF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiYnJvd3NlckFjdGlvblxcXCI6IHtcXG4gICAgICAgICAgXFxcImRpc2FibGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJlbmFibGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRCYWRnZUJhY2tncm91bmRDb2xvclxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRCYWRnZVRleHRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0UG9wdXBcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0VGl0bGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwib3BlblBvcHVwXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldEJhZGdlQmFja2dyb3VuZENvbG9yXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0QmFkZ2VUZXh0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0SWNvblxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRQb3B1cFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldFRpdGxlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImJyb3dzaW5nRGF0YVxcXCI6IHtcXG4gICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVDYWNoZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVDb29raWVzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZURvd25sb2Fkc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVGb3JtRGF0YVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVIaXN0b3J5XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZUxvY2FsU3RvcmFnZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVQYXNzd29yZHNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlUGx1Z2luRGF0YVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXR0aW5nc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiY29tbWFuZHNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJnZXRBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImNvbnRleHRNZW51c1xcXCI6IHtcXG4gICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwidXBkYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJjb29raWVzXFxcIjoge1xcbiAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBbGxDb29raWVTdG9yZXNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiZGV2dG9vbHNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJpbnNwZWN0ZWRXaW5kb3dcXFwiOiB7XFxuICAgICAgICAgICAgXFxcImV2YWxcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgICBcXFwic2luZ2xlQ2FsbGJhY2tBcmdcXFwiOiBmYWxzZVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInBhbmVsc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwiY3JlYXRlXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAzLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAzLFxcbiAgICAgICAgICAgICAgXFxcInNpbmdsZUNhbGxiYWNrQXJnXFxcIjogdHJ1ZVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcImVsZW1lbnRzXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcImNyZWF0ZVNpZGViYXJQYW5lXFxcIjoge1xcbiAgICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJkb3dubG9hZHNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJjYW5jZWxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZG93bmxvYWRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZXJhc2VcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0RmlsZUljb25cXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwib3BlblxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInBhdXNlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbW92ZUZpbGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVzdW1lXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNlYXJjaFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzaG93XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcImZhbGxiYWNrVG9Ob0NhbGxiYWNrXFxcIjogdHJ1ZVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcImV4dGVuc2lvblxcXCI6IHtcXG4gICAgICAgICAgXFxcImlzQWxsb3dlZEZpbGVTY2hlbWVBY2Nlc3NcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiaXNBbGxvd2VkSW5jb2duaXRvQWNjZXNzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJoaXN0b3J5XFxcIjoge1xcbiAgICAgICAgICBcXFwiYWRkVXJsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImRlbGV0ZUFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJkZWxldGVSYW5nZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJkZWxldGVVcmxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0VmlzaXRzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNlYXJjaFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiaTE4blxcXCI6IHtcXG4gICAgICAgICAgXFxcImRldGVjdExhbmd1YWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEFjY2VwdExhbmd1YWdlc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiaWRlbnRpdHlcXFwiOiB7XFxuICAgICAgICAgIFxcXCJsYXVuY2hXZWJBdXRoRmxvd1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwiaWRsZVxcXCI6IHtcXG4gICAgICAgICAgXFxcInF1ZXJ5U3RhdGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcIm1hbmFnZW1lbnRcXFwiOiB7XFxuICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0QWxsXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFNlbGZcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0RW5hYmxlZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJ1bmluc3RhbGxTZWxmXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJub3RpZmljYXRpb25zXFxcIjoge1xcbiAgICAgICAgICBcXFwiY2xlYXJcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiY3JlYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldEFsbFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRQZXJtaXNzaW9uTGV2ZWxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwidXBkYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJwYWdlQWN0aW9uXFxcIjoge1xcbiAgICAgICAgICBcXFwiZ2V0UG9wdXBcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0VGl0bGVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiaGlkZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldEljb25cXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0UG9wdXBcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRUaXRsZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJmYWxsYmFja1RvTm9DYWxsYmFja1xcXCI6IHRydWVcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNob3dcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwiZmFsbGJhY2tUb05vQ2FsbGJhY2tcXFwiOiB0cnVlXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwicGVybWlzc2lvbnNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJjb250YWluc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlcXVlc3RcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcInJ1bnRpbWVcXFwiOiB7XFxuICAgICAgICAgIFxcXCJnZXRCYWNrZ3JvdW5kUGFnZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRQbGF0Zm9ybUluZm9cXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwib3Blbk9wdGlvbnNQYWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlcXVlc3RVcGRhdGVDaGVja1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZW5kTWVzc2FnZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAzXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZW5kTmF0aXZlTWVzc2FnZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDIsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzZXRVbmluc3RhbGxVUkxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcInNlc3Npb25zXFxcIjoge1xcbiAgICAgICAgICBcXFwiZ2V0RGV2aWNlc1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRSZWNlbnRseUNsb3NlZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZXN0b3JlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJzdG9yYWdlXFxcIjoge1xcbiAgICAgICAgICBcXFwibG9jYWxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcImNsZWFyXFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAwXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwiZ2V0XFxcIjoge1xcbiAgICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBcXFwiZ2V0Qnl0ZXNJblVzZVxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcInJlbW92ZVxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcInNldFxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcIm1hbmFnZWRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcImdldEJ5dGVzSW5Vc2VcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJzeW5jXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJjbGVhclxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgXFxcImdldEJ5dGVzSW5Vc2VcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIFxcXCJzZXRcXFwiOiB7XFxuICAgICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwidGFic1xcXCI6IHtcXG4gICAgICAgICAgXFxcImNhcHR1cmVWaXNpYmxlVGFiXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImNyZWF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJkZXRlY3RMYW5ndWFnZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJkaXNjYXJkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImR1cGxpY2F0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJleGVjdXRlU2NyaXB0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRDdXJyZW50XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFpvb21cXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0Wm9vbVNldHRpbmdzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdvQmFja1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnb0ZvcndhcmRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiaGlnaGxpZ2h0XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImluc2VydENTU1xcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJtb3ZlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInF1ZXJ5XFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInJlbG9hZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwicmVtb3ZlQ1NTXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNlbmRNZXNzYWdlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDNcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInNldFpvb21cXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMlxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwic2V0Wm9vbVNldHRpbmdzXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMSxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcInVwZGF0ZVxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBcXFwidG9wU2l0ZXNcXFwiOiB7XFxuICAgICAgICAgIFxcXCJnZXRcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMFxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcIndlYk5hdmlnYXRpb25cXFwiOiB7XFxuICAgICAgICAgIFxcXCJnZXRBbGxGcmFtZXNcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0RnJhbWVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgXFxcIndlYlJlcXVlc3RcXFwiOiB7XFxuICAgICAgICAgIFxcXCJoYW5kbGVyQmVoYXZpb3JDaGFuZ2VkXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDBcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIFxcXCJ3aW5kb3dzXFxcIjoge1xcbiAgICAgICAgICBcXFwiY3JlYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMCxcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDFcXG4gICAgICAgICAgfSxcXG4gICAgICAgICAgXFxcImdldFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDEsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAyXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRBbGxcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAwLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwiZ2V0Q3VycmVudFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJnZXRMYXN0Rm9jdXNlZFxcXCI6IHtcXG4gICAgICAgICAgICBcXFwibWluQXJnc1xcXCI6IDAsXFxuICAgICAgICAgICAgXFxcIm1heEFyZ3NcXFwiOiAxXFxuICAgICAgICAgIH0sXFxuICAgICAgICAgIFxcXCJyZW1vdmVcXFwiOiB7XFxuICAgICAgICAgICAgXFxcIm1pbkFyZ3NcXFwiOiAxLFxcbiAgICAgICAgICAgIFxcXCJtYXhBcmdzXFxcIjogMVxcbiAgICAgICAgICB9LFxcbiAgICAgICAgICBcXFwidXBkYXRlXFxcIjoge1xcbiAgICAgICAgICAgIFxcXCJtaW5BcmdzXFxcIjogMixcXG4gICAgICAgICAgICBcXFwibWF4QXJnc1xcXCI6IDJcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH07XFxuXFxuICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaU1ldGFkYXRhKS5sZW5ndGggPT09IDApIHtcXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcXFwiYXBpLW1ldGFkYXRhLmpzb24gaGFzIG5vdCBiZWVuIGluY2x1ZGVkIGluIGJyb3dzZXItcG9seWZpbGxcXFwiKTtcXG4gICAgICB9XFxuICAgICAgLyoqXFxuICAgICAgICogQSBXZWFrTWFwIHN1YmNsYXNzIHdoaWNoIGNyZWF0ZXMgYW5kIHN0b3JlcyBhIHZhbHVlIGZvciBhbnkga2V5IHdoaWNoIGRvZXNcXG4gICAgICAgKiBub3QgZXhpc3Qgd2hlbiBhY2Nlc3NlZCwgYnV0IGJlaGF2ZXMgZXhhY3RseSBhcyBhbiBvcmRpbmFyeSBXZWFrTWFwXFxuICAgICAgICogb3RoZXJ3aXNlLlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY3JlYXRlSXRlbVxcbiAgICAgICAqICAgICAgICBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGluIG9yZGVyIHRvIGNyZWF0ZSB0aGUgdmFsdWUgZm9yIGFueVxcbiAgICAgICAqICAgICAgICBrZXkgd2hpY2ggZG9lcyBub3QgZXhpc3QsIHRoZSBmaXJzdCB0aW1lIGl0IGlzIGFjY2Vzc2VkLiBUaGVcXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcmVjZWl2ZXMsIGFzIGl0cyBvbmx5IGFyZ3VtZW50LCB0aGUga2V5IGJlaW5nIGNyZWF0ZWQuXFxuICAgICAgICovXFxuXFxuXFxuICAgICAgY2xhc3MgRGVmYXVsdFdlYWtNYXAgZXh0ZW5kcyBXZWFrTWFwIHtcXG4gICAgICAgIGNvbnN0cnVjdG9yKGNyZWF0ZUl0ZW0sIGl0ZW1zID0gdW5kZWZpbmVkKSB7XFxuICAgICAgICAgIHN1cGVyKGl0ZW1zKTtcXG4gICAgICAgICAgdGhpcy5jcmVhdGVJdGVtID0gY3JlYXRlSXRlbTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGdldChrZXkpIHtcXG4gICAgICAgICAgaWYgKCF0aGlzLmhhcyhrZXkpKSB7XFxuICAgICAgICAgICAgdGhpcy5zZXQoa2V5LCB0aGlzLmNyZWF0ZUl0ZW0oa2V5KSk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgcmV0dXJuIHN1cGVyLmdldChrZXkpO1xcbiAgICAgICAgfVxcblxcbiAgICAgIH1cXG4gICAgICAvKipcXG4gICAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG9iamVjdCBpcyBhbiBvYmplY3Qgd2l0aCBhIGB0aGVuYCBtZXRob2QsIGFuZCBjYW5cXG4gICAgICAgKiB0aGVyZWZvcmUgYmUgYXNzdW1lZCB0byBiZWhhdmUgYXMgYSBQcm9taXNlLlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cXG4gICAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdGhlbmFibGUuXFxuICAgICAgICovXFxuXFxuXFxuICAgICAgY29uc3QgaXNUaGVuYWJsZSA9IHZhbHVlID0+IHtcXG4gICAgICAgIHJldHVybiB2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09IFxcXCJvYmplY3RcXFwiICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSBcXFwiZnVuY3Rpb25cXFwiO1xcbiAgICAgIH07XFxuICAgICAgLyoqXFxuICAgICAgICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoLCB3aGVuIGNhbGxlZCwgd2lsbCByZXNvbHZlIG9yIHJlamVjdFxcbiAgICAgICAqIHRoZSBnaXZlbiBwcm9taXNlIGJhc2VkIG9uIGhvdyBpdCBpcyBjYWxsZWQ6XFxuICAgICAgICpcXG4gICAgICAgKiAtIElmLCB3aGVuIGNhbGxlZCwgYGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcmAgY29udGFpbnMgYSBub24tbnVsbCBvYmplY3QsXFxuICAgICAgICogICB0aGUgcHJvbWlzZSBpcyByZWplY3RlZCB3aXRoIHRoYXQgdmFsdWUuXFxuICAgICAgICogLSBJZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkIHdpdGggZXhhY3RseSBvbmUgYXJndW1lbnQsIHRoZSBwcm9taXNlIGlzXFxuICAgICAgICogICByZXNvbHZlZCB0byB0aGF0IHZhbHVlLlxcbiAgICAgICAqIC0gT3RoZXJ3aXNlLCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB0byBhbiBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGVcXG4gICAgICAgKiAgIGZ1bmN0aW9uJ3MgYXJndW1lbnRzLlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHByb21pc2VcXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gYW5kIHJlamVjdGlvbiBmdW5jdGlvbnMgb2YgYVxcbiAgICAgICAqICAgICAgICBwcm9taXNlLlxcbiAgICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHByb21pc2UucmVzb2x2ZVxcbiAgICAgICAqICAgICAgICBUaGUgcHJvbWlzZSdzIHJlc29sdXRpb24gZnVuY3Rpb24uXFxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gcHJvbWlzZS5yZWplY3RcXG4gICAgICAgKiAgICAgICAgVGhlIHByb21pc2UncyByZWplY3Rpb24gZnVuY3Rpb24uXFxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXFxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSB3cmFwcGVkIG1ldGhvZCB3aGljaCBoYXMgY3JlYXRlZCB0aGUgY2FsbGJhY2suXFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XFxuICAgICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXFxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXFxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcXG4gICAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXFxuICAgICAgICpcXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259XFxuICAgICAgICogICAgICAgIFRoZSBnZW5lcmF0ZWQgY2FsbGJhY2sgZnVuY3Rpb24uXFxuICAgICAgICovXFxuXFxuXFxuICAgICAgY29uc3QgbWFrZUNhbGxiYWNrID0gKHByb21pc2UsIG1ldGFkYXRhKSA9PiB7XFxuICAgICAgICByZXR1cm4gKC4uLmNhbGxiYWNrQXJncykgPT4ge1xcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvcikge1xcbiAgICAgICAgICAgIHByb21pc2UucmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcXG4gICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZyB8fCBjYWxsYmFja0FyZ3MubGVuZ3RoIDw9IDEgJiYgbWV0YWRhdGEuc2luZ2xlQ2FsbGJhY2tBcmcgIT09IGZhbHNlKSB7XFxuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJnc1swXSk7XFxuICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrQXJncyk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH07XFxuICAgICAgfTtcXG5cXG4gICAgICBjb25zdCBwbHVyYWxpemVBcmd1bWVudHMgPSBudW1BcmdzID0+IG51bUFyZ3MgPT0gMSA/IFxcXCJhcmd1bWVudFxcXCIgOiBcXFwiYXJndW1lbnRzXFxcIjtcXG4gICAgICAvKipcXG4gICAgICAgKiBDcmVhdGVzIGEgd3JhcHBlciBmdW5jdGlvbiBmb3IgYSBtZXRob2Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZSBhbmQgbWV0YWRhdGEuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxcbiAgICAgICAqICAgICAgICBUaGUgbmFtZSBvZiB0aGUgbWV0aG9kIHdoaWNoIGlzIGJlaW5nIHdyYXBwZWQuXFxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IG1ldGFkYXRhXFxuICAgICAgICogICAgICAgIE1ldGFkYXRhIGFib3V0IHRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC5cXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1pbkFyZ3NcXG4gICAgICAgKiAgICAgICAgVGhlIG1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtdXN0IGJlIHBhc3NlZCB0byB0aGVcXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24uIElmIGNhbGxlZCB3aXRoIGZld2VyIHRoYW4gdGhpcyBudW1iZXIgb2YgYXJndW1lbnRzLCB0aGVcXG4gICAgICAgKiAgICAgICAgd3JhcHBlciB3aWxsIHJhaXNlIGFuIGV4Y2VwdGlvbi5cXG4gICAgICAgKiBAcGFyYW0ge2ludGVnZXJ9IG1ldGFkYXRhLm1heEFyZ3NcXG4gICAgICAgKiAgICAgICAgVGhlIG1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cyB3aGljaCBtYXkgYmUgcGFzc2VkIHRvIHRoZVxcbiAgICAgICAqICAgICAgICBmdW5jdGlvbi4gSWYgY2FsbGVkIHdpdGggbW9yZSB0aGFuIHRoaXMgbnVtYmVyIG9mIGFyZ3VtZW50cywgdGhlXFxuICAgICAgICogICAgICAgIHdyYXBwZXIgd2lsbCByYWlzZSBhbiBleGNlcHRpb24uXFxuICAgICAgICogQHBhcmFtIHtib29sZWFufSBtZXRhZGF0YS5zaW5nbGVDYWxsYmFja0FyZ1xcbiAgICAgICAqICAgICAgICBXaGV0aGVyIG9yIG5vdCB0aGUgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIG9ubHkgdGhlIGZpcnN0XFxuICAgICAgICogICAgICAgIGFyZ3VtZW50IG9mIHRoZSBjYWxsYmFjaywgYWx0ZXJuYXRpdmVseSBhbiBhcnJheSBvZiBhbGwgdGhlXFxuICAgICAgICogICAgICAgIGNhbGxiYWNrIGFyZ3VtZW50cyBpcyByZXNvbHZlZC4gQnkgZGVmYXVsdCwgaWYgdGhlIGNhbGxiYWNrXFxuICAgICAgICogICAgICAgIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aCBvbmx5IGEgc2luZ2xlIGFyZ3VtZW50LCB0aGF0IHdpbGwgYmVcXG4gICAgICAgKiAgICAgICAgcmVzb2x2ZWQgdG8gdGhlIHByb21pc2UsIHdoaWxlIGFsbCBhcmd1bWVudHMgd2lsbCBiZSByZXNvbHZlZCBhc1xcbiAgICAgICAqICAgICAgICBhbiBhcnJheSBpZiBtdWx0aXBsZSBhcmUgZ2l2ZW4uXFxuICAgICAgICpcXG4gICAgICAgKiBAcmV0dXJucyB7ZnVuY3Rpb24ob2JqZWN0LCAuLi4qKX1cXG4gICAgICAgKiAgICAgICBUaGUgZ2VuZXJhdGVkIHdyYXBwZXIgZnVuY3Rpb24uXFxuICAgICAgICovXFxuXFxuXFxuICAgICAgY29uc3Qgd3JhcEFzeW5jRnVuY3Rpb24gPSAobmFtZSwgbWV0YWRhdGEpID0+IHtcXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBhc3luY0Z1bmN0aW9uV3JhcHBlcih0YXJnZXQsIC4uLmFyZ3MpIHtcXG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgbWV0YWRhdGEubWluQXJncykge1xcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbGVhc3QgJHttZXRhZGF0YS5taW5BcmdzfSAke3BsdXJhbGl6ZUFyZ3VtZW50cyhtZXRhZGF0YS5taW5BcmdzKX0gZm9yICR7bmFtZX0oKSwgZ290ICR7YXJncy5sZW5ndGh9YCk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gbWV0YWRhdGEubWF4QXJncykge1xcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgYXQgbW9zdCAke21ldGFkYXRhLm1heEFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1heEFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xcbiAgICAgICAgICAgIGlmIChtZXRhZGF0YS5mYWxsYmFja1RvTm9DYWxsYmFjaykge1xcbiAgICAgICAgICAgICAgLy8gVGhpcyBBUEkgbWV0aG9kIGhhcyBjdXJyZW50bHkgbm8gY2FsbGJhY2sgb24gQ2hyb21lLCBidXQgaXQgcmV0dXJuIGEgcHJvbWlzZSBvbiBGaXJlZm94LFxcbiAgICAgICAgICAgICAgLy8gYW5kIHNvIHRoZSBwb2x5ZmlsbCB3aWxsIHRyeSB0byBjYWxsIGl0IHdpdGggYSBjYWxsYmFjayBmaXJzdCwgYW5kIGl0IHdpbGwgZmFsbGJhY2tcXG4gICAgICAgICAgICAgIC8vIHRvIG5vdCBwYXNzaW5nIHRoZSBjYWxsYmFjayBpZiB0aGUgZmlyc3QgY2FsbCBmYWlscy5cXG4gICAgICAgICAgICAgIHRyeSB7XFxuICAgICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xcbiAgICAgICAgICAgICAgICAgIHJlc29sdmUsXFxuICAgICAgICAgICAgICAgICAgcmVqZWN0XFxuICAgICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XFxuICAgICAgICAgICAgICB9IGNhdGNoIChjYkVycm9yKSB7XFxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtuYW1lfSBBUEkgbWV0aG9kIGRvZXNuJ3Qgc2VlbSB0byBzdXBwb3J0IHRoZSBjYWxsYmFjayBwYXJhbWV0ZXIsIGAgKyBcXFwiZmFsbGluZyBiYWNrIHRvIGNhbGwgaXQgd2l0aG91dCBhIGNhbGxiYWNrOiBcXFwiLCBjYkVycm9yKTtcXG4gICAgICAgICAgICAgICAgdGFyZ2V0W25hbWVdKC4uLmFyZ3MpOyAvLyBVcGRhdGUgdGhlIEFQSSBtZXRob2QgbWV0YWRhdGEsIHNvIHRoYXQgdGhlIG5leHQgQVBJIGNhbGxzIHdpbGwgbm90IHRyeSB0b1xcbiAgICAgICAgICAgICAgICAvLyB1c2UgdGhlIHVuc3VwcG9ydGVkIGNhbGxiYWNrIGFueW1vcmUuXFxuXFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLmZhbGxiYWNrVG9Ob0NhbGxiYWNrID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgIG1ldGFkYXRhLm5vQ2FsbGJhY2sgPSB0cnVlO1xcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSBlbHNlIGlmIChtZXRhZGF0YS5ub0NhbGxiYWNrKSB7XFxuICAgICAgICAgICAgICB0YXJnZXRbbmFtZV0oLi4uYXJncyk7XFxuICAgICAgICAgICAgICByZXNvbHZlKCk7XFxuICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgIHRhcmdldFtuYW1lXSguLi5hcmdzLCBtYWtlQ2FsbGJhY2soe1xcbiAgICAgICAgICAgICAgICByZXNvbHZlLFxcbiAgICAgICAgICAgICAgICByZWplY3RcXG4gICAgICAgICAgICAgIH0sIG1ldGFkYXRhKSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9KTtcXG4gICAgICAgIH07XFxuICAgICAgfTtcXG4gICAgICAvKipcXG4gICAgICAgKiBXcmFwcyBhbiBleGlzdGluZyBtZXRob2Qgb2YgdGhlIHRhcmdldCBvYmplY3QsIHNvIHRoYXQgY2FsbHMgdG8gaXQgYXJlXFxuICAgICAgICogaW50ZXJjZXB0ZWQgYnkgdGhlIGdpdmVuIHdyYXBwZXIgZnVuY3Rpb24uIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHJlY2VpdmVzLFxcbiAgICAgICAqIGFzIGl0cyBmaXJzdCBhcmd1bWVudCwgdGhlIG9yaWdpbmFsIGB0YXJnZXRgIG9iamVjdCwgZm9sbG93ZWQgYnkgZWFjaCBvZlxcbiAgICAgICAqIHRoZSBhcmd1bWVudHMgcGFzc2VkIHRvIHRoZSBvcmlnaW5hbCBtZXRob2QuXFxuICAgICAgICpcXG4gICAgICAgKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0XFxuICAgICAgICogICAgICAgIFRoZSBvcmlnaW5hbCB0YXJnZXQgb2JqZWN0IHRoYXQgdGhlIHdyYXBwZWQgbWV0aG9kIGJlbG9uZ3MgdG8uXFxuICAgICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbWV0aG9kXFxuICAgICAgICogICAgICAgIFRoZSBtZXRob2QgYmVpbmcgd3JhcHBlZC4gVGhpcyBpcyB1c2VkIGFzIHRoZSB0YXJnZXQgb2YgdGhlIFByb3h5XFxuICAgICAgICogICAgICAgIG9iamVjdCB3aGljaCBpcyBjcmVhdGVkIHRvIHdyYXAgdGhlIG1ldGhvZC5cXG4gICAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSB3cmFwcGVyXFxuICAgICAgICogICAgICAgIFRoZSB3cmFwcGVyIGZ1bmN0aW9uIHdoaWNoIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiBhIGRpcmVjdCBpbnZvY2F0aW9uXFxuICAgICAgICogICAgICAgIG9mIHRoZSB3cmFwcGVkIG1ldGhvZC5cXG4gICAgICAgKlxcbiAgICAgICAqIEByZXR1cm5zIHtQcm94eTxmdW5jdGlvbj59XFxuICAgICAgICogICAgICAgIEEgUHJveHkgb2JqZWN0IGZvciB0aGUgZ2l2ZW4gbWV0aG9kLCB3aGljaCBpbnZva2VzIHRoZSBnaXZlbiB3cmFwcGVyXFxuICAgICAgICogICAgICAgIG1ldGhvZCBpbiBpdHMgcGxhY2UuXFxuICAgICAgICovXFxuXFxuXFxuICAgICAgY29uc3Qgd3JhcE1ldGhvZCA9ICh0YXJnZXQsIG1ldGhvZCwgd3JhcHBlcikgPT4ge1xcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eShtZXRob2QsIHtcXG4gICAgICAgICAgYXBwbHkodGFyZ2V0TWV0aG9kLCB0aGlzT2JqLCBhcmdzKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHdyYXBwZXIuY2FsbCh0aGlzT2JqLCB0YXJnZXQsIC4uLmFyZ3MpO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICB9KTtcXG4gICAgICB9O1xcblxcbiAgICAgIGxldCBoYXNPd25Qcm9wZXJ0eSA9IEZ1bmN0aW9uLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5KTtcXG4gICAgICAvKipcXG4gICAgICAgKiBXcmFwcyBhbiBvYmplY3QgaW4gYSBQcm94eSB3aGljaCBpbnRlcmNlcHRzIGFuZCB3cmFwcyBjZXJ0YWluIG1ldGhvZHNcXG4gICAgICAgKiBiYXNlZCBvbiB0aGUgZ2l2ZW4gYHdyYXBwZXJzYCBhbmQgYG1ldGFkYXRhYCBvYmplY3RzLlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IHRhcmdldFxcbiAgICAgICAqICAgICAgICBUaGUgdGFyZ2V0IG9iamVjdCB0byB3cmFwLlxcbiAgICAgICAqXFxuICAgICAgICogQHBhcmFtIHtvYmplY3R9IFt3cmFwcGVycyA9IHt9XVxcbiAgICAgICAqICAgICAgICBBbiBvYmplY3QgdHJlZSBjb250YWluaW5nIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBzcGVjaWFsIGNhc2VzLiBBbnlcXG4gICAgICAgKiAgICAgICAgZnVuY3Rpb24gcHJlc2VudCBpbiB0aGlzIG9iamVjdCB0cmVlIGlzIGNhbGxlZCBpbiBwbGFjZSBvZiB0aGVcXG4gICAgICAgKiAgICAgICAgbWV0aG9kIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgdGFyZ2V0YCBvYmplY3QgdHJlZS4gVGhlc2VcXG4gICAgICAgKiAgICAgICAgd3JhcHBlciBtZXRob2RzIGFyZSBpbnZva2VkIGFzIGRlc2NyaWJlZCBpbiB7QHNlZSB3cmFwTWV0aG9kfS5cXG4gICAgICAgKlxcbiAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbbWV0YWRhdGEgPSB7fV1cXG4gICAgICAgKiAgICAgICAgQW4gb2JqZWN0IHRyZWUgY29udGFpbmluZyBtZXRhZGF0YSB1c2VkIHRvIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVcXG4gICAgICAgKiAgICAgICAgUHJvbWlzZS1iYXNlZCB3cmFwcGVyIGZ1bmN0aW9ucyBmb3IgYXN5bmNocm9ub3VzLiBBbnkgZnVuY3Rpb24gaW5cXG4gICAgICAgKiAgICAgICAgdGhlIGB0YXJnZXRgIG9iamVjdCB0cmVlIHdoaWNoIGhhcyBhIGNvcnJlc3BvbmRpbmcgbWV0YWRhdGEgb2JqZWN0XFxuICAgICAgICogICAgICAgIGluIHRoZSBzYW1lIGxvY2F0aW9uIGluIHRoZSBgbWV0YWRhdGFgIHRyZWUgaXMgcmVwbGFjZWQgd2l0aCBhblxcbiAgICAgICAqICAgICAgICBhdXRvbWF0aWNhbGx5LWdlbmVyYXRlZCB3cmFwcGVyIGZ1bmN0aW9uLCBhcyBkZXNjcmliZWQgaW5cXG4gICAgICAgKiAgICAgICAge0BzZWUgd3JhcEFzeW5jRnVuY3Rpb259XFxuICAgICAgICpcXG4gICAgICAgKiBAcmV0dXJucyB7UHJveHk8b2JqZWN0Pn1cXG4gICAgICAgKi9cXG5cXG4gICAgICBjb25zdCB3cmFwT2JqZWN0ID0gKHRhcmdldCwgd3JhcHBlcnMgPSB7fSwgbWV0YWRhdGEgPSB7fSkgPT4ge1xcbiAgICAgICAgbGV0IGNhY2hlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcXG4gICAgICAgIGxldCBoYW5kbGVycyA9IHtcXG4gICAgICAgICAgaGFzKHByb3h5VGFyZ2V0LCBwcm9wKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHByb3AgaW4gdGFyZ2V0IHx8IHByb3AgaW4gY2FjaGU7XFxuICAgICAgICAgIH0sXFxuXFxuICAgICAgICAgIGdldChwcm94eVRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcXG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xcbiAgICAgICAgICAgICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpZiAoIShwcm9wIGluIHRhcmdldCkpIHtcXG4gICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRhcmdldFtwcm9wXTtcXG5cXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcXFwiZnVuY3Rpb25cXFwiKSB7XFxuICAgICAgICAgICAgICAvLyBUaGlzIGlzIGEgbWV0aG9kIG9uIHRoZSB1bmRlcmx5aW5nIG9iamVjdC4gQ2hlY2sgaWYgd2UgbmVlZCB0byBkb1xcbiAgICAgICAgICAgICAgLy8gYW55IHdyYXBwaW5nLlxcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB3cmFwcGVyc1twcm9wXSA9PT0gXFxcImZ1bmN0aW9uXFxcIikge1xcbiAgICAgICAgICAgICAgICAvLyBXZSBoYXZlIGEgc3BlY2lhbC1jYXNlIHdyYXBwZXIgZm9yIHRoaXMgbWV0aG9kLlxcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXJzW3Byb3BdKTtcXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSB7XFxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgYW4gYXN5bmMgbWV0aG9kIHRoYXQgd2UgaGF2ZSBtZXRhZGF0YSBmb3IuIENyZWF0ZSBhXFxuICAgICAgICAgICAgICAgIC8vIFByb21pc2Ugd3JhcHBlciBmb3IgaXQuXFxuICAgICAgICAgICAgICAgIGxldCB3cmFwcGVyID0gd3JhcEFzeW5jRnVuY3Rpb24ocHJvcCwgbWV0YWRhdGFbcHJvcF0pO1xcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBNZXRob2QodGFyZ2V0LCB0YXJnZXRbcHJvcF0sIHdyYXBwZXIpO1xcbiAgICAgICAgICAgICAgfSBlbHNlIHtcXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhIG1ldGhvZCB0aGF0IHdlIGRvbid0IGtub3cgb3IgY2FyZSBhYm91dC4gUmV0dXJuIHRoZVxcbiAgICAgICAgICAgICAgICAvLyBvcmlnaW5hbCBtZXRob2QsIGJvdW5kIHRvIHRoZSB1bmRlcmx5aW5nIG9iamVjdC5cXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5iaW5kKHRhcmdldCk7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFxcXCJvYmplY3RcXFwiICYmIHZhbHVlICE9PSBudWxsICYmIChoYXNPd25Qcm9wZXJ0eSh3cmFwcGVycywgcHJvcCkgfHwgaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIHByb3ApKSkge1xcbiAgICAgICAgICAgICAgLy8gVGhpcyBpcyBhbiBvYmplY3QgdGhhdCB3ZSBuZWVkIHRvIGRvIHNvbWUgd3JhcHBpbmcgZm9yIHRoZSBjaGlsZHJlblxcbiAgICAgICAgICAgICAgLy8gb2YuIENyZWF0ZSBhIHN1Yi1vYmplY3Qgd3JhcHBlciBmb3IgaXQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY2hpbGRcXG4gICAgICAgICAgICAgIC8vIG1ldGFkYXRhLlxcbiAgICAgICAgICAgICAgdmFsdWUgPSB3cmFwT2JqZWN0KHZhbHVlLCB3cmFwcGVyc1twcm9wXSwgbWV0YWRhdGFbcHJvcF0pO1xcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFzT3duUHJvcGVydHkobWV0YWRhdGEsIFxcXCIqXFxcIikpIHtcXG4gICAgICAgICAgICAgIC8vIFdyYXAgYWxsIHByb3BlcnRpZXMgaW4gKiBuYW1lc3BhY2UuXFxuICAgICAgICAgICAgICB2YWx1ZSA9IHdyYXBPYmplY3QodmFsdWUsIHdyYXBwZXJzW3Byb3BdLCBtZXRhZGF0YVtcXFwiKlxcXCJdKTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBkbyBhbnkgd3JhcHBpbmcgZm9yIHRoaXMgcHJvcGVydHksXFxuICAgICAgICAgICAgICAvLyBzbyBqdXN0IGZvcndhcmQgYWxsIGFjY2VzcyB0byB0aGUgdW5kZXJseWluZyBvYmplY3QuXFxuICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY2FjaGUsIHByb3AsIHtcXG4gICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxcbiAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxcblxcbiAgICAgICAgICAgICAgICBnZXQoKSB7XFxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXTtcXG4gICAgICAgICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XFxuICAgICAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBjYWNoZVtwcm9wXSA9IHZhbHVlO1xcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcXG4gICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgc2V0KHByb3h5VGFyZ2V0LCBwcm9wLCB2YWx1ZSwgcmVjZWl2ZXIpIHtcXG4gICAgICAgICAgICBpZiAocHJvcCBpbiBjYWNoZSkge1xcbiAgICAgICAgICAgICAgY2FjaGVbcHJvcF0gPSB2YWx1ZTtcXG4gICAgICAgICAgICB9IGVsc2Uge1xcbiAgICAgICAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsdWU7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xcbiAgICAgICAgICB9LFxcblxcbiAgICAgICAgICBkZWZpbmVQcm9wZXJ0eShwcm94eVRhcmdldCwgcHJvcCwgZGVzYykge1xcbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmRlZmluZVByb3BlcnR5KGNhY2hlLCBwcm9wLCBkZXNjKTtcXG4gICAgICAgICAgfSxcXG5cXG4gICAgICAgICAgZGVsZXRlUHJvcGVydHkocHJveHlUYXJnZXQsIHByb3ApIHtcXG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5kZWxldGVQcm9wZXJ0eShjYWNoZSwgcHJvcCk7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgIH07IC8vIFBlciBjb250cmFjdCBvZiB0aGUgUHJveHkgQVBJLCB0aGUgXFxcImdldFxcXCIgcHJveHkgaGFuZGxlciBtdXN0IHJldHVybiB0aGVcXG4gICAgICAgIC8vIG9yaWdpbmFsIHZhbHVlIG9mIHRoZSB0YXJnZXQgaWYgdGhhdCB2YWx1ZSBpcyBkZWNsYXJlZCByZWFkLW9ubHkgYW5kXFxuICAgICAgICAvLyBub24tY29uZmlndXJhYmxlLiBGb3IgdGhpcyByZWFzb24sIHdlIGNyZWF0ZSBhbiBvYmplY3Qgd2l0aCB0aGVcXG4gICAgICAgIC8vIHByb3RvdHlwZSBzZXQgdG8gYHRhcmdldGAgaW5zdGVhZCBvZiB1c2luZyBgdGFyZ2V0YCBkaXJlY3RseS5cXG4gICAgICAgIC8vIE90aGVyd2lzZSB3ZSBjYW5ub3QgcmV0dXJuIGEgY3VzdG9tIG9iamVjdCBmb3IgQVBJcyB0aGF0XFxuICAgICAgICAvLyBhcmUgZGVjbGFyZWQgcmVhZC1vbmx5IGFuZCBub24tY29uZmlndXJhYmxlLCBzdWNoIGFzIGBjaHJvbWUuZGV2dG9vbHNgLlxcbiAgICAgICAgLy9cXG4gICAgICAgIC8vIFRoZSBwcm94eSBoYW5kbGVycyB0aGVtc2VsdmVzIHdpbGwgc3RpbGwgdXNlIHRoZSBvcmlnaW5hbCBgdGFyZ2V0YFxcbiAgICAgICAgLy8gaW5zdGVhZCBvZiB0aGUgYHByb3h5VGFyZ2V0YCwgc28gdGhhdCB0aGUgbWV0aG9kcyBhbmQgcHJvcGVydGllcyBhcmVcXG4gICAgICAgIC8vIGRlcmVmZXJlbmNlZCB2aWEgdGhlIG9yaWdpbmFsIHRhcmdldHMuXFxuXFxuICAgICAgICBsZXQgcHJveHlUYXJnZXQgPSBPYmplY3QuY3JlYXRlKHRhcmdldCk7XFxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHByb3h5VGFyZ2V0LCBoYW5kbGVycyk7XFxuICAgICAgfTtcXG4gICAgICAvKipcXG4gICAgICAgKiBDcmVhdGVzIGEgc2V0IG9mIHdyYXBwZXIgZnVuY3Rpb25zIGZvciBhbiBldmVudCBvYmplY3QsIHdoaWNoIGhhbmRsZXNcXG4gICAgICAgKiB3cmFwcGluZyBvZiBsaXN0ZW5lciBmdW5jdGlvbnMgdGhhdCB0aG9zZSBtZXNzYWdlcyBhcmUgcGFzc2VkLlxcbiAgICAgICAqXFxuICAgICAgICogQSBzaW5nbGUgd3JhcHBlciBpcyBjcmVhdGVkIGZvciBlYWNoIGxpc3RlbmVyIGZ1bmN0aW9uLCBhbmQgc3RvcmVkIGluIGFcXG4gICAgICAgKiBtYXAuIFN1YnNlcXVlbnQgY2FsbHMgdG8gYGFkZExpc3RlbmVyYCwgYGhhc0xpc3RlbmVyYCwgb3IgYHJlbW92ZUxpc3RlbmVyYFxcbiAgICAgICAqIHJldHJpZXZlIHRoZSBvcmlnaW5hbCB3cmFwcGVyLCBzbyB0aGF0ICBhdHRlbXB0cyB0byByZW1vdmUgYVxcbiAgICAgICAqIHByZXZpb3VzbHktYWRkZWQgbGlzdGVuZXIgd29yayBhcyBleHBlY3RlZC5cXG4gICAgICAgKlxcbiAgICAgICAqIEBwYXJhbSB7RGVmYXVsdFdlYWtNYXA8ZnVuY3Rpb24sIGZ1bmN0aW9uPn0gd3JhcHBlck1hcFxcbiAgICAgICAqICAgICAgICBBIERlZmF1bHRXZWFrTWFwIG9iamVjdCB3aGljaCB3aWxsIGNyZWF0ZSB0aGUgYXBwcm9wcmlhdGUgd3JhcHBlclxcbiAgICAgICAqICAgICAgICBmb3IgYSBnaXZlbiBsaXN0ZW5lciBmdW5jdGlvbiB3aGVuIG9uZSBkb2VzIG5vdCBleGlzdCwgYW5kIHJldHJpZXZlXFxuICAgICAgICogICAgICAgIGFuIGV4aXN0aW5nIG9uZSB3aGVuIGl0IGRvZXMuXFxuICAgICAgICpcXG4gICAgICAgKiBAcmV0dXJucyB7b2JqZWN0fVxcbiAgICAgICAqL1xcblxcblxcbiAgICAgIGNvbnN0IHdyYXBFdmVudCA9IHdyYXBwZXJNYXAgPT4gKHtcXG4gICAgICAgIGFkZExpc3RlbmVyKHRhcmdldCwgbGlzdGVuZXIsIC4uLmFyZ3MpIHtcXG4gICAgICAgICAgdGFyZ2V0LmFkZExpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSwgLi4uYXJncyk7XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgaGFzTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xcbiAgICAgICAgICByZXR1cm4gdGFyZ2V0Lmhhc0xpc3RlbmVyKHdyYXBwZXJNYXAuZ2V0KGxpc3RlbmVyKSk7XFxuICAgICAgICB9LFxcblxcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXIodGFyZ2V0LCBsaXN0ZW5lcikge1xcbiAgICAgICAgICB0YXJnZXQucmVtb3ZlTGlzdGVuZXIod3JhcHBlck1hcC5nZXQobGlzdGVuZXIpKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICB9KTtcXG5cXG4gICAgICBjb25zdCBvblJlcXVlc3RGaW5pc2hlZFdyYXBwZXJzID0gbmV3IERlZmF1bHRXZWFrTWFwKGxpc3RlbmVyID0+IHtcXG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09IFxcXCJmdW5jdGlvblxcXCIpIHtcXG4gICAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xcbiAgICAgICAgfVxcbiAgICAgICAgLyoqXFxuICAgICAgICAgKiBXcmFwcyBhbiBvblJlcXVlc3RGaW5pc2hlZCBsaXN0ZW5lciBmdW5jdGlvbiBzbyB0aGF0IGl0IHdpbGwgcmV0dXJuIGFcXG4gICAgICAgICAqIGBnZXRDb250ZW50KClgIHByb3BlcnR5IHdoaWNoIHJldHVybnMgYSBgUHJvbWlzZWAgcmF0aGVyIHRoYW4gdXNpbmcgYVxcbiAgICAgICAgICogY2FsbGJhY2sgQVBJLlxcbiAgICAgICAgICpcXG4gICAgICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXFcXG4gICAgICAgICAqICAgICAgICBUaGUgSEFSIGVudHJ5IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIG5ldHdvcmsgcmVxdWVzdC5cXG4gICAgICAgICAqL1xcblxcblxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIG9uUmVxdWVzdEZpbmlzaGVkKHJlcSkge1xcbiAgICAgICAgICBjb25zdCB3cmFwcGVkUmVxID0gd3JhcE9iamVjdChyZXEsIHt9XFxuICAgICAgICAgIC8qIHdyYXBwZXJzICovXFxuICAgICAgICAgICwge1xcbiAgICAgICAgICAgIGdldENvbnRlbnQ6IHtcXG4gICAgICAgICAgICAgIG1pbkFyZ3M6IDAsXFxuICAgICAgICAgICAgICBtYXhBcmdzOiAwXFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9KTtcXG4gICAgICAgICAgbGlzdGVuZXIod3JhcHBlZFJlcSk7XFxuICAgICAgICB9O1xcbiAgICAgIH0pOyAvLyBLZWVwIHRyYWNrIGlmIHRoZSBkZXByZWNhdGlvbiB3YXJuaW5nIGhhcyBiZWVuIGxvZ2dlZCBhdCBsZWFzdCBvbmNlLlxcblxcbiAgICAgIGxldCBsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcgPSBmYWxzZTtcXG4gICAgICBjb25zdCBvbk1lc3NhZ2VXcmFwcGVycyA9IG5ldyBEZWZhdWx0V2Vha01hcChsaXN0ZW5lciA9PiB7XFxuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSBcXFwiZnVuY3Rpb25cXFwiKSB7XFxuICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcXG4gICAgICAgIH1cXG4gICAgICAgIC8qKlxcbiAgICAgICAgICogV3JhcHMgYSBtZXNzYWdlIGxpc3RlbmVyIGZ1bmN0aW9uIHNvIHRoYXQgaXQgbWF5IHNlbmQgcmVzcG9uc2VzIGJhc2VkIG9uXFxuICAgICAgICAgKiBpdHMgcmV0dXJuIHZhbHVlLCByYXRoZXIgdGhhbiBieSByZXR1cm5pbmcgYSBzZW50aW5lbCB2YWx1ZSBhbmQgY2FsbGluZyBhXFxuICAgICAgICAgKiBjYWxsYmFjay4gSWYgdGhlIGxpc3RlbmVyIGZ1bmN0aW9uIHJldHVybnMgYSBQcm9taXNlLCB0aGUgcmVzcG9uc2UgaXNcXG4gICAgICAgICAqIHNlbnQgd2hlbiB0aGUgcHJvbWlzZSBlaXRoZXIgcmVzb2x2ZXMgb3IgcmVqZWN0cy5cXG4gICAgICAgICAqXFxuICAgICAgICAgKiBAcGFyYW0geyp9IG1lc3NhZ2VcXG4gICAgICAgICAqICAgICAgICBUaGUgbWVzc2FnZSBzZW50IGJ5IHRoZSBvdGhlciBlbmQgb2YgdGhlIGNoYW5uZWwuXFxuICAgICAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VuZGVyXFxuICAgICAgICAgKiAgICAgICAgRGV0YWlscyBhYm91dCB0aGUgc2VuZGVyIG9mIHRoZSBtZXNzYWdlLlxcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbigqKX0gc2VuZFJlc3BvbnNlXFxuICAgICAgICAgKiAgICAgICAgQSBjYWxsYmFjayB3aGljaCwgd2hlbiBjYWxsZWQgd2l0aCBhbiBhcmJpdHJhcnkgYXJndW1lbnQsIHNlbmRzXFxuICAgICAgICAgKiAgICAgICAgdGhhdCB2YWx1ZSBhcyBhIHJlc3BvbnNlLlxcbiAgICAgICAgICogQHJldHVybnMge2Jvb2xlYW59XFxuICAgICAgICAgKiAgICAgICAgVHJ1ZSBpZiB0aGUgd3JhcHBlZCBsaXN0ZW5lciByZXR1cm5lZCBhIFByb21pc2UsIHdoaWNoIHdpbGwgbGF0ZXJcXG4gICAgICAgICAqICAgICAgICB5aWVsZCBhIHJlc3BvbnNlLiBGYWxzZSBvdGhlcndpc2UuXFxuICAgICAgICAgKi9cXG5cXG5cXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiBvbk1lc3NhZ2UobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcXG4gICAgICAgICAgbGV0IGRpZENhbGxTZW5kUmVzcG9uc2UgPSBmYWxzZTtcXG4gICAgICAgICAgbGV0IHdyYXBwZWRTZW5kUmVzcG9uc2U7XFxuICAgICAgICAgIGxldCBzZW5kUmVzcG9uc2VQcm9taXNlID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XFxuICAgICAgICAgICAgd3JhcHBlZFNlbmRSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xcbiAgICAgICAgICAgICAgaWYgKCFsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcpIHtcXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFNFTkRfUkVTUE9OU0VfREVQUkVDQVRJT05fV0FSTklORywgbmV3IEVycm9yKCkuc3RhY2spO1xcbiAgICAgICAgICAgICAgICBsb2dnZWRTZW5kUmVzcG9uc2VEZXByZWNhdGlvbldhcm5pbmcgPSB0cnVlO1xcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgZGlkQ2FsbFNlbmRSZXNwb25zZSA9IHRydWU7XFxuICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlKTtcXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgICB9KTtcXG4gICAgICAgICAgbGV0IHJlc3VsdDtcXG5cXG4gICAgICAgICAgdHJ5IHtcXG4gICAgICAgICAgICByZXN1bHQgPSBsaXN0ZW5lcihtZXNzYWdlLCBzZW5kZXIsIHdyYXBwZWRTZW5kUmVzcG9uc2UpO1xcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcXG4gICAgICAgICAgICByZXN1bHQgPSBQcm9taXNlLnJlamVjdChlcnIpO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGNvbnN0IGlzUmVzdWx0VGhlbmFibGUgPSByZXN1bHQgIT09IHRydWUgJiYgaXNUaGVuYWJsZShyZXN1bHQpOyAvLyBJZiB0aGUgbGlzdGVuZXIgZGlkbid0IHJldHVybmVkIHRydWUgb3IgYSBQcm9taXNlLCBvciBjYWxsZWRcXG4gICAgICAgICAgLy8gd3JhcHBlZFNlbmRSZXNwb25zZSBzeW5jaHJvbm91c2x5LCB3ZSBjYW4gZXhpdCBlYXJsaWVyXFxuICAgICAgICAgIC8vIGJlY2F1c2UgdGhlcmUgd2lsbCBiZSBubyByZXNwb25zZSBzZW50IGZyb20gdGhpcyBsaXN0ZW5lci5cXG5cXG4gICAgICAgICAgaWYgKHJlc3VsdCAhPT0gdHJ1ZSAmJiAhaXNSZXN1bHRUaGVuYWJsZSAmJiAhZGlkQ2FsbFNlbmRSZXNwb25zZSkge1xcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcXG4gICAgICAgICAgfSAvLyBBIHNtYWxsIGhlbHBlciB0byBzZW5kIHRoZSBtZXNzYWdlIGlmIHRoZSBwcm9taXNlIHJlc29sdmVzXFxuICAgICAgICAgIC8vIGFuZCBhbiBlcnJvciBpZiB0aGUgcHJvbWlzZSByZWplY3RzIChhIHdyYXBwZWQgc2VuZE1lc3NhZ2UgaGFzXFxuICAgICAgICAgIC8vIHRvIHRyYW5zbGF0ZSB0aGUgbWVzc2FnZSBpbnRvIGEgcmVzb2x2ZWQgcHJvbWlzZSBvciBhIHJlamVjdGVkXFxuICAgICAgICAgIC8vIHByb21pc2UpLlxcblxcblxcbiAgICAgICAgICBjb25zdCBzZW5kUHJvbWlzZWRSZXN1bHQgPSBwcm9taXNlID0+IHtcXG4gICAgICAgICAgICBwcm9taXNlLnRoZW4obXNnID0+IHtcXG4gICAgICAgICAgICAgIC8vIHNlbmQgdGhlIG1lc3NhZ2UgdmFsdWUuXFxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2UobXNnKTtcXG4gICAgICAgICAgICB9LCBlcnJvciA9PiB7XFxuICAgICAgICAgICAgICAvLyBTZW5kIGEgSlNPTiByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgaWYgdGhlIHJlamVjdGVkIHZhbHVlXFxuICAgICAgICAgICAgICAvLyBpcyBhbiBpbnN0YW5jZSBvZiBlcnJvciwgb3IgdGhlIG9iamVjdCBpdHNlbGYgb3RoZXJ3aXNlLlxcbiAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XFxuXFxuICAgICAgICAgICAgICBpZiAoZXJyb3IgJiYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgfHwgdHlwZW9mIGVycm9yLm1lc3NhZ2UgPT09IFxcXCJzdHJpbmdcXFwiKSkge1xcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcXG4gICAgICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSBcXFwiQW4gdW5leHBlY3RlZCBlcnJvciBvY2N1cnJlZFxcXCI7XFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICBzZW5kUmVzcG9uc2Uoe1xcbiAgICAgICAgICAgICAgICBfX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X186IHRydWUsXFxuICAgICAgICAgICAgICAgIG1lc3NhZ2VcXG4gICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XFxuICAgICAgICAgICAgICAvLyBQcmludCBhbiBlcnJvciBvbiB0aGUgY29uc29sZSBpZiB1bmFibGUgdG8gc2VuZCB0aGUgcmVzcG9uc2UuXFxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxcXCJGYWlsZWQgdG8gc2VuZCBvbk1lc3NhZ2UgcmVqZWN0ZWQgcmVwbHlcXFwiLCBlcnIpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICB9OyAvLyBJZiB0aGUgbGlzdGVuZXIgcmV0dXJuZWQgYSBQcm9taXNlLCBzZW5kIHRoZSByZXNvbHZlZCB2YWx1ZSBhcyBhXFxuICAgICAgICAgIC8vIHJlc3VsdCwgb3RoZXJ3aXNlIHdhaXQgdGhlIHByb21pc2UgcmVsYXRlZCB0byB0aGUgd3JhcHBlZFNlbmRSZXNwb25zZVxcbiAgICAgICAgICAvLyBjYWxsYmFjayB0byByZXNvbHZlIGFuZCBzZW5kIGl0IGFzIGEgcmVzcG9uc2UuXFxuXFxuXFxuICAgICAgICAgIGlmIChpc1Jlc3VsdFRoZW5hYmxlKSB7XFxuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHJlc3VsdCk7XFxuICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgc2VuZFByb21pc2VkUmVzdWx0KHNlbmRSZXNwb25zZVByb21pc2UpO1xcbiAgICAgICAgICB9IC8vIExldCBDaHJvbWUga25vdyB0aGF0IHRoZSBsaXN0ZW5lciBpcyByZXBseWluZy5cXG5cXG5cXG4gICAgICAgICAgcmV0dXJuIHRydWU7XFxuICAgICAgICB9O1xcbiAgICAgIH0pO1xcblxcbiAgICAgIGNvbnN0IHdyYXBwZWRTZW5kTWVzc2FnZUNhbGxiYWNrID0gKHtcXG4gICAgICAgIHJlamVjdCxcXG4gICAgICAgIHJlc29sdmVcXG4gICAgICB9LCByZXBseSkgPT4ge1xcbiAgICAgICAgaWYgKGV4dGVuc2lvbkFQSXMucnVudGltZS5sYXN0RXJyb3IpIHtcXG4gICAgICAgICAgLy8gRGV0ZWN0IHdoZW4gbm9uZSBvZiB0aGUgbGlzdGVuZXJzIHJlcGxpZWQgdG8gdGhlIHNlbmRNZXNzYWdlIGNhbGwgYW5kIHJlc29sdmVcXG4gICAgICAgICAgLy8gdGhlIHByb21pc2UgdG8gdW5kZWZpbmVkIGFzIGluIEZpcmVmb3guXFxuICAgICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS93ZWJleHRlbnNpb24tcG9seWZpbGwvaXNzdWVzLzEzMFxcbiAgICAgICAgICBpZiAoZXh0ZW5zaW9uQVBJcy5ydW50aW1lLmxhc3RFcnJvci5tZXNzYWdlID09PSBDSFJPTUVfU0VORF9NRVNTQUdFX0NBTExCQUNLX05PX1JFU1BPTlNFX01FU1NBR0UpIHtcXG4gICAgICAgICAgICByZXNvbHZlKCk7XFxuICAgICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihleHRlbnNpb25BUElzLnJ1bnRpbWUubGFzdEVycm9yLm1lc3NhZ2UpKTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSBlbHNlIGlmIChyZXBseSAmJiByZXBseS5fX21veldlYkV4dGVuc2lvblBvbHlmaWxsUmVqZWN0X18pIHtcXG4gICAgICAgICAgLy8gQ29udmVydCBiYWNrIHRoZSBKU09OIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBpbnRvXFxuICAgICAgICAgIC8vIGFuIEVycm9yIGluc3RhbmNlLlxcbiAgICAgICAgICByZWplY3QobmV3IEVycm9yKHJlcGx5Lm1lc3NhZ2UpKTtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgIHJlc29sdmUocmVwbHkpO1xcbiAgICAgICAgfVxcbiAgICAgIH07XFxuXFxuICAgICAgY29uc3Qgd3JhcHBlZFNlbmRNZXNzYWdlID0gKG5hbWUsIG1ldGFkYXRhLCBhcGlOYW1lc3BhY2VPYmosIC4uLmFyZ3MpID0+IHtcXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA8IG1ldGFkYXRhLm1pbkFyZ3MpIHtcXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBsZWFzdCAke21ldGFkYXRhLm1pbkFyZ3N9ICR7cGx1cmFsaXplQXJndW1lbnRzKG1ldGFkYXRhLm1pbkFyZ3MpfSBmb3IgJHtuYW1lfSgpLCBnb3QgJHthcmdzLmxlbmd0aH1gKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IG1ldGFkYXRhLm1heEFyZ3MpIHtcXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBFeHBlY3RlZCBhdCBtb3N0ICR7bWV0YWRhdGEubWF4QXJnc30gJHtwbHVyYWxpemVBcmd1bWVudHMobWV0YWRhdGEubWF4QXJncyl9IGZvciAke25hbWV9KCksIGdvdCAke2FyZ3MubGVuZ3RofWApO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcXG4gICAgICAgICAgY29uc3Qgd3JhcHBlZENiID0gd3JhcHBlZFNlbmRNZXNzYWdlQ2FsbGJhY2suYmluZChudWxsLCB7XFxuICAgICAgICAgICAgcmVzb2x2ZSxcXG4gICAgICAgICAgICByZWplY3RcXG4gICAgICAgICAgfSk7XFxuICAgICAgICAgIGFyZ3MucHVzaCh3cmFwcGVkQ2IpO1xcbiAgICAgICAgICBhcGlOYW1lc3BhY2VPYmouc2VuZE1lc3NhZ2UoLi4uYXJncyk7XFxuICAgICAgICB9KTtcXG4gICAgICB9O1xcblxcbiAgICAgIGNvbnN0IHN0YXRpY1dyYXBwZXJzID0ge1xcbiAgICAgICAgZGV2dG9vbHM6IHtcXG4gICAgICAgICAgbmV0d29yazoge1xcbiAgICAgICAgICAgIG9uUmVxdWVzdEZpbmlzaGVkOiB3cmFwRXZlbnQob25SZXF1ZXN0RmluaXNoZWRXcmFwcGVycylcXG4gICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIHJ1bnRpbWU6IHtcXG4gICAgICAgICAgb25NZXNzYWdlOiB3cmFwRXZlbnQob25NZXNzYWdlV3JhcHBlcnMpLFxcbiAgICAgICAgICBvbk1lc3NhZ2VFeHRlcm5hbDogd3JhcEV2ZW50KG9uTWVzc2FnZVdyYXBwZXJzKSxcXG4gICAgICAgICAgc2VuZE1lc3NhZ2U6IHdyYXBwZWRTZW5kTWVzc2FnZS5iaW5kKG51bGwsIFxcXCJzZW5kTWVzc2FnZVxcXCIsIHtcXG4gICAgICAgICAgICBtaW5BcmdzOiAxLFxcbiAgICAgICAgICAgIG1heEFyZ3M6IDNcXG4gICAgICAgICAgfSlcXG4gICAgICAgIH0sXFxuICAgICAgICB0YWJzOiB7XFxuICAgICAgICAgIHNlbmRNZXNzYWdlOiB3cmFwcGVkU2VuZE1lc3NhZ2UuYmluZChudWxsLCBcXFwic2VuZE1lc3NhZ2VcXFwiLCB7XFxuICAgICAgICAgICAgbWluQXJnczogMixcXG4gICAgICAgICAgICBtYXhBcmdzOiAzXFxuICAgICAgICAgIH0pXFxuICAgICAgICB9XFxuICAgICAgfTtcXG4gICAgICBjb25zdCBzZXR0aW5nTWV0YWRhdGEgPSB7XFxuICAgICAgICBjbGVhcjoge1xcbiAgICAgICAgICBtaW5BcmdzOiAxLFxcbiAgICAgICAgICBtYXhBcmdzOiAxXFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0OiB7XFxuICAgICAgICAgIG1pbkFyZ3M6IDEsXFxuICAgICAgICAgIG1heEFyZ3M6IDFcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXQ6IHtcXG4gICAgICAgICAgbWluQXJnczogMSxcXG4gICAgICAgICAgbWF4QXJnczogMVxcbiAgICAgICAgfVxcbiAgICAgIH07XFxuICAgICAgYXBpTWV0YWRhdGEucHJpdmFjeSA9IHtcXG4gICAgICAgIG5ldHdvcms6IHtcXG4gICAgICAgICAgXFxcIipcXFwiOiBzZXR0aW5nTWV0YWRhdGFcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXJ2aWNlczoge1xcbiAgICAgICAgICBcXFwiKlxcXCI6IHNldHRpbmdNZXRhZGF0YVxcbiAgICAgICAgfSxcXG4gICAgICAgIHdlYnNpdGVzOiB7XFxuICAgICAgICAgIFxcXCIqXFxcIjogc2V0dGluZ01ldGFkYXRhXFxuICAgICAgICB9XFxuICAgICAgfTtcXG4gICAgICByZXR1cm4gd3JhcE9iamVjdChleHRlbnNpb25BUElzLCBzdGF0aWNXcmFwcGVycywgYXBpTWV0YWRhdGEpO1xcbiAgICB9O1xcblxcbiAgICBpZiAodHlwZW9mIGNocm9tZSAhPSBcXFwib2JqZWN0XFxcIiB8fCAhY2hyb21lIHx8ICFjaHJvbWUucnVudGltZSB8fCAhY2hyb21lLnJ1bnRpbWUuaWQpIHtcXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXFxcIlRoaXMgc2NyaXB0IHNob3VsZCBvbmx5IGJlIGxvYWRlZCBpbiBhIGJyb3dzZXIgZXh0ZW5zaW9uLlxcXCIpO1xcbiAgICB9IC8vIFRoZSBidWlsZCBwcm9jZXNzIGFkZHMgYSBVTUQgd3JhcHBlciBhcm91bmQgdGhpcyBmaWxlLCB3aGljaCBtYWtlcyB0aGVcXG4gICAgLy8gYG1vZHVsZWAgdmFyaWFibGUgYXZhaWxhYmxlLlxcblxcblxcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHdyYXBBUElzKGNocm9tZSk7XFxuICB9IGVsc2Uge1xcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGJyb3dzZXI7XFxuICB9XFxufSk7XFxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJvd3Nlci1wb2x5ZmlsbC5qcy5tYXBcXG5cIjsiLCJ2YXIgU291cmNlTWFwQ29uc3VtZXIgPSByZXF1aXJlKCdzb3VyY2UtbWFwJykuU291cmNlTWFwQ29uc3VtZXI7XG52YXIgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKTtcblxudmFyIGZzO1xudHJ5IHtcbiAgZnMgPSByZXF1aXJlKCdmcycpO1xuICBpZiAoIWZzLmV4aXN0c1N5bmMgfHwgIWZzLnJlYWRGaWxlU3luYykge1xuICAgIC8vIGZzIGRvZXNuJ3QgaGF2ZSBhbGwgbWV0aG9kcyB3ZSBuZWVkXG4gICAgZnMgPSBudWxsO1xuICB9XG59IGNhdGNoIChlcnIpIHtcbiAgLyogbm9wICovXG59XG5cbnZhciBidWZmZXJGcm9tID0gcmVxdWlyZSgnYnVmZmVyLWZyb20nKTtcblxuLyoqXG4gKiBSZXF1aXJlcyBhIG1vZHVsZSB3aGljaCBpcyBwcm90ZWN0ZWQgYWdhaW5zdCBidW5kbGVyIG1pbmlmaWNhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge05vZGVNb2R1bGV9IG1vZFxuICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RcbiAqL1xuZnVuY3Rpb24gZHluYW1pY1JlcXVpcmUobW9kLCByZXF1ZXN0KSB7XG4gIHJldHVybiBtb2QucmVxdWlyZShyZXF1ZXN0KTtcbn1cblxuLy8gT25seSBpbnN0YWxsIG9uY2UgaWYgY2FsbGVkIG11bHRpcGxlIHRpbWVzXG52YXIgZXJyb3JGb3JtYXR0ZXJJbnN0YWxsZWQgPSBmYWxzZTtcbnZhciB1bmNhdWdodFNoaW1JbnN0YWxsZWQgPSBmYWxzZTtcblxuLy8gSWYgdHJ1ZSwgdGhlIGNhY2hlcyBhcmUgcmVzZXQgYmVmb3JlIGEgc3RhY2sgdHJhY2UgZm9ybWF0dGluZyBvcGVyYXRpb25cbnZhciBlbXB0eUNhY2hlQmV0d2Vlbk9wZXJhdGlvbnMgPSBmYWxzZTtcblxuLy8gU3VwcG9ydHMge2Jyb3dzZXIsIG5vZGUsIGF1dG99XG52YXIgZW52aXJvbm1lbnQgPSBcImF1dG9cIjtcblxuLy8gTWFwcyBhIGZpbGUgcGF0aCB0byBhIHN0cmluZyBjb250YWluaW5nIHRoZSBmaWxlIGNvbnRlbnRzXG52YXIgZmlsZUNvbnRlbnRzQ2FjaGUgPSB7fTtcblxuLy8gTWFwcyBhIGZpbGUgcGF0aCB0byBhIHNvdXJjZSBtYXAgZm9yIHRoYXQgZmlsZVxudmFyIHNvdXJjZU1hcENhY2hlID0ge307XG5cbi8vIFJlZ2V4IGZvciBkZXRlY3Rpbmcgc291cmNlIG1hcHNcbnZhciByZVNvdXJjZU1hcCA9IC9eZGF0YTphcHBsaWNhdGlvblxcL2pzb25bXixdK2Jhc2U2NCwvO1xuXG4vLyBQcmlvcml0eSBsaXN0IG9mIHJldHJpZXZlIGhhbmRsZXJzXG52YXIgcmV0cmlldmVGaWxlSGFuZGxlcnMgPSBbXTtcbnZhciByZXRyaWV2ZU1hcEhhbmRsZXJzID0gW107XG5cbmZ1bmN0aW9uIGlzSW5Ccm93c2VyKCkge1xuICBpZiAoZW52aXJvbm1lbnQgPT09IFwiYnJvd3NlclwiKVxuICAgIHJldHVybiB0cnVlO1xuICBpZiAoZW52aXJvbm1lbnQgPT09IFwibm9kZVwiKVxuICAgIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuICgodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpICYmICh0eXBlb2YgWE1MSHR0cFJlcXVlc3QgPT09ICdmdW5jdGlvbicpICYmICEod2luZG93LnJlcXVpcmUgJiYgd2luZG93Lm1vZHVsZSAmJiB3aW5kb3cucHJvY2VzcyAmJiB3aW5kb3cucHJvY2Vzcy50eXBlID09PSBcInJlbmRlcmVyXCIpKTtcbn1cblxuZnVuY3Rpb24gaGFzR2xvYmFsUHJvY2Vzc0V2ZW50RW1pdHRlcigpIHtcbiAgcmV0dXJuICgodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnKSAmJiAocHJvY2VzcyAhPT0gbnVsbCkgJiYgKHR5cGVvZiBwcm9jZXNzLm9uID09PSAnZnVuY3Rpb24nKSk7XG59XG5cbmZ1bmN0aW9uIGdsb2JhbFByb2Nlc3NWZXJzaW9uKCkge1xuICBpZiAoKHR5cGVvZiBwcm9jZXNzID09PSAnb2JqZWN0JykgJiYgKHByb2Nlc3MgIT09IG51bGwpKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MudmVyc2lvbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2xvYmFsUHJvY2Vzc1N0ZGVycigpIHtcbiAgaWYgKCh0eXBlb2YgcHJvY2VzcyA9PT0gJ29iamVjdCcpICYmIChwcm9jZXNzICE9PSBudWxsKSkge1xuICAgIHJldHVybiBwcm9jZXNzLnN0ZGVycjtcbiAgfVxufVxuXG5mdW5jdGlvbiBnbG9iYWxQcm9jZXNzRXhpdChjb2RlKSB7XG4gIGlmICgodHlwZW9mIHByb2Nlc3MgPT09ICdvYmplY3QnKSAmJiAocHJvY2VzcyAhPT0gbnVsbCkgJiYgKHR5cGVvZiBwcm9jZXNzLmV4aXQgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MuZXhpdChjb2RlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVyRXhlYyhsaXN0KSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciByZXQgPSBsaXN0W2ldKGFyZyk7XG4gICAgICBpZiAocmV0KSB7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xufVxuXG52YXIgcmV0cmlldmVGaWxlID0gaGFuZGxlckV4ZWMocmV0cmlldmVGaWxlSGFuZGxlcnMpO1xuXG5yZXRyaWV2ZUZpbGVIYW5kbGVycy5wdXNoKGZ1bmN0aW9uKHBhdGgpIHtcbiAgLy8gVHJpbSB0aGUgcGF0aCB0byBtYWtlIHN1cmUgdGhlcmUgaXMgbm8gZXh0cmEgd2hpdGVzcGFjZS5cbiAgcGF0aCA9IHBhdGgudHJpbSgpO1xuICBpZiAoL15maWxlOi8udGVzdChwYXRoKSkge1xuICAgIC8vIGV4aXN0c1N5bmMvcmVhZEZpbGVTeW5jIGNhbid0IGhhbmRsZSBmaWxlIHByb3RvY29sLCBidXQgb25jZSBzdHJpcHBlZCwgaXQgd29ya3NcbiAgICBwYXRoID0gcGF0aC5yZXBsYWNlKC9maWxlOlxcL1xcL1xcLyhcXHc6KT8vLCBmdW5jdGlvbihwcm90b2NvbCwgZHJpdmUpIHtcbiAgICAgIHJldHVybiBkcml2ZSA/XG4gICAgICAgICcnIDogLy8gZmlsZTovLy9DOi9kaXIvZmlsZSAtPiBDOi9kaXIvZmlsZVxuICAgICAgICAnLyc7IC8vIGZpbGU6Ly8vcm9vdC1kaXIvZmlsZSAtPiAvcm9vdC1kaXIvZmlsZVxuICAgIH0pO1xuICB9XG4gIGlmIChwYXRoIGluIGZpbGVDb250ZW50c0NhY2hlKSB7XG4gICAgcmV0dXJuIGZpbGVDb250ZW50c0NhY2hlW3BhdGhdO1xuICB9XG5cbiAgdmFyIGNvbnRlbnRzID0gJyc7XG4gIHRyeSB7XG4gICAgaWYgKCFmcykge1xuICAgICAgLy8gVXNlIFNKQVggaWYgd2UgYXJlIGluIHRoZSBicm93c2VyXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICB4aHIub3BlbignR0VUJywgcGF0aCwgLyoqIGFzeW5jICovIGZhbHNlKTtcbiAgICAgIHhoci5zZW5kKG51bGwpO1xuICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICBjb250ZW50cyA9IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChmcy5leGlzdHNTeW5jKHBhdGgpKSB7XG4gICAgICAvLyBPdGhlcndpc2UsIHVzZSB0aGUgZmlsZXN5c3RlbVxuICAgICAgY29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMocGF0aCwgJ3V0ZjgnKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgLyogaWdub3JlIGFueSBlcnJvcnMgKi9cbiAgfVxuXG4gIHJldHVybiBmaWxlQ29udGVudHNDYWNoZVtwYXRoXSA9IGNvbnRlbnRzO1xufSk7XG5cbi8vIFN1cHBvcnQgVVJMcyByZWxhdGl2ZSB0byBhIGRpcmVjdG9yeSwgYnV0IGJlIGNhcmVmdWwgYWJvdXQgYSBwcm90b2NvbCBwcmVmaXhcbi8vIGluIGNhc2Ugd2UgYXJlIGluIHRoZSBicm93c2VyIChpLmUuIGRpcmVjdG9yaWVzIG1heSBzdGFydCB3aXRoIFwiaHR0cDovL1wiIG9yIFwiZmlsZTovLy9cIilcbmZ1bmN0aW9uIHN1cHBvcnRSZWxhdGl2ZVVSTChmaWxlLCB1cmwpIHtcbiAgaWYgKCFmaWxlKSByZXR1cm4gdXJsO1xuICB2YXIgZGlyID0gcGF0aC5kaXJuYW1lKGZpbGUpO1xuICB2YXIgbWF0Y2ggPSAvXlxcdys6XFwvXFwvW15cXC9dKi8uZXhlYyhkaXIpO1xuICB2YXIgcHJvdG9jb2wgPSBtYXRjaCA/IG1hdGNoWzBdIDogJyc7XG4gIHZhciBzdGFydFBhdGggPSBkaXIuc2xpY2UocHJvdG9jb2wubGVuZ3RoKTtcbiAgaWYgKHByb3RvY29sICYmIC9eXFwvXFx3XFw6Ly50ZXN0KHN0YXJ0UGF0aCkpIHtcbiAgICAvLyBoYW5kbGUgZmlsZTovLy9DOi8gcGF0aHNcbiAgICBwcm90b2NvbCArPSAnLyc7XG4gICAgcmV0dXJuIHByb3RvY29sICsgcGF0aC5yZXNvbHZlKGRpci5zbGljZShwcm90b2NvbC5sZW5ndGgpLCB1cmwpLnJlcGxhY2UoL1xcXFwvZywgJy8nKTtcbiAgfVxuICByZXR1cm4gcHJvdG9jb2wgKyBwYXRoLnJlc29sdmUoZGlyLnNsaWNlKHByb3RvY29sLmxlbmd0aCksIHVybCk7XG59XG5cbmZ1bmN0aW9uIHJldHJpZXZlU291cmNlTWFwVVJMKHNvdXJjZSkge1xuICB2YXIgZmlsZURhdGE7XG5cbiAgaWYgKGlzSW5Ccm93c2VyKCkpIHtcbiAgICAgdHJ5IHtcbiAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgeGhyLm9wZW4oJ0dFVCcsIHNvdXJjZSwgZmFsc2UpO1xuICAgICAgIHhoci5zZW5kKG51bGwpO1xuICAgICAgIGZpbGVEYXRhID0geGhyLnJlYWR5U3RhdGUgPT09IDQgPyB4aHIucmVzcG9uc2VUZXh0IDogbnVsbDtcblxuICAgICAgIC8vIFN1cHBvcnQgcHJvdmlkaW5nIGEgc291cmNlTWFwcGluZ1VSTCB2aWEgdGhlIFNvdXJjZU1hcCBoZWFkZXJcbiAgICAgICB2YXIgc291cmNlTWFwSGVhZGVyID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKFwiU291cmNlTWFwXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhoci5nZXRSZXNwb25zZUhlYWRlcihcIlgtU291cmNlTWFwXCIpO1xuICAgICAgIGlmIChzb3VyY2VNYXBIZWFkZXIpIHtcbiAgICAgICAgIHJldHVybiBzb3VyY2VNYXBIZWFkZXI7XG4gICAgICAgfVxuICAgICB9IGNhdGNoIChlKSB7XG4gICAgIH1cbiAgfVxuXG4gIC8vIEdldCB0aGUgVVJMIG9mIHRoZSBzb3VyY2UgbWFwXG4gIGZpbGVEYXRhID0gcmV0cmlldmVGaWxlKHNvdXJjZSk7XG4gIHZhciByZSA9IC8oPzpcXC9cXC9bQCNdW1xcc10qc291cmNlTWFwcGluZ1VSTD0oW15cXHMnXCJdKylbXFxzXSokKXwoPzpcXC9cXCpbQCNdW1xcc10qc291cmNlTWFwcGluZ1VSTD0oW15cXHMqJ1wiXSspW1xcc10qKD86XFwqXFwvKVtcXHNdKiQpL21nO1xuICAvLyBLZWVwIGV4ZWN1dGluZyB0aGUgc2VhcmNoIHRvIGZpbmQgdGhlICpsYXN0KiBzb3VyY2VNYXBwaW5nVVJMIHRvIGF2b2lkXG4gIC8vIHBpY2tpbmcgdXAgc291cmNlTWFwcGluZ1VSTHMgZnJvbSBjb21tZW50cywgc3RyaW5ncywgZXRjLlxuICB2YXIgbGFzdE1hdGNoLCBtYXRjaDtcbiAgd2hpbGUgKG1hdGNoID0gcmUuZXhlYyhmaWxlRGF0YSkpIGxhc3RNYXRjaCA9IG1hdGNoO1xuICBpZiAoIWxhc3RNYXRjaCkgcmV0dXJuIG51bGw7XG4gIHJldHVybiBsYXN0TWF0Y2hbMV07XG59O1xuXG4vLyBDYW4gYmUgb3ZlcnJpZGRlbiBieSB0aGUgcmV0cmlldmVTb3VyY2VNYXAgb3B0aW9uIHRvIGluc3RhbGwuIFRha2VzIGFcbi8vIGdlbmVyYXRlZCBzb3VyY2UgZmlsZW5hbWU7IHJldHVybnMgYSB7bWFwLCBvcHRpb25hbCB1cmx9IG9iamVjdCwgb3IgbnVsbCBpZlxuLy8gdGhlcmUgaXMgbm8gc291cmNlIG1hcC4gIFRoZSBtYXAgZmllbGQgbWF5IGJlIGVpdGhlciBhIHN0cmluZyBvciB0aGUgcGFyc2VkXG4vLyBKU09OIG9iamVjdCAoaWUsIGl0IG11c3QgYmUgYSB2YWxpZCBhcmd1bWVudCB0byB0aGUgU291cmNlTWFwQ29uc3VtZXJcbi8vIGNvbnN0cnVjdG9yKS5cbnZhciByZXRyaWV2ZVNvdXJjZU1hcCA9IGhhbmRsZXJFeGVjKHJldHJpZXZlTWFwSGFuZGxlcnMpO1xucmV0cmlldmVNYXBIYW5kbGVycy5wdXNoKGZ1bmN0aW9uKHNvdXJjZSkge1xuICB2YXIgc291cmNlTWFwcGluZ1VSTCA9IHJldHJpZXZlU291cmNlTWFwVVJMKHNvdXJjZSk7XG4gIGlmICghc291cmNlTWFwcGluZ1VSTCkgcmV0dXJuIG51bGw7XG5cbiAgLy8gUmVhZCB0aGUgY29udGVudHMgb2YgdGhlIHNvdXJjZSBtYXBcbiAgdmFyIHNvdXJjZU1hcERhdGE7XG4gIGlmIChyZVNvdXJjZU1hcC50ZXN0KHNvdXJjZU1hcHBpbmdVUkwpKSB7XG4gICAgLy8gU3VwcG9ydCBzb3VyY2UgbWFwIFVSTCBhcyBhIGRhdGEgdXJsXG4gICAgdmFyIHJhd0RhdGEgPSBzb3VyY2VNYXBwaW5nVVJMLnNsaWNlKHNvdXJjZU1hcHBpbmdVUkwuaW5kZXhPZignLCcpICsgMSk7XG4gICAgc291cmNlTWFwRGF0YSA9IGJ1ZmZlckZyb20ocmF3RGF0YSwgXCJiYXNlNjRcIikudG9TdHJpbmcoKTtcbiAgICBzb3VyY2VNYXBwaW5nVVJMID0gc291cmNlO1xuICB9IGVsc2Uge1xuICAgIC8vIFN1cHBvcnQgc291cmNlIG1hcCBVUkxzIHJlbGF0aXZlIHRvIHRoZSBzb3VyY2UgVVJMXG4gICAgc291cmNlTWFwcGluZ1VSTCA9IHN1cHBvcnRSZWxhdGl2ZVVSTChzb3VyY2UsIHNvdXJjZU1hcHBpbmdVUkwpO1xuICAgIHNvdXJjZU1hcERhdGEgPSByZXRyaWV2ZUZpbGUoc291cmNlTWFwcGluZ1VSTCk7XG4gIH1cblxuICBpZiAoIXNvdXJjZU1hcERhdGEpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdXJsOiBzb3VyY2VNYXBwaW5nVVJMLFxuICAgIG1hcDogc291cmNlTWFwRGF0YVxuICB9O1xufSk7XG5cbmZ1bmN0aW9uIG1hcFNvdXJjZVBvc2l0aW9uKHBvc2l0aW9uKSB7XG4gIHZhciBzb3VyY2VNYXAgPSBzb3VyY2VNYXBDYWNoZVtwb3NpdGlvbi5zb3VyY2VdO1xuICBpZiAoIXNvdXJjZU1hcCkge1xuICAgIC8vIENhbGwgdGhlIChvdmVycmlkZWFibGUpIHJldHJpZXZlU291cmNlTWFwIGZ1bmN0aW9uIHRvIGdldCB0aGUgc291cmNlIG1hcC5cbiAgICB2YXIgdXJsQW5kTWFwID0gcmV0cmlldmVTb3VyY2VNYXAocG9zaXRpb24uc291cmNlKTtcbiAgICBpZiAodXJsQW5kTWFwKSB7XG4gICAgICBzb3VyY2VNYXAgPSBzb3VyY2VNYXBDYWNoZVtwb3NpdGlvbi5zb3VyY2VdID0ge1xuICAgICAgICB1cmw6IHVybEFuZE1hcC51cmwsXG4gICAgICAgIG1hcDogbmV3IFNvdXJjZU1hcENvbnN1bWVyKHVybEFuZE1hcC5tYXApXG4gICAgICB9O1xuXG4gICAgICAvLyBMb2FkIGFsbCBzb3VyY2VzIHN0b3JlZCBpbmxpbmUgd2l0aCB0aGUgc291cmNlIG1hcCBpbnRvIHRoZSBmaWxlIGNhY2hlXG4gICAgICAvLyB0byBwcmV0ZW5kIGxpa2UgdGhleSBhcmUgYWxyZWFkeSBsb2FkZWQuIFRoZXkgbWF5IG5vdCBleGlzdCBvbiBkaXNrLlxuICAgICAgaWYgKHNvdXJjZU1hcC5tYXAuc291cmNlc0NvbnRlbnQpIHtcbiAgICAgICAgc291cmNlTWFwLm1hcC5zb3VyY2VzLmZvckVhY2goZnVuY3Rpb24oc291cmNlLCBpKSB7XG4gICAgICAgICAgdmFyIGNvbnRlbnRzID0gc291cmNlTWFwLm1hcC5zb3VyY2VzQ29udGVudFtpXTtcbiAgICAgICAgICBpZiAoY29udGVudHMpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSBzdXBwb3J0UmVsYXRpdmVVUkwoc291cmNlTWFwLnVybCwgc291cmNlKTtcbiAgICAgICAgICAgIGZpbGVDb250ZW50c0NhY2hlW3VybF0gPSBjb250ZW50cztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzb3VyY2VNYXAgPSBzb3VyY2VNYXBDYWNoZVtwb3NpdGlvbi5zb3VyY2VdID0ge1xuICAgICAgICB1cmw6IG51bGwsXG4gICAgICAgIG1hcDogbnVsbFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXNvbHZlIHRoZSBzb3VyY2UgVVJMIHJlbGF0aXZlIHRvIHRoZSBVUkwgb2YgdGhlIHNvdXJjZSBtYXBcbiAgaWYgKHNvdXJjZU1hcCAmJiBzb3VyY2VNYXAubWFwICYmIHR5cGVvZiBzb3VyY2VNYXAubWFwLm9yaWdpbmFsUG9zaXRpb25Gb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgb3JpZ2luYWxQb3NpdGlvbiA9IHNvdXJjZU1hcC5tYXAub3JpZ2luYWxQb3NpdGlvbkZvcihwb3NpdGlvbik7XG5cbiAgICAvLyBPbmx5IHJldHVybiB0aGUgb3JpZ2luYWwgcG9zaXRpb24gaWYgYSBtYXRjaGluZyBsaW5lIHdhcyBmb3VuZC4gSWYgbm9cbiAgICAvLyBtYXRjaGluZyBsaW5lIGlzIGZvdW5kIHRoZW4gd2UgcmV0dXJuIHBvc2l0aW9uIGluc3RlYWQsIHdoaWNoIHdpbGwgY2F1c2VcbiAgICAvLyB0aGUgc3RhY2sgdHJhY2UgdG8gcHJpbnQgdGhlIHBhdGggYW5kIGxpbmUgZm9yIHRoZSBjb21waWxlZCBmaWxlLiBJdCBpc1xuICAgIC8vIGJldHRlciB0byBnaXZlIGEgcHJlY2lzZSBsb2NhdGlvbiBpbiB0aGUgY29tcGlsZWQgZmlsZSB0aGFuIGEgdmFndWVcbiAgICAvLyBsb2NhdGlvbiBpbiB0aGUgb3JpZ2luYWwgZmlsZS5cbiAgICBpZiAob3JpZ2luYWxQb3NpdGlvbi5zb3VyY2UgIT09IG51bGwpIHtcbiAgICAgIG9yaWdpbmFsUG9zaXRpb24uc291cmNlID0gc3VwcG9ydFJlbGF0aXZlVVJMKFxuICAgICAgICBzb3VyY2VNYXAudXJsLCBvcmlnaW5hbFBvc2l0aW9uLnNvdXJjZSk7XG4gICAgICByZXR1cm4gb3JpZ2luYWxQb3NpdGlvbjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcG9zaXRpb247XG59XG5cbi8vIFBhcnNlcyBjb2RlIGdlbmVyYXRlZCBieSBGb3JtYXRFdmFsT3JpZ2luKCksIGEgZnVuY3Rpb24gaW5zaWRlIFY4OlxuLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9zb3VyY2UvYnJvd3NlL3RydW5rL3NyYy9tZXNzYWdlcy5qc1xuZnVuY3Rpb24gbWFwRXZhbE9yaWdpbihvcmlnaW4pIHtcbiAgLy8gTW9zdCBldmFsKCkgY2FsbHMgYXJlIGluIHRoaXMgZm9ybWF0XG4gIHZhciBtYXRjaCA9IC9eZXZhbCBhdCAoW14oXSspIFxcKCguKyk6KFxcZCspOihcXGQrKVxcKSQvLmV4ZWMob3JpZ2luKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgdmFyIHBvc2l0aW9uID0gbWFwU291cmNlUG9zaXRpb24oe1xuICAgICAgc291cmNlOiBtYXRjaFsyXSxcbiAgICAgIGxpbmU6ICttYXRjaFszXSxcbiAgICAgIGNvbHVtbjogbWF0Y2hbNF0gLSAxXG4gICAgfSk7XG4gICAgcmV0dXJuICdldmFsIGF0ICcgKyBtYXRjaFsxXSArICcgKCcgKyBwb3NpdGlvbi5zb3VyY2UgKyAnOicgK1xuICAgICAgcG9zaXRpb24ubGluZSArICc6JyArIChwb3NpdGlvbi5jb2x1bW4gKyAxKSArICcpJztcbiAgfVxuXG4gIC8vIFBhcnNlIG5lc3RlZCBldmFsKCkgY2FsbHMgdXNpbmcgcmVjdXJzaW9uXG4gIG1hdGNoID0gL15ldmFsIGF0IChbXihdKykgXFwoKC4rKVxcKSQvLmV4ZWMob3JpZ2luKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgcmV0dXJuICdldmFsIGF0ICcgKyBtYXRjaFsxXSArICcgKCcgKyBtYXBFdmFsT3JpZ2luKG1hdGNoWzJdKSArICcpJztcbiAgfVxuXG4gIC8vIE1ha2Ugc3VyZSB3ZSBzdGlsbCByZXR1cm4gdXNlZnVsIGluZm9ybWF0aW9uIGlmIHdlIGRpZG4ndCBmaW5kIGFueXRoaW5nXG4gIHJldHVybiBvcmlnaW47XG59XG5cbi8vIFRoaXMgaXMgY29waWVkIGFsbW9zdCB2ZXJiYXRpbSBmcm9tIHRoZSBWOCBzb3VyY2UgY29kZSBhdFxuLy8gaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9zb3VyY2UvYnJvd3NlL3RydW5rL3NyYy9tZXNzYWdlcy5qcy4gVGhlXG4vLyBpbXBsZW1lbnRhdGlvbiBvZiB3cmFwQ2FsbFNpdGUoKSB1c2VkIHRvIGp1c3QgZm9yd2FyZCB0byB0aGUgYWN0dWFsIHNvdXJjZVxuLy8gY29kZSBvZiBDYWxsU2l0ZS5wcm90b3R5cGUudG9TdHJpbmcgYnV0IHVuZm9ydHVuYXRlbHkgYSBuZXcgcmVsZWFzZSBvZiBWOFxuLy8gZGlkIHNvbWV0aGluZyB0byB0aGUgcHJvdG90eXBlIGNoYWluIGFuZCBicm9rZSB0aGUgc2hpbS4gVGhlIG9ubHkgZml4IElcbi8vIGNvdWxkIGZpbmQgd2FzIGNvcHkvcGFzdGUuXG5mdW5jdGlvbiBDYWxsU2l0ZVRvU3RyaW5nKCkge1xuICB2YXIgZmlsZU5hbWU7XG4gIHZhciBmaWxlTG9jYXRpb24gPSBcIlwiO1xuICBpZiAodGhpcy5pc05hdGl2ZSgpKSB7XG4gICAgZmlsZUxvY2F0aW9uID0gXCJuYXRpdmVcIjtcbiAgfSBlbHNlIHtcbiAgICBmaWxlTmFtZSA9IHRoaXMuZ2V0U2NyaXB0TmFtZU9yU291cmNlVVJMKCk7XG4gICAgaWYgKCFmaWxlTmFtZSAmJiB0aGlzLmlzRXZhbCgpKSB7XG4gICAgICBmaWxlTG9jYXRpb24gPSB0aGlzLmdldEV2YWxPcmlnaW4oKTtcbiAgICAgIGZpbGVMb2NhdGlvbiArPSBcIiwgXCI7ICAvLyBFeHBlY3Rpbmcgc291cmNlIHBvc2l0aW9uIHRvIGZvbGxvdy5cbiAgICB9XG5cbiAgICBpZiAoZmlsZU5hbWUpIHtcbiAgICAgIGZpbGVMb2NhdGlvbiArPSBmaWxlTmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU291cmNlIGNvZGUgZG9lcyBub3Qgb3JpZ2luYXRlIGZyb20gYSBmaWxlIGFuZCBpcyBub3QgbmF0aXZlLCBidXQgd2VcbiAgICAgIC8vIGNhbiBzdGlsbCBnZXQgdGhlIHNvdXJjZSBwb3NpdGlvbiBpbnNpZGUgdGhlIHNvdXJjZSBzdHJpbmcsIGUuZy4gaW5cbiAgICAgIC8vIGFuIGV2YWwgc3RyaW5nLlxuICAgICAgZmlsZUxvY2F0aW9uICs9IFwiPGFub255bW91cz5cIjtcbiAgICB9XG4gICAgdmFyIGxpbmVOdW1iZXIgPSB0aGlzLmdldExpbmVOdW1iZXIoKTtcbiAgICBpZiAobGluZU51bWJlciAhPSBudWxsKSB7XG4gICAgICBmaWxlTG9jYXRpb24gKz0gXCI6XCIgKyBsaW5lTnVtYmVyO1xuICAgICAgdmFyIGNvbHVtbk51bWJlciA9IHRoaXMuZ2V0Q29sdW1uTnVtYmVyKCk7XG4gICAgICBpZiAoY29sdW1uTnVtYmVyKSB7XG4gICAgICAgIGZpbGVMb2NhdGlvbiArPSBcIjpcIiArIGNvbHVtbk51bWJlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgbGluZSA9IFwiXCI7XG4gIHZhciBmdW5jdGlvbk5hbWUgPSB0aGlzLmdldEZ1bmN0aW9uTmFtZSgpO1xuICB2YXIgYWRkU3VmZml4ID0gdHJ1ZTtcbiAgdmFyIGlzQ29uc3RydWN0b3IgPSB0aGlzLmlzQ29uc3RydWN0b3IoKTtcbiAgdmFyIGlzTWV0aG9kQ2FsbCA9ICEodGhpcy5pc1RvcGxldmVsKCkgfHwgaXNDb25zdHJ1Y3Rvcik7XG4gIGlmIChpc01ldGhvZENhbGwpIHtcbiAgICB2YXIgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKCk7XG4gICAgLy8gRml4ZXMgc2hpbSB0byBiZSBiYWNrd2FyZCBjb21wYXRhYmxlIHdpdGggTm9kZSB2MCB0byB2NFxuICAgIGlmICh0eXBlTmFtZSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIikge1xuICAgICAgdHlwZU5hbWUgPSBcIm51bGxcIjtcbiAgICB9XG4gICAgdmFyIG1ldGhvZE5hbWUgPSB0aGlzLmdldE1ldGhvZE5hbWUoKTtcbiAgICBpZiAoZnVuY3Rpb25OYW1lKSB7XG4gICAgICBpZiAodHlwZU5hbWUgJiYgZnVuY3Rpb25OYW1lLmluZGV4T2YodHlwZU5hbWUpICE9IDApIHtcbiAgICAgICAgbGluZSArPSB0eXBlTmFtZSArIFwiLlwiO1xuICAgICAgfVxuICAgICAgbGluZSArPSBmdW5jdGlvbk5hbWU7XG4gICAgICBpZiAobWV0aG9kTmFtZSAmJiBmdW5jdGlvbk5hbWUuaW5kZXhPZihcIi5cIiArIG1ldGhvZE5hbWUpICE9IGZ1bmN0aW9uTmFtZS5sZW5ndGggLSBtZXRob2ROYW1lLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgbGluZSArPSBcIiBbYXMgXCIgKyBtZXRob2ROYW1lICsgXCJdXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmUgKz0gdHlwZU5hbWUgKyBcIi5cIiArIChtZXRob2ROYW1lIHx8IFwiPGFub255bW91cz5cIik7XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzQ29uc3RydWN0b3IpIHtcbiAgICBsaW5lICs9IFwibmV3IFwiICsgKGZ1bmN0aW9uTmFtZSB8fCBcIjxhbm9ueW1vdXM+XCIpO1xuICB9IGVsc2UgaWYgKGZ1bmN0aW9uTmFtZSkge1xuICAgIGxpbmUgKz0gZnVuY3Rpb25OYW1lO1xuICB9IGVsc2Uge1xuICAgIGxpbmUgKz0gZmlsZUxvY2F0aW9uO1xuICAgIGFkZFN1ZmZpeCA9IGZhbHNlO1xuICB9XG4gIGlmIChhZGRTdWZmaXgpIHtcbiAgICBsaW5lICs9IFwiIChcIiArIGZpbGVMb2NhdGlvbiArIFwiKVwiO1xuICB9XG4gIHJldHVybiBsaW5lO1xufVxuXG5mdW5jdGlvbiBjbG9uZUNhbGxTaXRlKGZyYW1lKSB7XG4gIHZhciBvYmplY3QgPSB7fTtcbiAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoT2JqZWN0LmdldFByb3RvdHlwZU9mKGZyYW1lKSkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgb2JqZWN0W25hbWVdID0gL14oPzppc3xnZXQpLy50ZXN0KG5hbWUpID8gZnVuY3Rpb24oKSB7IHJldHVybiBmcmFtZVtuYW1lXS5jYWxsKGZyYW1lKTsgfSA6IGZyYW1lW25hbWVdO1xuICB9KTtcbiAgb2JqZWN0LnRvU3RyaW5nID0gQ2FsbFNpdGVUb1N0cmluZztcbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gd3JhcENhbGxTaXRlKGZyYW1lLCBzdGF0ZSkge1xuICAvLyBwcm92aWRlcyBpbnRlcmZhY2UgYmFja3dhcmQgY29tcGF0aWJpbGl0eVxuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXRlID0geyBuZXh0UG9zaXRpb246IG51bGwsIGN1clBvc2l0aW9uOiBudWxsIH1cbiAgfVxuICBpZihmcmFtZS5pc05hdGl2ZSgpKSB7XG4gICAgc3RhdGUuY3VyUG9zaXRpb24gPSBudWxsO1xuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIC8vIE1vc3QgY2FsbCBzaXRlcyB3aWxsIHJldHVybiB0aGUgc291cmNlIGZpbGUgZnJvbSBnZXRGaWxlTmFtZSgpLCBidXQgY29kZVxuICAvLyBwYXNzZWQgdG8gZXZhbCgpIGVuZGluZyBpbiBcIi8vIyBzb3VyY2VVUkw9Li4uXCIgd2lsbCByZXR1cm4gdGhlIHNvdXJjZSBmaWxlXG4gIC8vIGZyb20gZ2V0U2NyaXB0TmFtZU9yU291cmNlVVJMKCkgaW5zdGVhZFxuICB2YXIgc291cmNlID0gZnJhbWUuZ2V0RmlsZU5hbWUoKSB8fCBmcmFtZS5nZXRTY3JpcHROYW1lT3JTb3VyY2VVUkwoKTtcbiAgaWYgKHNvdXJjZSkge1xuICAgIHZhciBsaW5lID0gZnJhbWUuZ2V0TGluZU51bWJlcigpO1xuICAgIHZhciBjb2x1bW4gPSBmcmFtZS5nZXRDb2x1bW5OdW1iZXIoKSAtIDE7XG5cbiAgICAvLyBGaXggcG9zaXRpb24gaW4gTm9kZSB3aGVyZSBzb21lIChpbnRlcm5hbCkgY29kZSBpcyBwcmVwZW5kZWQuXG4gICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9ldmFudy9ub2RlLXNvdXJjZS1tYXAtc3VwcG9ydC9pc3N1ZXMvMzZcbiAgICAvLyBIZWFkZXIgcmVtb3ZlZCBpbiBub2RlIGF0IF4xMC4xNiB8fCA+PTExLjExLjBcbiAgICAvLyB2MTEgaXMgbm90IGFuIExUUyBjYW5kaWRhdGUsIHdlIGNhbiBqdXN0IHRlc3QgdGhlIG9uZSB2ZXJzaW9uIHdpdGggaXQuXG4gICAgLy8gVGVzdCBub2RlIHZlcnNpb25zIGZvcjogMTAuMTYtMTksIDEwLjIwKywgMTItMTksIDIwLTk5LCAxMDArLCBvciAxMS4xMVxuICAgIHZhciBub0hlYWRlciA9IC9edigxMFxcLjFbNi05XXwxMFxcLlsyLTldWzAtOV18MTBcXC5bMC05XXszLH18MVsyLTldXFxkKnxbMi05XVxcZHxcXGR7Myx9fDExXFwuMTEpLztcbiAgICB2YXIgaGVhZGVyTGVuZ3RoID0gbm9IZWFkZXIudGVzdChnbG9iYWxQcm9jZXNzVmVyc2lvbigpKSA/IDAgOiA2MjtcbiAgICBpZiAobGluZSA9PT0gMSAmJiBjb2x1bW4gPiBoZWFkZXJMZW5ndGggJiYgIWlzSW5Ccm93c2VyKCkgJiYgIWZyYW1lLmlzRXZhbCgpKSB7XG4gICAgICBjb2x1bW4gLT0gaGVhZGVyTGVuZ3RoO1xuICAgIH1cblxuICAgIHZhciBwb3NpdGlvbiA9IG1hcFNvdXJjZVBvc2l0aW9uKHtcbiAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgbGluZTogbGluZSxcbiAgICAgIGNvbHVtbjogY29sdW1uXG4gICAgfSk7XG4gICAgc3RhdGUuY3VyUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICBmcmFtZSA9IGNsb25lQ2FsbFNpdGUoZnJhbWUpO1xuICAgIHZhciBvcmlnaW5hbEZ1bmN0aW9uTmFtZSA9IGZyYW1lLmdldEZ1bmN0aW9uTmFtZTtcbiAgICBmcmFtZS5nZXRGdW5jdGlvbk5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmIChzdGF0ZS5uZXh0UG9zaXRpb24gPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxGdW5jdGlvbk5hbWUoKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdGF0ZS5uZXh0UG9zaXRpb24ubmFtZSB8fCBvcmlnaW5hbEZ1bmN0aW9uTmFtZSgpO1xuICAgIH07XG4gICAgZnJhbWUuZ2V0RmlsZU5hbWUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHBvc2l0aW9uLnNvdXJjZTsgfTtcbiAgICBmcmFtZS5nZXRMaW5lTnVtYmVyID0gZnVuY3Rpb24oKSB7IHJldHVybiBwb3NpdGlvbi5saW5lOyB9O1xuICAgIGZyYW1lLmdldENvbHVtbk51bWJlciA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcG9zaXRpb24uY29sdW1uICsgMTsgfTtcbiAgICBmcmFtZS5nZXRTY3JpcHROYW1lT3JTb3VyY2VVUkwgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHBvc2l0aW9uLnNvdXJjZTsgfTtcbiAgICByZXR1cm4gZnJhbWU7XG4gIH1cblxuICAvLyBDb2RlIGNhbGxlZCB1c2luZyBldmFsKCkgbmVlZHMgc3BlY2lhbCBoYW5kbGluZ1xuICB2YXIgb3JpZ2luID0gZnJhbWUuaXNFdmFsKCkgJiYgZnJhbWUuZ2V0RXZhbE9yaWdpbigpO1xuICBpZiAob3JpZ2luKSB7XG4gICAgb3JpZ2luID0gbWFwRXZhbE9yaWdpbihvcmlnaW4pO1xuICAgIGZyYW1lID0gY2xvbmVDYWxsU2l0ZShmcmFtZSk7XG4gICAgZnJhbWUuZ2V0RXZhbE9yaWdpbiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gb3JpZ2luOyB9O1xuICAgIHJldHVybiBmcmFtZTtcbiAgfVxuXG4gIC8vIElmIHdlIGdldCBoZXJlIHRoZW4gd2Ugd2VyZSB1bmFibGUgdG8gY2hhbmdlIHRoZSBzb3VyY2UgcG9zaXRpb25cbiAgcmV0dXJuIGZyYW1lO1xufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHBhcnQgb2YgdGhlIFY4IHN0YWNrIHRyYWNlIEFQSSwgZm9yIG1vcmUgaW5mbyBzZWU6XG4vLyBodHRwczovL3Y4LmRldi9kb2NzL3N0YWNrLXRyYWNlLWFwaVxuZnVuY3Rpb24gcHJlcGFyZVN0YWNrVHJhY2UoZXJyb3IsIHN0YWNrKSB7XG4gIGlmIChlbXB0eUNhY2hlQmV0d2Vlbk9wZXJhdGlvbnMpIHtcbiAgICBmaWxlQ29udGVudHNDYWNoZSA9IHt9O1xuICAgIHNvdXJjZU1hcENhY2hlID0ge307XG4gIH1cblxuICB2YXIgbmFtZSA9IGVycm9yLm5hbWUgfHwgJ0Vycm9yJztcbiAgdmFyIG1lc3NhZ2UgPSBlcnJvci5tZXNzYWdlIHx8ICcnO1xuICB2YXIgZXJyb3JTdHJpbmcgPSBuYW1lICsgXCI6IFwiICsgbWVzc2FnZTtcblxuICB2YXIgc3RhdGUgPSB7IG5leHRQb3NpdGlvbjogbnVsbCwgY3VyUG9zaXRpb246IG51bGwgfTtcbiAgdmFyIHByb2Nlc3NlZFN0YWNrID0gW107XG4gIGZvciAodmFyIGkgPSBzdGFjay5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHByb2Nlc3NlZFN0YWNrLnB1c2goJ1xcbiAgICBhdCAnICsgd3JhcENhbGxTaXRlKHN0YWNrW2ldLCBzdGF0ZSkpO1xuICAgIHN0YXRlLm5leHRQb3NpdGlvbiA9IHN0YXRlLmN1clBvc2l0aW9uO1xuICB9XG4gIHN0YXRlLmN1clBvc2l0aW9uID0gc3RhdGUubmV4dFBvc2l0aW9uID0gbnVsbDtcbiAgcmV0dXJuIGVycm9yU3RyaW5nICsgcHJvY2Vzc2VkU3RhY2sucmV2ZXJzZSgpLmpvaW4oJycpO1xufVxuXG4vLyBHZW5lcmF0ZSBwb3NpdGlvbiBhbmQgc25pcHBldCBvZiBvcmlnaW5hbCBzb3VyY2Ugd2l0aCBwb2ludGVyXG5mdW5jdGlvbiBnZXRFcnJvclNvdXJjZShlcnJvcikge1xuICB2YXIgbWF0Y2ggPSAvXFxuICAgIGF0IFteKF0rIFxcKCguKik6KFxcZCspOihcXGQrKVxcKS8uZXhlYyhlcnJvci5zdGFjayk7XG4gIGlmIChtYXRjaCkge1xuICAgIHZhciBzb3VyY2UgPSBtYXRjaFsxXTtcbiAgICB2YXIgbGluZSA9ICttYXRjaFsyXTtcbiAgICB2YXIgY29sdW1uID0gK21hdGNoWzNdO1xuXG4gICAgLy8gU3VwcG9ydCB0aGUgaW5saW5lIHNvdXJjZUNvbnRlbnRzIGluc2lkZSB0aGUgc291cmNlIG1hcFxuICAgIHZhciBjb250ZW50cyA9IGZpbGVDb250ZW50c0NhY2hlW3NvdXJjZV07XG5cbiAgICAvLyBTdXBwb3J0IGZpbGVzIG9uIGRpc2tcbiAgICBpZiAoIWNvbnRlbnRzICYmIGZzICYmIGZzLmV4aXN0c1N5bmMoc291cmNlKSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29udGVudHMgPSBmcy5yZWFkRmlsZVN5bmMoc291cmNlLCAndXRmOCcpO1xuICAgICAgfSBjYXRjaCAoZXIpIHtcbiAgICAgICAgY29udGVudHMgPSAnJztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGb3JtYXQgdGhlIGxpbmUgZnJvbSB0aGUgb3JpZ2luYWwgc291cmNlIGNvZGUgbGlrZSBub2RlIGRvZXNcbiAgICBpZiAoY29udGVudHMpIHtcbiAgICAgIHZhciBjb2RlID0gY29udGVudHMuc3BsaXQoLyg/OlxcclxcbnxcXHJ8XFxuKS8pW2xpbmUgLSAxXTtcbiAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2UgKyAnOicgKyBsaW5lICsgJ1xcbicgKyBjb2RlICsgJ1xcbicgK1xuICAgICAgICAgIG5ldyBBcnJheShjb2x1bW4pLmpvaW4oJyAnKSArICdeJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIHByaW50RXJyb3JBbmRFeGl0IChlcnJvcikge1xuICB2YXIgc291cmNlID0gZ2V0RXJyb3JTb3VyY2UoZXJyb3IpO1xuXG4gIC8vIEVuc3VyZSBlcnJvciBpcyBwcmludGVkIHN5bmNocm9ub3VzbHkgYW5kIG5vdCB0cnVuY2F0ZWRcbiAgdmFyIHN0ZGVyciA9IGdsb2JhbFByb2Nlc3NTdGRlcnIoKTtcbiAgaWYgKHN0ZGVyciAmJiBzdGRlcnIuX2hhbmRsZSAmJiBzdGRlcnIuX2hhbmRsZS5zZXRCbG9ja2luZykge1xuICAgIHN0ZGVyci5faGFuZGxlLnNldEJsb2NraW5nKHRydWUpO1xuICB9XG5cbiAgaWYgKHNvdXJjZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoKTtcbiAgICBjb25zb2xlLmVycm9yKHNvdXJjZSk7XG4gIH1cblxuICBjb25zb2xlLmVycm9yKGVycm9yLnN0YWNrKTtcbiAgZ2xvYmFsUHJvY2Vzc0V4aXQoMSk7XG59XG5cbmZ1bmN0aW9uIHNoaW1FbWl0VW5jYXVnaHRFeGNlcHRpb24gKCkge1xuICB2YXIgb3JpZ0VtaXQgPSBwcm9jZXNzLmVtaXQ7XG5cbiAgcHJvY2Vzcy5lbWl0ID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3VuY2F1Z2h0RXhjZXB0aW9uJykge1xuICAgICAgdmFyIGhhc1N0YWNrID0gKGFyZ3VtZW50c1sxXSAmJiBhcmd1bWVudHNbMV0uc3RhY2spO1xuICAgICAgdmFyIGhhc0xpc3RlbmVycyA9ICh0aGlzLmxpc3RlbmVycyh0eXBlKS5sZW5ndGggPiAwKTtcblxuICAgICAgaWYgKGhhc1N0YWNrICYmICFoYXNMaXN0ZW5lcnMpIHtcbiAgICAgICAgcmV0dXJuIHByaW50RXJyb3JBbmRFeGl0KGFyZ3VtZW50c1sxXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yaWdFbWl0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbnZhciBvcmlnaW5hbFJldHJpZXZlRmlsZUhhbmRsZXJzID0gcmV0cmlldmVGaWxlSGFuZGxlcnMuc2xpY2UoMCk7XG52YXIgb3JpZ2luYWxSZXRyaWV2ZU1hcEhhbmRsZXJzID0gcmV0cmlldmVNYXBIYW5kbGVycy5zbGljZSgwKTtcblxuZXhwb3J0cy53cmFwQ2FsbFNpdGUgPSB3cmFwQ2FsbFNpdGU7XG5leHBvcnRzLmdldEVycm9yU291cmNlID0gZ2V0RXJyb3JTb3VyY2U7XG5leHBvcnRzLm1hcFNvdXJjZVBvc2l0aW9uID0gbWFwU291cmNlUG9zaXRpb247XG5leHBvcnRzLnJldHJpZXZlU291cmNlTWFwID0gcmV0cmlldmVTb3VyY2VNYXA7XG5cbmV4cG9ydHMuaW5zdGFsbCA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgaWYgKG9wdGlvbnMuZW52aXJvbm1lbnQpIHtcbiAgICBlbnZpcm9ubWVudCA9IG9wdGlvbnMuZW52aXJvbm1lbnQ7XG4gICAgaWYgKFtcIm5vZGVcIiwgXCJicm93c2VyXCIsIFwiYXV0b1wiXS5pbmRleE9mKGVudmlyb25tZW50KSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImVudmlyb25tZW50IFwiICsgZW52aXJvbm1lbnQgKyBcIiB3YXMgdW5rbm93bi4gQXZhaWxhYmxlIG9wdGlvbnMgYXJlIHthdXRvLCBicm93c2VyLCBub2RlfVwiKVxuICAgIH1cbiAgfVxuXG4gIC8vIEFsbG93IHNvdXJjZXMgdG8gYmUgZm91bmQgYnkgbWV0aG9kcyBvdGhlciB0aGFuIHJlYWRpbmcgdGhlIGZpbGVzXG4gIC8vIGRpcmVjdGx5IGZyb20gZGlzay5cbiAgaWYgKG9wdGlvbnMucmV0cmlldmVGaWxlKSB7XG4gICAgaWYgKG9wdGlvbnMub3ZlcnJpZGVSZXRyaWV2ZUZpbGUpIHtcbiAgICAgIHJldHJpZXZlRmlsZUhhbmRsZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgcmV0cmlldmVGaWxlSGFuZGxlcnMudW5zaGlmdChvcHRpb25zLnJldHJpZXZlRmlsZSk7XG4gIH1cblxuICAvLyBBbGxvdyBzb3VyY2UgbWFwcyB0byBiZSBmb3VuZCBieSBtZXRob2RzIG90aGVyIHRoYW4gcmVhZGluZyB0aGUgZmlsZXNcbiAgLy8gZGlyZWN0bHkgZnJvbSBkaXNrLlxuICBpZiAob3B0aW9ucy5yZXRyaWV2ZVNvdXJjZU1hcCkge1xuICAgIGlmIChvcHRpb25zLm92ZXJyaWRlUmV0cmlldmVTb3VyY2VNYXApIHtcbiAgICAgIHJldHJpZXZlTWFwSGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICByZXRyaWV2ZU1hcEhhbmRsZXJzLnVuc2hpZnQob3B0aW9ucy5yZXRyaWV2ZVNvdXJjZU1hcCk7XG4gIH1cblxuICAvLyBTdXBwb3J0IHJ1bnRpbWUgdHJhbnNwaWxlcnMgdGhhdCBpbmNsdWRlIGlubGluZSBzb3VyY2UgbWFwc1xuICBpZiAob3B0aW9ucy5ob29rUmVxdWlyZSAmJiAhaXNJbkJyb3dzZXIoKSkge1xuICAgIC8vIFVzZSBkeW5hbWljUmVxdWlyZSB0byBhdm9pZCBpbmNsdWRpbmcgaW4gYnJvd3NlciBidW5kbGVzXG4gICAgdmFyIE1vZHVsZSA9IGR5bmFtaWNSZXF1aXJlKG1vZHVsZSwgJ21vZHVsZScpO1xuICAgIHZhciAkY29tcGlsZSA9IE1vZHVsZS5wcm90b3R5cGUuX2NvbXBpbGU7XG5cbiAgICBpZiAoISRjb21waWxlLl9fc291cmNlTWFwU3VwcG9ydCkge1xuICAgICAgTW9kdWxlLnByb3RvdHlwZS5fY29tcGlsZSA9IGZ1bmN0aW9uKGNvbnRlbnQsIGZpbGVuYW1lKSB7XG4gICAgICAgIGZpbGVDb250ZW50c0NhY2hlW2ZpbGVuYW1lXSA9IGNvbnRlbnQ7XG4gICAgICAgIHNvdXJjZU1hcENhY2hlW2ZpbGVuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuICRjb21waWxlLmNhbGwodGhpcywgY29udGVudCwgZmlsZW5hbWUpO1xuICAgICAgfTtcblxuICAgICAgTW9kdWxlLnByb3RvdHlwZS5fY29tcGlsZS5fX3NvdXJjZU1hcFN1cHBvcnQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8vIENvbmZpZ3VyZSBvcHRpb25zXG4gIGlmICghZW1wdHlDYWNoZUJldHdlZW5PcGVyYXRpb25zKSB7XG4gICAgZW1wdHlDYWNoZUJldHdlZW5PcGVyYXRpb25zID0gJ2VtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucycgaW4gb3B0aW9ucyA/XG4gICAgICBvcHRpb25zLmVtcHR5Q2FjaGVCZXR3ZWVuT3BlcmF0aW9ucyA6IGZhbHNlO1xuICB9XG5cbiAgLy8gSW5zdGFsbCB0aGUgZXJyb3IgcmVmb3JtYXR0ZXJcbiAgaWYgKCFlcnJvckZvcm1hdHRlckluc3RhbGxlZCkge1xuICAgIGVycm9yRm9ybWF0dGVySW5zdGFsbGVkID0gdHJ1ZTtcbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXBhcmVTdGFja1RyYWNlO1xuICB9XG5cbiAgaWYgKCF1bmNhdWdodFNoaW1JbnN0YWxsZWQpIHtcbiAgICB2YXIgaW5zdGFsbEhhbmRsZXIgPSAnaGFuZGxlVW5jYXVnaHRFeGNlcHRpb25zJyBpbiBvcHRpb25zID9cbiAgICAgIG9wdGlvbnMuaGFuZGxlVW5jYXVnaHRFeGNlcHRpb25zIDogdHJ1ZTtcblxuICAgIC8vIERvIG5vdCBvdmVycmlkZSAndW5jYXVnaHRFeGNlcHRpb24nIHdpdGggb3VyIG93biBoYW5kbGVyIGluIE5vZGUuanNcbiAgICAvLyBXb3JrZXIgdGhyZWFkcy4gV29ya2VycyBwYXNzIHRoZSBlcnJvciB0byB0aGUgbWFpbiB0aHJlYWQgYXMgYW4gZXZlbnQsXG4gICAgLy8gcmF0aGVyIHRoYW4gcHJpbnRpbmcgc29tZXRoaW5nIHRvIHN0ZGVyciBhbmQgZXhpdGluZy5cbiAgICB0cnkge1xuICAgICAgLy8gV2UgbmVlZCB0byB1c2UgYGR5bmFtaWNSZXF1aXJlYCBiZWNhdXNlIGByZXF1aXJlYCBvbiBpdCdzIG93biB3aWxsIGJlIG9wdGltaXplZCBieSBXZWJQYWNrL0Jyb3dzZXJpZnkuXG4gICAgICB2YXIgd29ya2VyX3RocmVhZHMgPSBkeW5hbWljUmVxdWlyZShtb2R1bGUsICd3b3JrZXJfdGhyZWFkcycpO1xuICAgICAgaWYgKHdvcmtlcl90aHJlYWRzLmlzTWFpblRocmVhZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaW5zdGFsbEhhbmRsZXIgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGNhdGNoKGUpIHt9XG5cbiAgICAvLyBQcm92aWRlIHRoZSBvcHRpb24gdG8gbm90IGluc3RhbGwgdGhlIHVuY2F1Z2h0IGV4Y2VwdGlvbiBoYW5kbGVyLiBUaGlzIGlzXG4gICAgLy8gdG8gc3VwcG9ydCBvdGhlciB1bmNhdWdodCBleGNlcHRpb24gaGFuZGxlcnMgKGluIHRlc3QgZnJhbWV3b3JrcywgZm9yXG4gICAgLy8gZXhhbXBsZSkuIElmIHRoaXMgaGFuZGxlciBpcyBub3QgaW5zdGFsbGVkIGFuZCB0aGVyZSBhcmUgbm8gb3RoZXIgdW5jYXVnaHRcbiAgICAvLyBleGNlcHRpb24gaGFuZGxlcnMsIHVuY2F1Z2h0IGV4Y2VwdGlvbnMgd2lsbCBiZSBjYXVnaHQgYnkgbm9kZSdzIGJ1aWx0LWluXG4gICAgLy8gZXhjZXB0aW9uIGhhbmRsZXIgYW5kIHRoZSBwcm9jZXNzIHdpbGwgc3RpbGwgYmUgdGVybWluYXRlZC4gSG93ZXZlciwgdGhlXG4gICAgLy8gZ2VuZXJhdGVkIEphdmFTY3JpcHQgY29kZSB3aWxsIGJlIHNob3duIGFib3ZlIHRoZSBzdGFjayB0cmFjZSBpbnN0ZWFkIG9mXG4gICAgLy8gdGhlIG9yaWdpbmFsIHNvdXJjZSBjb2RlLlxuICAgIGlmIChpbnN0YWxsSGFuZGxlciAmJiBoYXNHbG9iYWxQcm9jZXNzRXZlbnRFbWl0dGVyKCkpIHtcbiAgICAgIHVuY2F1Z2h0U2hpbUluc3RhbGxlZCA9IHRydWU7XG4gICAgICBzaGltRW1pdFVuY2F1Z2h0RXhjZXB0aW9uKCk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLnJlc2V0UmV0cmlldmVIYW5kbGVycyA9IGZ1bmN0aW9uKCkge1xuICByZXRyaWV2ZUZpbGVIYW5kbGVycy5sZW5ndGggPSAwO1xuICByZXRyaWV2ZU1hcEhhbmRsZXJzLmxlbmd0aCA9IDA7XG5cbiAgcmV0cmlldmVGaWxlSGFuZGxlcnMgPSBvcmlnaW5hbFJldHJpZXZlRmlsZUhhbmRsZXJzLnNsaWNlKDApO1xuICByZXRyaWV2ZU1hcEhhbmRsZXJzID0gb3JpZ2luYWxSZXRyaWV2ZU1hcEhhbmRsZXJzLnNsaWNlKDApO1xuXG4gIHJldHJpZXZlU291cmNlTWFwID0gaGFuZGxlckV4ZWMocmV0cmlldmVNYXBIYW5kbGVycyk7XG4gIHJldHJpZXZlRmlsZSA9IGhhbmRsZXJFeGVjKHJldHJpZXZlRmlsZUhhbmRsZXJzKTtcbn1cbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGhhc05hdGl2ZU1hcCA9IHR5cGVvZiBNYXAgIT09IFwidW5kZWZpbmVkXCI7XG5cbi8qKlxuICogQSBkYXRhIHN0cnVjdHVyZSB3aGljaCBpcyBhIGNvbWJpbmF0aW9uIG9mIGFuIGFycmF5IGFuZCBhIHNldC4gQWRkaW5nIGEgbmV3XG4gKiBtZW1iZXIgaXMgTygxKSwgdGVzdGluZyBmb3IgbWVtYmVyc2hpcCBpcyBPKDEpLCBhbmQgZmluZGluZyB0aGUgaW5kZXggb2YgYW5cbiAqIGVsZW1lbnQgaXMgTygxKS4gUmVtb3ZpbmcgZWxlbWVudHMgZnJvbSB0aGUgc2V0IGlzIG5vdCBzdXBwb3J0ZWQuIE9ubHlcbiAqIHN0cmluZ3MgYXJlIHN1cHBvcnRlZCBmb3IgbWVtYmVyc2hpcC5cbiAqL1xuZnVuY3Rpb24gQXJyYXlTZXQoKSB7XG4gIHRoaXMuX2FycmF5ID0gW107XG4gIHRoaXMuX3NldCA9IGhhc05hdGl2ZU1hcCA/IG5ldyBNYXAoKSA6IE9iamVjdC5jcmVhdGUobnVsbCk7XG59XG5cbi8qKlxuICogU3RhdGljIG1ldGhvZCBmb3IgY3JlYXRpbmcgQXJyYXlTZXQgaW5zdGFuY2VzIGZyb20gYW4gZXhpc3RpbmcgYXJyYXkuXG4gKi9cbkFycmF5U2V0LmZyb21BcnJheSA9IGZ1bmN0aW9uIEFycmF5U2V0X2Zyb21BcnJheShhQXJyYXksIGFBbGxvd0R1cGxpY2F0ZXMpIHtcbiAgdmFyIHNldCA9IG5ldyBBcnJheVNldCgpO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gYUFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgc2V0LmFkZChhQXJyYXlbaV0sIGFBbGxvd0R1cGxpY2F0ZXMpO1xuICB9XG4gIHJldHVybiBzZXQ7XG59O1xuXG4vKipcbiAqIFJldHVybiBob3cgbWFueSB1bmlxdWUgaXRlbXMgYXJlIGluIHRoaXMgQXJyYXlTZXQuIElmIGR1cGxpY2F0ZXMgaGF2ZSBiZWVuXG4gKiBhZGRlZCwgdGhhbiB0aG9zZSBkbyBub3QgY291bnQgdG93YXJkcyB0aGUgc2l6ZS5cbiAqXG4gKiBAcmV0dXJucyBOdW1iZXJcbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLnNpemUgPSBmdW5jdGlvbiBBcnJheVNldF9zaXplKCkge1xuICByZXR1cm4gaGFzTmF0aXZlTWFwID8gdGhpcy5fc2V0LnNpemUgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLl9zZXQpLmxlbmd0aDtcbn07XG5cbi8qKlxuICogQWRkIHRoZSBnaXZlbiBzdHJpbmcgdG8gdGhpcyBzZXQuXG4gKlxuICogQHBhcmFtIFN0cmluZyBhU3RyXG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBBcnJheVNldF9hZGQoYVN0ciwgYUFsbG93RHVwbGljYXRlcykge1xuICB2YXIgc1N0ciA9IGhhc05hdGl2ZU1hcCA/IGFTdHIgOiB1dGlsLnRvU2V0U3RyaW5nKGFTdHIpO1xuICB2YXIgaXNEdXBsaWNhdGUgPSBoYXNOYXRpdmVNYXAgPyB0aGlzLmhhcyhhU3RyKSA6IGhhcy5jYWxsKHRoaXMuX3NldCwgc1N0cik7XG4gIHZhciBpZHggPSB0aGlzLl9hcnJheS5sZW5ndGg7XG4gIGlmICghaXNEdXBsaWNhdGUgfHwgYUFsbG93RHVwbGljYXRlcykge1xuICAgIHRoaXMuX2FycmF5LnB1c2goYVN0cik7XG4gIH1cbiAgaWYgKCFpc0R1cGxpY2F0ZSkge1xuICAgIGlmIChoYXNOYXRpdmVNYXApIHtcbiAgICAgIHRoaXMuX3NldC5zZXQoYVN0ciwgaWR4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0W3NTdHJdID0gaWR4O1xuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBJcyB0aGUgZ2l2ZW4gc3RyaW5nIGEgbWVtYmVyIG9mIHRoaXMgc2V0P1xuICpcbiAqIEBwYXJhbSBTdHJpbmcgYVN0clxuICovXG5BcnJheVNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gQXJyYXlTZXRfaGFzKGFTdHIpIHtcbiAgaWYgKGhhc05hdGl2ZU1hcCkge1xuICAgIHJldHVybiB0aGlzLl9zZXQuaGFzKGFTdHIpO1xuICB9IGVsc2Uge1xuICAgIHZhciBzU3RyID0gdXRpbC50b1NldFN0cmluZyhhU3RyKTtcbiAgICByZXR1cm4gaGFzLmNhbGwodGhpcy5fc2V0LCBzU3RyKTtcbiAgfVxufTtcblxuLyoqXG4gKiBXaGF0IGlzIHRoZSBpbmRleCBvZiB0aGUgZ2l2ZW4gc3RyaW5nIGluIHRoZSBhcnJheT9cbiAqXG4gKiBAcGFyYW0gU3RyaW5nIGFTdHJcbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiBBcnJheVNldF9pbmRleE9mKGFTdHIpIHtcbiAgaWYgKGhhc05hdGl2ZU1hcCkge1xuICAgIHZhciBpZHggPSB0aGlzLl9zZXQuZ2V0KGFTdHIpO1xuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAgICByZXR1cm4gaWR4O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgc1N0ciA9IHV0aWwudG9TZXRTdHJpbmcoYVN0cik7XG4gICAgaWYgKGhhcy5jYWxsKHRoaXMuX3NldCwgc1N0cikpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zZXRbc1N0cl07XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBhU3RyICsgJ1wiIGlzIG5vdCBpbiB0aGUgc2V0LicpO1xufTtcblxuLyoqXG4gKiBXaGF0IGlzIHRoZSBlbGVtZW50IGF0IHRoZSBnaXZlbiBpbmRleD9cbiAqXG4gKiBAcGFyYW0gTnVtYmVyIGFJZHhcbiAqL1xuQXJyYXlTZXQucHJvdG90eXBlLmF0ID0gZnVuY3Rpb24gQXJyYXlTZXRfYXQoYUlkeCkge1xuICBpZiAoYUlkeCA+PSAwICYmIGFJZHggPCB0aGlzLl9hcnJheS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXJyYXlbYUlkeF07XG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKCdObyBlbGVtZW50IGluZGV4ZWQgYnkgJyArIGFJZHgpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBhcnJheSByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHNldCAod2hpY2ggaGFzIHRoZSBwcm9wZXIgaW5kaWNlc1xuICogaW5kaWNhdGVkIGJ5IGluZGV4T2YpLiBOb3RlIHRoYXQgdGhpcyBpcyBhIGNvcHkgb2YgdGhlIGludGVybmFsIGFycmF5IHVzZWRcbiAqIGZvciBzdG9yaW5nIHRoZSBtZW1iZXJzIHNvIHRoYXQgbm8gb25lIGNhbiBtZXNzIHdpdGggaW50ZXJuYWwgc3RhdGUuXG4gKi9cbkFycmF5U2V0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gQXJyYXlTZXRfdG9BcnJheSgpIHtcbiAgcmV0dXJuIHRoaXMuX2FycmF5LnNsaWNlKCk7XG59O1xuXG5leHBvcnRzLkFycmF5U2V0ID0gQXJyYXlTZXQ7XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICpcbiAqIEJhc2VkIG9uIHRoZSBCYXNlIDY0IFZMUSBpbXBsZW1lbnRhdGlvbiBpbiBDbG9zdXJlIENvbXBpbGVyOlxuICogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jbG9zdXJlLWNvbXBpbGVyL3NvdXJjZS9icm93c2UvdHJ1bmsvc3JjL2NvbS9nb29nbGUvZGVidWdnaW5nL3NvdXJjZW1hcC9CYXNlNjRWTFEuamF2YVxuICpcbiAqIENvcHlyaWdodCAyMDExIFRoZSBDbG9zdXJlIENvbXBpbGVyIEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBSZWRpc3RyaWJ1dGlvbiBhbmQgdXNlIGluIHNvdXJjZSBhbmQgYmluYXJ5IGZvcm1zLCB3aXRoIG9yIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmVcbiAqIG1ldDpcbiAqXG4gKiAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuICogICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICogICogUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZVxuICogICAgY29weXJpZ2h0IG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmdcbiAqICAgIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb24gYW5kL29yIG90aGVyIG1hdGVyaWFscyBwcm92aWRlZFxuICogICAgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICogICogTmVpdGhlciB0aGUgbmFtZSBvZiBHb29nbGUgSW5jLiBub3IgdGhlIG5hbWVzIG9mIGl0c1xuICogICAgY29udHJpYnV0b3JzIG1heSBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0cyBkZXJpdmVkXG4gKiAgICBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SU1xuICogXCJBUyBJU1wiIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVFxuICogTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SXG4gKiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIENPUFlSSUdIVFxuICogT1dORVIgT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsIElOQ0lERU5UQUwsXG4gKiBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLCBCVVQgTk9UXG4gKiBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWVxuICogVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuICogKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFXG4gKiBPRiBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICovXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCcuL2Jhc2U2NCcpO1xuXG4vLyBBIHNpbmdsZSBiYXNlIDY0IGRpZ2l0IGNhbiBjb250YWluIDYgYml0cyBvZiBkYXRhLiBGb3IgdGhlIGJhc2UgNjQgdmFyaWFibGVcbi8vIGxlbmd0aCBxdWFudGl0aWVzIHdlIHVzZSBpbiB0aGUgc291cmNlIG1hcCBzcGVjLCB0aGUgZmlyc3QgYml0IGlzIHRoZSBzaWduLFxuLy8gdGhlIG5leHQgZm91ciBiaXRzIGFyZSB0aGUgYWN0dWFsIHZhbHVlLCBhbmQgdGhlIDZ0aCBiaXQgaXMgdGhlXG4vLyBjb250aW51YXRpb24gYml0LiBUaGUgY29udGludWF0aW9uIGJpdCB0ZWxscyB1cyB3aGV0aGVyIHRoZXJlIGFyZSBtb3JlXG4vLyBkaWdpdHMgaW4gdGhpcyB2YWx1ZSBmb2xsb3dpbmcgdGhpcyBkaWdpdC5cbi8vXG4vLyAgIENvbnRpbnVhdGlvblxuLy8gICB8ICAgIFNpZ25cbi8vICAgfCAgICB8XG4vLyAgIFYgICAgVlxuLy8gICAxMDEwMTFcblxudmFyIFZMUV9CQVNFX1NISUZUID0gNTtcblxuLy8gYmluYXJ5OiAxMDAwMDBcbnZhciBWTFFfQkFTRSA9IDEgPDwgVkxRX0JBU0VfU0hJRlQ7XG5cbi8vIGJpbmFyeTogMDExMTExXG52YXIgVkxRX0JBU0VfTUFTSyA9IFZMUV9CQVNFIC0gMTtcblxuLy8gYmluYXJ5OiAxMDAwMDBcbnZhciBWTFFfQ09OVElOVUFUSU9OX0JJVCA9IFZMUV9CQVNFO1xuXG4vKipcbiAqIENvbnZlcnRzIGZyb20gYSB0d28tY29tcGxlbWVudCB2YWx1ZSB0byBhIHZhbHVlIHdoZXJlIHRoZSBzaWduIGJpdCBpc1xuICogcGxhY2VkIGluIHRoZSBsZWFzdCBzaWduaWZpY2FudCBiaXQuICBGb3IgZXhhbXBsZSwgYXMgZGVjaW1hbHM6XG4gKiAgIDEgYmVjb21lcyAyICgxMCBiaW5hcnkpLCAtMSBiZWNvbWVzIDMgKDExIGJpbmFyeSlcbiAqICAgMiBiZWNvbWVzIDQgKDEwMCBiaW5hcnkpLCAtMiBiZWNvbWVzIDUgKDEwMSBiaW5hcnkpXG4gKi9cbmZ1bmN0aW9uIHRvVkxRU2lnbmVkKGFWYWx1ZSkge1xuICByZXR1cm4gYVZhbHVlIDwgMFxuICAgID8gKCgtYVZhbHVlKSA8PCAxKSArIDFcbiAgICA6IChhVmFsdWUgPDwgMSkgKyAwO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIHRvIGEgdHdvLWNvbXBsZW1lbnQgdmFsdWUgZnJvbSBhIHZhbHVlIHdoZXJlIHRoZSBzaWduIGJpdCBpc1xuICogcGxhY2VkIGluIHRoZSBsZWFzdCBzaWduaWZpY2FudCBiaXQuICBGb3IgZXhhbXBsZSwgYXMgZGVjaW1hbHM6XG4gKiAgIDIgKDEwIGJpbmFyeSkgYmVjb21lcyAxLCAzICgxMSBiaW5hcnkpIGJlY29tZXMgLTFcbiAqICAgNCAoMTAwIGJpbmFyeSkgYmVjb21lcyAyLCA1ICgxMDEgYmluYXJ5KSBiZWNvbWVzIC0yXG4gKi9cbmZ1bmN0aW9uIGZyb21WTFFTaWduZWQoYVZhbHVlKSB7XG4gIHZhciBpc05lZ2F0aXZlID0gKGFWYWx1ZSAmIDEpID09PSAxO1xuICB2YXIgc2hpZnRlZCA9IGFWYWx1ZSA+PiAxO1xuICByZXR1cm4gaXNOZWdhdGl2ZVxuICAgID8gLXNoaWZ0ZWRcbiAgICA6IHNoaWZ0ZWQ7XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgYmFzZSA2NCBWTFEgZW5jb2RlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiBiYXNlNjRWTFFfZW5jb2RlKGFWYWx1ZSkge1xuICB2YXIgZW5jb2RlZCA9IFwiXCI7XG4gIHZhciBkaWdpdDtcblxuICB2YXIgdmxxID0gdG9WTFFTaWduZWQoYVZhbHVlKTtcblxuICBkbyB7XG4gICAgZGlnaXQgPSB2bHEgJiBWTFFfQkFTRV9NQVNLO1xuICAgIHZscSA+Pj49IFZMUV9CQVNFX1NISUZUO1xuICAgIGlmICh2bHEgPiAwKSB7XG4gICAgICAvLyBUaGVyZSBhcmUgc3RpbGwgbW9yZSBkaWdpdHMgaW4gdGhpcyB2YWx1ZSwgc28gd2UgbXVzdCBtYWtlIHN1cmUgdGhlXG4gICAgICAvLyBjb250aW51YXRpb24gYml0IGlzIG1hcmtlZC5cbiAgICAgIGRpZ2l0IHw9IFZMUV9DT05USU5VQVRJT05fQklUO1xuICAgIH1cbiAgICBlbmNvZGVkICs9IGJhc2U2NC5lbmNvZGUoZGlnaXQpO1xuICB9IHdoaWxlICh2bHEgPiAwKTtcblxuICByZXR1cm4gZW5jb2RlZDtcbn07XG5cbi8qKlxuICogRGVjb2RlcyB0aGUgbmV4dCBiYXNlIDY0IFZMUSB2YWx1ZSBmcm9tIHRoZSBnaXZlbiBzdHJpbmcgYW5kIHJldHVybnMgdGhlXG4gKiB2YWx1ZSBhbmQgdGhlIHJlc3Qgb2YgdGhlIHN0cmluZyB2aWEgdGhlIG91dCBwYXJhbWV0ZXIuXG4gKi9cbmV4cG9ydHMuZGVjb2RlID0gZnVuY3Rpb24gYmFzZTY0VkxRX2RlY29kZShhU3RyLCBhSW5kZXgsIGFPdXRQYXJhbSkge1xuICB2YXIgc3RyTGVuID0gYVN0ci5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSAwO1xuICB2YXIgc2hpZnQgPSAwO1xuICB2YXIgY29udGludWF0aW9uLCBkaWdpdDtcblxuICBkbyB7XG4gICAgaWYgKGFJbmRleCA+PSBzdHJMZW4pIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIG1vcmUgZGlnaXRzIGluIGJhc2UgNjQgVkxRIHZhbHVlLlwiKTtcbiAgICB9XG5cbiAgICBkaWdpdCA9IGJhc2U2NC5kZWNvZGUoYVN0ci5jaGFyQ29kZUF0KGFJbmRleCsrKSk7XG4gICAgaWYgKGRpZ2l0ID09PSAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBiYXNlNjQgZGlnaXQ6IFwiICsgYVN0ci5jaGFyQXQoYUluZGV4IC0gMSkpO1xuICAgIH1cblxuICAgIGNvbnRpbnVhdGlvbiA9ICEhKGRpZ2l0ICYgVkxRX0NPTlRJTlVBVElPTl9CSVQpO1xuICAgIGRpZ2l0ICY9IFZMUV9CQVNFX01BU0s7XG4gICAgcmVzdWx0ID0gcmVzdWx0ICsgKGRpZ2l0IDw8IHNoaWZ0KTtcbiAgICBzaGlmdCArPSBWTFFfQkFTRV9TSElGVDtcbiAgfSB3aGlsZSAoY29udGludWF0aW9uKTtcblxuICBhT3V0UGFyYW0udmFsdWUgPSBmcm9tVkxRU2lnbmVkKHJlc3VsdCk7XG4gIGFPdXRQYXJhbS5yZXN0ID0gYUluZGV4O1xufTtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIGludFRvQ2hhck1hcCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvJy5zcGxpdCgnJyk7XG5cbi8qKlxuICogRW5jb2RlIGFuIGludGVnZXIgaW4gdGhlIHJhbmdlIG9mIDAgdG8gNjMgdG8gYSBzaW5nbGUgYmFzZSA2NCBkaWdpdC5cbiAqL1xuZXhwb3J0cy5lbmNvZGUgPSBmdW5jdGlvbiAobnVtYmVyKSB7XG4gIGlmICgwIDw9IG51bWJlciAmJiBudW1iZXIgPCBpbnRUb0NoYXJNYXAubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGludFRvQ2hhck1hcFtudW1iZXJdO1xuICB9XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNdXN0IGJlIGJldHdlZW4gMCBhbmQgNjM6IFwiICsgbnVtYmVyKTtcbn07XG5cbi8qKlxuICogRGVjb2RlIGEgc2luZ2xlIGJhc2UgNjQgY2hhcmFjdGVyIGNvZGUgZGlnaXQgdG8gYW4gaW50ZWdlci4gUmV0dXJucyAtMSBvblxuICogZmFpbHVyZS5cbiAqL1xuZXhwb3J0cy5kZWNvZGUgPSBmdW5jdGlvbiAoY2hhckNvZGUpIHtcbiAgdmFyIGJpZ0EgPSA2NTsgICAgIC8vICdBJ1xuICB2YXIgYmlnWiA9IDkwOyAgICAgLy8gJ1onXG5cbiAgdmFyIGxpdHRsZUEgPSA5NzsgIC8vICdhJ1xuICB2YXIgbGl0dGxlWiA9IDEyMjsgLy8gJ3onXG5cbiAgdmFyIHplcm8gPSA0ODsgICAgIC8vICcwJ1xuICB2YXIgbmluZSA9IDU3OyAgICAgLy8gJzknXG5cbiAgdmFyIHBsdXMgPSA0MzsgICAgIC8vICcrJ1xuICB2YXIgc2xhc2ggPSA0NzsgICAgLy8gJy8nXG5cbiAgdmFyIGxpdHRsZU9mZnNldCA9IDI2O1xuICB2YXIgbnVtYmVyT2Zmc2V0ID0gNTI7XG5cbiAgLy8gMCAtIDI1OiBBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWlxuICBpZiAoYmlnQSA8PSBjaGFyQ29kZSAmJiBjaGFyQ29kZSA8PSBiaWdaKSB7XG4gICAgcmV0dXJuIChjaGFyQ29kZSAtIGJpZ0EpO1xuICB9XG5cbiAgLy8gMjYgLSA1MTogYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcbiAgaWYgKGxpdHRsZUEgPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gbGl0dGxlWikge1xuICAgIHJldHVybiAoY2hhckNvZGUgLSBsaXR0bGVBICsgbGl0dGxlT2Zmc2V0KTtcbiAgfVxuXG4gIC8vIDUyIC0gNjE6IDAxMjM0NTY3ODlcbiAgaWYgKHplcm8gPD0gY2hhckNvZGUgJiYgY2hhckNvZGUgPD0gbmluZSkge1xuICAgIHJldHVybiAoY2hhckNvZGUgLSB6ZXJvICsgbnVtYmVyT2Zmc2V0KTtcbiAgfVxuXG4gIC8vIDYyOiArXG4gIGlmIChjaGFyQ29kZSA9PSBwbHVzKSB7XG4gICAgcmV0dXJuIDYyO1xuICB9XG5cbiAgLy8gNjM6IC9cbiAgaWYgKGNoYXJDb2RlID09IHNsYXNoKSB7XG4gICAgcmV0dXJuIDYzO1xuICB9XG5cbiAgLy8gSW52YWxpZCBiYXNlNjQgZGlnaXQuXG4gIHJldHVybiAtMTtcbn07XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbmV4cG9ydHMuR1JFQVRFU1RfTE9XRVJfQk9VTkQgPSAxO1xuZXhwb3J0cy5MRUFTVF9VUFBFUl9CT1VORCA9IDI7XG5cbi8qKlxuICogUmVjdXJzaXZlIGltcGxlbWVudGF0aW9uIG9mIGJpbmFyeSBzZWFyY2guXG4gKlxuICogQHBhcmFtIGFMb3cgSW5kaWNlcyBoZXJlIGFuZCBsb3dlciBkbyBub3QgY29udGFpbiB0aGUgbmVlZGxlLlxuICogQHBhcmFtIGFIaWdoIEluZGljZXMgaGVyZSBhbmQgaGlnaGVyIGRvIG5vdCBjb250YWluIHRoZSBuZWVkbGUuXG4gKiBAcGFyYW0gYU5lZWRsZSBUaGUgZWxlbWVudCBiZWluZyBzZWFyY2hlZCBmb3IuXG4gKiBAcGFyYW0gYUhheXN0YWNrIFRoZSBub24tZW1wdHkgYXJyYXkgYmVpbmcgc2VhcmNoZWQuXG4gKiBAcGFyYW0gYUNvbXBhcmUgRnVuY3Rpb24gd2hpY2ggdGFrZXMgdHdvIGVsZW1lbnRzIGFuZCByZXR1cm5zIC0xLCAwLCBvciAxLlxuICogQHBhcmFtIGFCaWFzIEVpdGhlciAnYmluYXJ5U2VhcmNoLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuICogICAgICdiaW5hcnlTZWFyY2guTEVBU1RfVVBQRVJfQk9VTkQnLiBTcGVjaWZpZXMgd2hldGhlciB0byByZXR1cm4gdGhlXG4gKiAgICAgY2xvc2VzdCBlbGVtZW50IHRoYXQgaXMgc21hbGxlciB0aGFuIG9yIGdyZWF0ZXIgdGhhbiB0aGUgb25lIHdlIGFyZVxuICogICAgIHNlYXJjaGluZyBmb3IsIHJlc3BlY3RpdmVseSwgaWYgdGhlIGV4YWN0IGVsZW1lbnQgY2Fubm90IGJlIGZvdW5kLlxuICovXG5mdW5jdGlvbiByZWN1cnNpdmVTZWFyY2goYUxvdywgYUhpZ2gsIGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKSB7XG4gIC8vIFRoaXMgZnVuY3Rpb24gdGVybWluYXRlcyB3aGVuIG9uZSBvZiB0aGUgZm9sbG93aW5nIGlzIHRydWU6XG4gIC8vXG4gIC8vICAgMS4gV2UgZmluZCB0aGUgZXhhY3QgZWxlbWVudCB3ZSBhcmUgbG9va2luZyBmb3IuXG4gIC8vXG4gIC8vICAgMi4gV2UgZGlkIG5vdCBmaW5kIHRoZSBleGFjdCBlbGVtZW50LCBidXQgd2UgY2FuIHJldHVybiB0aGUgaW5kZXggb2ZcbiAgLy8gICAgICB0aGUgbmV4dC1jbG9zZXN0IGVsZW1lbnQuXG4gIC8vXG4gIC8vICAgMy4gV2UgZGlkIG5vdCBmaW5kIHRoZSBleGFjdCBlbGVtZW50LCBhbmQgdGhlcmUgaXMgbm8gbmV4dC1jbG9zZXN0XG4gIC8vICAgICAgZWxlbWVudCB0aGFuIHRoZSBvbmUgd2UgYXJlIHNlYXJjaGluZyBmb3IsIHNvIHdlIHJldHVybiAtMS5cbiAgdmFyIG1pZCA9IE1hdGguZmxvb3IoKGFIaWdoIC0gYUxvdykgLyAyKSArIGFMb3c7XG4gIHZhciBjbXAgPSBhQ29tcGFyZShhTmVlZGxlLCBhSGF5c3RhY2tbbWlkXSwgdHJ1ZSk7XG4gIGlmIChjbXAgPT09IDApIHtcbiAgICAvLyBGb3VuZCB0aGUgZWxlbWVudCB3ZSBhcmUgbG9va2luZyBmb3IuXG4gICAgcmV0dXJuIG1pZDtcbiAgfVxuICBlbHNlIGlmIChjbXAgPiAwKSB7XG4gICAgLy8gT3VyIG5lZWRsZSBpcyBncmVhdGVyIHRoYW4gYUhheXN0YWNrW21pZF0uXG4gICAgaWYgKGFIaWdoIC0gbWlkID4gMSkge1xuICAgICAgLy8gVGhlIGVsZW1lbnQgaXMgaW4gdGhlIHVwcGVyIGhhbGYuXG4gICAgICByZXR1cm4gcmVjdXJzaXZlU2VhcmNoKG1pZCwgYUhpZ2gsIGFOZWVkbGUsIGFIYXlzdGFjaywgYUNvbXBhcmUsIGFCaWFzKTtcbiAgICB9XG5cbiAgICAvLyBUaGUgZXhhY3QgbmVlZGxlIGVsZW1lbnQgd2FzIG5vdCBmb3VuZCBpbiB0aGlzIGhheXN0YWNrLiBEZXRlcm1pbmUgaWZcbiAgICAvLyB3ZSBhcmUgaW4gdGVybWluYXRpb24gY2FzZSAoMykgb3IgKDIpIGFuZCByZXR1cm4gdGhlIGFwcHJvcHJpYXRlIHRoaW5nLlxuICAgIGlmIChhQmlhcyA9PSBleHBvcnRzLkxFQVNUX1VQUEVSX0JPVU5EKSB7XG4gICAgICByZXR1cm4gYUhpZ2ggPCBhSGF5c3RhY2subGVuZ3RoID8gYUhpZ2ggOiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG1pZDtcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAgLy8gT3VyIG5lZWRsZSBpcyBsZXNzIHRoYW4gYUhheXN0YWNrW21pZF0uXG4gICAgaWYgKG1pZCAtIGFMb3cgPiAxKSB7XG4gICAgICAvLyBUaGUgZWxlbWVudCBpcyBpbiB0aGUgbG93ZXIgaGFsZi5cbiAgICAgIHJldHVybiByZWN1cnNpdmVTZWFyY2goYUxvdywgbWlkLCBhTmVlZGxlLCBhSGF5c3RhY2ssIGFDb21wYXJlLCBhQmlhcyk7XG4gICAgfVxuXG4gICAgLy8gd2UgYXJlIGluIHRlcm1pbmF0aW9uIGNhc2UgKDMpIG9yICgyKSBhbmQgcmV0dXJuIHRoZSBhcHByb3ByaWF0ZSB0aGluZy5cbiAgICBpZiAoYUJpYXMgPT0gZXhwb3J0cy5MRUFTVF9VUFBFUl9CT1VORCkge1xuICAgICAgcmV0dXJuIG1pZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFMb3cgPCAwID8gLTEgOiBhTG93O1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFRoaXMgaXMgYW4gaW1wbGVtZW50YXRpb24gb2YgYmluYXJ5IHNlYXJjaCB3aGljaCB3aWxsIGFsd2F5cyB0cnkgYW5kIHJldHVyblxuICogdGhlIGluZGV4IG9mIHRoZSBjbG9zZXN0IGVsZW1lbnQgaWYgdGhlcmUgaXMgbm8gZXhhY3QgaGl0LiBUaGlzIGlzIGJlY2F1c2VcbiAqIG1hcHBpbmdzIGJldHdlZW4gb3JpZ2luYWwgYW5kIGdlbmVyYXRlZCBsaW5lL2NvbCBwYWlycyBhcmUgc2luZ2xlIHBvaW50cyxcbiAqIGFuZCB0aGVyZSBpcyBhbiBpbXBsaWNpdCByZWdpb24gYmV0d2VlbiBlYWNoIG9mIHRoZW0sIHNvIGEgbWlzcyBqdXN0IG1lYW5zXG4gKiB0aGF0IHlvdSBhcmVuJ3Qgb24gdGhlIHZlcnkgc3RhcnQgb2YgYSByZWdpb24uXG4gKlxuICogQHBhcmFtIGFOZWVkbGUgVGhlIGVsZW1lbnQgeW91IGFyZSBsb29raW5nIGZvci5cbiAqIEBwYXJhbSBhSGF5c3RhY2sgVGhlIGFycmF5IHRoYXQgaXMgYmVpbmcgc2VhcmNoZWQuXG4gKiBAcGFyYW0gYUNvbXBhcmUgQSBmdW5jdGlvbiB3aGljaCB0YWtlcyB0aGUgbmVlZGxlIGFuZCBhbiBlbGVtZW50IGluIHRoZVxuICogICAgIGFycmF5IGFuZCByZXR1cm5zIC0xLCAwLCBvciAxIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBuZWVkbGUgaXMgbGVzc1xuICogICAgIHRoYW4sIGVxdWFsIHRvLCBvciBncmVhdGVyIHRoYW4gdGhlIGVsZW1lbnQsIHJlc3BlY3RpdmVseS5cbiAqIEBwYXJhbSBhQmlhcyBFaXRoZXIgJ2JpbmFyeVNlYXJjaC5HUkVBVEVTVF9MT1dFUl9CT1VORCcgb3JcbiAqICAgICAnYmluYXJ5U2VhcmNoLkxFQVNUX1VQUEVSX0JPVU5EJy4gU3BlY2lmaWVzIHdoZXRoZXIgdG8gcmV0dXJuIHRoZVxuICogICAgIGNsb3Nlc3QgZWxlbWVudCB0aGF0IGlzIHNtYWxsZXIgdGhhbiBvciBncmVhdGVyIHRoYW4gdGhlIG9uZSB3ZSBhcmVcbiAqICAgICBzZWFyY2hpbmcgZm9yLCByZXNwZWN0aXZlbHksIGlmIHRoZSBleGFjdCBlbGVtZW50IGNhbm5vdCBiZSBmb3VuZC5cbiAqICAgICBEZWZhdWx0cyB0byAnYmluYXJ5U2VhcmNoLkdSRUFURVNUX0xPV0VSX0JPVU5EJy5cbiAqL1xuZXhwb3J0cy5zZWFyY2ggPSBmdW5jdGlvbiBzZWFyY2goYU5lZWRsZSwgYUhheXN0YWNrLCBhQ29tcGFyZSwgYUJpYXMpIHtcbiAgaWYgKGFIYXlzdGFjay5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICB2YXIgaW5kZXggPSByZWN1cnNpdmVTZWFyY2goLTEsIGFIYXlzdGFjay5sZW5ndGgsIGFOZWVkbGUsIGFIYXlzdGFjayxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFDb21wYXJlLCBhQmlhcyB8fCBleHBvcnRzLkdSRUFURVNUX0xPV0VSX0JPVU5EKTtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8vIFdlIGhhdmUgZm91bmQgZWl0aGVyIHRoZSBleGFjdCBlbGVtZW50LCBvciB0aGUgbmV4dC1jbG9zZXN0IGVsZW1lbnQgdGhhblxuICAvLyB0aGUgb25lIHdlIGFyZSBzZWFyY2hpbmcgZm9yLiBIb3dldmVyLCB0aGVyZSBtYXkgYmUgbW9yZSB0aGFuIG9uZSBzdWNoXG4gIC8vIGVsZW1lbnQuIE1ha2Ugc3VyZSB3ZSBhbHdheXMgcmV0dXJuIHRoZSBzbWFsbGVzdCBvZiB0aGVzZS5cbiAgd2hpbGUgKGluZGV4IC0gMSA+PSAwKSB7XG4gICAgaWYgKGFDb21wYXJlKGFIYXlzdGFja1tpbmRleF0sIGFIYXlzdGFja1tpbmRleCAtIDFdLCB0cnVlKSAhPT0gMCkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIC0taW5kZXg7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59O1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDE0IE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG52YXIgdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vKipcbiAqIERldGVybWluZSB3aGV0aGVyIG1hcHBpbmdCIGlzIGFmdGVyIG1hcHBpbmdBIHdpdGggcmVzcGVjdCB0byBnZW5lcmF0ZWRcbiAqIHBvc2l0aW9uLlxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZWRQb3NpdGlvbkFmdGVyKG1hcHBpbmdBLCBtYXBwaW5nQikge1xuICAvLyBPcHRpbWl6ZWQgZm9yIG1vc3QgY29tbW9uIGNhc2VcbiAgdmFyIGxpbmVBID0gbWFwcGluZ0EuZ2VuZXJhdGVkTGluZTtcbiAgdmFyIGxpbmVCID0gbWFwcGluZ0IuZ2VuZXJhdGVkTGluZTtcbiAgdmFyIGNvbHVtbkEgPSBtYXBwaW5nQS5nZW5lcmF0ZWRDb2x1bW47XG4gIHZhciBjb2x1bW5CID0gbWFwcGluZ0IuZ2VuZXJhdGVkQ29sdW1uO1xuICByZXR1cm4gbGluZUIgPiBsaW5lQSB8fCBsaW5lQiA9PSBsaW5lQSAmJiBjb2x1bW5CID49IGNvbHVtbkEgfHxcbiAgICAgICAgIHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQobWFwcGluZ0EsIG1hcHBpbmdCKSA8PSAwO1xufVxuXG4vKipcbiAqIEEgZGF0YSBzdHJ1Y3R1cmUgdG8gcHJvdmlkZSBhIHNvcnRlZCB2aWV3IG9mIGFjY3VtdWxhdGVkIG1hcHBpbmdzIGluIGFcbiAqIHBlcmZvcm1hbmNlIGNvbnNjaW91cyBtYW5uZXIuIEl0IHRyYWRlcyBhIG5lZ2xpYmFibGUgb3ZlcmhlYWQgaW4gZ2VuZXJhbFxuICogY2FzZSBmb3IgYSBsYXJnZSBzcGVlZHVwIGluIGNhc2Ugb2YgbWFwcGluZ3MgYmVpbmcgYWRkZWQgaW4gb3JkZXIuXG4gKi9cbmZ1bmN0aW9uIE1hcHBpbmdMaXN0KCkge1xuICB0aGlzLl9hcnJheSA9IFtdO1xuICB0aGlzLl9zb3J0ZWQgPSB0cnVlO1xuICAvLyBTZXJ2ZXMgYXMgaW5maW11bVxuICB0aGlzLl9sYXN0ID0ge2dlbmVyYXRlZExpbmU6IC0xLCBnZW5lcmF0ZWRDb2x1bW46IDB9O1xufVxuXG4vKipcbiAqIEl0ZXJhdGUgdGhyb3VnaCBpbnRlcm5hbCBpdGVtcy4gVGhpcyBtZXRob2QgdGFrZXMgdGhlIHNhbWUgYXJndW1lbnRzIHRoYXRcbiAqIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgdGFrZXMuXG4gKlxuICogTk9URTogVGhlIG9yZGVyIG9mIHRoZSBtYXBwaW5ncyBpcyBOT1QgZ3VhcmFudGVlZC5cbiAqL1xuTWFwcGluZ0xpc3QucHJvdG90eXBlLnVuc29ydGVkRm9yRWFjaCA9XG4gIGZ1bmN0aW9uIE1hcHBpbmdMaXN0X2ZvckVhY2goYUNhbGxiYWNrLCBhVGhpc0FyZykge1xuICAgIHRoaXMuX2FycmF5LmZvckVhY2goYUNhbGxiYWNrLCBhVGhpc0FyZyk7XG4gIH07XG5cbi8qKlxuICogQWRkIHRoZSBnaXZlbiBzb3VyY2UgbWFwcGluZy5cbiAqXG4gKiBAcGFyYW0gT2JqZWN0IGFNYXBwaW5nXG4gKi9cbk1hcHBpbmdMaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiBNYXBwaW5nTGlzdF9hZGQoYU1hcHBpbmcpIHtcbiAgaWYgKGdlbmVyYXRlZFBvc2l0aW9uQWZ0ZXIodGhpcy5fbGFzdCwgYU1hcHBpbmcpKSB7XG4gICAgdGhpcy5fbGFzdCA9IGFNYXBwaW5nO1xuICAgIHRoaXMuX2FycmF5LnB1c2goYU1hcHBpbmcpO1xuICB9IGVsc2Uge1xuICAgIHRoaXMuX3NvcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX2FycmF5LnB1c2goYU1hcHBpbmcpO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZsYXQsIHNvcnRlZCBhcnJheSBvZiBtYXBwaW5ncy4gVGhlIG1hcHBpbmdzIGFyZSBzb3J0ZWQgYnlcbiAqIGdlbmVyYXRlZCBwb3NpdGlvbi5cbiAqXG4gKiBXQVJOSU5HOiBUaGlzIG1ldGhvZCByZXR1cm5zIGludGVybmFsIGRhdGEgd2l0aG91dCBjb3B5aW5nLCBmb3JcbiAqIHBlcmZvcm1hbmNlLiBUaGUgcmV0dXJuIHZhbHVlIG11c3QgTk9UIGJlIG11dGF0ZWQsIGFuZCBzaG91bGQgYmUgdHJlYXRlZCBhc1xuICogYW4gaW1tdXRhYmxlIGJvcnJvdy4gSWYgeW91IHdhbnQgdG8gdGFrZSBvd25lcnNoaXAsIHlvdSBtdXN0IG1ha2UgeW91ciBvd25cbiAqIGNvcHkuXG4gKi9cbk1hcHBpbmdMaXN0LnByb3RvdHlwZS50b0FycmF5ID0gZnVuY3Rpb24gTWFwcGluZ0xpc3RfdG9BcnJheSgpIHtcbiAgaWYgKCF0aGlzLl9zb3J0ZWQpIHtcbiAgICB0aGlzLl9hcnJheS5zb3J0KHV0aWwuY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQpO1xuICAgIHRoaXMuX3NvcnRlZCA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIHRoaXMuX2FycmF5O1xufTtcblxuZXhwb3J0cy5NYXBwaW5nTGlzdCA9IE1hcHBpbmdMaXN0O1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG4vLyBJdCB0dXJucyBvdXQgdGhhdCBzb21lIChtb3N0PykgSmF2YVNjcmlwdCBlbmdpbmVzIGRvbid0IHNlbGYtaG9zdFxuLy8gYEFycmF5LnByb3RvdHlwZS5zb3J0YC4gVGhpcyBtYWtlcyBzZW5zZSBiZWNhdXNlIEMrKyB3aWxsIGxpa2VseSByZW1haW5cbi8vIGZhc3RlciB0aGFuIEpTIHdoZW4gZG9pbmcgcmF3IENQVS1pbnRlbnNpdmUgc29ydGluZy4gSG93ZXZlciwgd2hlbiB1c2luZyBhXG4vLyBjdXN0b20gY29tcGFyYXRvciBmdW5jdGlvbiwgY2FsbGluZyBiYWNrIGFuZCBmb3J0aCBiZXR3ZWVuIHRoZSBWTSdzIEMrKyBhbmRcbi8vIEpJVCdkIEpTIGlzIHJhdGhlciBzbG93ICphbmQqIGxvc2VzIEpJVCB0eXBlIGluZm9ybWF0aW9uLCByZXN1bHRpbmcgaW5cbi8vIHdvcnNlIGdlbmVyYXRlZCBjb2RlIGZvciB0aGUgY29tcGFyYXRvciBmdW5jdGlvbiB0aGFuIHdvdWxkIGJlIG9wdGltYWwuIEluXG4vLyBmYWN0LCB3aGVuIHNvcnRpbmcgd2l0aCBhIGNvbXBhcmF0b3IsIHRoZXNlIGNvc3RzIG91dHdlaWdoIHRoZSBiZW5lZml0cyBvZlxuLy8gc29ydGluZyBpbiBDKysuIEJ5IHVzaW5nIG91ciBvd24gSlMtaW1wbGVtZW50ZWQgUXVpY2sgU29ydCAoYmVsb3cpLCB3ZSBnZXRcbi8vIGEgfjM1MDBtcyBtZWFuIHNwZWVkLXVwIGluIGBiZW5jaC9iZW5jaC5odG1sYC5cblxuLyoqXG4gKiBTd2FwIHRoZSBlbGVtZW50cyBpbmRleGVkIGJ5IGB4YCBhbmQgYHlgIGluIHRoZSBhcnJheSBgYXJ5YC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnlcbiAqICAgICAgICBUaGUgYXJyYXkuXG4gKiBAcGFyYW0ge051bWJlcn0geFxuICogICAgICAgIFRoZSBpbmRleCBvZiB0aGUgZmlyc3QgaXRlbS5cbiAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gKiAgICAgICAgVGhlIGluZGV4IG9mIHRoZSBzZWNvbmQgaXRlbS5cbiAqL1xuZnVuY3Rpb24gc3dhcChhcnksIHgsIHkpIHtcbiAgdmFyIHRlbXAgPSBhcnlbeF07XG4gIGFyeVt4XSA9IGFyeVt5XTtcbiAgYXJ5W3ldID0gdGVtcDtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIHRoZSByYW5nZSBgbG93IC4uIGhpZ2hgIGluY2x1c2l2ZS5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbG93XG4gKiAgICAgICAgVGhlIGxvd2VyIGJvdW5kIG9uIHRoZSByYW5nZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBoaWdoXG4gKiAgICAgICAgVGhlIHVwcGVyIGJvdW5kIG9uIHRoZSByYW5nZS5cbiAqL1xuZnVuY3Rpb24gcmFuZG9tSW50SW5SYW5nZShsb3csIGhpZ2gpIHtcbiAgcmV0dXJuIE1hdGgucm91bmQobG93ICsgKE1hdGgucmFuZG9tKCkgKiAoaGlnaCAtIGxvdykpKTtcbn1cblxuLyoqXG4gKiBUaGUgUXVpY2sgU29ydCBhbGdvcml0aG0uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gYXJ5XG4gKiAgICAgICAgQW4gYXJyYXkgdG8gc29ydC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNvbXBhcmF0b3JcbiAqICAgICAgICBGdW5jdGlvbiB0byB1c2UgdG8gY29tcGFyZSB0d28gaXRlbXMuXG4gKiBAcGFyYW0ge051bWJlcn0gcFxuICogICAgICAgIFN0YXJ0IGluZGV4IG9mIHRoZSBhcnJheVxuICogQHBhcmFtIHtOdW1iZXJ9IHJcbiAqICAgICAgICBFbmQgaW5kZXggb2YgdGhlIGFycmF5XG4gKi9cbmZ1bmN0aW9uIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgcCwgcikge1xuICAvLyBJZiBvdXIgbG93ZXIgYm91bmQgaXMgbGVzcyB0aGFuIG91ciB1cHBlciBib3VuZCwgd2UgKDEpIHBhcnRpdGlvbiB0aGVcbiAgLy8gYXJyYXkgaW50byB0d28gcGllY2VzIGFuZCAoMikgcmVjdXJzZSBvbiBlYWNoIGhhbGYuIElmIGl0IGlzIG5vdCwgdGhpcyBpc1xuICAvLyB0aGUgZW1wdHkgYXJyYXkgYW5kIG91ciBiYXNlIGNhc2UuXG5cbiAgaWYgKHAgPCByKSB7XG4gICAgLy8gKDEpIFBhcnRpdGlvbmluZy5cbiAgICAvL1xuICAgIC8vIFRoZSBwYXJ0aXRpb25pbmcgY2hvb3NlcyBhIHBpdm90IGJldHdlZW4gYHBgIGFuZCBgcmAgYW5kIG1vdmVzIGFsbFxuICAgIC8vIGVsZW1lbnRzIHRoYXQgYXJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgcGl2b3QgdG8gdGhlIGJlZm9yZSBpdCwgYW5kXG4gICAgLy8gYWxsIHRoZSBlbGVtZW50cyB0aGF0IGFyZSBncmVhdGVyIHRoYW4gaXQgYWZ0ZXIgaXQuIFRoZSBlZmZlY3QgaXMgdGhhdFxuICAgIC8vIG9uY2UgcGFydGl0aW9uIGlzIGRvbmUsIHRoZSBwaXZvdCBpcyBpbiB0aGUgZXhhY3QgcGxhY2UgaXQgd2lsbCBiZSB3aGVuXG4gICAgLy8gdGhlIGFycmF5IGlzIHB1dCBpbiBzb3J0ZWQgb3JkZXIsIGFuZCBpdCB3aWxsIG5vdCBuZWVkIHRvIGJlIG1vdmVkXG4gICAgLy8gYWdhaW4uIFRoaXMgcnVucyBpbiBPKG4pIHRpbWUuXG5cbiAgICAvLyBBbHdheXMgY2hvb3NlIGEgcmFuZG9tIHBpdm90IHNvIHRoYXQgYW4gaW5wdXQgYXJyYXkgd2hpY2ggaXMgcmV2ZXJzZVxuICAgIC8vIHNvcnRlZCBkb2VzIG5vdCBjYXVzZSBPKG5eMikgcnVubmluZyB0aW1lLlxuICAgIHZhciBwaXZvdEluZGV4ID0gcmFuZG9tSW50SW5SYW5nZShwLCByKTtcbiAgICB2YXIgaSA9IHAgLSAxO1xuXG4gICAgc3dhcChhcnksIHBpdm90SW5kZXgsIHIpO1xuICAgIHZhciBwaXZvdCA9IGFyeVtyXTtcblxuICAgIC8vIEltbWVkaWF0ZWx5IGFmdGVyIGBqYCBpcyBpbmNyZW1lbnRlZCBpbiB0aGlzIGxvb3AsIHRoZSBmb2xsb3dpbmcgaG9sZFxuICAgIC8vIHRydWU6XG4gICAgLy9cbiAgICAvLyAgICogRXZlcnkgZWxlbWVudCBpbiBgYXJ5W3AgLi4gaV1gIGlzIGxlc3MgdGhhbiBvciBlcXVhbCB0byB0aGUgcGl2b3QuXG4gICAgLy9cbiAgICAvLyAgICogRXZlcnkgZWxlbWVudCBpbiBgYXJ5W2krMSAuLiBqLTFdYCBpcyBncmVhdGVyIHRoYW4gdGhlIHBpdm90LlxuICAgIGZvciAodmFyIGogPSBwOyBqIDwgcjsgaisrKSB7XG4gICAgICBpZiAoY29tcGFyYXRvcihhcnlbal0sIHBpdm90KSA8PSAwKSB7XG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgc3dhcChhcnksIGksIGopO1xuICAgICAgfVxuICAgIH1cblxuICAgIHN3YXAoYXJ5LCBpICsgMSwgaik7XG4gICAgdmFyIHEgPSBpICsgMTtcblxuICAgIC8vICgyKSBSZWN1cnNlIG9uIGVhY2ggaGFsZi5cblxuICAgIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgcCwgcSAtIDEpO1xuICAgIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgcSArIDEsIHIpO1xuICB9XG59XG5cbi8qKlxuICogU29ydCB0aGUgZ2l2ZW4gYXJyYXkgaW4tcGxhY2Ugd2l0aCB0aGUgZ2l2ZW4gY29tcGFyYXRvciBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnlcbiAqICAgICAgICBBbiBhcnJheSB0byBzb3J0LlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY29tcGFyYXRvclxuICogICAgICAgIEZ1bmN0aW9uIHRvIHVzZSB0byBjb21wYXJlIHR3byBpdGVtcy5cbiAqL1xuZXhwb3J0cy5xdWlja1NvcnQgPSBmdW5jdGlvbiAoYXJ5LCBjb21wYXJhdG9yKSB7XG4gIGRvUXVpY2tTb3J0KGFyeSwgY29tcGFyYXRvciwgMCwgYXJ5Lmxlbmd0aCAtIDEpO1xufTtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBiaW5hcnlTZWFyY2ggPSByZXF1aXJlKCcuL2JpbmFyeS1zZWFyY2gnKTtcbnZhciBBcnJheVNldCA9IHJlcXVpcmUoJy4vYXJyYXktc2V0JykuQXJyYXlTZXQ7XG52YXIgYmFzZTY0VkxRID0gcmVxdWlyZSgnLi9iYXNlNjQtdmxxJyk7XG52YXIgcXVpY2tTb3J0ID0gcmVxdWlyZSgnLi9xdWljay1zb3J0JykucXVpY2tTb3J0O1xuXG5mdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcihhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gIHZhciBzb3VyY2VNYXAgPSBhU291cmNlTWFwO1xuICBpZiAodHlwZW9mIGFTb3VyY2VNYXAgPT09ICdzdHJpbmcnKSB7XG4gICAgc291cmNlTWFwID0gdXRpbC5wYXJzZVNvdXJjZU1hcElucHV0KGFTb3VyY2VNYXApO1xuICB9XG5cbiAgcmV0dXJuIHNvdXJjZU1hcC5zZWN0aW9ucyAhPSBudWxsXG4gICAgPyBuZXcgSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyKHNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTClcbiAgICA6IG5ldyBCYXNpY1NvdXJjZU1hcENvbnN1bWVyKHNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCk7XG59XG5cblNvdXJjZU1hcENvbnN1bWVyLmZyb21Tb3VyY2VNYXAgPSBmdW5jdGlvbihhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gIHJldHVybiBCYXNpY1NvdXJjZU1hcENvbnN1bWVyLmZyb21Tb3VyY2VNYXAoYVNvdXJjZU1hcCwgYVNvdXJjZU1hcFVSTCk7XG59XG5cbi8qKlxuICogVGhlIHZlcnNpb24gb2YgdGhlIHNvdXJjZSBtYXBwaW5nIHNwZWMgdGhhdCB3ZSBhcmUgY29uc3VtaW5nLlxuICovXG5Tb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vLyBgX19nZW5lcmF0ZWRNYXBwaW5nc2AgYW5kIGBfX29yaWdpbmFsTWFwcGluZ3NgIGFyZSBhcnJheXMgdGhhdCBob2xkIHRoZVxuLy8gcGFyc2VkIG1hcHBpbmcgY29vcmRpbmF0ZXMgZnJvbSB0aGUgc291cmNlIG1hcCdzIFwibWFwcGluZ3NcIiBhdHRyaWJ1dGUuIFRoZXlcbi8vIGFyZSBsYXppbHkgaW5zdGFudGlhdGVkLCBhY2Nlc3NlZCB2aWEgdGhlIGBfZ2VuZXJhdGVkTWFwcGluZ3NgIGFuZFxuLy8gYF9vcmlnaW5hbE1hcHBpbmdzYCBnZXR0ZXJzIHJlc3BlY3RpdmVseSwgYW5kIHdlIG9ubHkgcGFyc2UgdGhlIG1hcHBpbmdzXG4vLyBhbmQgY3JlYXRlIHRoZXNlIGFycmF5cyBvbmNlIHF1ZXJpZWQgZm9yIGEgc291cmNlIGxvY2F0aW9uLiBXZSBqdW1wIHRocm91Z2hcbi8vIHRoZXNlIGhvb3BzIGJlY2F1c2UgdGhlcmUgY2FuIGJlIG1hbnkgdGhvdXNhbmRzIG9mIG1hcHBpbmdzLCBhbmQgcGFyc2luZ1xuLy8gdGhlbSBpcyBleHBlbnNpdmUsIHNvIHdlIG9ubHkgd2FudCB0byBkbyBpdCBpZiB3ZSBtdXN0LlxuLy9cbi8vIEVhY2ggb2JqZWN0IGluIHRoZSBhcnJheXMgaXMgb2YgdGhlIGZvcm06XG4vL1xuLy8gICAgIHtcbi8vICAgICAgIGdlbmVyYXRlZExpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIGNvZGUsXG4vLyAgICAgICBnZW5lcmF0ZWRDb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgY29kZSxcbi8vICAgICAgIHNvdXJjZTogVGhlIHBhdGggdG8gdGhlIG9yaWdpbmFsIHNvdXJjZSBmaWxlIHRoYXQgZ2VuZXJhdGVkIHRoaXNcbi8vICAgICAgICAgICAgICAgY2h1bmsgb2YgY29kZSxcbi8vICAgICAgIG9yaWdpbmFsTGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UgdGhhdFxuLy8gICAgICAgICAgICAgICAgICAgICBjb3JyZXNwb25kcyB0byB0aGlzIGNodW5rIG9mIGdlbmVyYXRlZCBjb2RlLFxuLy8gICAgICAgb3JpZ2luYWxDb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UgdGhhdFxuLy8gICAgICAgICAgICAgICAgICAgICAgIGNvcnJlc3BvbmRzIHRvIHRoaXMgY2h1bmsgb2YgZ2VuZXJhdGVkIGNvZGUsXG4vLyAgICAgICBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgb3JpZ2luYWwgc3ltYm9sIHdoaWNoIGdlbmVyYXRlZCB0aGlzIGNodW5rIG9mXG4vLyAgICAgICAgICAgICBjb2RlLlxuLy8gICAgIH1cbi8vXG4vLyBBbGwgcHJvcGVydGllcyBleGNlcHQgZm9yIGBnZW5lcmF0ZWRMaW5lYCBhbmQgYGdlbmVyYXRlZENvbHVtbmAgY2FuIGJlXG4vLyBgbnVsbGAuXG4vL1xuLy8gYF9nZW5lcmF0ZWRNYXBwaW5nc2AgaXMgb3JkZXJlZCBieSB0aGUgZ2VuZXJhdGVkIHBvc2l0aW9ucy5cbi8vXG4vLyBgX29yaWdpbmFsTWFwcGluZ3NgIGlzIG9yZGVyZWQgYnkgdGhlIG9yaWdpbmFsIHBvc2l0aW9ucy5cblxuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9fZ2VuZXJhdGVkTWFwcGluZ3MgPSBudWxsO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ19nZW5lcmF0ZWRNYXBwaW5ncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncykge1xuICAgICAgdGhpcy5fcGFyc2VNYXBwaW5ncyh0aGlzLl9tYXBwaW5ncywgdGhpcy5zb3VyY2VSb290KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzO1xuICB9XG59KTtcblxuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9fb3JpZ2luYWxNYXBwaW5ncyA9IG51bGw7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLCAnX29yaWdpbmFsTWFwcGluZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncykge1xuICAgICAgdGhpcy5fcGFyc2VNYXBwaW5ncyh0aGlzLl9tYXBwaW5ncywgdGhpcy5zb3VyY2VSb290KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fX29yaWdpbmFsTWFwcGluZ3M7XG4gIH1cbn0pO1xuXG5Tb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2NoYXJJc01hcHBpbmdTZXBhcmF0b3IgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9jaGFySXNNYXBwaW5nU2VwYXJhdG9yKGFTdHIsIGluZGV4KSB7XG4gICAgdmFyIGMgPSBhU3RyLmNoYXJBdChpbmRleCk7XG4gICAgcmV0dXJuIGMgPT09IFwiO1wiIHx8IGMgPT09IFwiLFwiO1xuICB9O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBtYXBwaW5ncyBpbiBhIHN0cmluZyBpbiB0byBhIGRhdGEgc3RydWN0dXJlIHdoaWNoIHdlIGNhbiBlYXNpbHlcbiAqIHF1ZXJ5ICh0aGUgb3JkZXJlZCBhcnJheXMgaW4gdGhlIGB0aGlzLl9fZ2VuZXJhdGVkTWFwcGluZ3NgIGFuZFxuICogYHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzYCBwcm9wZXJ0aWVzKS5cbiAqL1xuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9wYXJzZU1hcHBpbmdzID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlN1YmNsYXNzZXMgbXVzdCBpbXBsZW1lbnQgX3BhcnNlTWFwcGluZ3NcIik7XG4gIH07XG5cblNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUiA9IDE7XG5Tb3VyY2VNYXBDb25zdW1lci5PUklHSU5BTF9PUkRFUiA9IDI7XG5cblNvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EID0gMTtcblNvdXJjZU1hcENvbnN1bWVyLkxFQVNUX1VQUEVSX0JPVU5EID0gMjtcblxuLyoqXG4gKiBJdGVyYXRlIG92ZXIgZWFjaCBtYXBwaW5nIGJldHdlZW4gYW4gb3JpZ2luYWwgc291cmNlL2xpbmUvY29sdW1uIGFuZCBhXG4gKiBnZW5lcmF0ZWQgbGluZS9jb2x1bW4gaW4gdGhpcyBzb3VyY2UgbWFwLlxuICpcbiAqIEBwYXJhbSBGdW5jdGlvbiBhQ2FsbGJhY2tcbiAqICAgICAgICBUaGUgZnVuY3Rpb24gdGhhdCBpcyBjYWxsZWQgd2l0aCBlYWNoIG1hcHBpbmcuXG4gKiBAcGFyYW0gT2JqZWN0IGFDb250ZXh0XG4gKiAgICAgICAgT3B0aW9uYWwuIElmIHNwZWNpZmllZCwgdGhpcyBvYmplY3Qgd2lsbCBiZSB0aGUgdmFsdWUgb2YgYHRoaXNgIGV2ZXJ5XG4gKiAgICAgICAgdGltZSB0aGF0IGBhQ2FsbGJhY2tgIGlzIGNhbGxlZC5cbiAqIEBwYXJhbSBhT3JkZXJcbiAqICAgICAgICBFaXRoZXIgYFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUmAgb3JcbiAqICAgICAgICBgU291cmNlTWFwQ29uc3VtZXIuT1JJR0lOQUxfT1JERVJgLiBTcGVjaWZpZXMgd2hldGhlciB5b3Ugd2FudCB0b1xuICogICAgICAgIGl0ZXJhdGUgb3ZlciB0aGUgbWFwcGluZ3Mgc29ydGVkIGJ5IHRoZSBnZW5lcmF0ZWQgZmlsZSdzIGxpbmUvY29sdW1uXG4gKiAgICAgICAgb3JkZXIgb3IgdGhlIG9yaWdpbmFsJ3Mgc291cmNlL2xpbmUvY29sdW1uIG9yZGVyLCByZXNwZWN0aXZlbHkuIERlZmF1bHRzIHRvXG4gKiAgICAgICAgYFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUmAuXG4gKi9cblNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5lYWNoTWFwcGluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2VhY2hNYXBwaW5nKGFDYWxsYmFjaywgYUNvbnRleHQsIGFPcmRlcikge1xuICAgIHZhciBjb250ZXh0ID0gYUNvbnRleHQgfHwgbnVsbDtcbiAgICB2YXIgb3JkZXIgPSBhT3JkZXIgfHwgU291cmNlTWFwQ29uc3VtZXIuR0VORVJBVEVEX09SREVSO1xuXG4gICAgdmFyIG1hcHBpbmdzO1xuICAgIHN3aXRjaCAob3JkZXIpIHtcbiAgICBjYXNlIFNvdXJjZU1hcENvbnN1bWVyLkdFTkVSQVRFRF9PUkRFUjpcbiAgICAgIG1hcHBpbmdzID0gdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3M7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFNvdXJjZU1hcENvbnN1bWVyLk9SSUdJTkFMX09SREVSOlxuICAgICAgbWFwcGluZ3MgPSB0aGlzLl9vcmlnaW5hbE1hcHBpbmdzO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gb3JkZXIgb2YgaXRlcmF0aW9uLlwiKTtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlUm9vdCA9IHRoaXMuc291cmNlUm9vdDtcbiAgICBtYXBwaW5ncy5tYXAoZnVuY3Rpb24gKG1hcHBpbmcpIHtcbiAgICAgIHZhciBzb3VyY2UgPSBtYXBwaW5nLnNvdXJjZSA9PT0gbnVsbCA/IG51bGwgOiB0aGlzLl9zb3VyY2VzLmF0KG1hcHBpbmcuc291cmNlKTtcbiAgICAgIHNvdXJjZSA9IHV0aWwuY29tcHV0ZVNvdXJjZVVSTChzb3VyY2VSb290LCBzb3VyY2UsIHRoaXMuX3NvdXJjZU1hcFVSTCk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgZ2VuZXJhdGVkTGluZTogbWFwcGluZy5nZW5lcmF0ZWRMaW5lLFxuICAgICAgICBnZW5lcmF0ZWRDb2x1bW46IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uLFxuICAgICAgICBvcmlnaW5hbExpbmU6IG1hcHBpbmcub3JpZ2luYWxMaW5lLFxuICAgICAgICBvcmlnaW5hbENvbHVtbjogbWFwcGluZy5vcmlnaW5hbENvbHVtbixcbiAgICAgICAgbmFtZTogbWFwcGluZy5uYW1lID09PSBudWxsID8gbnVsbCA6IHRoaXMuX25hbWVzLmF0KG1hcHBpbmcubmFtZSlcbiAgICAgIH07XG4gICAgfSwgdGhpcykuZm9yRWFjaChhQ2FsbGJhY2ssIGNvbnRleHQpO1xuICB9O1xuXG4vKipcbiAqIFJldHVybnMgYWxsIGdlbmVyYXRlZCBsaW5lIGFuZCBjb2x1bW4gaW5mb3JtYXRpb24gZm9yIHRoZSBvcmlnaW5hbCBzb3VyY2UsXG4gKiBsaW5lLCBhbmQgY29sdW1uIHByb3ZpZGVkLiBJZiBubyBjb2x1bW4gaXMgcHJvdmlkZWQsIHJldHVybnMgYWxsIG1hcHBpbmdzXG4gKiBjb3JyZXNwb25kaW5nIHRvIGEgZWl0aGVyIHRoZSBsaW5lIHdlIGFyZSBzZWFyY2hpbmcgZm9yIG9yIHRoZSBuZXh0XG4gKiBjbG9zZXN0IGxpbmUgdGhhdCBoYXMgYW55IG1hcHBpbmdzLiBPdGhlcndpc2UsIHJldHVybnMgYWxsIG1hcHBpbmdzXG4gKiBjb3JyZXNwb25kaW5nIHRvIHRoZSBnaXZlbiBsaW5lIGFuZCBlaXRoZXIgdGhlIGNvbHVtbiB3ZSBhcmUgc2VhcmNoaW5nIGZvclxuICogb3IgdGhlIG5leHQgY2xvc2VzdCBjb2x1bW4gdGhhdCBoYXMgYW55IG9mZnNldHMuXG4gKlxuICogVGhlIG9ubHkgYXJndW1lbnQgaXMgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBzb3VyY2U6IFRoZSBmaWxlbmFtZSBvZiB0aGUgb3JpZ2luYWwgc291cmNlLlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLiAgVGhlIGxpbmUgbnVtYmVyIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBPcHRpb25hbC4gdGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS5cbiAqICAgIFRoZSBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKlxuICogYW5kIGFuIGFycmF5IG9mIG9iamVjdHMgaXMgcmV0dXJuZWQsIGVhY2ggd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgbGluZSBudW1iZXIgaXMgMS1iYXNlZC5cbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLlxuICogICAgVGhlIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqL1xuU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLmFsbEdlbmVyYXRlZFBvc2l0aW9uc0ZvciA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcENvbnN1bWVyX2FsbEdlbmVyYXRlZFBvc2l0aW9uc0ZvcihhQXJncykge1xuICAgIHZhciBsaW5lID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyk7XG5cbiAgICAvLyBXaGVuIHRoZXJlIGlzIG5vIGV4YWN0IG1hdGNoLCBCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fZmluZE1hcHBpbmdcbiAgICAvLyByZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgY2xvc2VzdCBtYXBwaW5nIGxlc3MgdGhhbiB0aGUgbmVlZGxlLiBCeVxuICAgIC8vIHNldHRpbmcgbmVlZGxlLm9yaWdpbmFsQ29sdW1uIHRvIDAsIHdlIHRodXMgZmluZCB0aGUgbGFzdCBtYXBwaW5nIGZvclxuICAgIC8vIHRoZSBnaXZlbiBsaW5lLCBwcm92aWRlZCBzdWNoIGEgbWFwcGluZyBleGlzdHMuXG4gICAgdmFyIG5lZWRsZSA9IHtcbiAgICAgIHNvdXJjZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdzb3VyY2UnKSxcbiAgICAgIG9yaWdpbmFsTGluZTogbGluZSxcbiAgICAgIG9yaWdpbmFsQ29sdW1uOiB1dGlsLmdldEFyZyhhQXJncywgJ2NvbHVtbicsIDApXG4gICAgfTtcblxuICAgIG5lZWRsZS5zb3VyY2UgPSB0aGlzLl9maW5kU291cmNlSW5kZXgobmVlZGxlLnNvdXJjZSk7XG4gICAgaWYgKG5lZWRsZS5zb3VyY2UgPCAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIG1hcHBpbmdzID0gW107XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kTWFwcGluZyhuZWVkbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3JpZ2luYWxNYXBwaW5ncyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9yaWdpbmFsTGluZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3JpZ2luYWxDb2x1bW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJpbmFyeVNlYXJjaC5MRUFTVF9VUFBFUl9CT1VORCk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHZhciBtYXBwaW5nID0gdGhpcy5fb3JpZ2luYWxNYXBwaW5nc1tpbmRleF07XG5cbiAgICAgIGlmIChhQXJncy5jb2x1bW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgb3JpZ2luYWxMaW5lID0gbWFwcGluZy5vcmlnaW5hbExpbmU7XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCBlaXRoZXIgd2UgcnVuIG91dCBvZiBtYXBwaW5ncywgb3Igd2UgcnVuIGludG9cbiAgICAgICAgLy8gYSBtYXBwaW5nIGZvciBhIGRpZmZlcmVudCBsaW5lIHRoYW4gdGhlIG9uZSB3ZSBmb3VuZC4gU2luY2VcbiAgICAgICAgLy8gbWFwcGluZ3MgYXJlIHNvcnRlZCwgdGhpcyBpcyBndWFyYW50ZWVkIHRvIGZpbmQgYWxsIG1hcHBpbmdzIGZvclxuICAgICAgICAvLyB0aGUgbGluZSB3ZSBmb3VuZC5cbiAgICAgICAgd2hpbGUgKG1hcHBpbmcgJiYgbWFwcGluZy5vcmlnaW5hbExpbmUgPT09IG9yaWdpbmFsTGluZSkge1xuICAgICAgICAgIG1hcHBpbmdzLnB1c2goe1xuICAgICAgICAgICAgbGluZTogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZExpbmUnLCBudWxsKSxcbiAgICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZENvbHVtbicsIG51bGwpLFxuICAgICAgICAgICAgbGFzdENvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2xhc3RHZW5lcmF0ZWRDb2x1bW4nLCBudWxsKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbKytpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBvcmlnaW5hbENvbHVtbiA9IG1hcHBpbmcub3JpZ2luYWxDb2x1bW47XG5cbiAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCBlaXRoZXIgd2UgcnVuIG91dCBvZiBtYXBwaW5ncywgb3Igd2UgcnVuIGludG9cbiAgICAgICAgLy8gYSBtYXBwaW5nIGZvciBhIGRpZmZlcmVudCBsaW5lIHRoYW4gdGhlIG9uZSB3ZSB3ZXJlIHNlYXJjaGluZyBmb3IuXG4gICAgICAgIC8vIFNpbmNlIG1hcHBpbmdzIGFyZSBzb3J0ZWQsIHRoaXMgaXMgZ3VhcmFudGVlZCB0byBmaW5kIGFsbCBtYXBwaW5ncyBmb3JcbiAgICAgICAgLy8gdGhlIGxpbmUgd2UgYXJlIHNlYXJjaGluZyBmb3IuXG4gICAgICAgIHdoaWxlIChtYXBwaW5nICYmXG4gICAgICAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsTGluZSA9PT0gbGluZSAmJlxuICAgICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbENvbHVtbiA9PSBvcmlnaW5hbENvbHVtbikge1xuICAgICAgICAgIG1hcHBpbmdzLnB1c2goe1xuICAgICAgICAgICAgbGluZTogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZExpbmUnLCBudWxsKSxcbiAgICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZENvbHVtbicsIG51bGwpLFxuICAgICAgICAgICAgbGFzdENvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2xhc3RHZW5lcmF0ZWRDb2x1bW4nLCBudWxsKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbKytpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbWFwcGluZ3M7XG4gIH07XG5cbmV4cG9ydHMuU291cmNlTWFwQ29uc3VtZXIgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuLyoqXG4gKiBBIEJhc2ljU291cmNlTWFwQ29uc3VtZXIgaW5zdGFuY2UgcmVwcmVzZW50cyBhIHBhcnNlZCBzb3VyY2UgbWFwIHdoaWNoIHdlIGNhblxuICogcXVlcnkgZm9yIGluZm9ybWF0aW9uIGFib3V0IHRoZSBvcmlnaW5hbCBmaWxlIHBvc2l0aW9ucyBieSBnaXZpbmcgaXQgYSBmaWxlXG4gKiBwb3NpdGlvbiBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS5cbiAqXG4gKiBUaGUgZmlyc3QgcGFyYW1ldGVyIGlzIHRoZSByYXcgc291cmNlIG1hcCAoZWl0aGVyIGFzIGEgSlNPTiBzdHJpbmcsIG9yXG4gKiBhbHJlYWR5IHBhcnNlZCB0byBhbiBvYmplY3QpLiBBY2NvcmRpbmcgdG8gdGhlIHNwZWMsIHNvdXJjZSBtYXBzIGhhdmUgdGhlXG4gKiBmb2xsb3dpbmcgYXR0cmlidXRlczpcbiAqXG4gKiAgIC0gdmVyc2lvbjogV2hpY2ggdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcCBzcGVjIHRoaXMgbWFwIGlzIGZvbGxvd2luZy5cbiAqICAgLSBzb3VyY2VzOiBBbiBhcnJheSBvZiBVUkxzIHRvIHRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZXMuXG4gKiAgIC0gbmFtZXM6IEFuIGFycmF5IG9mIGlkZW50aWZpZXJzIHdoaWNoIGNhbiBiZSByZWZlcnJlbmNlZCBieSBpbmRpdmlkdWFsIG1hcHBpbmdzLlxuICogICAtIHNvdXJjZVJvb3Q6IE9wdGlvbmFsLiBUaGUgVVJMIHJvb3QgZnJvbSB3aGljaCBhbGwgc291cmNlcyBhcmUgcmVsYXRpdmUuXG4gKiAgIC0gc291cmNlc0NvbnRlbnQ6IE9wdGlvbmFsLiBBbiBhcnJheSBvZiBjb250ZW50cyBvZiB0aGUgb3JpZ2luYWwgc291cmNlIGZpbGVzLlxuICogICAtIG1hcHBpbmdzOiBBIHN0cmluZyBvZiBiYXNlNjQgVkxRcyB3aGljaCBjb250YWluIHRoZSBhY3R1YWwgbWFwcGluZ3MuXG4gKiAgIC0gZmlsZTogT3B0aW9uYWwuIFRoZSBnZW5lcmF0ZWQgZmlsZSB0aGlzIHNvdXJjZSBtYXAgaXMgYXNzb2NpYXRlZCB3aXRoLlxuICpcbiAqIEhlcmUgaXMgYW4gZXhhbXBsZSBzb3VyY2UgbWFwLCB0YWtlbiBmcm9tIHRoZSBzb3VyY2UgbWFwIHNwZWNbMF06XG4gKlxuICogICAgIHtcbiAqICAgICAgIHZlcnNpb24gOiAzLFxuICogICAgICAgZmlsZTogXCJvdXQuanNcIixcbiAqICAgICAgIHNvdXJjZVJvb3QgOiBcIlwiLFxuICogICAgICAgc291cmNlczogW1wiZm9vLmpzXCIsIFwiYmFyLmpzXCJdLFxuICogICAgICAgbmFtZXM6IFtcInNyY1wiLCBcIm1hcHNcIiwgXCJhcmVcIiwgXCJmdW5cIl0sXG4gKiAgICAgICBtYXBwaW5nczogXCJBQSxBQjs7QUJDREU7XCJcbiAqICAgICB9XG4gKlxuICogVGhlIHNlY29uZCBwYXJhbWV0ZXIsIGlmIGdpdmVuLCBpcyBhIHN0cmluZyB3aG9zZSB2YWx1ZSBpcyB0aGUgVVJMXG4gKiBhdCB3aGljaCB0aGUgc291cmNlIG1hcCB3YXMgZm91bmQuICBUaGlzIFVSTCBpcyB1c2VkIHRvIGNvbXB1dGUgdGhlXG4gKiBzb3VyY2VzIGFycmF5LlxuICpcbiAqIFswXTogaHR0cHM6Ly9kb2NzLmdvb2dsZS5jb20vZG9jdW1lbnQvZC8xVTFSR0FlaFF3UnlwVVRvdkYxS1JscGlPRnplMGItXzJnYzZmQUgwS1kway9lZGl0P3BsaT0xI1xuICovXG5mdW5jdGlvbiBCYXNpY1NvdXJjZU1hcENvbnN1bWVyKGFTb3VyY2VNYXAsIGFTb3VyY2VNYXBVUkwpIHtcbiAgdmFyIHNvdXJjZU1hcCA9IGFTb3VyY2VNYXA7XG4gIGlmICh0eXBlb2YgYVNvdXJjZU1hcCA9PT0gJ3N0cmluZycpIHtcbiAgICBzb3VyY2VNYXAgPSB1dGlsLnBhcnNlU291cmNlTWFwSW5wdXQoYVNvdXJjZU1hcCk7XG4gIH1cblxuICB2YXIgdmVyc2lvbiA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3ZlcnNpb24nKTtcbiAgdmFyIHNvdXJjZXMgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdzb3VyY2VzJyk7XG4gIC8vIFNhc3MgMy4zIGxlYXZlcyBvdXQgdGhlICduYW1lcycgYXJyYXksIHNvIHdlIGRldmlhdGUgZnJvbSB0aGUgc3BlYyAod2hpY2hcbiAgLy8gcmVxdWlyZXMgdGhlIGFycmF5KSB0byBwbGF5IG5pY2UgaGVyZS5cbiAgdmFyIG5hbWVzID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnbmFtZXMnLCBbXSk7XG4gIHZhciBzb3VyY2VSb290ID0gdXRpbC5nZXRBcmcoc291cmNlTWFwLCAnc291cmNlUm9vdCcsIG51bGwpO1xuICB2YXIgc291cmNlc0NvbnRlbnQgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdzb3VyY2VzQ29udGVudCcsIG51bGwpO1xuICB2YXIgbWFwcGluZ3MgPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICdtYXBwaW5ncycpO1xuICB2YXIgZmlsZSA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ2ZpbGUnLCBudWxsKTtcblxuICAvLyBPbmNlIGFnYWluLCBTYXNzIGRldmlhdGVzIGZyb20gdGhlIHNwZWMgYW5kIHN1cHBsaWVzIHRoZSB2ZXJzaW9uIGFzIGFcbiAgLy8gc3RyaW5nIHJhdGhlciB0aGFuIGEgbnVtYmVyLCBzbyB3ZSB1c2UgbG9vc2UgZXF1YWxpdHkgY2hlY2tpbmcgaGVyZS5cbiAgaWYgKHZlcnNpb24gIT0gdGhpcy5fdmVyc2lvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgdmVyc2lvbjogJyArIHZlcnNpb24pO1xuICB9XG5cbiAgaWYgKHNvdXJjZVJvb3QpIHtcbiAgICBzb3VyY2VSb290ID0gdXRpbC5ub3JtYWxpemUoc291cmNlUm9vdCk7XG4gIH1cblxuICBzb3VyY2VzID0gc291cmNlc1xuICAgIC5tYXAoU3RyaW5nKVxuICAgIC8vIFNvbWUgc291cmNlIG1hcHMgcHJvZHVjZSByZWxhdGl2ZSBzb3VyY2UgcGF0aHMgbGlrZSBcIi4vZm9vLmpzXCIgaW5zdGVhZCBvZlxuICAgIC8vIFwiZm9vLmpzXCIuICBOb3JtYWxpemUgdGhlc2UgZmlyc3Qgc28gdGhhdCBmdXR1cmUgY29tcGFyaXNvbnMgd2lsbCBzdWNjZWVkLlxuICAgIC8vIFNlZSBidWd6aWwubGEvMTA5MDc2OC5cbiAgICAubWFwKHV0aWwubm9ybWFsaXplKVxuICAgIC8vIEFsd2F5cyBlbnN1cmUgdGhhdCBhYnNvbHV0ZSBzb3VyY2VzIGFyZSBpbnRlcm5hbGx5IHN0b3JlZCByZWxhdGl2ZSB0b1xuICAgIC8vIHRoZSBzb3VyY2Ugcm9vdCwgaWYgdGhlIHNvdXJjZSByb290IGlzIGFic29sdXRlLiBOb3QgZG9pbmcgdGhpcyB3b3VsZFxuICAgIC8vIGJlIHBhcnRpY3VsYXJseSBwcm9ibGVtYXRpYyB3aGVuIHRoZSBzb3VyY2Ugcm9vdCBpcyBhIHByZWZpeCBvZiB0aGVcbiAgICAvLyBzb3VyY2UgKHZhbGlkLCBidXQgd2h5Pz8pLiBTZWUgZ2l0aHViIGlzc3VlICMxOTkgYW5kIGJ1Z3ppbC5sYS8xMTg4OTgyLlxuICAgIC5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIHNvdXJjZVJvb3QgJiYgdXRpbC5pc0Fic29sdXRlKHNvdXJjZVJvb3QpICYmIHV0aWwuaXNBYnNvbHV0ZShzb3VyY2UpXG4gICAgICAgID8gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBzb3VyY2UpXG4gICAgICAgIDogc291cmNlO1xuICAgIH0pO1xuXG4gIC8vIFBhc3MgYHRydWVgIGJlbG93IHRvIGFsbG93IGR1cGxpY2F0ZSBuYW1lcyBhbmQgc291cmNlcy4gV2hpbGUgc291cmNlIG1hcHNcbiAgLy8gYXJlIGludGVuZGVkIHRvIGJlIGNvbXByZXNzZWQgYW5kIGRlZHVwbGljYXRlZCwgdGhlIFR5cGVTY3JpcHQgY29tcGlsZXJcbiAgLy8gc29tZXRpbWVzIGdlbmVyYXRlcyBzb3VyY2UgbWFwcyB3aXRoIGR1cGxpY2F0ZXMgaW4gdGhlbS4gU2VlIEdpdGh1YiBpc3N1ZVxuICAvLyAjNzIgYW5kIGJ1Z3ppbC5sYS84ODk0OTIuXG4gIHRoaXMuX25hbWVzID0gQXJyYXlTZXQuZnJvbUFycmF5KG5hbWVzLm1hcChTdHJpbmcpLCB0cnVlKTtcbiAgdGhpcy5fc291cmNlcyA9IEFycmF5U2V0LmZyb21BcnJheShzb3VyY2VzLCB0cnVlKTtcblxuICB0aGlzLl9hYnNvbHV0ZVNvdXJjZXMgPSB0aGlzLl9zb3VyY2VzLnRvQXJyYXkoKS5tYXAoZnVuY3Rpb24gKHMpIHtcbiAgICByZXR1cm4gdXRpbC5jb21wdXRlU291cmNlVVJMKHNvdXJjZVJvb3QsIHMsIGFTb3VyY2VNYXBVUkwpO1xuICB9KTtcblxuICB0aGlzLnNvdXJjZVJvb3QgPSBzb3VyY2VSb290O1xuICB0aGlzLnNvdXJjZXNDb250ZW50ID0gc291cmNlc0NvbnRlbnQ7XG4gIHRoaXMuX21hcHBpbmdzID0gbWFwcGluZ3M7XG4gIHRoaXMuX3NvdXJjZU1hcFVSTCA9IGFTb3VyY2VNYXBVUkw7XG4gIHRoaXMuZmlsZSA9IGZpbGU7XG59XG5cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUpO1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29uc3VtZXIgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIHRvIGZpbmQgdGhlIGluZGV4IG9mIGEgc291cmNlLiAgUmV0dXJucyAtMSBpZiBub3RcbiAqIGZvdW5kLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5fZmluZFNvdXJjZUluZGV4ID0gZnVuY3Rpb24oYVNvdXJjZSkge1xuICB2YXIgcmVsYXRpdmVTb3VyY2UgPSBhU291cmNlO1xuICBpZiAodGhpcy5zb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICByZWxhdGl2ZVNvdXJjZSA9IHV0aWwucmVsYXRpdmUodGhpcy5zb3VyY2VSb290LCByZWxhdGl2ZVNvdXJjZSk7XG4gIH1cblxuICBpZiAodGhpcy5fc291cmNlcy5oYXMocmVsYXRpdmVTb3VyY2UpKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NvdXJjZXMuaW5kZXhPZihyZWxhdGl2ZVNvdXJjZSk7XG4gIH1cblxuICAvLyBNYXliZSBhU291cmNlIGlzIGFuIGFic29sdXRlIFVSTCBhcyByZXR1cm5lZCBieSB8c291cmNlc3wuICBJblxuICAvLyB0aGlzIGNhc2Ugd2UgY2FuJ3Qgc2ltcGx5IHVuZG8gdGhlIHRyYW5zZm9ybS5cbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCB0aGlzLl9hYnNvbHV0ZVNvdXJjZXMubGVuZ3RoOyArK2kpIHtcbiAgICBpZiAodGhpcy5fYWJzb2x1dGVTb3VyY2VzW2ldID09IGFTb3VyY2UpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAtMTtcbn07XG5cbi8qKlxuICogQ3JlYXRlIGEgQmFzaWNTb3VyY2VNYXBDb25zdW1lciBmcm9tIGEgU291cmNlTWFwR2VuZXJhdG9yLlxuICpcbiAqIEBwYXJhbSBTb3VyY2VNYXBHZW5lcmF0b3IgYVNvdXJjZU1hcFxuICogICAgICAgIFRoZSBzb3VyY2UgbWFwIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbiAqIEBwYXJhbSBTdHJpbmcgYVNvdXJjZU1hcFVSTFxuICogICAgICAgIFRoZSBVUkwgYXQgd2hpY2ggdGhlIHNvdXJjZSBtYXAgY2FuIGJlIGZvdW5kIChvcHRpb25hbClcbiAqIEByZXR1cm5zIEJhc2ljU291cmNlTWFwQ29uc3VtZXJcbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5mcm9tU291cmNlTWFwID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZnJvbVNvdXJjZU1hcChhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gICAgdmFyIHNtYyA9IE9iamVjdC5jcmVhdGUoQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUpO1xuXG4gICAgdmFyIG5hbWVzID0gc21jLl9uYW1lcyA9IEFycmF5U2V0LmZyb21BcnJheShhU291cmNlTWFwLl9uYW1lcy50b0FycmF5KCksIHRydWUpO1xuICAgIHZhciBzb3VyY2VzID0gc21jLl9zb3VyY2VzID0gQXJyYXlTZXQuZnJvbUFycmF5KGFTb3VyY2VNYXAuX3NvdXJjZXMudG9BcnJheSgpLCB0cnVlKTtcbiAgICBzbWMuc291cmNlUm9vdCA9IGFTb3VyY2VNYXAuX3NvdXJjZVJvb3Q7XG4gICAgc21jLnNvdXJjZXNDb250ZW50ID0gYVNvdXJjZU1hcC5fZ2VuZXJhdGVTb3VyY2VzQ29udGVudChzbWMuX3NvdXJjZXMudG9BcnJheSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc21jLnNvdXJjZVJvb3QpO1xuICAgIHNtYy5maWxlID0gYVNvdXJjZU1hcC5fZmlsZTtcbiAgICBzbWMuX3NvdXJjZU1hcFVSTCA9IGFTb3VyY2VNYXBVUkw7XG4gICAgc21jLl9hYnNvbHV0ZVNvdXJjZXMgPSBzbWMuX3NvdXJjZXMudG9BcnJheSgpLm1hcChmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIHV0aWwuY29tcHV0ZVNvdXJjZVVSTChzbWMuc291cmNlUm9vdCwgcywgYVNvdXJjZU1hcFVSTCk7XG4gICAgfSk7XG5cbiAgICAvLyBCZWNhdXNlIHdlIGFyZSBtb2RpZnlpbmcgdGhlIGVudHJpZXMgKGJ5IGNvbnZlcnRpbmcgc3RyaW5nIHNvdXJjZXMgYW5kXG4gICAgLy8gbmFtZXMgdG8gaW5kaWNlcyBpbnRvIHRoZSBzb3VyY2VzIGFuZCBuYW1lcyBBcnJheVNldHMpLCB3ZSBoYXZlIHRvIG1ha2VcbiAgICAvLyBhIGNvcHkgb2YgdGhlIGVudHJ5IG9yIGVsc2UgYmFkIHRoaW5ncyBoYXBwZW4uIFNoYXJlZCBtdXRhYmxlIHN0YXRlXG4gICAgLy8gc3RyaWtlcyBhZ2FpbiEgU2VlIGdpdGh1YiBpc3N1ZSAjMTkxLlxuXG4gICAgdmFyIGdlbmVyYXRlZE1hcHBpbmdzID0gYVNvdXJjZU1hcC5fbWFwcGluZ3MudG9BcnJheSgpLnNsaWNlKCk7XG4gICAgdmFyIGRlc3RHZW5lcmF0ZWRNYXBwaW5ncyA9IHNtYy5fX2dlbmVyYXRlZE1hcHBpbmdzID0gW107XG4gICAgdmFyIGRlc3RPcmlnaW5hbE1hcHBpbmdzID0gc21jLl9fb3JpZ2luYWxNYXBwaW5ncyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGdlbmVyYXRlZE1hcHBpbmdzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3JjTWFwcGluZyA9IGdlbmVyYXRlZE1hcHBpbmdzW2ldO1xuICAgICAgdmFyIGRlc3RNYXBwaW5nID0gbmV3IE1hcHBpbmc7XG4gICAgICBkZXN0TWFwcGluZy5nZW5lcmF0ZWRMaW5lID0gc3JjTWFwcGluZy5nZW5lcmF0ZWRMaW5lO1xuICAgICAgZGVzdE1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uID0gc3JjTWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG5cbiAgICAgIGlmIChzcmNNYXBwaW5nLnNvdXJjZSkge1xuICAgICAgICBkZXN0TWFwcGluZy5zb3VyY2UgPSBzb3VyY2VzLmluZGV4T2Yoc3JjTWFwcGluZy5zb3VyY2UpO1xuICAgICAgICBkZXN0TWFwcGluZy5vcmlnaW5hbExpbmUgPSBzcmNNYXBwaW5nLm9yaWdpbmFsTGluZTtcbiAgICAgICAgZGVzdE1hcHBpbmcub3JpZ2luYWxDb2x1bW4gPSBzcmNNYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuXG4gICAgICAgIGlmIChzcmNNYXBwaW5nLm5hbWUpIHtcbiAgICAgICAgICBkZXN0TWFwcGluZy5uYW1lID0gbmFtZXMuaW5kZXhPZihzcmNNYXBwaW5nLm5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVzdE9yaWdpbmFsTWFwcGluZ3MucHVzaChkZXN0TWFwcGluZyk7XG4gICAgICB9XG5cbiAgICAgIGRlc3RHZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKGRlc3RNYXBwaW5nKTtcbiAgICB9XG5cbiAgICBxdWlja1NvcnQoc21jLl9fb3JpZ2luYWxNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyk7XG5cbiAgICByZXR1cm4gc21jO1xuICB9O1xuXG4vKipcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwcGluZyBzcGVjIHRoYXQgd2UgYXJlIGNvbnN1bWluZy5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vKipcbiAqIFRoZSBsaXN0IG9mIG9yaWdpbmFsIHNvdXJjZXMuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShCYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSwgJ3NvdXJjZXMnLCB7XG4gIGdldDogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9hYnNvbHV0ZVNvdXJjZXMuc2xpY2UoKTtcbiAgfVxufSk7XG5cbi8qKlxuICogUHJvdmlkZSB0aGUgSklUIHdpdGggYSBuaWNlIHNoYXBlIC8gaGlkZGVuIGNsYXNzLlxuICovXG5mdW5jdGlvbiBNYXBwaW5nKCkge1xuICB0aGlzLmdlbmVyYXRlZExpbmUgPSAwO1xuICB0aGlzLmdlbmVyYXRlZENvbHVtbiA9IDA7XG4gIHRoaXMuc291cmNlID0gbnVsbDtcbiAgdGhpcy5vcmlnaW5hbExpbmUgPSBudWxsO1xuICB0aGlzLm9yaWdpbmFsQ29sdW1uID0gbnVsbDtcbiAgdGhpcy5uYW1lID0gbnVsbDtcbn1cblxuLyoqXG4gKiBQYXJzZSB0aGUgbWFwcGluZ3MgaW4gYSBzdHJpbmcgaW4gdG8gYSBkYXRhIHN0cnVjdHVyZSB3aGljaCB3ZSBjYW4gZWFzaWx5XG4gKiBxdWVyeSAodGhlIG9yZGVyZWQgYXJyYXlzIGluIHRoZSBgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbiAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG4gKi9cbkJhc2ljU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLl9wYXJzZU1hcHBpbmdzID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuICAgIHZhciBnZW5lcmF0ZWRMaW5lID0gMTtcbiAgICB2YXIgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSAwO1xuICAgIHZhciBwcmV2aW91c09yaWdpbmFsTGluZSA9IDA7XG4gICAgdmFyIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gPSAwO1xuICAgIHZhciBwcmV2aW91c1NvdXJjZSA9IDA7XG4gICAgdmFyIHByZXZpb3VzTmFtZSA9IDA7XG4gICAgdmFyIGxlbmd0aCA9IGFTdHIubGVuZ3RoO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGNhY2hlZFNlZ21lbnRzID0ge307XG4gICAgdmFyIHRlbXAgPSB7fTtcbiAgICB2YXIgb3JpZ2luYWxNYXBwaW5ncyA9IFtdO1xuICAgIHZhciBnZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuICAgIHZhciBtYXBwaW5nLCBzdHIsIHNlZ21lbnQsIGVuZCwgdmFsdWU7XG5cbiAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmIChhU3RyLmNoYXJBdChpbmRleCkgPT09ICc7Jykge1xuICAgICAgICBnZW5lcmF0ZWRMaW5lKys7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICAgIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKGFTdHIuY2hhckF0KGluZGV4KSA9PT0gJywnKSB7XG4gICAgICAgIGluZGV4Kys7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgbWFwcGluZyA9IG5ldyBNYXBwaW5nKCk7XG4gICAgICAgIG1hcHBpbmcuZ2VuZXJhdGVkTGluZSA9IGdlbmVyYXRlZExpbmU7XG5cbiAgICAgICAgLy8gQmVjYXVzZSBlYWNoIG9mZnNldCBpcyBlbmNvZGVkIHJlbGF0aXZlIHRvIHRoZSBwcmV2aW91cyBvbmUsXG4gICAgICAgIC8vIG1hbnkgc2VnbWVudHMgb2Z0ZW4gaGF2ZSB0aGUgc2FtZSBlbmNvZGluZy4gV2UgY2FuIGV4cGxvaXQgdGhpc1xuICAgICAgICAvLyBmYWN0IGJ5IGNhY2hpbmcgdGhlIHBhcnNlZCB2YXJpYWJsZSBsZW5ndGggZmllbGRzIG9mIGVhY2ggc2VnbWVudCxcbiAgICAgICAgLy8gYWxsb3dpbmcgdXMgdG8gYXZvaWQgYSBzZWNvbmQgcGFyc2UgaWYgd2UgZW5jb3VudGVyIHRoZSBzYW1lXG4gICAgICAgIC8vIHNlZ21lbnQgYWdhaW4uXG4gICAgICAgIGZvciAoZW5kID0gaW5kZXg7IGVuZCA8IGxlbmd0aDsgZW5kKyspIHtcbiAgICAgICAgICBpZiAodGhpcy5fY2hhcklzTWFwcGluZ1NlcGFyYXRvcihhU3RyLCBlbmQpKSB7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RyID0gYVN0ci5zbGljZShpbmRleCwgZW5kKTtcblxuICAgICAgICBzZWdtZW50ID0gY2FjaGVkU2VnbWVudHNbc3RyXTtcbiAgICAgICAgaWYgKHNlZ21lbnQpIHtcbiAgICAgICAgICBpbmRleCArPSBzdHIubGVuZ3RoO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlZ21lbnQgPSBbXTtcbiAgICAgICAgICB3aGlsZSAoaW5kZXggPCBlbmQpIHtcbiAgICAgICAgICAgIGJhc2U2NFZMUS5kZWNvZGUoYVN0ciwgaW5kZXgsIHRlbXApO1xuICAgICAgICAgICAgdmFsdWUgPSB0ZW1wLnZhbHVlO1xuICAgICAgICAgICAgaW5kZXggPSB0ZW1wLnJlc3Q7XG4gICAgICAgICAgICBzZWdtZW50LnB1c2godmFsdWUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCBhIHNvdXJjZSwgYnV0IG5vIGxpbmUgYW5kIGNvbHVtbicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChzZWdtZW50Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGb3VuZCBhIHNvdXJjZSBhbmQgbGluZSwgYnV0IG5vIGNvbHVtbicpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNhY2hlZFNlZ21lbnRzW3N0cl0gPSBzZWdtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2VuZXJhdGVkIGNvbHVtbi5cbiAgICAgICAgbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gPSBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiArIHNlZ21lbnRbMF07XG4gICAgICAgIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG5cbiAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID4gMSkge1xuICAgICAgICAgIC8vIE9yaWdpbmFsIHNvdXJjZS5cbiAgICAgICAgICBtYXBwaW5nLnNvdXJjZSA9IHByZXZpb3VzU291cmNlICsgc2VnbWVudFsxXTtcbiAgICAgICAgICBwcmV2aW91c1NvdXJjZSArPSBzZWdtZW50WzFdO1xuXG4gICAgICAgICAgLy8gT3JpZ2luYWwgbGluZS5cbiAgICAgICAgICBtYXBwaW5nLm9yaWdpbmFsTGluZSA9IHByZXZpb3VzT3JpZ2luYWxMaW5lICsgc2VnbWVudFsyXTtcbiAgICAgICAgICBwcmV2aW91c09yaWdpbmFsTGluZSA9IG1hcHBpbmcub3JpZ2luYWxMaW5lO1xuICAgICAgICAgIC8vIExpbmVzIGFyZSBzdG9yZWQgMC1iYXNlZFxuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxMaW5lICs9IDE7XG5cbiAgICAgICAgICAvLyBPcmlnaW5hbCBjb2x1bW4uXG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbENvbHVtbiA9IHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gKyBzZWdtZW50WzNdO1xuICAgICAgICAgIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4gPSBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uO1xuXG4gICAgICAgICAgaWYgKHNlZ21lbnQubGVuZ3RoID4gNCkge1xuICAgICAgICAgICAgLy8gT3JpZ2luYWwgbmFtZS5cbiAgICAgICAgICAgIG1hcHBpbmcubmFtZSA9IHByZXZpb3VzTmFtZSArIHNlZ21lbnRbNF07XG4gICAgICAgICAgICBwcmV2aW91c05hbWUgKz0gc2VnbWVudFs0XTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBnZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKG1hcHBpbmcpO1xuICAgICAgICBpZiAodHlwZW9mIG1hcHBpbmcub3JpZ2luYWxMaW5lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgIG9yaWdpbmFsTWFwcGluZ3MucHVzaChtYXBwaW5nKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHF1aWNrU29ydChnZW5lcmF0ZWRNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCk7XG4gICAgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzID0gZ2VuZXJhdGVkTWFwcGluZ3M7XG5cbiAgICBxdWlja1NvcnQob3JpZ2luYWxNYXBwaW5ncywgdXRpbC5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyk7XG4gICAgdGhpcy5fX29yaWdpbmFsTWFwcGluZ3MgPSBvcmlnaW5hbE1hcHBpbmdzO1xuICB9O1xuXG4vKipcbiAqIEZpbmQgdGhlIG1hcHBpbmcgdGhhdCBiZXN0IG1hdGNoZXMgdGhlIGh5cG90aGV0aWNhbCBcIm5lZWRsZVwiIG1hcHBpbmcgdGhhdFxuICogd2UgYXJlIHNlYXJjaGluZyBmb3IgaW4gdGhlIGdpdmVuIFwiaGF5c3RhY2tcIiBvZiBtYXBwaW5ncy5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX2ZpbmRNYXBwaW5nID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfZmluZE1hcHBpbmcoYU5lZWRsZSwgYU1hcHBpbmdzLCBhTGluZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFDb2x1bW5OYW1lLCBhQ29tcGFyYXRvciwgYUJpYXMpIHtcbiAgICAvLyBUbyByZXR1cm4gdGhlIHBvc2l0aW9uIHdlIGFyZSBzZWFyY2hpbmcgZm9yLCB3ZSBtdXN0IGZpcnN0IGZpbmQgdGhlXG4gICAgLy8gbWFwcGluZyBmb3IgdGhlIGdpdmVuIHBvc2l0aW9uIGFuZCB0aGVuIHJldHVybiB0aGUgb3Bwb3NpdGUgcG9zaXRpb24gaXRcbiAgICAvLyBwb2ludHMgdG8uIEJlY2F1c2UgdGhlIG1hcHBpbmdzIGFyZSBzb3J0ZWQsIHdlIGNhbiB1c2UgYmluYXJ5IHNlYXJjaCB0b1xuICAgIC8vIGZpbmQgdGhlIGJlc3QgbWFwcGluZy5cblxuICAgIGlmIChhTmVlZGxlW2FMaW5lTmFtZV0gPD0gMCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignTGluZSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAxLCBnb3QgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICArIGFOZWVkbGVbYUxpbmVOYW1lXSk7XG4gICAgfVxuICAgIGlmIChhTmVlZGxlW2FDb2x1bW5OYW1lXSA8IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbHVtbiBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAwLCBnb3QgJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICArIGFOZWVkbGVbYUNvbHVtbk5hbWVdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYmluYXJ5U2VhcmNoLnNlYXJjaChhTmVlZGxlLCBhTWFwcGluZ3MsIGFDb21wYXJhdG9yLCBhQmlhcyk7XG4gIH07XG5cbi8qKlxuICogQ29tcHV0ZSB0aGUgbGFzdCBjb2x1bW4gZm9yIGVhY2ggZ2VuZXJhdGVkIG1hcHBpbmcuIFRoZSBsYXN0IGNvbHVtbiBpc1xuICogaW5jbHVzaXZlLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5jb21wdXRlQ29sdW1uU3BhbnMgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9jb21wdXRlQ29sdW1uU3BhbnMoKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5nc1tpbmRleF07XG5cbiAgICAgIC8vIE1hcHBpbmdzIGRvIG5vdCBjb250YWluIGEgZmllbGQgZm9yIHRoZSBsYXN0IGdlbmVyYXRlZCBjb2x1bW50LiBXZVxuICAgICAgLy8gY2FuIGNvbWUgdXAgd2l0aCBhbiBvcHRpbWlzdGljIGVzdGltYXRlLCBob3dldmVyLCBieSBhc3N1bWluZyB0aGF0XG4gICAgICAvLyBtYXBwaW5ncyBhcmUgY29udGlndW91cyAoaS5lLiBnaXZlbiB0d28gY29uc2VjdXRpdmUgbWFwcGluZ3MsIHRoZVxuICAgICAgLy8gZmlyc3QgbWFwcGluZyBlbmRzIHdoZXJlIHRoZSBzZWNvbmQgb25lIHN0YXJ0cykuXG4gICAgICBpZiAoaW5kZXggKyAxIDwgdGhpcy5fZ2VuZXJhdGVkTWFwcGluZ3MubGVuZ3RoKSB7XG4gICAgICAgIHZhciBuZXh0TWFwcGluZyA9IHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzW2luZGV4ICsgMV07XG5cbiAgICAgICAgaWYgKG1hcHBpbmcuZ2VuZXJhdGVkTGluZSA9PT0gbmV4dE1hcHBpbmcuZ2VuZXJhdGVkTGluZSkge1xuICAgICAgICAgIG1hcHBpbmcubGFzdEdlbmVyYXRlZENvbHVtbiA9IG5leHRNYXBwaW5nLmdlbmVyYXRlZENvbHVtbiAtIDE7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGxhc3QgbWFwcGluZyBmb3IgZWFjaCBsaW5lIHNwYW5zIHRoZSBlbnRpcmUgbGluZS5cbiAgICAgIG1hcHBpbmcubGFzdEdlbmVyYXRlZENvbHVtbiA9IEluZmluaXR5O1xuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBvcmlnaW5hbCBzb3VyY2UsIGxpbmUsIGFuZCBjb2x1bW4gaW5mb3JtYXRpb24gZm9yIHRoZSBnZW5lcmF0ZWRcbiAqIHNvdXJjZSdzIGxpbmUgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdFxuICogd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIGxpbmU6IFRoZSBsaW5lIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS4gIFRoZSBsaW5lIG51bWJlclxuICogICAgIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgZ2VuZXJhdGVkIHNvdXJjZS4gIFRoZSBjb2x1bW5cbiAqICAgICBudW1iZXIgaXMgMC1iYXNlZC5cbiAqICAgLSBiaWFzOiBFaXRoZXIgJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuICogICAgICdTb3VyY2VNYXBDb25zdW1lci5MRUFTVF9VUFBFUl9CT1VORCcuIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcbiAqICAgICBjbG9zZXN0IGVsZW1lbnQgdGhhdCBpcyBzbWFsbGVyIHRoYW4gb3IgZ3JlYXRlciB0aGFuIHRoZSBvbmUgd2UgYXJlXG4gKiAgICAgc2VhcmNoaW5nIGZvciwgcmVzcGVjdGl2ZWx5LCBpZiB0aGUgZXhhY3QgZWxlbWVudCBjYW5ub3QgYmUgZm91bmQuXG4gKiAgICAgRGVmYXVsdHMgdG8gJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJy5cbiAqXG4gKiBhbmQgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBzb3VyY2U6IFRoZSBvcmlnaW5hbCBzb3VyY2UgZmlsZSwgb3IgbnVsbC5cbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgIGxpbmUgbnVtYmVyIGlzIDEtYmFzZWQuXG4gKiAgIC0gY29sdW1uOiBUaGUgY29sdW1uIG51bWJlciBpbiB0aGUgb3JpZ2luYWwgc291cmNlLCBvciBudWxsLiAgVGhlXG4gKiAgICAgY29sdW1uIG51bWJlciBpcyAwLWJhc2VkLlxuICogICAtIG5hbWU6IFRoZSBvcmlnaW5hbCBpZGVudGlmaWVyLCBvciBudWxsLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5vcmlnaW5hbFBvc2l0aW9uRm9yID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfb3JpZ2luYWxQb3NpdGlvbkZvcihhQXJncykge1xuICAgIHZhciBuZWVkbGUgPSB7XG4gICAgICBnZW5lcmF0ZWRMaW5lOiB1dGlsLmdldEFyZyhhQXJncywgJ2xpbmUnKSxcbiAgICAgIGdlbmVyYXRlZENvbHVtbjogdXRpbC5nZXRBcmcoYUFyZ3MsICdjb2x1bW4nKVxuICAgIH07XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kTWFwcGluZyhcbiAgICAgIG5lZWRsZSxcbiAgICAgIHRoaXMuX2dlbmVyYXRlZE1hcHBpbmdzLFxuICAgICAgXCJnZW5lcmF0ZWRMaW5lXCIsXG4gICAgICBcImdlbmVyYXRlZENvbHVtblwiLFxuICAgICAgdXRpbC5jb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNEZWZsYXRlZCxcbiAgICAgIHV0aWwuZ2V0QXJnKGFBcmdzLCAnYmlhcycsIFNvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EKVxuICAgICk7XG5cbiAgICBpZiAoaW5kZXggPj0gMCkge1xuICAgICAgdmFyIG1hcHBpbmcgPSB0aGlzLl9nZW5lcmF0ZWRNYXBwaW5nc1tpbmRleF07XG5cbiAgICAgIGlmIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgPT09IG5lZWRsZS5nZW5lcmF0ZWRMaW5lKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSB1dGlsLmdldEFyZyhtYXBwaW5nLCAnc291cmNlJywgbnVsbCk7XG4gICAgICAgIGlmIChzb3VyY2UgIT09IG51bGwpIHtcbiAgICAgICAgICBzb3VyY2UgPSB0aGlzLl9zb3VyY2VzLmF0KHNvdXJjZSk7XG4gICAgICAgICAgc291cmNlID0gdXRpbC5jb21wdXRlU291cmNlVVJMKHRoaXMuc291cmNlUm9vdCwgc291cmNlLCB0aGlzLl9zb3VyY2VNYXBVUkwpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBuYW1lID0gdXRpbC5nZXRBcmcobWFwcGluZywgJ25hbWUnLCBudWxsKTtcbiAgICAgICAgaWYgKG5hbWUgIT09IG51bGwpIHtcbiAgICAgICAgICBuYW1lID0gdGhpcy5fbmFtZXMuYXQobmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgICAgICBsaW5lOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnb3JpZ2luYWxMaW5lJywgbnVsbCksXG4gICAgICAgICAgY29sdW1uOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnb3JpZ2luYWxDb2x1bW4nLCBudWxsKSxcbiAgICAgICAgICBuYW1lOiBuYW1lXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHNvdXJjZTogbnVsbCxcbiAgICAgIGxpbmU6IG51bGwsXG4gICAgICBjb2x1bW46IG51bGwsXG4gICAgICBuYW1lOiBudWxsXG4gICAgfTtcbiAgfTtcblxuLyoqXG4gKiBSZXR1cm4gdHJ1ZSBpZiB3ZSBoYXZlIHRoZSBzb3VyY2UgY29udGVudCBmb3IgZXZlcnkgc291cmNlIGluIHRoZSBzb3VyY2VcbiAqIG1hcCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5oYXNDb250ZW50c09mQWxsU291cmNlcyA9XG4gIGZ1bmN0aW9uIEJhc2ljU291cmNlTWFwQ29uc3VtZXJfaGFzQ29udGVudHNPZkFsbFNvdXJjZXMoKSB7XG4gICAgaWYgKCF0aGlzLnNvdXJjZXNDb250ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNvdXJjZXNDb250ZW50Lmxlbmd0aCA+PSB0aGlzLl9zb3VyY2VzLnNpemUoKSAmJlxuICAgICAgIXRoaXMuc291cmNlc0NvbnRlbnQuc29tZShmdW5jdGlvbiAoc2MpIHsgcmV0dXJuIHNjID09IG51bGw7IH0pO1xuICB9O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50LiBUaGUgb25seSBhcmd1bWVudCBpcyB0aGUgdXJsIG9mIHRoZVxuICogb3JpZ2luYWwgc291cmNlIGZpbGUuIFJldHVybnMgbnVsbCBpZiBubyBvcmlnaW5hbCBzb3VyY2UgY29udGVudCBpc1xuICogYXZhaWxhYmxlLlxuICovXG5CYXNpY1NvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5zb3VyY2VDb250ZW50Rm9yID1cbiAgZnVuY3Rpb24gU291cmNlTWFwQ29uc3VtZXJfc291cmNlQ29udGVudEZvcihhU291cmNlLCBudWxsT25NaXNzaW5nKSB7XG4gICAgaWYgKCF0aGlzLnNvdXJjZXNDb250ZW50KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kU291cmNlSW5kZXgoYVNvdXJjZSk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdXJjZXNDb250ZW50W2luZGV4XTtcbiAgICB9XG5cbiAgICB2YXIgcmVsYXRpdmVTb3VyY2UgPSBhU291cmNlO1xuICAgIGlmICh0aGlzLnNvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgcmVsYXRpdmVTb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHRoaXMuc291cmNlUm9vdCwgcmVsYXRpdmVTb3VyY2UpO1xuICAgIH1cblxuICAgIHZhciB1cmw7XG4gICAgaWYgKHRoaXMuc291cmNlUm9vdCAhPSBudWxsXG4gICAgICAgICYmICh1cmwgPSB1dGlsLnVybFBhcnNlKHRoaXMuc291cmNlUm9vdCkpKSB7XG4gICAgICAvLyBYWFg6IGZpbGU6Ly8gVVJJcyBhbmQgYWJzb2x1dGUgcGF0aHMgbGVhZCB0byB1bmV4cGVjdGVkIGJlaGF2aW9yIGZvclxuICAgICAgLy8gbWFueSB1c2Vycy4gV2UgY2FuIGhlbHAgdGhlbSBvdXQgd2hlbiB0aGV5IGV4cGVjdCBmaWxlOi8vIFVSSXMgdG9cbiAgICAgIC8vIGJlaGF2ZSBsaWtlIGl0IHdvdWxkIGlmIHRoZXkgd2VyZSBydW5uaW5nIGEgbG9jYWwgSFRUUCBzZXJ2ZXIuIFNlZVxuICAgICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODg1NTk3LlxuICAgICAgdmFyIGZpbGVVcmlBYnNQYXRoID0gcmVsYXRpdmVTb3VyY2UucmVwbGFjZSgvXmZpbGU6XFwvXFwvLywgXCJcIik7XG4gICAgICBpZiAodXJsLnNjaGVtZSA9PSBcImZpbGVcIlxuICAgICAgICAgICYmIHRoaXMuX3NvdXJjZXMuaGFzKGZpbGVVcmlBYnNQYXRoKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudFt0aGlzLl9zb3VyY2VzLmluZGV4T2YoZmlsZVVyaUFic1BhdGgpXVxuICAgICAgfVxuXG4gICAgICBpZiAoKCF1cmwucGF0aCB8fCB1cmwucGF0aCA9PSBcIi9cIilcbiAgICAgICAgICAmJiB0aGlzLl9zb3VyY2VzLmhhcyhcIi9cIiArIHJlbGF0aXZlU291cmNlKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zb3VyY2VzQ29udGVudFt0aGlzLl9zb3VyY2VzLmluZGV4T2YoXCIvXCIgKyByZWxhdGl2ZVNvdXJjZSldO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCByZWN1cnNpdmVseSBmcm9tXG4gICAgLy8gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5zb3VyY2VDb250ZW50Rm9yLiBJbiB0aGF0IGNhc2UsIHdlXG4gICAgLy8gZG9uJ3Qgd2FudCB0byB0aHJvdyBpZiB3ZSBjYW4ndCBmaW5kIHRoZSBzb3VyY2UgLSB3ZSBqdXN0IHdhbnQgdG9cbiAgICAvLyByZXR1cm4gbnVsbCwgc28gd2UgcHJvdmlkZSBhIGZsYWcgdG8gZXhpdCBncmFjZWZ1bGx5LlxuICAgIGlmIChudWxsT25NaXNzaW5nKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1wiJyArIHJlbGF0aXZlU291cmNlICsgJ1wiIGlzIG5vdCBpbiB0aGUgU291cmNlTWFwLicpO1xuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgb3JpZ2luYWwgc291cmNlLFxuICogbGluZSwgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdCB3aXRoXG4gKiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIHNvdXJjZTogVGhlIGZpbGVuYW1lIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS4gIFRoZSBjb2x1bW5cbiAqICAgICBudW1iZXIgaXMgMC1iYXNlZC5cbiAqICAgLSBiaWFzOiBFaXRoZXIgJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJyBvclxuICogICAgICdTb3VyY2VNYXBDb25zdW1lci5MRUFTVF9VUFBFUl9CT1VORCcuIFNwZWNpZmllcyB3aGV0aGVyIHRvIHJldHVybiB0aGVcbiAqICAgICBjbG9zZXN0IGVsZW1lbnQgdGhhdCBpcyBzbWFsbGVyIHRoYW4gb3IgZ3JlYXRlciB0aGFuIHRoZSBvbmUgd2UgYXJlXG4gKiAgICAgc2VhcmNoaW5nIGZvciwgcmVzcGVjdGl2ZWx5LCBpZiB0aGUgZXhhY3QgZWxlbWVudCBjYW5ub3QgYmUgZm91bmQuXG4gKiAgICAgRGVmYXVsdHMgdG8gJ1NvdXJjZU1hcENvbnN1bWVyLkdSRUFURVNUX0xPV0VSX0JPVU5EJy5cbiAqXG4gKiBhbmQgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuXG4gKiAgICAgVGhlIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqL1xuQmFzaWNTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuZ2VuZXJhdGVkUG9zaXRpb25Gb3IgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBDb25zdW1lcl9nZW5lcmF0ZWRQb3NpdGlvbkZvcihhQXJncykge1xuICAgIHZhciBzb3VyY2UgPSB1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZScpO1xuICAgIHNvdXJjZSA9IHRoaXMuX2ZpbmRTb3VyY2VJbmRleChzb3VyY2UpO1xuICAgIGlmIChzb3VyY2UgPCAwKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsaW5lOiBudWxsLFxuICAgICAgICBjb2x1bW46IG51bGwsXG4gICAgICAgIGxhc3RDb2x1bW46IG51bGxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdmFyIG5lZWRsZSA9IHtcbiAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgb3JpZ2luYWxMaW5lOiB1dGlsLmdldEFyZyhhQXJncywgJ2xpbmUnKSxcbiAgICAgIG9yaWdpbmFsQ29sdW1uOiB1dGlsLmdldEFyZyhhQXJncywgJ2NvbHVtbicpXG4gICAgfTtcblxuICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmRNYXBwaW5nKFxuICAgICAgbmVlZGxlLFxuICAgICAgdGhpcy5fb3JpZ2luYWxNYXBwaW5ncyxcbiAgICAgIFwib3JpZ2luYWxMaW5lXCIsXG4gICAgICBcIm9yaWdpbmFsQ29sdW1uXCIsXG4gICAgICB1dGlsLmNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zLFxuICAgICAgdXRpbC5nZXRBcmcoYUFyZ3MsICdiaWFzJywgU291cmNlTWFwQ29uc3VtZXIuR1JFQVRFU1RfTE9XRVJfQk9VTkQpXG4gICAgKTtcblxuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB2YXIgbWFwcGluZyA9IHRoaXMuX29yaWdpbmFsTWFwcGluZ3NbaW5kZXhdO1xuXG4gICAgICBpZiAobWFwcGluZy5zb3VyY2UgPT09IG5lZWRsZS5zb3VyY2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBsaW5lOiB1dGlsLmdldEFyZyhtYXBwaW5nLCAnZ2VuZXJhdGVkTGluZScsIG51bGwpLFxuICAgICAgICAgIGNvbHVtbjogdXRpbC5nZXRBcmcobWFwcGluZywgJ2dlbmVyYXRlZENvbHVtbicsIG51bGwpLFxuICAgICAgICAgIGxhc3RDb2x1bW46IHV0aWwuZ2V0QXJnKG1hcHBpbmcsICdsYXN0R2VuZXJhdGVkQ29sdW1uJywgbnVsbClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbGluZTogbnVsbCxcbiAgICAgIGNvbHVtbjogbnVsbCxcbiAgICAgIGxhc3RDb2x1bW46IG51bGxcbiAgICB9O1xuICB9O1xuXG5leHBvcnRzLkJhc2ljU291cmNlTWFwQ29uc3VtZXIgPSBCYXNpY1NvdXJjZU1hcENvbnN1bWVyO1xuXG4vKipcbiAqIEFuIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lciBpbnN0YW5jZSByZXByZXNlbnRzIGEgcGFyc2VkIHNvdXJjZSBtYXAgd2hpY2hcbiAqIHdlIGNhbiBxdWVyeSBmb3IgaW5mb3JtYXRpb24uIEl0IGRpZmZlcnMgZnJvbSBCYXNpY1NvdXJjZU1hcENvbnN1bWVyIGluXG4gKiB0aGF0IGl0IHRha2VzIFwiaW5kZXhlZFwiIHNvdXJjZSBtYXBzIChpLmUuIG9uZXMgd2l0aCBhIFwic2VjdGlvbnNcIiBmaWVsZCkgYXNcbiAqIGlucHV0LlxuICpcbiAqIFRoZSBmaXJzdCBwYXJhbWV0ZXIgaXMgYSByYXcgc291cmNlIG1hcCAoZWl0aGVyIGFzIGEgSlNPTiBzdHJpbmcsIG9yIGFscmVhZHlcbiAqIHBhcnNlZCB0byBhbiBvYmplY3QpLiBBY2NvcmRpbmcgdG8gdGhlIHNwZWMgZm9yIGluZGV4ZWQgc291cmNlIG1hcHMsIHRoZXlcbiAqIGhhdmUgdGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzOlxuICpcbiAqICAgLSB2ZXJzaW9uOiBXaGljaCB2ZXJzaW9uIG9mIHRoZSBzb3VyY2UgbWFwIHNwZWMgdGhpcyBtYXAgaXMgZm9sbG93aW5nLlxuICogICAtIGZpbGU6IE9wdGlvbmFsLiBUaGUgZ2VuZXJhdGVkIGZpbGUgdGhpcyBzb3VyY2UgbWFwIGlzIGFzc29jaWF0ZWQgd2l0aC5cbiAqICAgLSBzZWN0aW9uczogQSBsaXN0IG9mIHNlY3Rpb24gZGVmaW5pdGlvbnMuXG4gKlxuICogRWFjaCB2YWx1ZSB1bmRlciB0aGUgXCJzZWN0aW9uc1wiIGZpZWxkIGhhcyB0d28gZmllbGRzOlxuICogICAtIG9mZnNldDogVGhlIG9mZnNldCBpbnRvIHRoZSBvcmlnaW5hbCBzcGVjaWZpZWQgYXQgd2hpY2ggdGhpcyBzZWN0aW9uXG4gKiAgICAgICBiZWdpbnMgdG8gYXBwbHksIGRlZmluZWQgYXMgYW4gb2JqZWN0IHdpdGggYSBcImxpbmVcIiBhbmQgXCJjb2x1bW5cIlxuICogICAgICAgZmllbGQuXG4gKiAgIC0gbWFwOiBBIHNvdXJjZSBtYXAgZGVmaW5pdGlvbi4gVGhpcyBzb3VyY2UgbWFwIGNvdWxkIGFsc28gYmUgaW5kZXhlZCxcbiAqICAgICAgIGJ1dCBkb2Vzbid0IGhhdmUgdG8gYmUuXG4gKlxuICogSW5zdGVhZCBvZiB0aGUgXCJtYXBcIiBmaWVsZCwgaXQncyBhbHNvIHBvc3NpYmxlIHRvIGhhdmUgYSBcInVybFwiIGZpZWxkXG4gKiBzcGVjaWZ5aW5nIGEgVVJMIHRvIHJldHJpZXZlIGEgc291cmNlIG1hcCBmcm9tLCBidXQgdGhhdCdzIGN1cnJlbnRseVxuICogdW5zdXBwb3J0ZWQuXG4gKlxuICogSGVyZSdzIGFuIGV4YW1wbGUgc291cmNlIG1hcCwgdGFrZW4gZnJvbSB0aGUgc291cmNlIG1hcCBzcGVjWzBdLCBidXRcbiAqIG1vZGlmaWVkIHRvIG9taXQgYSBzZWN0aW9uIHdoaWNoIHVzZXMgdGhlIFwidXJsXCIgZmllbGQuXG4gKlxuICogIHtcbiAqICAgIHZlcnNpb24gOiAzLFxuICogICAgZmlsZTogXCJhcHAuanNcIixcbiAqICAgIHNlY3Rpb25zOiBbe1xuICogICAgICBvZmZzZXQ6IHtsaW5lOjEwMCwgY29sdW1uOjEwfSxcbiAqICAgICAgbWFwOiB7XG4gKiAgICAgICAgdmVyc2lvbiA6IDMsXG4gKiAgICAgICAgZmlsZTogXCJzZWN0aW9uLmpzXCIsXG4gKiAgICAgICAgc291cmNlczogW1wiZm9vLmpzXCIsIFwiYmFyLmpzXCJdLFxuICogICAgICAgIG5hbWVzOiBbXCJzcmNcIiwgXCJtYXBzXCIsIFwiYXJlXCIsIFwiZnVuXCJdLFxuICogICAgICAgIG1hcHBpbmdzOiBcIkFBQUEsRTs7QUJDREU7XCJcbiAqICAgICAgfVxuICogICAgfV0sXG4gKiAgfVxuICpcbiAqIFRoZSBzZWNvbmQgcGFyYW1ldGVyLCBpZiBnaXZlbiwgaXMgYSBzdHJpbmcgd2hvc2UgdmFsdWUgaXMgdGhlIFVSTFxuICogYXQgd2hpY2ggdGhlIHNvdXJjZSBtYXAgd2FzIGZvdW5kLiAgVGhpcyBVUkwgaXMgdXNlZCB0byBjb21wdXRlIHRoZVxuICogc291cmNlcyBhcnJheS5cbiAqXG4gKiBbMF06IGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMVUxUkdBZWhRd1J5cFVUb3ZGMUtSbHBpT0Z6ZTBiLV8yZ2M2ZkFIMEtZMGsvZWRpdCNoZWFkaW5nPWguNTM1ZXMzeGVwcmd0XG4gKi9cbmZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcihhU291cmNlTWFwLCBhU291cmNlTWFwVVJMKSB7XG4gIHZhciBzb3VyY2VNYXAgPSBhU291cmNlTWFwO1xuICBpZiAodHlwZW9mIGFTb3VyY2VNYXAgPT09ICdzdHJpbmcnKSB7XG4gICAgc291cmNlTWFwID0gdXRpbC5wYXJzZVNvdXJjZU1hcElucHV0KGFTb3VyY2VNYXApO1xuICB9XG5cbiAgdmFyIHZlcnNpb24gPSB1dGlsLmdldEFyZyhzb3VyY2VNYXAsICd2ZXJzaW9uJyk7XG4gIHZhciBzZWN0aW9ucyA9IHV0aWwuZ2V0QXJnKHNvdXJjZU1hcCwgJ3NlY3Rpb25zJyk7XG5cbiAgaWYgKHZlcnNpb24gIT0gdGhpcy5fdmVyc2lvbikge1xuICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgdmVyc2lvbjogJyArIHZlcnNpb24pO1xuICB9XG5cbiAgdGhpcy5fc291cmNlcyA9IG5ldyBBcnJheVNldCgpO1xuICB0aGlzLl9uYW1lcyA9IG5ldyBBcnJheVNldCgpO1xuXG4gIHZhciBsYXN0T2Zmc2V0ID0ge1xuICAgIGxpbmU6IC0xLFxuICAgIGNvbHVtbjogMFxuICB9O1xuICB0aGlzLl9zZWN0aW9ucyA9IHNlY3Rpb25zLm1hcChmdW5jdGlvbiAocykge1xuICAgIGlmIChzLnVybCkge1xuICAgICAgLy8gVGhlIHVybCBmaWVsZCB3aWxsIHJlcXVpcmUgc3VwcG9ydCBmb3IgYXN5bmNocm9uaWNpdHkuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc291cmNlLW1hcC9pc3N1ZXMvMTZcbiAgICAgIHRocm93IG5ldyBFcnJvcignU3VwcG9ydCBmb3IgdXJsIGZpZWxkIGluIHNlY3Rpb25zIG5vdCBpbXBsZW1lbnRlZC4nKTtcbiAgICB9XG4gICAgdmFyIG9mZnNldCA9IHV0aWwuZ2V0QXJnKHMsICdvZmZzZXQnKTtcbiAgICB2YXIgb2Zmc2V0TGluZSA9IHV0aWwuZ2V0QXJnKG9mZnNldCwgJ2xpbmUnKTtcbiAgICB2YXIgb2Zmc2V0Q29sdW1uID0gdXRpbC5nZXRBcmcob2Zmc2V0LCAnY29sdW1uJyk7XG5cbiAgICBpZiAob2Zmc2V0TGluZSA8IGxhc3RPZmZzZXQubGluZSB8fFxuICAgICAgICAob2Zmc2V0TGluZSA9PT0gbGFzdE9mZnNldC5saW5lICYmIG9mZnNldENvbHVtbiA8IGxhc3RPZmZzZXQuY29sdW1uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdTZWN0aW9uIG9mZnNldHMgbXVzdCBiZSBvcmRlcmVkIGFuZCBub24tb3ZlcmxhcHBpbmcuJyk7XG4gICAgfVxuICAgIGxhc3RPZmZzZXQgPSBvZmZzZXQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgZ2VuZXJhdGVkT2Zmc2V0OiB7XG4gICAgICAgIC8vIFRoZSBvZmZzZXQgZmllbGRzIGFyZSAwLWJhc2VkLCBidXQgd2UgdXNlIDEtYmFzZWQgaW5kaWNlcyB3aGVuXG4gICAgICAgIC8vIGVuY29kaW5nL2RlY29kaW5nIGZyb20gVkxRLlxuICAgICAgICBnZW5lcmF0ZWRMaW5lOiBvZmZzZXRMaW5lICsgMSxcbiAgICAgICAgZ2VuZXJhdGVkQ29sdW1uOiBvZmZzZXRDb2x1bW4gKyAxXG4gICAgICB9LFxuICAgICAgY29uc3VtZXI6IG5ldyBTb3VyY2VNYXBDb25zdW1lcih1dGlsLmdldEFyZyhzLCAnbWFwJyksIGFTb3VyY2VNYXBVUkwpXG4gICAgfVxuICB9KTtcbn1cblxuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlKTtcbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBTb3VyY2VNYXBDb25zdW1lcjtcblxuLyoqXG4gKiBUaGUgdmVyc2lvbiBvZiB0aGUgc291cmNlIG1hcHBpbmcgc3BlYyB0aGF0IHdlIGFyZSBjb25zdW1pbmcuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vKipcbiAqIFRoZSBsaXN0IG9mIG9yaWdpbmFsIHNvdXJjZXMuXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShJbmRleGVkU291cmNlTWFwQ29uc3VtZXIucHJvdG90eXBlLCAnc291cmNlcycsIHtcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNvdXJjZXMgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMuX3NlY3Rpb25zW2ldLmNvbnN1bWVyLnNvdXJjZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgc291cmNlcy5wdXNoKHRoaXMuX3NlY3Rpb25zW2ldLmNvbnN1bWVyLnNvdXJjZXNbal0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc291cmNlcztcbiAgfVxufSk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgc291cmNlLCBsaW5lLCBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgZ2VuZXJhdGVkXG4gKiBzb3VyY2UncyBsaW5lIGFuZCBjb2x1bW4gcG9zaXRpb25zIHByb3ZpZGVkLiBUaGUgb25seSBhcmd1bWVudCBpcyBhbiBvYmplY3RcbiAqIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UuICBUaGUgY29sdW1uXG4gKiAgICAgbnVtYmVyIGlzIDAtYmFzZWQuXG4gKlxuICogYW5kIGFuIG9iamVjdCBpcyByZXR1cm5lZCB3aXRoIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqXG4gKiAgIC0gc291cmNlOiBUaGUgb3JpZ2luYWwgc291cmNlIGZpbGUsIG9yIG51bGwuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZSwgb3IgbnVsbC4gIFRoZVxuICogICAgIGNvbHVtbiBudW1iZXIgaXMgMC1iYXNlZC5cbiAqICAgLSBuYW1lOiBUaGUgb3JpZ2luYWwgaWRlbnRpZmllciwgb3IgbnVsbC5cbiAqL1xuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5vcmlnaW5hbFBvc2l0aW9uRm9yID1cbiAgZnVuY3Rpb24gSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyX29yaWdpbmFsUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICB2YXIgbmVlZGxlID0ge1xuICAgICAgZ2VuZXJhdGVkTGluZTogdXRpbC5nZXRBcmcoYUFyZ3MsICdsaW5lJyksXG4gICAgICBnZW5lcmF0ZWRDb2x1bW46IHV0aWwuZ2V0QXJnKGFBcmdzLCAnY29sdW1uJylcbiAgICB9O1xuXG4gICAgLy8gRmluZCB0aGUgc2VjdGlvbiBjb250YWluaW5nIHRoZSBnZW5lcmF0ZWQgcG9zaXRpb24gd2UncmUgdHJ5aW5nIHRvIG1hcFxuICAgIC8vIHRvIGFuIG9yaWdpbmFsIHBvc2l0aW9uLlxuICAgIHZhciBzZWN0aW9uSW5kZXggPSBiaW5hcnlTZWFyY2guc2VhcmNoKG5lZWRsZSwgdGhpcy5fc2VjdGlvbnMsXG4gICAgICBmdW5jdGlvbihuZWVkbGUsIHNlY3Rpb24pIHtcbiAgICAgICAgdmFyIGNtcCA9IG5lZWRsZS5nZW5lcmF0ZWRMaW5lIC0gc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZTtcbiAgICAgICAgaWYgKGNtcCkge1xuICAgICAgICAgIHJldHVybiBjbXA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG5lZWRsZS5nZW5lcmF0ZWRDb2x1bW4gLVxuICAgICAgICAgICAgICAgIHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbik7XG4gICAgICB9KTtcbiAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW3NlY3Rpb25JbmRleF07XG5cbiAgICBpZiAoIXNlY3Rpb24pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHNvdXJjZTogbnVsbCxcbiAgICAgICAgbGluZTogbnVsbCxcbiAgICAgICAgY29sdW1uOiBudWxsLFxuICAgICAgICBuYW1lOiBudWxsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiBzZWN0aW9uLmNvbnN1bWVyLm9yaWdpbmFsUG9zaXRpb25Gb3Ioe1xuICAgICAgbGluZTogbmVlZGxlLmdlbmVyYXRlZExpbmUgLVxuICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuICAgICAgY29sdW1uOiBuZWVkbGUuZ2VuZXJhdGVkQ29sdW1uIC1cbiAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgPT09IG5lZWRsZS5nZW5lcmF0ZWRMaW5lXG4gICAgICAgICA/IHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZENvbHVtbiAtIDFcbiAgICAgICAgIDogMCksXG4gICAgICBiaWFzOiBhQXJncy5iaWFzXG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogUmV0dXJuIHRydWUgaWYgd2UgaGF2ZSB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGV2ZXJ5IHNvdXJjZSBpbiB0aGUgc291cmNlXG4gKiBtYXAsIGZhbHNlIG90aGVyd2lzZS5cbiAqL1xuSW5kZXhlZFNvdXJjZU1hcENvbnN1bWVyLnByb3RvdHlwZS5oYXNDb250ZW50c09mQWxsU291cmNlcyA9XG4gIGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9oYXNDb250ZW50c09mQWxsU291cmNlcygpIHtcbiAgICByZXR1cm4gdGhpcy5fc2VjdGlvbnMuZXZlcnkoZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBzLmNvbnN1bWVyLmhhc0NvbnRlbnRzT2ZBbGxTb3VyY2VzKCk7XG4gICAgfSk7XG4gIH07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgb3JpZ2luYWwgc291cmNlIGNvbnRlbnQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIHRoZSB1cmwgb2YgdGhlXG4gKiBvcmlnaW5hbCBzb3VyY2UgZmlsZS4gUmV0dXJucyBudWxsIGlmIG5vIG9yaWdpbmFsIHNvdXJjZSBjb250ZW50IGlzXG4gKiBhdmFpbGFibGUuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuc291cmNlQ29udGVudEZvciA9XG4gIGZ1bmN0aW9uIEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcl9zb3VyY2VDb250ZW50Rm9yKGFTb3VyY2UsIG51bGxPbk1pc3NpbmcpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW2ldO1xuXG4gICAgICB2YXIgY29udGVudCA9IHNlY3Rpb24uY29uc3VtZXIuc291cmNlQ29udGVudEZvcihhU291cmNlLCB0cnVlKTtcbiAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobnVsbE9uTWlzc2luZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdcIicgKyBhU291cmNlICsgJ1wiIGlzIG5vdCBpbiB0aGUgU291cmNlTWFwLicpO1xuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIGluZm9ybWF0aW9uIGZvciB0aGUgb3JpZ2luYWwgc291cmNlLFxuICogbGluZSwgYW5kIGNvbHVtbiBwb3NpdGlvbnMgcHJvdmlkZWQuIFRoZSBvbmx5IGFyZ3VtZW50IGlzIGFuIG9iamVjdCB3aXRoXG4gKiB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogICAtIHNvdXJjZTogVGhlIGZpbGVuYW1lIG9mIHRoZSBvcmlnaW5hbCBzb3VyY2UuXG4gKiAgIC0gbGluZTogVGhlIGxpbmUgbnVtYmVyIGluIHRoZSBvcmlnaW5hbCBzb3VyY2UuICBUaGUgbGluZSBudW1iZXJcbiAqICAgICBpcyAxLWJhc2VkLlxuICogICAtIGNvbHVtbjogVGhlIGNvbHVtbiBudW1iZXIgaW4gdGhlIG9yaWdpbmFsIHNvdXJjZS4gIFRoZSBjb2x1bW5cbiAqICAgICBudW1iZXIgaXMgMC1iYXNlZC5cbiAqXG4gKiBhbmQgYW4gb2JqZWN0IGlzIHJldHVybmVkIHdpdGggdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBsaW5lOiBUaGUgbGluZSBudW1iZXIgaW4gdGhlIGdlbmVyYXRlZCBzb3VyY2UsIG9yIG51bGwuICBUaGVcbiAqICAgICBsaW5lIG51bWJlciBpcyAxLWJhc2VkLiBcbiAqICAgLSBjb2x1bW46IFRoZSBjb2x1bW4gbnVtYmVyIGluIHRoZSBnZW5lcmF0ZWQgc291cmNlLCBvciBudWxsLlxuICogICAgIFRoZSBjb2x1bW4gbnVtYmVyIGlzIDAtYmFzZWQuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuZ2VuZXJhdGVkUG9zaXRpb25Gb3IgPVxuICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX3NlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc2VjdGlvbiA9IHRoaXMuX3NlY3Rpb25zW2ldO1xuXG4gICAgICAvLyBPbmx5IGNvbnNpZGVyIHRoaXMgc2VjdGlvbiBpZiB0aGUgcmVxdWVzdGVkIHNvdXJjZSBpcyBpbiB0aGUgbGlzdCBvZlxuICAgICAgLy8gc291cmNlcyBvZiB0aGUgY29uc3VtZXIuXG4gICAgICBpZiAoc2VjdGlvbi5jb25zdW1lci5fZmluZFNvdXJjZUluZGV4KHV0aWwuZ2V0QXJnKGFBcmdzLCAnc291cmNlJykpID09PSAtMSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHZhciBnZW5lcmF0ZWRQb3NpdGlvbiA9IHNlY3Rpb24uY29uc3VtZXIuZ2VuZXJhdGVkUG9zaXRpb25Gb3IoYUFyZ3MpO1xuICAgICAgaWYgKGdlbmVyYXRlZFBvc2l0aW9uKSB7XG4gICAgICAgIHZhciByZXQgPSB7XG4gICAgICAgICAgbGluZTogZ2VuZXJhdGVkUG9zaXRpb24ubGluZSArXG4gICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuICAgICAgICAgIGNvbHVtbjogZ2VuZXJhdGVkUG9zaXRpb24uY29sdW1uICtcbiAgICAgICAgICAgIChzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRMaW5lID09PSBnZW5lcmF0ZWRQb3NpdGlvbi5saW5lXG4gICAgICAgICAgICAgPyBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4gLSAxXG4gICAgICAgICAgICAgOiAwKVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBsaW5lOiBudWxsLFxuICAgICAgY29sdW1uOiBudWxsXG4gICAgfTtcbiAgfTtcblxuLyoqXG4gKiBQYXJzZSB0aGUgbWFwcGluZ3MgaW4gYSBzdHJpbmcgaW4gdG8gYSBkYXRhIHN0cnVjdHVyZSB3aGljaCB3ZSBjYW4gZWFzaWx5XG4gKiBxdWVyeSAodGhlIG9yZGVyZWQgYXJyYXlzIGluIHRoZSBgdGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzYCBhbmRcbiAqIGB0aGlzLl9fb3JpZ2luYWxNYXBwaW5nc2AgcHJvcGVydGllcykuXG4gKi9cbkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lci5wcm90b3R5cGUuX3BhcnNlTWFwcGluZ3MgPVxuICBmdW5jdGlvbiBJbmRleGVkU291cmNlTWFwQ29uc3VtZXJfcGFyc2VNYXBwaW5ncyhhU3RyLCBhU291cmNlUm9vdCkge1xuICAgIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncyA9IFtdO1xuICAgIHRoaXMuX19vcmlnaW5hbE1hcHBpbmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNlY3Rpb24gPSB0aGlzLl9zZWN0aW9uc1tpXTtcbiAgICAgIHZhciBzZWN0aW9uTWFwcGluZ3MgPSBzZWN0aW9uLmNvbnN1bWVyLl9nZW5lcmF0ZWRNYXBwaW5ncztcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgc2VjdGlvbk1hcHBpbmdzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHZhciBtYXBwaW5nID0gc2VjdGlvbk1hcHBpbmdzW2pdO1xuXG4gICAgICAgIHZhciBzb3VyY2UgPSBzZWN0aW9uLmNvbnN1bWVyLl9zb3VyY2VzLmF0KG1hcHBpbmcuc291cmNlKTtcbiAgICAgICAgc291cmNlID0gdXRpbC5jb21wdXRlU291cmNlVVJMKHNlY3Rpb24uY29uc3VtZXIuc291cmNlUm9vdCwgc291cmNlLCB0aGlzLl9zb3VyY2VNYXBVUkwpO1xuICAgICAgICB0aGlzLl9zb3VyY2VzLmFkZChzb3VyY2UpO1xuICAgICAgICBzb3VyY2UgPSB0aGlzLl9zb3VyY2VzLmluZGV4T2Yoc291cmNlKTtcblxuICAgICAgICB2YXIgbmFtZSA9IG51bGw7XG4gICAgICAgIGlmIChtYXBwaW5nLm5hbWUpIHtcbiAgICAgICAgICBuYW1lID0gc2VjdGlvbi5jb25zdW1lci5fbmFtZXMuYXQobWFwcGluZy5uYW1lKTtcbiAgICAgICAgICB0aGlzLl9uYW1lcy5hZGQobmFtZSk7XG4gICAgICAgICAgbmFtZSA9IHRoaXMuX25hbWVzLmluZGV4T2YobmFtZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgbWFwcGluZ3MgY29taW5nIGZyb20gdGhlIGNvbnN1bWVyIGZvciB0aGUgc2VjdGlvbiBoYXZlXG4gICAgICAgIC8vIGdlbmVyYXRlZCBwb3NpdGlvbnMgcmVsYXRpdmUgdG8gdGhlIHN0YXJ0IG9mIHRoZSBzZWN0aW9uLCBzbyB3ZVxuICAgICAgICAvLyBuZWVkIHRvIG9mZnNldCB0aGVtIHRvIGJlIHJlbGF0aXZlIHRvIHRoZSBzdGFydCBvZiB0aGUgY29uY2F0ZW5hdGVkXG4gICAgICAgIC8vIGdlbmVyYXRlZCBmaWxlLlxuICAgICAgICB2YXIgYWRqdXN0ZWRNYXBwaW5nID0ge1xuICAgICAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgICAgIGdlbmVyYXRlZExpbmU6IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSArXG4gICAgICAgICAgICAoc2VjdGlvbi5nZW5lcmF0ZWRPZmZzZXQuZ2VuZXJhdGVkTGluZSAtIDEpLFxuICAgICAgICAgIGdlbmVyYXRlZENvbHVtbjogbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gK1xuICAgICAgICAgICAgKHNlY3Rpb24uZ2VuZXJhdGVkT2Zmc2V0LmdlbmVyYXRlZExpbmUgPT09IG1hcHBpbmcuZ2VuZXJhdGVkTGluZVxuICAgICAgICAgICAgPyBzZWN0aW9uLmdlbmVyYXRlZE9mZnNldC5nZW5lcmF0ZWRDb2x1bW4gLSAxXG4gICAgICAgICAgICA6IDApLFxuICAgICAgICAgIG9yaWdpbmFsTGluZTogbWFwcGluZy5vcmlnaW5hbExpbmUsXG4gICAgICAgICAgb3JpZ2luYWxDb2x1bW46IG1hcHBpbmcub3JpZ2luYWxDb2x1bW4sXG4gICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuX19nZW5lcmF0ZWRNYXBwaW5ncy5wdXNoKGFkanVzdGVkTWFwcGluZyk7XG4gICAgICAgIGlmICh0eXBlb2YgYWRqdXN0ZWRNYXBwaW5nLm9yaWdpbmFsTGluZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICB0aGlzLl9fb3JpZ2luYWxNYXBwaW5ncy5wdXNoKGFkanVzdGVkTWFwcGluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBxdWlja1NvcnQodGhpcy5fX2dlbmVyYXRlZE1hcHBpbmdzLCB1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkKTtcbiAgICBxdWlja1NvcnQodGhpcy5fX29yaWdpbmFsTWFwcGluZ3MsIHV0aWwuY29tcGFyZUJ5T3JpZ2luYWxQb3NpdGlvbnMpO1xuICB9O1xuXG5leHBvcnRzLkluZGV4ZWRTb3VyY2VNYXBDb25zdW1lciA9IEluZGV4ZWRTb3VyY2VNYXBDb25zdW1lcjtcbiIsIi8qIC0qLSBNb2RlOiBqczsganMtaW5kZW50LWxldmVsOiAyOyAtKi0gKi9cbi8qXG4gKiBDb3B5cmlnaHQgMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0Ugb3I6XG4gKiBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvQlNELTMtQ2xhdXNlXG4gKi9cblxudmFyIGJhc2U2NFZMUSA9IHJlcXVpcmUoJy4vYmFzZTY0LXZscScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcbnZhciBBcnJheVNldCA9IHJlcXVpcmUoJy4vYXJyYXktc2V0JykuQXJyYXlTZXQ7XG52YXIgTWFwcGluZ0xpc3QgPSByZXF1aXJlKCcuL21hcHBpbmctbGlzdCcpLk1hcHBpbmdMaXN0O1xuXG4vKipcbiAqIEFuIGluc3RhbmNlIG9mIHRoZSBTb3VyY2VNYXBHZW5lcmF0b3IgcmVwcmVzZW50cyBhIHNvdXJjZSBtYXAgd2hpY2ggaXNcbiAqIGJlaW5nIGJ1aWx0IGluY3JlbWVudGFsbHkuIFlvdSBtYXkgcGFzcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nXG4gKiBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBmaWxlOiBUaGUgZmlsZW5hbWUgb2YgdGhlIGdlbmVyYXRlZCBzb3VyY2UuXG4gKiAgIC0gc291cmNlUm9vdDogQSByb290IGZvciBhbGwgcmVsYXRpdmUgVVJMcyBpbiB0aGlzIHNvdXJjZSBtYXAuXG4gKi9cbmZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcihhQXJncykge1xuICBpZiAoIWFBcmdzKSB7XG4gICAgYUFyZ3MgPSB7fTtcbiAgfVxuICB0aGlzLl9maWxlID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdmaWxlJywgbnVsbCk7XG4gIHRoaXMuX3NvdXJjZVJvb3QgPSB1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZVJvb3QnLCBudWxsKTtcbiAgdGhpcy5fc2tpcFZhbGlkYXRpb24gPSB1dGlsLmdldEFyZyhhQXJncywgJ3NraXBWYWxpZGF0aW9uJywgZmFsc2UpO1xuICB0aGlzLl9zb3VyY2VzID0gbmV3IEFycmF5U2V0KCk7XG4gIHRoaXMuX25hbWVzID0gbmV3IEFycmF5U2V0KCk7XG4gIHRoaXMuX21hcHBpbmdzID0gbmV3IE1hcHBpbmdMaXN0KCk7XG4gIHRoaXMuX3NvdXJjZXNDb250ZW50cyA9IG51bGw7XG59XG5cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuX3ZlcnNpb24gPSAzO1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgU291cmNlTWFwR2VuZXJhdG9yIGJhc2VkIG9uIGEgU291cmNlTWFwQ29uc3VtZXJcbiAqXG4gKiBAcGFyYW0gYVNvdXJjZU1hcENvbnN1bWVyIFRoZSBTb3VyY2VNYXAuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5mcm9tU291cmNlTWFwID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX2Zyb21Tb3VyY2VNYXAoYVNvdXJjZU1hcENvbnN1bWVyKSB7XG4gICAgdmFyIHNvdXJjZVJvb3QgPSBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlUm9vdDtcbiAgICB2YXIgZ2VuZXJhdG9yID0gbmV3IFNvdXJjZU1hcEdlbmVyYXRvcih7XG4gICAgICBmaWxlOiBhU291cmNlTWFwQ29uc3VtZXIuZmlsZSxcbiAgICAgIHNvdXJjZVJvb3Q6IHNvdXJjZVJvb3RcbiAgICB9KTtcbiAgICBhU291cmNlTWFwQ29uc3VtZXIuZWFjaE1hcHBpbmcoZnVuY3Rpb24gKG1hcHBpbmcpIHtcbiAgICAgIHZhciBuZXdNYXBwaW5nID0ge1xuICAgICAgICBnZW5lcmF0ZWQ6IHtcbiAgICAgICAgICBsaW5lOiBtYXBwaW5nLmdlbmVyYXRlZExpbmUsXG4gICAgICAgICAgY29sdW1uOiBtYXBwaW5nLmdlbmVyYXRlZENvbHVtblxuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAobWFwcGluZy5zb3VyY2UgIT0gbnVsbCkge1xuICAgICAgICBuZXdNYXBwaW5nLnNvdXJjZSA9IG1hcHBpbmcuc291cmNlO1xuICAgICAgICBpZiAoc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICAgICAgbmV3TWFwcGluZy5zb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIG5ld01hcHBpbmcuc291cmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld01hcHBpbmcub3JpZ2luYWwgPSB7XG4gICAgICAgICAgbGluZTogbWFwcGluZy5vcmlnaW5hbExpbmUsXG4gICAgICAgICAgY29sdW1uOiBtYXBwaW5nLm9yaWdpbmFsQ29sdW1uXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKG1hcHBpbmcubmFtZSAhPSBudWxsKSB7XG4gICAgICAgICAgbmV3TWFwcGluZy5uYW1lID0gbWFwcGluZy5uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGdlbmVyYXRvci5hZGRNYXBwaW5nKG5ld01hcHBpbmcpO1xuICAgIH0pO1xuICAgIGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VzLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZUZpbGUpIHtcbiAgICAgIHZhciBzb3VyY2VSZWxhdGl2ZSA9IHNvdXJjZUZpbGU7XG4gICAgICBpZiAoc291cmNlUm9vdCAhPT0gbnVsbCkge1xuICAgICAgICBzb3VyY2VSZWxhdGl2ZSA9IHV0aWwucmVsYXRpdmUoc291cmNlUm9vdCwgc291cmNlRmlsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghZ2VuZXJhdG9yLl9zb3VyY2VzLmhhcyhzb3VyY2VSZWxhdGl2ZSkpIHtcbiAgICAgICAgZ2VuZXJhdG9yLl9zb3VyY2VzLmFkZChzb3VyY2VSZWxhdGl2ZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZW50ID0gYVNvdXJjZU1hcENvbnN1bWVyLnNvdXJjZUNvbnRlbnRGb3Ioc291cmNlRmlsZSk7XG4gICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgIGdlbmVyYXRvci5zZXRTb3VyY2VDb250ZW50KHNvdXJjZUZpbGUsIGNvbnRlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH07XG5cbi8qKlxuICogQWRkIGEgc2luZ2xlIG1hcHBpbmcgZnJvbSBvcmlnaW5hbCBzb3VyY2UgbGluZSBhbmQgY29sdW1uIHRvIHRoZSBnZW5lcmF0ZWRcbiAqIHNvdXJjZSdzIGxpbmUgYW5kIGNvbHVtbiBmb3IgdGhpcyBzb3VyY2UgbWFwIGJlaW5nIGNyZWF0ZWQuIFRoZSBtYXBwaW5nXG4gKiBvYmplY3Qgc2hvdWxkIGhhdmUgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzOlxuICpcbiAqICAgLSBnZW5lcmF0ZWQ6IEFuIG9iamVjdCB3aXRoIHRoZSBnZW5lcmF0ZWQgbGluZSBhbmQgY29sdW1uIHBvc2l0aW9ucy5cbiAqICAgLSBvcmlnaW5hbDogQW4gb2JqZWN0IHdpdGggdGhlIG9yaWdpbmFsIGxpbmUgYW5kIGNvbHVtbiBwb3NpdGlvbnMuXG4gKiAgIC0gc291cmNlOiBUaGUgb3JpZ2luYWwgc291cmNlIGZpbGUgKHJlbGF0aXZlIHRvIHRoZSBzb3VyY2VSb290KS5cbiAqICAgLSBuYW1lOiBBbiBvcHRpb25hbCBvcmlnaW5hbCB0b2tlbiBuYW1lIGZvciB0aGlzIG1hcHBpbmcuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuYWRkTWFwcGluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl9hZGRNYXBwaW5nKGFBcmdzKSB7XG4gICAgdmFyIGdlbmVyYXRlZCA9IHV0aWwuZ2V0QXJnKGFBcmdzLCAnZ2VuZXJhdGVkJyk7XG4gICAgdmFyIG9yaWdpbmFsID0gdXRpbC5nZXRBcmcoYUFyZ3MsICdvcmlnaW5hbCcsIG51bGwpO1xuICAgIHZhciBzb3VyY2UgPSB1dGlsLmdldEFyZyhhQXJncywgJ3NvdXJjZScsIG51bGwpO1xuICAgIHZhciBuYW1lID0gdXRpbC5nZXRBcmcoYUFyZ3MsICduYW1lJywgbnVsbCk7XG5cbiAgICBpZiAoIXRoaXMuX3NraXBWYWxpZGF0aW9uKSB7XG4gICAgICB0aGlzLl92YWxpZGF0ZU1hcHBpbmcoZ2VuZXJhdGVkLCBvcmlnaW5hbCwgc291cmNlLCBuYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlICE9IG51bGwpIHtcbiAgICAgIHNvdXJjZSA9IFN0cmluZyhzb3VyY2UpO1xuICAgICAgaWYgKCF0aGlzLl9zb3VyY2VzLmhhcyhzb3VyY2UpKSB7XG4gICAgICAgIHRoaXMuX3NvdXJjZXMuYWRkKHNvdXJjZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgIT0gbnVsbCkge1xuICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKTtcbiAgICAgIGlmICghdGhpcy5fbmFtZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgIHRoaXMuX25hbWVzLmFkZChuYW1lKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9tYXBwaW5ncy5hZGQoe1xuICAgICAgZ2VuZXJhdGVkTGluZTogZ2VuZXJhdGVkLmxpbmUsXG4gICAgICBnZW5lcmF0ZWRDb2x1bW46IGdlbmVyYXRlZC5jb2x1bW4sXG4gICAgICBvcmlnaW5hbExpbmU6IG9yaWdpbmFsICE9IG51bGwgJiYgb3JpZ2luYWwubGluZSxcbiAgICAgIG9yaWdpbmFsQ29sdW1uOiBvcmlnaW5hbCAhPSBudWxsICYmIG9yaWdpbmFsLmNvbHVtbixcbiAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgbmFtZTogbmFtZVxuICAgIH0pO1xuICB9O1xuXG4vKipcbiAqIFNldCB0aGUgc291cmNlIGNvbnRlbnQgZm9yIGEgc291cmNlIGZpbGUuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuc2V0U291cmNlQ29udGVudCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl9zZXRTb3VyY2VDb250ZW50KGFTb3VyY2VGaWxlLCBhU291cmNlQ29udGVudCkge1xuICAgIHZhciBzb3VyY2UgPSBhU291cmNlRmlsZTtcbiAgICBpZiAodGhpcy5fc291cmNlUm9vdCAhPSBudWxsKSB7XG4gICAgICBzb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHRoaXMuX3NvdXJjZVJvb3QsIHNvdXJjZSk7XG4gICAgfVxuXG4gICAgaWYgKGFTb3VyY2VDb250ZW50ICE9IG51bGwpIHtcbiAgICAgIC8vIEFkZCB0aGUgc291cmNlIGNvbnRlbnQgdG8gdGhlIF9zb3VyY2VzQ29udGVudHMgbWFwLlxuICAgICAgLy8gQ3JlYXRlIGEgbmV3IF9zb3VyY2VzQ29udGVudHMgbWFwIGlmIHRoZSBwcm9wZXJ0eSBpcyBudWxsLlxuICAgICAgaWYgKCF0aGlzLl9zb3VyY2VzQ29udGVudHMpIHtcbiAgICAgICAgdGhpcy5fc291cmNlc0NvbnRlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3NvdXJjZXNDb250ZW50c1t1dGlsLnRvU2V0U3RyaW5nKHNvdXJjZSldID0gYVNvdXJjZUNvbnRlbnQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9zb3VyY2VzQ29udGVudHMpIHtcbiAgICAgIC8vIFJlbW92ZSB0aGUgc291cmNlIGZpbGUgZnJvbSB0aGUgX3NvdXJjZXNDb250ZW50cyBtYXAuXG4gICAgICAvLyBJZiB0aGUgX3NvdXJjZXNDb250ZW50cyBtYXAgaXMgZW1wdHksIHNldCB0aGUgcHJvcGVydHkgdG8gbnVsbC5cbiAgICAgIGRlbGV0ZSB0aGlzLl9zb3VyY2VzQ29udGVudHNbdXRpbC50b1NldFN0cmluZyhzb3VyY2UpXTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9zb3VyY2VzQ29udGVudHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLl9zb3VyY2VzQ29udGVudHMgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuLyoqXG4gKiBBcHBsaWVzIHRoZSBtYXBwaW5ncyBvZiBhIHN1Yi1zb3VyY2UtbWFwIGZvciBhIHNwZWNpZmljIHNvdXJjZSBmaWxlIHRvIHRoZVxuICogc291cmNlIG1hcCBiZWluZyBnZW5lcmF0ZWQuIEVhY2ggbWFwcGluZyB0byB0aGUgc3VwcGxpZWQgc291cmNlIGZpbGUgaXNcbiAqIHJld3JpdHRlbiB1c2luZyB0aGUgc3VwcGxpZWQgc291cmNlIG1hcC4gTm90ZTogVGhlIHJlc29sdXRpb24gZm9yIHRoZVxuICogcmVzdWx0aW5nIG1hcHBpbmdzIGlzIHRoZSBtaW5pbWl1bSBvZiB0aGlzIG1hcCBhbmQgdGhlIHN1cHBsaWVkIG1hcC5cbiAqXG4gKiBAcGFyYW0gYVNvdXJjZU1hcENvbnN1bWVyIFRoZSBzb3VyY2UgbWFwIHRvIGJlIGFwcGxpZWQuXG4gKiBAcGFyYW0gYVNvdXJjZUZpbGUgT3B0aW9uYWwuIFRoZSBmaWxlbmFtZSBvZiB0aGUgc291cmNlIGZpbGUuXG4gKiAgICAgICAgSWYgb21pdHRlZCwgU291cmNlTWFwQ29uc3VtZXIncyBmaWxlIHByb3BlcnR5IHdpbGwgYmUgdXNlZC5cbiAqIEBwYXJhbSBhU291cmNlTWFwUGF0aCBPcHRpb25hbC4gVGhlIGRpcm5hbWUgb2YgdGhlIHBhdGggdG8gdGhlIHNvdXJjZSBtYXBcbiAqICAgICAgICB0byBiZSBhcHBsaWVkLiBJZiByZWxhdGl2ZSwgaXQgaXMgcmVsYXRpdmUgdG8gdGhlIFNvdXJjZU1hcENvbnN1bWVyLlxuICogICAgICAgIFRoaXMgcGFyYW1ldGVyIGlzIG5lZWRlZCB3aGVuIHRoZSB0d28gc291cmNlIG1hcHMgYXJlbid0IGluIHRoZSBzYW1lXG4gKiAgICAgICAgZGlyZWN0b3J5LCBhbmQgdGhlIHNvdXJjZSBtYXAgdG8gYmUgYXBwbGllZCBjb250YWlucyByZWxhdGl2ZSBzb3VyY2VcbiAqICAgICAgICBwYXRocy4gSWYgc28sIHRob3NlIHJlbGF0aXZlIHNvdXJjZSBwYXRocyBuZWVkIHRvIGJlIHJld3JpdHRlblxuICogICAgICAgIHJlbGF0aXZlIHRvIHRoZSBTb3VyY2VNYXBHZW5lcmF0b3IuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuYXBwbHlTb3VyY2VNYXAgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfYXBwbHlTb3VyY2VNYXAoYVNvdXJjZU1hcENvbnN1bWVyLCBhU291cmNlRmlsZSwgYVNvdXJjZU1hcFBhdGgpIHtcbiAgICB2YXIgc291cmNlRmlsZSA9IGFTb3VyY2VGaWxlO1xuICAgIC8vIElmIGFTb3VyY2VGaWxlIGlzIG9taXR0ZWQsIHdlIHdpbGwgdXNlIHRoZSBmaWxlIHByb3BlcnR5IG9mIHRoZSBTb3VyY2VNYXBcbiAgICBpZiAoYVNvdXJjZUZpbGUgPT0gbnVsbCkge1xuICAgICAgaWYgKGFTb3VyY2VNYXBDb25zdW1lci5maWxlID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICdTb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLmFwcGx5U291cmNlTWFwIHJlcXVpcmVzIGVpdGhlciBhbiBleHBsaWNpdCBzb3VyY2UgZmlsZSwgJyArXG4gICAgICAgICAgJ29yIHRoZSBzb3VyY2UgbWFwXFwncyBcImZpbGVcIiBwcm9wZXJ0eS4gQm90aCB3ZXJlIG9taXR0ZWQuJ1xuICAgICAgICApO1xuICAgICAgfVxuICAgICAgc291cmNlRmlsZSA9IGFTb3VyY2VNYXBDb25zdW1lci5maWxlO1xuICAgIH1cbiAgICB2YXIgc291cmNlUm9vdCA9IHRoaXMuX3NvdXJjZVJvb3Q7XG4gICAgLy8gTWFrZSBcInNvdXJjZUZpbGVcIiByZWxhdGl2ZSBpZiBhbiBhYnNvbHV0ZSBVcmwgaXMgcGFzc2VkLlxuICAgIGlmIChzb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgIHNvdXJjZUZpbGUgPSB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIHNvdXJjZUZpbGUpO1xuICAgIH1cbiAgICAvLyBBcHBseWluZyB0aGUgU291cmNlTWFwIGNhbiBhZGQgYW5kIHJlbW92ZSBpdGVtcyBmcm9tIHRoZSBzb3VyY2VzIGFuZFxuICAgIC8vIHRoZSBuYW1lcyBhcnJheS5cbiAgICB2YXIgbmV3U291cmNlcyA9IG5ldyBBcnJheVNldCgpO1xuICAgIHZhciBuZXdOYW1lcyA9IG5ldyBBcnJheVNldCgpO1xuXG4gICAgLy8gRmluZCBtYXBwaW5ncyBmb3IgdGhlIFwic291cmNlRmlsZVwiXG4gICAgdGhpcy5fbWFwcGluZ3MudW5zb3J0ZWRGb3JFYWNoKGZ1bmN0aW9uIChtYXBwaW5nKSB7XG4gICAgICBpZiAobWFwcGluZy5zb3VyY2UgPT09IHNvdXJjZUZpbGUgJiYgbWFwcGluZy5vcmlnaW5hbExpbmUgIT0gbnVsbCkge1xuICAgICAgICAvLyBDaGVjayBpZiBpdCBjYW4gYmUgbWFwcGVkIGJ5IHRoZSBzb3VyY2UgbWFwLCB0aGVuIHVwZGF0ZSB0aGUgbWFwcGluZy5cbiAgICAgICAgdmFyIG9yaWdpbmFsID0gYVNvdXJjZU1hcENvbnN1bWVyLm9yaWdpbmFsUG9zaXRpb25Gb3Ioe1xuICAgICAgICAgIGxpbmU6IG1hcHBpbmcub3JpZ2luYWxMaW5lLFxuICAgICAgICAgIGNvbHVtbjogbWFwcGluZy5vcmlnaW5hbENvbHVtblxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKG9yaWdpbmFsLnNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gQ29weSBtYXBwaW5nXG4gICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSBvcmlnaW5hbC5zb3VyY2U7XG4gICAgICAgICAgaWYgKGFTb3VyY2VNYXBQYXRoICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1hcHBpbmcuc291cmNlID0gdXRpbC5qb2luKGFTb3VyY2VNYXBQYXRoLCBtYXBwaW5nLnNvdXJjZSlcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHNvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgbWFwcGluZy5zb3VyY2UgPSB1dGlsLnJlbGF0aXZlKHNvdXJjZVJvb3QsIG1hcHBpbmcuc291cmNlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWFwcGluZy5vcmlnaW5hbExpbmUgPSBvcmlnaW5hbC5saW5lO1xuICAgICAgICAgIG1hcHBpbmcub3JpZ2luYWxDb2x1bW4gPSBvcmlnaW5hbC5jb2x1bW47XG4gICAgICAgICAgaWYgKG9yaWdpbmFsLm5hbWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbWFwcGluZy5uYW1lID0gb3JpZ2luYWwubmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZSA9IG1hcHBpbmcuc291cmNlO1xuICAgICAgaWYgKHNvdXJjZSAhPSBudWxsICYmICFuZXdTb3VyY2VzLmhhcyhzb3VyY2UpKSB7XG4gICAgICAgIG5ld1NvdXJjZXMuYWRkKHNvdXJjZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBuYW1lID0gbWFwcGluZy5uYW1lO1xuICAgICAgaWYgKG5hbWUgIT0gbnVsbCAmJiAhbmV3TmFtZXMuaGFzKG5hbWUpKSB7XG4gICAgICAgIG5ld05hbWVzLmFkZChuYW1lKTtcbiAgICAgIH1cblxuICAgIH0sIHRoaXMpO1xuICAgIHRoaXMuX3NvdXJjZXMgPSBuZXdTb3VyY2VzO1xuICAgIHRoaXMuX25hbWVzID0gbmV3TmFtZXM7XG5cbiAgICAvLyBDb3B5IHNvdXJjZXNDb250ZW50cyBvZiBhcHBsaWVkIG1hcC5cbiAgICBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2VGaWxlKSB7XG4gICAgICB2YXIgY29udGVudCA9IGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VDb250ZW50Rm9yKHNvdXJjZUZpbGUpO1xuICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoYVNvdXJjZU1hcFBhdGggIT0gbnVsbCkge1xuICAgICAgICAgIHNvdXJjZUZpbGUgPSB1dGlsLmpvaW4oYVNvdXJjZU1hcFBhdGgsIHNvdXJjZUZpbGUpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgICAgICBzb3VyY2VGaWxlID0gdXRpbC5yZWxhdGl2ZShzb3VyY2VSb290LCBzb3VyY2VGaWxlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFNvdXJjZUNvbnRlbnQoc291cmNlRmlsZSwgY29udGVudCk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH07XG5cbi8qKlxuICogQSBtYXBwaW5nIGNhbiBoYXZlIG9uZSBvZiB0aGUgdGhyZWUgbGV2ZWxzIG9mIGRhdGE6XG4gKlxuICogICAxLiBKdXN0IHRoZSBnZW5lcmF0ZWQgcG9zaXRpb24uXG4gKiAgIDIuIFRoZSBHZW5lcmF0ZWQgcG9zaXRpb24sIG9yaWdpbmFsIHBvc2l0aW9uLCBhbmQgb3JpZ2luYWwgc291cmNlLlxuICogICAzLiBHZW5lcmF0ZWQgYW5kIG9yaWdpbmFsIHBvc2l0aW9uLCBvcmlnaW5hbCBzb3VyY2UsIGFzIHdlbGwgYXMgYSBuYW1lXG4gKiAgICAgIHRva2VuLlxuICpcbiAqIFRvIG1haW50YWluIGNvbnNpc3RlbmN5LCB3ZSB2YWxpZGF0ZSB0aGF0IGFueSBuZXcgbWFwcGluZyBiZWluZyBhZGRlZCBmYWxsc1xuICogaW4gdG8gb25lIG9mIHRoZXNlIGNhdGVnb3JpZXMuXG4gKi9cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuX3ZhbGlkYXRlTWFwcGluZyA9XG4gIGZ1bmN0aW9uIFNvdXJjZU1hcEdlbmVyYXRvcl92YWxpZGF0ZU1hcHBpbmcoYUdlbmVyYXRlZCwgYU9yaWdpbmFsLCBhU291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFOYW1lKSB7XG4gICAgLy8gV2hlbiBhT3JpZ2luYWwgaXMgdHJ1dGh5IGJ1dCBoYXMgZW1wdHkgdmFsdWVzIGZvciAubGluZSBhbmQgLmNvbHVtbixcbiAgICAvLyBpdCBpcyBtb3N0IGxpa2VseSBhIHByb2dyYW1tZXIgZXJyb3IuIEluIHRoaXMgY2FzZSB3ZSB0aHJvdyBhIHZlcnlcbiAgICAvLyBzcGVjaWZpYyBlcnJvciBtZXNzYWdlIHRvIHRyeSB0byBndWlkZSB0aGVtIHRoZSByaWdodCB3YXkuXG4gICAgLy8gRm9yIGV4YW1wbGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyL3BvbHltZXItYnVuZGxlci9wdWxsLzUxOVxuICAgIGlmIChhT3JpZ2luYWwgJiYgdHlwZW9mIGFPcmlnaW5hbC5saW5lICE9PSAnbnVtYmVyJyAmJiB0eXBlb2YgYU9yaWdpbmFsLmNvbHVtbiAhPT0gJ251bWJlcicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ29yaWdpbmFsLmxpbmUgYW5kIG9yaWdpbmFsLmNvbHVtbiBhcmUgbm90IG51bWJlcnMgLS0geW91IHByb2JhYmx5IG1lYW50IHRvIG9taXQgJyArXG4gICAgICAgICAgICAndGhlIG9yaWdpbmFsIG1hcHBpbmcgZW50aXJlbHkgYW5kIG9ubHkgbWFwIHRoZSBnZW5lcmF0ZWQgcG9zaXRpb24uIElmIHNvLCBwYXNzICcgK1xuICAgICAgICAgICAgJ251bGwgZm9yIHRoZSBvcmlnaW5hbCBtYXBwaW5nIGluc3RlYWQgb2YgYW4gb2JqZWN0IHdpdGggZW1wdHkgb3IgbnVsbCB2YWx1ZXMuJ1xuICAgICAgICApO1xuICAgIH1cblxuICAgIGlmIChhR2VuZXJhdGVkICYmICdsaW5lJyBpbiBhR2VuZXJhdGVkICYmICdjb2x1bW4nIGluIGFHZW5lcmF0ZWRcbiAgICAgICAgJiYgYUdlbmVyYXRlZC5saW5lID4gMCAmJiBhR2VuZXJhdGVkLmNvbHVtbiA+PSAwXG4gICAgICAgICYmICFhT3JpZ2luYWwgJiYgIWFTb3VyY2UgJiYgIWFOYW1lKSB7XG4gICAgICAvLyBDYXNlIDEuXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGVsc2UgaWYgKGFHZW5lcmF0ZWQgJiYgJ2xpbmUnIGluIGFHZW5lcmF0ZWQgJiYgJ2NvbHVtbicgaW4gYUdlbmVyYXRlZFxuICAgICAgICAgICAgICYmIGFPcmlnaW5hbCAmJiAnbGluZScgaW4gYU9yaWdpbmFsICYmICdjb2x1bW4nIGluIGFPcmlnaW5hbFxuICAgICAgICAgICAgICYmIGFHZW5lcmF0ZWQubGluZSA+IDAgJiYgYUdlbmVyYXRlZC5jb2x1bW4gPj0gMFxuICAgICAgICAgICAgICYmIGFPcmlnaW5hbC5saW5lID4gMCAmJiBhT3JpZ2luYWwuY29sdW1uID49IDBcbiAgICAgICAgICAgICAmJiBhU291cmNlKSB7XG4gICAgICAvLyBDYXNlcyAyIGFuZCAzLlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBtYXBwaW5nOiAnICsgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBnZW5lcmF0ZWQ6IGFHZW5lcmF0ZWQsXG4gICAgICAgIHNvdXJjZTogYVNvdXJjZSxcbiAgICAgICAgb3JpZ2luYWw6IGFPcmlnaW5hbCxcbiAgICAgICAgbmFtZTogYU5hbWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogU2VyaWFsaXplIHRoZSBhY2N1bXVsYXRlZCBtYXBwaW5ncyBpbiB0byB0aGUgc3RyZWFtIG9mIGJhc2UgNjQgVkxRc1xuICogc3BlY2lmaWVkIGJ5IHRoZSBzb3VyY2UgbWFwIGZvcm1hdC5cbiAqL1xuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS5fc2VyaWFsaXplTWFwcGluZ3MgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3Jfc2VyaWFsaXplTWFwcGluZ3MoKSB7XG4gICAgdmFyIHByZXZpb3VzR2VuZXJhdGVkQ29sdW1uID0gMDtcbiAgICB2YXIgcHJldmlvdXNHZW5lcmF0ZWRMaW5lID0gMTtcbiAgICB2YXIgcHJldmlvdXNPcmlnaW5hbENvbHVtbiA9IDA7XG4gICAgdmFyIHByZXZpb3VzT3JpZ2luYWxMaW5lID0gMDtcbiAgICB2YXIgcHJldmlvdXNOYW1lID0gMDtcbiAgICB2YXIgcHJldmlvdXNTb3VyY2UgPSAwO1xuICAgIHZhciByZXN1bHQgPSAnJztcbiAgICB2YXIgbmV4dDtcbiAgICB2YXIgbWFwcGluZztcbiAgICB2YXIgbmFtZUlkeDtcbiAgICB2YXIgc291cmNlSWR4O1xuXG4gICAgdmFyIG1hcHBpbmdzID0gdGhpcy5fbWFwcGluZ3MudG9BcnJheSgpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBtYXBwaW5ncy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgbWFwcGluZyA9IG1hcHBpbmdzW2ldO1xuICAgICAgbmV4dCA9ICcnXG5cbiAgICAgIGlmIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgIT09IHByZXZpb3VzR2VuZXJhdGVkTGluZSkge1xuICAgICAgICBwcmV2aW91c0dlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgICAgIHdoaWxlIChtYXBwaW5nLmdlbmVyYXRlZExpbmUgIT09IHByZXZpb3VzR2VuZXJhdGVkTGluZSkge1xuICAgICAgICAgIG5leHQgKz0gJzsnO1xuICAgICAgICAgIHByZXZpb3VzR2VuZXJhdGVkTGluZSsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgaWYgKCF1dGlsLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkKG1hcHBpbmcsIG1hcHBpbmdzW2kgLSAxXSkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBuZXh0ICs9ICcsJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBuZXh0ICs9IGJhc2U2NFZMUS5lbmNvZGUobWFwcGluZy5nZW5lcmF0ZWRDb2x1bW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4pO1xuICAgICAgcHJldmlvdXNHZW5lcmF0ZWRDb2x1bW4gPSBtYXBwaW5nLmdlbmVyYXRlZENvbHVtbjtcblxuICAgICAgaWYgKG1hcHBpbmcuc291cmNlICE9IG51bGwpIHtcbiAgICAgICAgc291cmNlSWR4ID0gdGhpcy5fc291cmNlcy5pbmRleE9mKG1hcHBpbmcuc291cmNlKTtcbiAgICAgICAgbmV4dCArPSBiYXNlNjRWTFEuZW5jb2RlKHNvdXJjZUlkeCAtIHByZXZpb3VzU291cmNlKTtcbiAgICAgICAgcHJldmlvdXNTb3VyY2UgPSBzb3VyY2VJZHg7XG5cbiAgICAgICAgLy8gbGluZXMgYXJlIHN0b3JlZCAwLWJhc2VkIGluIFNvdXJjZU1hcCBzcGVjIHZlcnNpb24gM1xuICAgICAgICBuZXh0ICs9IGJhc2U2NFZMUS5lbmNvZGUobWFwcGluZy5vcmlnaW5hbExpbmUgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gcHJldmlvdXNPcmlnaW5hbExpbmUpO1xuICAgICAgICBwcmV2aW91c09yaWdpbmFsTGluZSA9IG1hcHBpbmcub3JpZ2luYWxMaW5lIC0gMTtcblxuICAgICAgICBuZXh0ICs9IGJhc2U2NFZMUS5lbmNvZGUobWFwcGluZy5vcmlnaW5hbENvbHVtblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIHByZXZpb3VzT3JpZ2luYWxDb2x1bW4pO1xuICAgICAgICBwcmV2aW91c09yaWdpbmFsQ29sdW1uID0gbWFwcGluZy5vcmlnaW5hbENvbHVtbjtcblxuICAgICAgICBpZiAobWFwcGluZy5uYW1lICE9IG51bGwpIHtcbiAgICAgICAgICBuYW1lSWR4ID0gdGhpcy5fbmFtZXMuaW5kZXhPZihtYXBwaW5nLm5hbWUpO1xuICAgICAgICAgIG5leHQgKz0gYmFzZTY0VkxRLmVuY29kZShuYW1lSWR4IC0gcHJldmlvdXNOYW1lKTtcbiAgICAgICAgICBwcmV2aW91c05hbWUgPSBuYW1lSWR4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJlc3VsdCArPSBuZXh0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cblNvdXJjZU1hcEdlbmVyYXRvci5wcm90b3R5cGUuX2dlbmVyYXRlU291cmNlc0NvbnRlbnQgPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfZ2VuZXJhdGVTb3VyY2VzQ29udGVudChhU291cmNlcywgYVNvdXJjZVJvb3QpIHtcbiAgICByZXR1cm4gYVNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIGlmICghdGhpcy5fc291cmNlc0NvbnRlbnRzKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKGFTb3VyY2VSb290ICE9IG51bGwpIHtcbiAgICAgICAgc291cmNlID0gdXRpbC5yZWxhdGl2ZShhU291cmNlUm9vdCwgc291cmNlKTtcbiAgICAgIH1cbiAgICAgIHZhciBrZXkgPSB1dGlsLnRvU2V0U3RyaW5nKHNvdXJjZSk7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMuX3NvdXJjZXNDb250ZW50cywga2V5KVxuICAgICAgICA/IHRoaXMuX3NvdXJjZXNDb250ZW50c1trZXldXG4gICAgICAgIDogbnVsbDtcbiAgICB9LCB0aGlzKTtcbiAgfTtcblxuLyoqXG4gKiBFeHRlcm5hbGl6ZSB0aGUgc291cmNlIG1hcC5cbiAqL1xuU291cmNlTWFwR2VuZXJhdG9yLnByb3RvdHlwZS50b0pTT04gPVxuICBmdW5jdGlvbiBTb3VyY2VNYXBHZW5lcmF0b3JfdG9KU09OKCkge1xuICAgIHZhciBtYXAgPSB7XG4gICAgICB2ZXJzaW9uOiB0aGlzLl92ZXJzaW9uLFxuICAgICAgc291cmNlczogdGhpcy5fc291cmNlcy50b0FycmF5KCksXG4gICAgICBuYW1lczogdGhpcy5fbmFtZXMudG9BcnJheSgpLFxuICAgICAgbWFwcGluZ3M6IHRoaXMuX3NlcmlhbGl6ZU1hcHBpbmdzKClcbiAgICB9O1xuICAgIGlmICh0aGlzLl9maWxlICE9IG51bGwpIHtcbiAgICAgIG1hcC5maWxlID0gdGhpcy5fZmlsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX3NvdXJjZVJvb3QgIT0gbnVsbCkge1xuICAgICAgbWFwLnNvdXJjZVJvb3QgPSB0aGlzLl9zb3VyY2VSb290O1xuICAgIH1cbiAgICBpZiAodGhpcy5fc291cmNlc0NvbnRlbnRzKSB7XG4gICAgICBtYXAuc291cmNlc0NvbnRlbnQgPSB0aGlzLl9nZW5lcmF0ZVNvdXJjZXNDb250ZW50KG1hcC5zb3VyY2VzLCBtYXAuc291cmNlUm9vdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcDtcbiAgfTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIHNvdXJjZSBtYXAgYmVpbmcgZ2VuZXJhdGVkIHRvIGEgc3RyaW5nLlxuICovXG5Tb3VyY2VNYXBHZW5lcmF0b3IucHJvdG90eXBlLnRvU3RyaW5nID1cbiAgZnVuY3Rpb24gU291cmNlTWFwR2VuZXJhdG9yX3RvU3RyaW5nKCkge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnRvSlNPTigpKTtcbiAgfTtcblxuZXhwb3J0cy5Tb3VyY2VNYXBHZW5lcmF0b3IgPSBTb3VyY2VNYXBHZW5lcmF0b3I7XG4iLCIvKiAtKi0gTW9kZToganM7IGpzLWluZGVudC1sZXZlbDogMjsgLSotICovXG4vKlxuICogQ29weXJpZ2h0IDIwMTEgTW96aWxsYSBGb3VuZGF0aW9uIGFuZCBjb250cmlidXRvcnNcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIGxpY2Vuc2UuIFNlZSBMSUNFTlNFIG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5cbnZhciBTb3VyY2VNYXBHZW5lcmF0b3IgPSByZXF1aXJlKCcuL3NvdXJjZS1tYXAtZ2VuZXJhdG9yJykuU291cmNlTWFwR2VuZXJhdG9yO1xudmFyIHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLy8gTWF0Y2hlcyBhIFdpbmRvd3Mtc3R5bGUgYFxcclxcbmAgbmV3bGluZSBvciBhIGBcXG5gIG5ld2xpbmUgdXNlZCBieSBhbGwgb3RoZXJcbi8vIG9wZXJhdGluZyBzeXN0ZW1zIHRoZXNlIGRheXMgKGNhcHR1cmluZyB0aGUgcmVzdWx0KS5cbnZhciBSRUdFWF9ORVdMSU5FID0gLyhcXHI/XFxuKS87XG5cbi8vIE5ld2xpbmUgY2hhcmFjdGVyIGNvZGUgZm9yIGNoYXJDb2RlQXQoKSBjb21wYXJpc29uc1xudmFyIE5FV0xJTkVfQ09ERSA9IDEwO1xuXG4vLyBQcml2YXRlIHN5bWJvbCBmb3IgaWRlbnRpZnlpbmcgYFNvdXJjZU5vZGVgcyB3aGVuIG11bHRpcGxlIHZlcnNpb25zIG9mXG4vLyB0aGUgc291cmNlLW1hcCBsaWJyYXJ5IGFyZSBsb2FkZWQuIFRoaXMgTVVTVCBOT1QgQ0hBTkdFIGFjcm9zc1xuLy8gdmVyc2lvbnMhXG52YXIgaXNTb3VyY2VOb2RlID0gXCIkJCRpc1NvdXJjZU5vZGUkJCRcIjtcblxuLyoqXG4gKiBTb3VyY2VOb2RlcyBwcm92aWRlIGEgd2F5IHRvIGFic3RyYWN0IG92ZXIgaW50ZXJwb2xhdGluZy9jb25jYXRlbmF0aW5nXG4gKiBzbmlwcGV0cyBvZiBnZW5lcmF0ZWQgSmF2YVNjcmlwdCBzb3VyY2UgY29kZSB3aGlsZSBtYWludGFpbmluZyB0aGUgbGluZSBhbmRcbiAqIGNvbHVtbiBpbmZvcm1hdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhlIG9yaWdpbmFsIHNvdXJjZSBjb2RlLlxuICpcbiAqIEBwYXJhbSBhTGluZSBUaGUgb3JpZ2luYWwgbGluZSBudW1iZXIuXG4gKiBAcGFyYW0gYUNvbHVtbiBUaGUgb3JpZ2luYWwgY29sdW1uIG51bWJlci5cbiAqIEBwYXJhbSBhU291cmNlIFRoZSBvcmlnaW5hbCBzb3VyY2UncyBmaWxlbmFtZS5cbiAqIEBwYXJhbSBhQ2h1bmtzIE9wdGlvbmFsLiBBbiBhcnJheSBvZiBzdHJpbmdzIHdoaWNoIGFyZSBzbmlwcGV0cyBvZlxuICogICAgICAgIGdlbmVyYXRlZCBKUywgb3Igb3RoZXIgU291cmNlTm9kZXMuXG4gKiBAcGFyYW0gYU5hbWUgVGhlIG9yaWdpbmFsIGlkZW50aWZpZXIuXG4gKi9cbmZ1bmN0aW9uIFNvdXJjZU5vZGUoYUxpbmUsIGFDb2x1bW4sIGFTb3VyY2UsIGFDaHVua3MsIGFOYW1lKSB7XG4gIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgdGhpcy5zb3VyY2VDb250ZW50cyA9IHt9O1xuICB0aGlzLmxpbmUgPSBhTGluZSA9PSBudWxsID8gbnVsbCA6IGFMaW5lO1xuICB0aGlzLmNvbHVtbiA9IGFDb2x1bW4gPT0gbnVsbCA/IG51bGwgOiBhQ29sdW1uO1xuICB0aGlzLnNvdXJjZSA9IGFTb3VyY2UgPT0gbnVsbCA/IG51bGwgOiBhU291cmNlO1xuICB0aGlzLm5hbWUgPSBhTmFtZSA9PSBudWxsID8gbnVsbCA6IGFOYW1lO1xuICB0aGlzW2lzU291cmNlTm9kZV0gPSB0cnVlO1xuICBpZiAoYUNodW5rcyAhPSBudWxsKSB0aGlzLmFkZChhQ2h1bmtzKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgU291cmNlTm9kZSBmcm9tIGdlbmVyYXRlZCBjb2RlIGFuZCBhIFNvdXJjZU1hcENvbnN1bWVyLlxuICpcbiAqIEBwYXJhbSBhR2VuZXJhdGVkQ29kZSBUaGUgZ2VuZXJhdGVkIGNvZGVcbiAqIEBwYXJhbSBhU291cmNlTWFwQ29uc3VtZXIgVGhlIFNvdXJjZU1hcCBmb3IgdGhlIGdlbmVyYXRlZCBjb2RlXG4gKiBAcGFyYW0gYVJlbGF0aXZlUGF0aCBPcHRpb25hbC4gVGhlIHBhdGggdGhhdCByZWxhdGl2ZSBzb3VyY2VzIGluIHRoZVxuICogICAgICAgIFNvdXJjZU1hcENvbnN1bWVyIHNob3VsZCBiZSByZWxhdGl2ZSB0by5cbiAqL1xuU291cmNlTm9kZS5mcm9tU3RyaW5nV2l0aFNvdXJjZU1hcCA9XG4gIGZ1bmN0aW9uIFNvdXJjZU5vZGVfZnJvbVN0cmluZ1dpdGhTb3VyY2VNYXAoYUdlbmVyYXRlZENvZGUsIGFTb3VyY2VNYXBDb25zdW1lciwgYVJlbGF0aXZlUGF0aCkge1xuICAgIC8vIFRoZSBTb3VyY2VOb2RlIHdlIHdhbnQgdG8gZmlsbCB3aXRoIHRoZSBnZW5lcmF0ZWQgY29kZVxuICAgIC8vIGFuZCB0aGUgU291cmNlTWFwXG4gICAgdmFyIG5vZGUgPSBuZXcgU291cmNlTm9kZSgpO1xuXG4gICAgLy8gQWxsIGV2ZW4gaW5kaWNlcyBvZiB0aGlzIGFycmF5IGFyZSBvbmUgbGluZSBvZiB0aGUgZ2VuZXJhdGVkIGNvZGUsXG4gICAgLy8gd2hpbGUgYWxsIG9kZCBpbmRpY2VzIGFyZSB0aGUgbmV3bGluZXMgYmV0d2VlbiB0d28gYWRqYWNlbnQgbGluZXNcbiAgICAvLyAoc2luY2UgYFJFR0VYX05FV0xJTkVgIGNhcHR1cmVzIGl0cyBtYXRjaCkuXG4gICAgLy8gUHJvY2Vzc2VkIGZyYWdtZW50cyBhcmUgYWNjZXNzZWQgYnkgY2FsbGluZyBgc2hpZnROZXh0TGluZWAuXG4gICAgdmFyIHJlbWFpbmluZ0xpbmVzID0gYUdlbmVyYXRlZENvZGUuc3BsaXQoUkVHRVhfTkVXTElORSk7XG4gICAgdmFyIHJlbWFpbmluZ0xpbmVzSW5kZXggPSAwO1xuICAgIHZhciBzaGlmdE5leHRMaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGluZUNvbnRlbnRzID0gZ2V0TmV4dExpbmUoKTtcbiAgICAgIC8vIFRoZSBsYXN0IGxpbmUgb2YgYSBmaWxlIG1pZ2h0IG5vdCBoYXZlIGEgbmV3bGluZS5cbiAgICAgIHZhciBuZXdMaW5lID0gZ2V0TmV4dExpbmUoKSB8fCBcIlwiO1xuICAgICAgcmV0dXJuIGxpbmVDb250ZW50cyArIG5ld0xpbmU7XG5cbiAgICAgIGZ1bmN0aW9uIGdldE5leHRMaW5lKCkge1xuICAgICAgICByZXR1cm4gcmVtYWluaW5nTGluZXNJbmRleCA8IHJlbWFpbmluZ0xpbmVzLmxlbmd0aCA/XG4gICAgICAgICAgICByZW1haW5pbmdMaW5lc1tyZW1haW5pbmdMaW5lc0luZGV4KytdIDogdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBXZSBuZWVkIHRvIHJlbWVtYmVyIHRoZSBwb3NpdGlvbiBvZiBcInJlbWFpbmluZ0xpbmVzXCJcbiAgICB2YXIgbGFzdEdlbmVyYXRlZExpbmUgPSAxLCBsYXN0R2VuZXJhdGVkQ29sdW1uID0gMDtcblxuICAgIC8vIFRoZSBnZW5lcmF0ZSBTb3VyY2VOb2RlcyB3ZSBuZWVkIGEgY29kZSByYW5nZS5cbiAgICAvLyBUbyBleHRyYWN0IGl0IGN1cnJlbnQgYW5kIGxhc3QgbWFwcGluZyBpcyB1c2VkLlxuICAgIC8vIEhlcmUgd2Ugc3RvcmUgdGhlIGxhc3QgbWFwcGluZy5cbiAgICB2YXIgbGFzdE1hcHBpbmcgPSBudWxsO1xuXG4gICAgYVNvdXJjZU1hcENvbnN1bWVyLmVhY2hNYXBwaW5nKGZ1bmN0aW9uIChtYXBwaW5nKSB7XG4gICAgICBpZiAobGFzdE1hcHBpbmcgIT09IG51bGwpIHtcbiAgICAgICAgLy8gV2UgYWRkIHRoZSBjb2RlIGZyb20gXCJsYXN0TWFwcGluZ1wiIHRvIFwibWFwcGluZ1wiOlxuICAgICAgICAvLyBGaXJzdCBjaGVjayBpZiB0aGVyZSBpcyBhIG5ldyBsaW5lIGluIGJldHdlZW4uXG4gICAgICAgIGlmIChsYXN0R2VuZXJhdGVkTGluZSA8IG1hcHBpbmcuZ2VuZXJhdGVkTGluZSkge1xuICAgICAgICAgIC8vIEFzc29jaWF0ZSBmaXJzdCBsaW5lIHdpdGggXCJsYXN0TWFwcGluZ1wiXG4gICAgICAgICAgYWRkTWFwcGluZ1dpdGhDb2RlKGxhc3RNYXBwaW5nLCBzaGlmdE5leHRMaW5lKCkpO1xuICAgICAgICAgIGxhc3RHZW5lcmF0ZWRMaW5lKys7XG4gICAgICAgICAgbGFzdEdlbmVyYXRlZENvbHVtbiA9IDA7XG4gICAgICAgICAgLy8gVGhlIHJlbWFpbmluZyBjb2RlIGlzIGFkZGVkIHdpdGhvdXQgbWFwcGluZ1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRoZXJlIGlzIG5vIG5ldyBsaW5lIGluIGJldHdlZW4uXG4gICAgICAgICAgLy8gQXNzb2NpYXRlIHRoZSBjb2RlIGJldHdlZW4gXCJsYXN0R2VuZXJhdGVkQ29sdW1uXCIgYW5kXG4gICAgICAgICAgLy8gXCJtYXBwaW5nLmdlbmVyYXRlZENvbHVtblwiIHdpdGggXCJsYXN0TWFwcGluZ1wiXG4gICAgICAgICAgdmFyIG5leHRMaW5lID0gcmVtYWluaW5nTGluZXNbcmVtYWluaW5nTGluZXNJbmRleF0gfHwgJyc7XG4gICAgICAgICAgdmFyIGNvZGUgPSBuZXh0TGluZS5zdWJzdHIoMCwgbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4gLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RHZW5lcmF0ZWRDb2x1bW4pO1xuICAgICAgICAgIHJlbWFpbmluZ0xpbmVzW3JlbWFpbmluZ0xpbmVzSW5kZXhdID0gbmV4dExpbmUuc3Vic3RyKG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0R2VuZXJhdGVkQ29sdW1uKTtcbiAgICAgICAgICBsYXN0R2VuZXJhdGVkQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG4gICAgICAgICAgYWRkTWFwcGluZ1dpdGhDb2RlKGxhc3RNYXBwaW5nLCBjb2RlKTtcbiAgICAgICAgICAvLyBObyBtb3JlIHJlbWFpbmluZyBjb2RlLCBjb250aW51ZVxuICAgICAgICAgIGxhc3RNYXBwaW5nID0gbWFwcGluZztcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFdlIGFkZCB0aGUgZ2VuZXJhdGVkIGNvZGUgdW50aWwgdGhlIGZpcnN0IG1hcHBpbmdcbiAgICAgIC8vIHRvIHRoZSBTb3VyY2VOb2RlIHdpdGhvdXQgYW55IG1hcHBpbmcuXG4gICAgICAvLyBFYWNoIGxpbmUgaXMgYWRkZWQgYXMgc2VwYXJhdGUgc3RyaW5nLlxuICAgICAgd2hpbGUgKGxhc3RHZW5lcmF0ZWRMaW5lIDwgbWFwcGluZy5nZW5lcmF0ZWRMaW5lKSB7XG4gICAgICAgIG5vZGUuYWRkKHNoaWZ0TmV4dExpbmUoKSk7XG4gICAgICAgIGxhc3RHZW5lcmF0ZWRMaW5lKys7XG4gICAgICB9XG4gICAgICBpZiAobGFzdEdlbmVyYXRlZENvbHVtbiA8IG1hcHBpbmcuZ2VuZXJhdGVkQ29sdW1uKSB7XG4gICAgICAgIHZhciBuZXh0TGluZSA9IHJlbWFpbmluZ0xpbmVzW3JlbWFpbmluZ0xpbmVzSW5kZXhdIHx8ICcnO1xuICAgICAgICBub2RlLmFkZChuZXh0TGluZS5zdWJzdHIoMCwgbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4pKTtcbiAgICAgICAgcmVtYWluaW5nTGluZXNbcmVtYWluaW5nTGluZXNJbmRleF0gPSBuZXh0TGluZS5zdWJzdHIobWFwcGluZy5nZW5lcmF0ZWRDb2x1bW4pO1xuICAgICAgICBsYXN0R2VuZXJhdGVkQ29sdW1uID0gbWFwcGluZy5nZW5lcmF0ZWRDb2x1bW47XG4gICAgICB9XG4gICAgICBsYXN0TWFwcGluZyA9IG1hcHBpbmc7XG4gICAgfSwgdGhpcyk7XG4gICAgLy8gV2UgaGF2ZSBwcm9jZXNzZWQgYWxsIG1hcHBpbmdzLlxuICAgIGlmIChyZW1haW5pbmdMaW5lc0luZGV4IDwgcmVtYWluaW5nTGluZXMubGVuZ3RoKSB7XG4gICAgICBpZiAobGFzdE1hcHBpbmcpIHtcbiAgICAgICAgLy8gQXNzb2NpYXRlIHRoZSByZW1haW5pbmcgY29kZSBpbiB0aGUgY3VycmVudCBsaW5lIHdpdGggXCJsYXN0TWFwcGluZ1wiXG4gICAgICAgIGFkZE1hcHBpbmdXaXRoQ29kZShsYXN0TWFwcGluZywgc2hpZnROZXh0TGluZSgpKTtcbiAgICAgIH1cbiAgICAgIC8vIGFuZCBhZGQgdGhlIHJlbWFpbmluZyBsaW5lcyB3aXRob3V0IGFueSBtYXBwaW5nXG4gICAgICBub2RlLmFkZChyZW1haW5pbmdMaW5lcy5zcGxpY2UocmVtYWluaW5nTGluZXNJbmRleCkuam9pbihcIlwiKSk7XG4gICAgfVxuXG4gICAgLy8gQ29weSBzb3VyY2VzQ29udGVudCBpbnRvIFNvdXJjZU5vZGVcbiAgICBhU291cmNlTWFwQ29uc3VtZXIuc291cmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChzb3VyY2VGaWxlKSB7XG4gICAgICB2YXIgY29udGVudCA9IGFTb3VyY2VNYXBDb25zdW1lci5zb3VyY2VDb250ZW50Rm9yKHNvdXJjZUZpbGUpO1xuICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoYVJlbGF0aXZlUGF0aCAhPSBudWxsKSB7XG4gICAgICAgICAgc291cmNlRmlsZSA9IHV0aWwuam9pbihhUmVsYXRpdmVQYXRoLCBzb3VyY2VGaWxlKTtcbiAgICAgICAgfVxuICAgICAgICBub2RlLnNldFNvdXJjZUNvbnRlbnQoc291cmNlRmlsZSwgY29udGVudCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbm9kZTtcblxuICAgIGZ1bmN0aW9uIGFkZE1hcHBpbmdXaXRoQ29kZShtYXBwaW5nLCBjb2RlKSB7XG4gICAgICBpZiAobWFwcGluZyA9PT0gbnVsbCB8fCBtYXBwaW5nLnNvdXJjZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vZGUuYWRkKGNvZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFSZWxhdGl2ZVBhdGhcbiAgICAgICAgICA/IHV0aWwuam9pbihhUmVsYXRpdmVQYXRoLCBtYXBwaW5nLnNvdXJjZSlcbiAgICAgICAgICA6IG1hcHBpbmcuc291cmNlO1xuICAgICAgICBub2RlLmFkZChuZXcgU291cmNlTm9kZShtYXBwaW5nLm9yaWdpbmFsTGluZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwcGluZy5vcmlnaW5hbENvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXBwaW5nLm5hbWUpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbi8qKlxuICogQWRkIGEgY2h1bmsgb2YgZ2VuZXJhdGVkIEpTIHRvIHRoaXMgc291cmNlIG5vZGUuXG4gKlxuICogQHBhcmFtIGFDaHVuayBBIHN0cmluZyBzbmlwcGV0IG9mIGdlbmVyYXRlZCBKUyBjb2RlLCBhbm90aGVyIGluc3RhbmNlIG9mXG4gKiAgICAgICAgU291cmNlTm9kZSwgb3IgYW4gYXJyYXkgd2hlcmUgZWFjaCBtZW1iZXIgaXMgb25lIG9mIHRob3NlIHRoaW5ncy5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gU291cmNlTm9kZV9hZGQoYUNodW5rKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGFDaHVuaykpIHtcbiAgICBhQ2h1bmsuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmspIHtcbiAgICAgIHRoaXMuYWRkKGNodW5rKTtcbiAgICB9LCB0aGlzKTtcbiAgfVxuICBlbHNlIGlmIChhQ2h1bmtbaXNTb3VyY2VOb2RlXSB8fCB0eXBlb2YgYUNodW5rID09PSBcInN0cmluZ1wiKSB7XG4gICAgaWYgKGFDaHVuaykge1xuICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGFDaHVuayk7XG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICBcIkV4cGVjdGVkIGEgU291cmNlTm9kZSwgc3RyaW5nLCBvciBhbiBhcnJheSBvZiBTb3VyY2VOb2RlcyBhbmQgc3RyaW5ncy4gR290IFwiICsgYUNodW5rXG4gICAgKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkIGEgY2h1bmsgb2YgZ2VuZXJhdGVkIEpTIHRvIHRoZSBiZWdpbm5pbmcgb2YgdGhpcyBzb3VyY2Ugbm9kZS5cbiAqXG4gKiBAcGFyYW0gYUNodW5rIEEgc3RyaW5nIHNuaXBwZXQgb2YgZ2VuZXJhdGVkIEpTIGNvZGUsIGFub3RoZXIgaW5zdGFuY2Ugb2ZcbiAqICAgICAgICBTb3VyY2VOb2RlLCBvciBhbiBhcnJheSB3aGVyZSBlYWNoIG1lbWJlciBpcyBvbmUgb2YgdGhvc2UgdGhpbmdzLlxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS5wcmVwZW5kID0gZnVuY3Rpb24gU291cmNlTm9kZV9wcmVwZW5kKGFDaHVuaykge1xuICBpZiAoQXJyYXkuaXNBcnJheShhQ2h1bmspKSB7XG4gICAgZm9yICh2YXIgaSA9IGFDaHVuay5sZW5ndGgtMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIHRoaXMucHJlcGVuZChhQ2h1bmtbaV0pO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmIChhQ2h1bmtbaXNTb3VyY2VOb2RlXSB8fCB0eXBlb2YgYUNodW5rID09PSBcInN0cmluZ1wiKSB7XG4gICAgdGhpcy5jaGlsZHJlbi51bnNoaWZ0KGFDaHVuayk7XG4gIH1cbiAgZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgIFwiRXhwZWN0ZWQgYSBTb3VyY2VOb2RlLCBzdHJpbmcsIG9yIGFuIGFycmF5IG9mIFNvdXJjZU5vZGVzIGFuZCBzdHJpbmdzLiBHb3QgXCIgKyBhQ2h1bmtcbiAgICApO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBXYWxrIG92ZXIgdGhlIHRyZWUgb2YgSlMgc25pcHBldHMgaW4gdGhpcyBub2RlIGFuZCBpdHMgY2hpbGRyZW4uIFRoZVxuICogd2Fsa2luZyBmdW5jdGlvbiBpcyBjYWxsZWQgb25jZSBmb3IgZWFjaCBzbmlwcGV0IG9mIEpTIGFuZCBpcyBwYXNzZWQgdGhhdFxuICogc25pcHBldCBhbmQgdGhlIGl0cyBvcmlnaW5hbCBhc3NvY2lhdGVkIHNvdXJjZSdzIGxpbmUvY29sdW1uIGxvY2F0aW9uLlxuICpcbiAqIEBwYXJhbSBhRm4gVGhlIHRyYXZlcnNhbCBmdW5jdGlvbi5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUud2FsayA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfd2FsayhhRm4pIHtcbiAgdmFyIGNodW5rO1xuICBmb3IgKHZhciBpID0gMCwgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNodW5rID0gdGhpcy5jaGlsZHJlbltpXTtcbiAgICBpZiAoY2h1bmtbaXNTb3VyY2VOb2RlXSkge1xuICAgICAgY2h1bmsud2FsayhhRm4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGlmIChjaHVuayAhPT0gJycpIHtcbiAgICAgICAgYUZuKGNodW5rLCB7IHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICBsaW5lOiB0aGlzLmxpbmUsXG4gICAgICAgICAgICAgICAgICAgICBjb2x1bW46IHRoaXMuY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLyoqXG4gKiBMaWtlIGBTdHJpbmcucHJvdG90eXBlLmpvaW5gIGV4Y2VwdCBmb3IgU291cmNlTm9kZXMuIEluc2VydHMgYGFTdHJgIGJldHdlZW5cbiAqIGVhY2ggb2YgYHRoaXMuY2hpbGRyZW5gLlxuICpcbiAqIEBwYXJhbSBhU2VwIFRoZSBzZXBhcmF0b3IuXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLmpvaW4gPSBmdW5jdGlvbiBTb3VyY2VOb2RlX2pvaW4oYVNlcCkge1xuICB2YXIgbmV3Q2hpbGRyZW47XG4gIHZhciBpO1xuICB2YXIgbGVuID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7XG4gIGlmIChsZW4gPiAwKSB7XG4gICAgbmV3Q2hpbGRyZW4gPSBbXTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuLTE7IGkrKykge1xuICAgICAgbmV3Q2hpbGRyZW4ucHVzaCh0aGlzLmNoaWxkcmVuW2ldKTtcbiAgICAgIG5ld0NoaWxkcmVuLnB1c2goYVNlcCk7XG4gICAgfVxuICAgIG5ld0NoaWxkcmVuLnB1c2godGhpcy5jaGlsZHJlbltpXSk7XG4gICAgdGhpcy5jaGlsZHJlbiA9IG5ld0NoaWxkcmVuO1xuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBDYWxsIFN0cmluZy5wcm90b3R5cGUucmVwbGFjZSBvbiB0aGUgdmVyeSByaWdodC1tb3N0IHNvdXJjZSBzbmlwcGV0LiBVc2VmdWxcbiAqIGZvciB0cmltbWluZyB3aGl0ZXNwYWNlIGZyb20gdGhlIGVuZCBvZiBhIHNvdXJjZSBub2RlLCBldGMuXG4gKlxuICogQHBhcmFtIGFQYXR0ZXJuIFRoZSBwYXR0ZXJuIHRvIHJlcGxhY2UuXG4gKiBAcGFyYW0gYVJlcGxhY2VtZW50IFRoZSB0aGluZyB0byByZXBsYWNlIHRoZSBwYXR0ZXJuIHdpdGguXG4gKi9cblNvdXJjZU5vZGUucHJvdG90eXBlLnJlcGxhY2VSaWdodCA9IGZ1bmN0aW9uIFNvdXJjZU5vZGVfcmVwbGFjZVJpZ2h0KGFQYXR0ZXJuLCBhUmVwbGFjZW1lbnQpIHtcbiAgdmFyIGxhc3RDaGlsZCA9IHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgaWYgKGxhc3RDaGlsZFtpc1NvdXJjZU5vZGVdKSB7XG4gICAgbGFzdENoaWxkLnJlcGxhY2VSaWdodChhUGF0dGVybiwgYVJlcGxhY2VtZW50KTtcbiAgfVxuICBlbHNlIGlmICh0eXBlb2YgbGFzdENoaWxkID09PSAnc3RyaW5nJykge1xuICAgIHRoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxXSA9IGxhc3RDaGlsZC5yZXBsYWNlKGFQYXR0ZXJuLCBhUmVwbGFjZW1lbnQpO1xuICB9XG4gIGVsc2Uge1xuICAgIHRoaXMuY2hpbGRyZW4ucHVzaCgnJy5yZXBsYWNlKGFQYXR0ZXJuLCBhUmVwbGFjZW1lbnQpKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogU2V0IHRoZSBzb3VyY2UgY29udGVudCBmb3IgYSBzb3VyY2UgZmlsZS4gVGhpcyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBTb3VyY2VNYXBHZW5lcmF0b3JcbiAqIGluIHRoZSBzb3VyY2VzQ29udGVudCBmaWVsZC5cbiAqXG4gKiBAcGFyYW0gYVNvdXJjZUZpbGUgVGhlIGZpbGVuYW1lIG9mIHRoZSBzb3VyY2UgZmlsZVxuICogQHBhcmFtIGFTb3VyY2VDb250ZW50IFRoZSBjb250ZW50IG9mIHRoZSBzb3VyY2UgZmlsZVxuICovXG5Tb3VyY2VOb2RlLnByb3RvdHlwZS5zZXRTb3VyY2VDb250ZW50ID1cbiAgZnVuY3Rpb24gU291cmNlTm9kZV9zZXRTb3VyY2VDb250ZW50KGFTb3VyY2VGaWxlLCBhU291cmNlQ29udGVudCkge1xuICAgIHRoaXMuc291cmNlQ29udGVudHNbdXRpbC50b1NldFN0cmluZyhhU291cmNlRmlsZSldID0gYVNvdXJjZUNvbnRlbnQ7XG4gIH07XG5cbi8qKlxuICogV2FsayBvdmVyIHRoZSB0cmVlIG9mIFNvdXJjZU5vZGVzLiBUaGUgd2Fsa2luZyBmdW5jdGlvbiBpcyBjYWxsZWQgZm9yIGVhY2hcbiAqIHNvdXJjZSBmaWxlIGNvbnRlbnQgYW5kIGlzIHBhc3NlZCB0aGUgZmlsZW5hbWUgYW5kIHNvdXJjZSBjb250ZW50LlxuICpcbiAqIEBwYXJhbSBhRm4gVGhlIHRyYXZlcnNhbCBmdW5jdGlvbi5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUud2Fsa1NvdXJjZUNvbnRlbnRzID1cbiAgZnVuY3Rpb24gU291cmNlTm9kZV93YWxrU291cmNlQ29udGVudHMoYUZuKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldW2lzU291cmNlTm9kZV0pIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbltpXS53YWxrU291cmNlQ29udGVudHMoYUZuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc291cmNlcyA9IE9iamVjdC5rZXlzKHRoaXMuc291cmNlQ29udGVudHMpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzb3VyY2VzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhRm4odXRpbC5mcm9tU2V0U3RyaW5nKHNvdXJjZXNbaV0pLCB0aGlzLnNvdXJjZUNvbnRlbnRzW3NvdXJjZXNbaV1dKTtcbiAgICB9XG4gIH07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBzb3VyY2Ugbm9kZS4gV2Fsa3Mgb3ZlciB0aGUgdHJlZVxuICogYW5kIGNvbmNhdGVuYXRlcyBhbGwgdGhlIHZhcmlvdXMgc25pcHBldHMgdG9nZXRoZXIgdG8gb25lIHN0cmluZy5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiBTb3VyY2VOb2RlX3RvU3RyaW5nKCkge1xuICB2YXIgc3RyID0gXCJcIjtcbiAgdGhpcy53YWxrKGZ1bmN0aW9uIChjaHVuaykge1xuICAgIHN0ciArPSBjaHVuaztcbiAgfSk7XG4gIHJldHVybiBzdHI7XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHNvdXJjZSBub2RlIGFsb25nIHdpdGggYSBzb3VyY2VcbiAqIG1hcC5cbiAqL1xuU291cmNlTm9kZS5wcm90b3R5cGUudG9TdHJpbmdXaXRoU291cmNlTWFwID0gZnVuY3Rpb24gU291cmNlTm9kZV90b1N0cmluZ1dpdGhTb3VyY2VNYXAoYUFyZ3MpIHtcbiAgdmFyIGdlbmVyYXRlZCA9IHtcbiAgICBjb2RlOiBcIlwiLFxuICAgIGxpbmU6IDEsXG4gICAgY29sdW1uOiAwXG4gIH07XG4gIHZhciBtYXAgPSBuZXcgU291cmNlTWFwR2VuZXJhdG9yKGFBcmdzKTtcbiAgdmFyIHNvdXJjZU1hcHBpbmdBY3RpdmUgPSBmYWxzZTtcbiAgdmFyIGxhc3RPcmlnaW5hbFNvdXJjZSA9IG51bGw7XG4gIHZhciBsYXN0T3JpZ2luYWxMaW5lID0gbnVsbDtcbiAgdmFyIGxhc3RPcmlnaW5hbENvbHVtbiA9IG51bGw7XG4gIHZhciBsYXN0T3JpZ2luYWxOYW1lID0gbnVsbDtcbiAgdGhpcy53YWxrKGZ1bmN0aW9uIChjaHVuaywgb3JpZ2luYWwpIHtcbiAgICBnZW5lcmF0ZWQuY29kZSArPSBjaHVuaztcbiAgICBpZiAob3JpZ2luYWwuc291cmNlICE9PSBudWxsXG4gICAgICAgICYmIG9yaWdpbmFsLmxpbmUgIT09IG51bGxcbiAgICAgICAgJiYgb3JpZ2luYWwuY29sdW1uICE9PSBudWxsKSB7XG4gICAgICBpZihsYXN0T3JpZ2luYWxTb3VyY2UgIT09IG9yaWdpbmFsLnNvdXJjZVxuICAgICAgICAgfHwgbGFzdE9yaWdpbmFsTGluZSAhPT0gb3JpZ2luYWwubGluZVxuICAgICAgICAgfHwgbGFzdE9yaWdpbmFsQ29sdW1uICE9PSBvcmlnaW5hbC5jb2x1bW5cbiAgICAgICAgIHx8IGxhc3RPcmlnaW5hbE5hbWUgIT09IG9yaWdpbmFsLm5hbWUpIHtcbiAgICAgICAgbWFwLmFkZE1hcHBpbmcoe1xuICAgICAgICAgIHNvdXJjZTogb3JpZ2luYWwuc291cmNlLFxuICAgICAgICAgIG9yaWdpbmFsOiB7XG4gICAgICAgICAgICBsaW5lOiBvcmlnaW5hbC5saW5lLFxuICAgICAgICAgICAgY29sdW1uOiBvcmlnaW5hbC5jb2x1bW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIGdlbmVyYXRlZDoge1xuICAgICAgICAgICAgbGluZTogZ2VuZXJhdGVkLmxpbmUsXG4gICAgICAgICAgICBjb2x1bW46IGdlbmVyYXRlZC5jb2x1bW5cbiAgICAgICAgICB9LFxuICAgICAgICAgIG5hbWU6IG9yaWdpbmFsLm5hbWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBsYXN0T3JpZ2luYWxTb3VyY2UgPSBvcmlnaW5hbC5zb3VyY2U7XG4gICAgICBsYXN0T3JpZ2luYWxMaW5lID0gb3JpZ2luYWwubGluZTtcbiAgICAgIGxhc3RPcmlnaW5hbENvbHVtbiA9IG9yaWdpbmFsLmNvbHVtbjtcbiAgICAgIGxhc3RPcmlnaW5hbE5hbWUgPSBvcmlnaW5hbC5uYW1lO1xuICAgICAgc291cmNlTWFwcGluZ0FjdGl2ZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmIChzb3VyY2VNYXBwaW5nQWN0aXZlKSB7XG4gICAgICBtYXAuYWRkTWFwcGluZyh7XG4gICAgICAgIGdlbmVyYXRlZDoge1xuICAgICAgICAgIGxpbmU6IGdlbmVyYXRlZC5saW5lLFxuICAgICAgICAgIGNvbHVtbjogZ2VuZXJhdGVkLmNvbHVtblxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGxhc3RPcmlnaW5hbFNvdXJjZSA9IG51bGw7XG4gICAgICBzb3VyY2VNYXBwaW5nQWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICAgIGZvciAodmFyIGlkeCA9IDAsIGxlbmd0aCA9IGNodW5rLmxlbmd0aDsgaWR4IDwgbGVuZ3RoOyBpZHgrKykge1xuICAgICAgaWYgKGNodW5rLmNoYXJDb2RlQXQoaWR4KSA9PT0gTkVXTElORV9DT0RFKSB7XG4gICAgICAgIGdlbmVyYXRlZC5saW5lKys7XG4gICAgICAgIGdlbmVyYXRlZC5jb2x1bW4gPSAwO1xuICAgICAgICAvLyBNYXBwaW5ncyBlbmQgYXQgZW9sXG4gICAgICAgIGlmIChpZHggKyAxID09PSBsZW5ndGgpIHtcbiAgICAgICAgICBsYXN0T3JpZ2luYWxTb3VyY2UgPSBudWxsO1xuICAgICAgICAgIHNvdXJjZU1hcHBpbmdBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChzb3VyY2VNYXBwaW5nQWN0aXZlKSB7XG4gICAgICAgICAgbWFwLmFkZE1hcHBpbmcoe1xuICAgICAgICAgICAgc291cmNlOiBvcmlnaW5hbC5zb3VyY2UsXG4gICAgICAgICAgICBvcmlnaW5hbDoge1xuICAgICAgICAgICAgICBsaW5lOiBvcmlnaW5hbC5saW5lLFxuICAgICAgICAgICAgICBjb2x1bW46IG9yaWdpbmFsLmNvbHVtblxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdlbmVyYXRlZDoge1xuICAgICAgICAgICAgICBsaW5lOiBnZW5lcmF0ZWQubGluZSxcbiAgICAgICAgICAgICAgY29sdW1uOiBnZW5lcmF0ZWQuY29sdW1uXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZTogb3JpZ2luYWwubmFtZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBnZW5lcmF0ZWQuY29sdW1uKys7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgdGhpcy53YWxrU291cmNlQ29udGVudHMoZnVuY3Rpb24gKHNvdXJjZUZpbGUsIHNvdXJjZUNvbnRlbnQpIHtcbiAgICBtYXAuc2V0U291cmNlQ29udGVudChzb3VyY2VGaWxlLCBzb3VyY2VDb250ZW50KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgY29kZTogZ2VuZXJhdGVkLmNvZGUsIG1hcDogbWFwIH07XG59O1xuXG5leHBvcnRzLlNvdXJjZU5vZGUgPSBTb3VyY2VOb2RlO1xuIiwiLyogLSotIE1vZGU6IGpzOyBqcy1pbmRlbnQtbGV2ZWw6IDI7IC0qLSAqL1xuLypcbiAqIENvcHlyaWdodCAyMDExIE1vemlsbGEgRm91bmRhdGlvbiBhbmQgY29udHJpYnV0b3JzXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBsaWNlbnNlLiBTZWUgTElDRU5TRSBvcjpcbiAqIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9CU0QtMy1DbGF1c2VcbiAqL1xuXG4vKipcbiAqIFRoaXMgaXMgYSBoZWxwZXIgZnVuY3Rpb24gZm9yIGdldHRpbmcgdmFsdWVzIGZyb20gcGFyYW1ldGVyL29wdGlvbnNcbiAqIG9iamVjdHMuXG4gKlxuICogQHBhcmFtIGFyZ3MgVGhlIG9iamVjdCB3ZSBhcmUgZXh0cmFjdGluZyB2YWx1ZXMgZnJvbVxuICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHByb3BlcnR5IHdlIGFyZSBnZXR0aW5nLlxuICogQHBhcmFtIGRlZmF1bHRWYWx1ZSBBbiBvcHRpb25hbCB2YWx1ZSB0byByZXR1cm4gaWYgdGhlIHByb3BlcnR5IGlzIG1pc3NpbmdcbiAqIGZyb20gdGhlIG9iamVjdC4gSWYgdGhpcyBpcyBub3Qgc3BlY2lmaWVkIGFuZCB0aGUgcHJvcGVydHkgaXMgbWlzc2luZywgYW5cbiAqIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICovXG5mdW5jdGlvbiBnZXRBcmcoYUFyZ3MsIGFOYW1lLCBhRGVmYXVsdFZhbHVlKSB7XG4gIGlmIChhTmFtZSBpbiBhQXJncykge1xuICAgIHJldHVybiBhQXJnc1thTmFtZV07XG4gIH0gZWxzZSBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMykge1xuICAgIHJldHVybiBhRGVmYXVsdFZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignXCInICsgYU5hbWUgKyAnXCIgaXMgYSByZXF1aXJlZCBhcmd1bWVudC4nKTtcbiAgfVxufVxuZXhwb3J0cy5nZXRBcmcgPSBnZXRBcmc7XG5cbnZhciB1cmxSZWdleHAgPSAvXig/OihbXFx3K1xcLS5dKyk6KT9cXC9cXC8oPzooXFx3KzpcXHcrKUApPyhbXFx3Li1dKikoPzo6KFxcZCspKT8oLiopJC87XG52YXIgZGF0YVVybFJlZ2V4cCA9IC9eZGF0YTouK1xcLC4rJC87XG5cbmZ1bmN0aW9uIHVybFBhcnNlKGFVcmwpIHtcbiAgdmFyIG1hdGNoID0gYVVybC5tYXRjaCh1cmxSZWdleHApO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzY2hlbWU6IG1hdGNoWzFdLFxuICAgIGF1dGg6IG1hdGNoWzJdLFxuICAgIGhvc3Q6IG1hdGNoWzNdLFxuICAgIHBvcnQ6IG1hdGNoWzRdLFxuICAgIHBhdGg6IG1hdGNoWzVdXG4gIH07XG59XG5leHBvcnRzLnVybFBhcnNlID0gdXJsUGFyc2U7XG5cbmZ1bmN0aW9uIHVybEdlbmVyYXRlKGFQYXJzZWRVcmwpIHtcbiAgdmFyIHVybCA9ICcnO1xuICBpZiAoYVBhcnNlZFVybC5zY2hlbWUpIHtcbiAgICB1cmwgKz0gYVBhcnNlZFVybC5zY2hlbWUgKyAnOic7XG4gIH1cbiAgdXJsICs9ICcvLyc7XG4gIGlmIChhUGFyc2VkVXJsLmF1dGgpIHtcbiAgICB1cmwgKz0gYVBhcnNlZFVybC5hdXRoICsgJ0AnO1xuICB9XG4gIGlmIChhUGFyc2VkVXJsLmhvc3QpIHtcbiAgICB1cmwgKz0gYVBhcnNlZFVybC5ob3N0O1xuICB9XG4gIGlmIChhUGFyc2VkVXJsLnBvcnQpIHtcbiAgICB1cmwgKz0gXCI6XCIgKyBhUGFyc2VkVXJsLnBvcnRcbiAgfVxuICBpZiAoYVBhcnNlZFVybC5wYXRoKSB7XG4gICAgdXJsICs9IGFQYXJzZWRVcmwucGF0aDtcbiAgfVxuICByZXR1cm4gdXJsO1xufVxuZXhwb3J0cy51cmxHZW5lcmF0ZSA9IHVybEdlbmVyYXRlO1xuXG4vKipcbiAqIE5vcm1hbGl6ZXMgYSBwYXRoLCBvciB0aGUgcGF0aCBwb3J0aW9uIG9mIGEgVVJMOlxuICpcbiAqIC0gUmVwbGFjZXMgY29uc2VjdXRpdmUgc2xhc2hlcyB3aXRoIG9uZSBzbGFzaC5cbiAqIC0gUmVtb3ZlcyB1bm5lY2Vzc2FyeSAnLicgcGFydHMuXG4gKiAtIFJlbW92ZXMgdW5uZWNlc3NhcnkgJzxkaXI+Ly4uJyBwYXJ0cy5cbiAqXG4gKiBCYXNlZCBvbiBjb2RlIGluIHRoZSBOb2RlLmpzICdwYXRoJyBjb3JlIG1vZHVsZS5cbiAqXG4gKiBAcGFyYW0gYVBhdGggVGhlIHBhdGggb3IgdXJsIHRvIG5vcm1hbGl6ZS5cbiAqL1xuZnVuY3Rpb24gbm9ybWFsaXplKGFQYXRoKSB7XG4gIHZhciBwYXRoID0gYVBhdGg7XG4gIHZhciB1cmwgPSB1cmxQYXJzZShhUGF0aCk7XG4gIGlmICh1cmwpIHtcbiAgICBpZiAoIXVybC5wYXRoKSB7XG4gICAgICByZXR1cm4gYVBhdGg7XG4gICAgfVxuICAgIHBhdGggPSB1cmwucGF0aDtcbiAgfVxuICB2YXIgaXNBYnNvbHV0ZSA9IGV4cG9ydHMuaXNBYnNvbHV0ZShwYXRoKTtcblxuICB2YXIgcGFydHMgPSBwYXRoLnNwbGl0KC9cXC8rLyk7XG4gIGZvciAodmFyIHBhcnQsIHVwID0gMCwgaSA9IHBhcnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgcGFydCA9IHBhcnRzW2ldO1xuICAgIGlmIChwYXJ0ID09PSAnLicpIHtcbiAgICAgIHBhcnRzLnNwbGljZShpLCAxKTtcbiAgICB9IGVsc2UgaWYgKHBhcnQgPT09ICcuLicpIHtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCA+IDApIHtcbiAgICAgIGlmIChwYXJ0ID09PSAnJykge1xuICAgICAgICAvLyBUaGUgZmlyc3QgcGFydCBpcyBibGFuayBpZiB0aGUgcGF0aCBpcyBhYnNvbHV0ZS4gVHJ5aW5nIHRvIGdvXG4gICAgICAgIC8vIGFib3ZlIHRoZSByb290IGlzIGEgbm8tb3AuIFRoZXJlZm9yZSB3ZSBjYW4gcmVtb3ZlIGFsbCAnLi4nIHBhcnRzXG4gICAgICAgIC8vIGRpcmVjdGx5IGFmdGVyIHRoZSByb290LlxuICAgICAgICBwYXJ0cy5zcGxpY2UoaSArIDEsIHVwKTtcbiAgICAgICAgdXAgPSAwO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFydHMuc3BsaWNlKGksIDIpO1xuICAgICAgICB1cC0tO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwYXRoID0gcGFydHMuam9pbignLycpO1xuXG4gIGlmIChwYXRoID09PSAnJykge1xuICAgIHBhdGggPSBpc0Fic29sdXRlID8gJy8nIDogJy4nO1xuICB9XG5cbiAgaWYgKHVybCkge1xuICAgIHVybC5wYXRoID0gcGF0aDtcbiAgICByZXR1cm4gdXJsR2VuZXJhdGUodXJsKTtcbiAgfVxuICByZXR1cm4gcGF0aDtcbn1cbmV4cG9ydHMubm9ybWFsaXplID0gbm9ybWFsaXplO1xuXG4vKipcbiAqIEpvaW5zIHR3byBwYXRocy9VUkxzLlxuICpcbiAqIEBwYXJhbSBhUm9vdCBUaGUgcm9vdCBwYXRoIG9yIFVSTC5cbiAqIEBwYXJhbSBhUGF0aCBUaGUgcGF0aCBvciBVUkwgdG8gYmUgam9pbmVkIHdpdGggdGhlIHJvb3QuXG4gKlxuICogLSBJZiBhUGF0aCBpcyBhIFVSTCBvciBhIGRhdGEgVVJJLCBhUGF0aCBpcyByZXR1cm5lZCwgdW5sZXNzIGFQYXRoIGlzIGFcbiAqICAgc2NoZW1lLXJlbGF0aXZlIFVSTDogVGhlbiB0aGUgc2NoZW1lIG9mIGFSb290LCBpZiBhbnksIGlzIHByZXBlbmRlZFxuICogICBmaXJzdC5cbiAqIC0gT3RoZXJ3aXNlIGFQYXRoIGlzIGEgcGF0aC4gSWYgYVJvb3QgaXMgYSBVUkwsIHRoZW4gaXRzIHBhdGggcG9ydGlvblxuICogICBpcyB1cGRhdGVkIHdpdGggdGhlIHJlc3VsdCBhbmQgYVJvb3QgaXMgcmV0dXJuZWQuIE90aGVyd2lzZSB0aGUgcmVzdWx0XG4gKiAgIGlzIHJldHVybmVkLlxuICogICAtIElmIGFQYXRoIGlzIGFic29sdXRlLCB0aGUgcmVzdWx0IGlzIGFQYXRoLlxuICogICAtIE90aGVyd2lzZSB0aGUgdHdvIHBhdGhzIGFyZSBqb2luZWQgd2l0aCBhIHNsYXNoLlxuICogLSBKb2luaW5nIGZvciBleGFtcGxlICdodHRwOi8vJyBhbmQgJ3d3dy5leGFtcGxlLmNvbScgaXMgYWxzbyBzdXBwb3J0ZWQuXG4gKi9cbmZ1bmN0aW9uIGpvaW4oYVJvb3QsIGFQYXRoKSB7XG4gIGlmIChhUm9vdCA9PT0gXCJcIikge1xuICAgIGFSb290ID0gXCIuXCI7XG4gIH1cbiAgaWYgKGFQYXRoID09PSBcIlwiKSB7XG4gICAgYVBhdGggPSBcIi5cIjtcbiAgfVxuICB2YXIgYVBhdGhVcmwgPSB1cmxQYXJzZShhUGF0aCk7XG4gIHZhciBhUm9vdFVybCA9IHVybFBhcnNlKGFSb290KTtcbiAgaWYgKGFSb290VXJsKSB7XG4gICAgYVJvb3QgPSBhUm9vdFVybC5wYXRoIHx8ICcvJztcbiAgfVxuXG4gIC8vIGBqb2luKGZvbywgJy8vd3d3LmV4YW1wbGUub3JnJylgXG4gIGlmIChhUGF0aFVybCAmJiAhYVBhdGhVcmwuc2NoZW1lKSB7XG4gICAgaWYgKGFSb290VXJsKSB7XG4gICAgICBhUGF0aFVybC5zY2hlbWUgPSBhUm9vdFVybC5zY2hlbWU7XG4gICAgfVxuICAgIHJldHVybiB1cmxHZW5lcmF0ZShhUGF0aFVybCk7XG4gIH1cblxuICBpZiAoYVBhdGhVcmwgfHwgYVBhdGgubWF0Y2goZGF0YVVybFJlZ2V4cCkpIHtcbiAgICByZXR1cm4gYVBhdGg7XG4gIH1cblxuICAvLyBgam9pbignaHR0cDovLycsICd3d3cuZXhhbXBsZS5jb20nKWBcbiAgaWYgKGFSb290VXJsICYmICFhUm9vdFVybC5ob3N0ICYmICFhUm9vdFVybC5wYXRoKSB7XG4gICAgYVJvb3RVcmwuaG9zdCA9IGFQYXRoO1xuICAgIHJldHVybiB1cmxHZW5lcmF0ZShhUm9vdFVybCk7XG4gIH1cblxuICB2YXIgam9pbmVkID0gYVBhdGguY2hhckF0KDApID09PSAnLydcbiAgICA/IGFQYXRoXG4gICAgOiBub3JtYWxpemUoYVJvb3QucmVwbGFjZSgvXFwvKyQvLCAnJykgKyAnLycgKyBhUGF0aCk7XG5cbiAgaWYgKGFSb290VXJsKSB7XG4gICAgYVJvb3RVcmwucGF0aCA9IGpvaW5lZDtcbiAgICByZXR1cm4gdXJsR2VuZXJhdGUoYVJvb3RVcmwpO1xuICB9XG4gIHJldHVybiBqb2luZWQ7XG59XG5leHBvcnRzLmpvaW4gPSBqb2luO1xuXG5leHBvcnRzLmlzQWJzb2x1dGUgPSBmdW5jdGlvbiAoYVBhdGgpIHtcbiAgcmV0dXJuIGFQYXRoLmNoYXJBdCgwKSA9PT0gJy8nIHx8IHVybFJlZ2V4cC50ZXN0KGFQYXRoKTtcbn07XG5cbi8qKlxuICogTWFrZSBhIHBhdGggcmVsYXRpdmUgdG8gYSBVUkwgb3IgYW5vdGhlciBwYXRoLlxuICpcbiAqIEBwYXJhbSBhUm9vdCBUaGUgcm9vdCBwYXRoIG9yIFVSTC5cbiAqIEBwYXJhbSBhUGF0aCBUaGUgcGF0aCBvciBVUkwgdG8gYmUgbWFkZSByZWxhdGl2ZSB0byBhUm9vdC5cbiAqL1xuZnVuY3Rpb24gcmVsYXRpdmUoYVJvb3QsIGFQYXRoKSB7XG4gIGlmIChhUm9vdCA9PT0gXCJcIikge1xuICAgIGFSb290ID0gXCIuXCI7XG4gIH1cblxuICBhUm9vdCA9IGFSb290LnJlcGxhY2UoL1xcLyQvLCAnJyk7XG5cbiAgLy8gSXQgaXMgcG9zc2libGUgZm9yIHRoZSBwYXRoIHRvIGJlIGFib3ZlIHRoZSByb290LiBJbiB0aGlzIGNhc2UsIHNpbXBseVxuICAvLyBjaGVja2luZyB3aGV0aGVyIHRoZSByb290IGlzIGEgcHJlZml4IG9mIHRoZSBwYXRoIHdvbid0IHdvcmsuIEluc3RlYWQsIHdlXG4gIC8vIG5lZWQgdG8gcmVtb3ZlIGNvbXBvbmVudHMgZnJvbSB0aGUgcm9vdCBvbmUgYnkgb25lLCB1bnRpbCBlaXRoZXIgd2UgZmluZFxuICAvLyBhIHByZWZpeCB0aGF0IGZpdHMsIG9yIHdlIHJ1biBvdXQgb2YgY29tcG9uZW50cyB0byByZW1vdmUuXG4gIHZhciBsZXZlbCA9IDA7XG4gIHdoaWxlIChhUGF0aC5pbmRleE9mKGFSb290ICsgJy8nKSAhPT0gMCkge1xuICAgIHZhciBpbmRleCA9IGFSb290Lmxhc3RJbmRleE9mKFwiL1wiKTtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm4gYVBhdGg7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIG9ubHkgcGFydCBvZiB0aGUgcm9vdCB0aGF0IGlzIGxlZnQgaXMgdGhlIHNjaGVtZSAoaS5lLiBodHRwOi8vLFxuICAgIC8vIGZpbGU6Ly8vLCBldGMuKSwgb25lIG9yIG1vcmUgc2xhc2hlcyAoLyksIG9yIHNpbXBseSBub3RoaW5nIGF0IGFsbCwgd2VcbiAgICAvLyBoYXZlIGV4aGF1c3RlZCBhbGwgY29tcG9uZW50cywgc28gdGhlIHBhdGggaXMgbm90IHJlbGF0aXZlIHRvIHRoZSByb290LlxuICAgIGFSb290ID0gYVJvb3Quc2xpY2UoMCwgaW5kZXgpO1xuICAgIGlmIChhUm9vdC5tYXRjaCgvXihbXlxcL10rOlxcLyk/XFwvKiQvKSkge1xuICAgICAgcmV0dXJuIGFQYXRoO1xuICAgIH1cblxuICAgICsrbGV2ZWw7XG4gIH1cblxuICAvLyBNYWtlIHN1cmUgd2UgYWRkIGEgXCIuLi9cIiBmb3IgZWFjaCBjb21wb25lbnQgd2UgcmVtb3ZlZCBmcm9tIHRoZSByb290LlxuICByZXR1cm4gQXJyYXkobGV2ZWwgKyAxKS5qb2luKFwiLi4vXCIpICsgYVBhdGguc3Vic3RyKGFSb290Lmxlbmd0aCArIDEpO1xufVxuZXhwb3J0cy5yZWxhdGl2ZSA9IHJlbGF0aXZlO1xuXG52YXIgc3VwcG9ydHNOdWxsUHJvdG8gPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgb2JqID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuICEoJ19fcHJvdG9fXycgaW4gb2JqKTtcbn0oKSk7XG5cbmZ1bmN0aW9uIGlkZW50aXR5IChzKSB7XG4gIHJldHVybiBzO1xufVxuXG4vKipcbiAqIEJlY2F1c2UgYmVoYXZpb3IgZ29lcyB3YWNreSB3aGVuIHlvdSBzZXQgYF9fcHJvdG9fX2Agb24gb2JqZWN0cywgd2VcbiAqIGhhdmUgdG8gcHJlZml4IGFsbCB0aGUgc3RyaW5ncyBpbiBvdXIgc2V0IHdpdGggYW4gYXJiaXRyYXJ5IGNoYXJhY3Rlci5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc291cmNlLW1hcC9wdWxsLzMxIGFuZFxuICogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvc291cmNlLW1hcC9pc3N1ZXMvMzBcbiAqXG4gKiBAcGFyYW0gU3RyaW5nIGFTdHJcbiAqL1xuZnVuY3Rpb24gdG9TZXRTdHJpbmcoYVN0cikge1xuICBpZiAoaXNQcm90b1N0cmluZyhhU3RyKSkge1xuICAgIHJldHVybiAnJCcgKyBhU3RyO1xuICB9XG5cbiAgcmV0dXJuIGFTdHI7XG59XG5leHBvcnRzLnRvU2V0U3RyaW5nID0gc3VwcG9ydHNOdWxsUHJvdG8gPyBpZGVudGl0eSA6IHRvU2V0U3RyaW5nO1xuXG5mdW5jdGlvbiBmcm9tU2V0U3RyaW5nKGFTdHIpIHtcbiAgaWYgKGlzUHJvdG9TdHJpbmcoYVN0cikpIHtcbiAgICByZXR1cm4gYVN0ci5zbGljZSgxKTtcbiAgfVxuXG4gIHJldHVybiBhU3RyO1xufVxuZXhwb3J0cy5mcm9tU2V0U3RyaW5nID0gc3VwcG9ydHNOdWxsUHJvdG8gPyBpZGVudGl0eSA6IGZyb21TZXRTdHJpbmc7XG5cbmZ1bmN0aW9uIGlzUHJvdG9TdHJpbmcocykge1xuICBpZiAoIXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgbGVuZ3RoID0gcy5sZW5ndGg7XG5cbiAgaWYgKGxlbmd0aCA8IDkgLyogXCJfX3Byb3RvX19cIi5sZW5ndGggKi8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAocy5jaGFyQ29kZUF0KGxlbmd0aCAtIDEpICE9PSA5NSAgLyogJ18nICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gMikgIT09IDk1ICAvKiAnXycgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSAzKSAhPT0gMTExIC8qICdvJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDQpICE9PSAxMTYgLyogJ3QnICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gNSkgIT09IDExMSAvKiAnbycgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA2KSAhPT0gMTE0IC8qICdyJyAqLyB8fFxuICAgICAgcy5jaGFyQ29kZUF0KGxlbmd0aCAtIDcpICE9PSAxMTIgLyogJ3AnICovIHx8XG4gICAgICBzLmNoYXJDb2RlQXQobGVuZ3RoIC0gOCkgIT09IDk1ICAvKiAnXycgKi8gfHxcbiAgICAgIHMuY2hhckNvZGVBdChsZW5ndGggLSA5KSAhPT0gOTUgIC8qICdfJyAqLykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSBsZW5ndGggLSAxMDsgaSA+PSAwOyBpLS0pIHtcbiAgICBpZiAocy5jaGFyQ29kZUF0KGkpICE9PSAzNiAvKiAnJCcgKi8pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBDb21wYXJhdG9yIGJldHdlZW4gdHdvIG1hcHBpbmdzIHdoZXJlIHRoZSBvcmlnaW5hbCBwb3NpdGlvbnMgYXJlIGNvbXBhcmVkLlxuICpcbiAqIE9wdGlvbmFsbHkgcGFzcyBpbiBgdHJ1ZWAgYXMgYG9ubHlDb21wYXJlR2VuZXJhdGVkYCB0byBjb25zaWRlciB0d29cbiAqIG1hcHBpbmdzIHdpdGggdGhlIHNhbWUgb3JpZ2luYWwgc291cmNlL2xpbmUvY29sdW1uLCBidXQgZGlmZmVyZW50IGdlbmVyYXRlZFxuICogbGluZSBhbmQgY29sdW1uIHRoZSBzYW1lLiBVc2VmdWwgd2hlbiBzZWFyY2hpbmcgZm9yIGEgbWFwcGluZyB3aXRoIGFcbiAqIHN0dWJiZWQgb3V0IG1hcHBpbmcuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zKG1hcHBpbmdBLCBtYXBwaW5nQiwgb25seUNvbXBhcmVPcmlnaW5hbCkge1xuICB2YXIgY21wID0gc3RyY21wKG1hcHBpbmdBLnNvdXJjZSwgbWFwcGluZ0Iuc291cmNlKTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbExpbmUgLSBtYXBwaW5nQi5vcmlnaW5hbExpbmU7XG4gIGlmIChjbXAgIT09IDApIHtcbiAgICByZXR1cm4gY21wO1xuICB9XG5cbiAgY21wID0gbWFwcGluZ0Eub3JpZ2luYWxDb2x1bW4gLSBtYXBwaW5nQi5vcmlnaW5hbENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCB8fCBvbmx5Q29tcGFyZU9yaWdpbmFsKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZENvbHVtbiAtIG1hcHBpbmdCLmdlbmVyYXRlZENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5nZW5lcmF0ZWRMaW5lIC0gbWFwcGluZ0IuZ2VuZXJhdGVkTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICByZXR1cm4gc3RyY21wKG1hcHBpbmdBLm5hbWUsIG1hcHBpbmdCLm5hbWUpO1xufVxuZXhwb3J0cy5jb21wYXJlQnlPcmlnaW5hbFBvc2l0aW9ucyA9IGNvbXBhcmVCeU9yaWdpbmFsUG9zaXRpb25zO1xuXG4vKipcbiAqIENvbXBhcmF0b3IgYmV0d2VlbiB0d28gbWFwcGluZ3Mgd2l0aCBkZWZsYXRlZCBzb3VyY2UgYW5kIG5hbWUgaW5kaWNlcyB3aGVyZVxuICogdGhlIGdlbmVyYXRlZCBwb3NpdGlvbnMgYXJlIGNvbXBhcmVkLlxuICpcbiAqIE9wdGlvbmFsbHkgcGFzcyBpbiBgdHJ1ZWAgYXMgYG9ubHlDb21wYXJlR2VuZXJhdGVkYCB0byBjb25zaWRlciB0d29cbiAqIG1hcHBpbmdzIHdpdGggdGhlIHNhbWUgZ2VuZXJhdGVkIGxpbmUgYW5kIGNvbHVtbiwgYnV0IGRpZmZlcmVudFxuICogc291cmNlL25hbWUvb3JpZ2luYWwgbGluZSBhbmQgY29sdW1uIHRoZSBzYW1lLiBVc2VmdWwgd2hlbiBzZWFyY2hpbmcgZm9yIGFcbiAqIG1hcHBpbmcgd2l0aCBhIHN0dWJiZWQgb3V0IG1hcHBpbmcuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkKG1hcHBpbmdBLCBtYXBwaW5nQiwgb25seUNvbXBhcmVHZW5lcmF0ZWQpIHtcbiAgdmFyIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZExpbmUgLSBtYXBwaW5nQi5nZW5lcmF0ZWRMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZENvbHVtbiAtIG1hcHBpbmdCLmdlbmVyYXRlZENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCB8fCBvbmx5Q29tcGFyZUdlbmVyYXRlZCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBzdHJjbXAobWFwcGluZ0Euc291cmNlLCBtYXBwaW5nQi5zb3VyY2UpO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsTGluZSAtIG1hcHBpbmdCLm9yaWdpbmFsTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbENvbHVtbiAtIG1hcHBpbmdCLm9yaWdpbmFsQ29sdW1uO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIHJldHVybiBzdHJjbXAobWFwcGluZ0EubmFtZSwgbWFwcGluZ0IubmFtZSk7XG59XG5leHBvcnRzLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0RlZmxhdGVkID0gY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zRGVmbGF0ZWQ7XG5cbmZ1bmN0aW9uIHN0cmNtcChhU3RyMSwgYVN0cjIpIHtcbiAgaWYgKGFTdHIxID09PSBhU3RyMikge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgaWYgKGFTdHIxID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDE7IC8vIGFTdHIyICE9PSBudWxsXG4gIH1cblxuICBpZiAoYVN0cjIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gLTE7IC8vIGFTdHIxICE9PSBudWxsXG4gIH1cblxuICBpZiAoYVN0cjEgPiBhU3RyMikge1xuICAgIHJldHVybiAxO1xuICB9XG5cbiAgcmV0dXJuIC0xO1xufVxuXG4vKipcbiAqIENvbXBhcmF0b3IgYmV0d2VlbiB0d28gbWFwcGluZ3Mgd2l0aCBpbmZsYXRlZCBzb3VyY2UgYW5kIG5hbWUgc3RyaW5ncyB3aGVyZVxuICogdGhlIGdlbmVyYXRlZCBwb3NpdGlvbnMgYXJlIGNvbXBhcmVkLlxuICovXG5mdW5jdGlvbiBjb21wYXJlQnlHZW5lcmF0ZWRQb3NpdGlvbnNJbmZsYXRlZChtYXBwaW5nQSwgbWFwcGluZ0IpIHtcbiAgdmFyIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZExpbmUgLSBtYXBwaW5nQi5nZW5lcmF0ZWRMaW5lO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLmdlbmVyYXRlZENvbHVtbiAtIG1hcHBpbmdCLmdlbmVyYXRlZENvbHVtbjtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBzdHJjbXAobWFwcGluZ0Euc291cmNlLCBtYXBwaW5nQi5zb3VyY2UpO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIGNtcCA9IG1hcHBpbmdBLm9yaWdpbmFsTGluZSAtIG1hcHBpbmdCLm9yaWdpbmFsTGluZTtcbiAgaWYgKGNtcCAhPT0gMCkge1xuICAgIHJldHVybiBjbXA7XG4gIH1cblxuICBjbXAgPSBtYXBwaW5nQS5vcmlnaW5hbENvbHVtbiAtIG1hcHBpbmdCLm9yaWdpbmFsQ29sdW1uO1xuICBpZiAoY21wICE9PSAwKSB7XG4gICAgcmV0dXJuIGNtcDtcbiAgfVxuXG4gIHJldHVybiBzdHJjbXAobWFwcGluZ0EubmFtZSwgbWFwcGluZ0IubmFtZSk7XG59XG5leHBvcnRzLmNvbXBhcmVCeUdlbmVyYXRlZFBvc2l0aW9uc0luZmxhdGVkID0gY29tcGFyZUJ5R2VuZXJhdGVkUG9zaXRpb25zSW5mbGF0ZWQ7XG5cbi8qKlxuICogU3RyaXAgYW55IEpTT04gWFNTSSBhdm9pZGFuY2UgcHJlZml4IGZyb20gdGhlIHN0cmluZyAoYXMgZG9jdW1lbnRlZFxuICogaW4gdGhlIHNvdXJjZSBtYXBzIHNwZWNpZmljYXRpb24pLCBhbmQgdGhlbiBwYXJzZSB0aGUgc3RyaW5nIGFzXG4gKiBKU09OLlxuICovXG5mdW5jdGlvbiBwYXJzZVNvdXJjZU1hcElucHV0KHN0cikge1xuICByZXR1cm4gSlNPTi5wYXJzZShzdHIucmVwbGFjZSgvXlxcKV19J1teXFxuXSpcXG4vLCAnJykpO1xufVxuZXhwb3J0cy5wYXJzZVNvdXJjZU1hcElucHV0ID0gcGFyc2VTb3VyY2VNYXBJbnB1dDtcblxuLyoqXG4gKiBDb21wdXRlIHRoZSBVUkwgb2YgYSBzb3VyY2UgZ2l2ZW4gdGhlIHRoZSBzb3VyY2Ugcm9vdCwgdGhlIHNvdXJjZSdzXG4gKiBVUkwsIGFuZCB0aGUgc291cmNlIG1hcCdzIFVSTC5cbiAqL1xuZnVuY3Rpb24gY29tcHV0ZVNvdXJjZVVSTChzb3VyY2VSb290LCBzb3VyY2VVUkwsIHNvdXJjZU1hcFVSTCkge1xuICBzb3VyY2VVUkwgPSBzb3VyY2VVUkwgfHwgJyc7XG5cbiAgaWYgKHNvdXJjZVJvb3QpIHtcbiAgICAvLyBUaGlzIGZvbGxvd3Mgd2hhdCBDaHJvbWUgZG9lcy5cbiAgICBpZiAoc291cmNlUm9vdFtzb3VyY2VSb290Lmxlbmd0aCAtIDFdICE9PSAnLycgJiYgc291cmNlVVJMWzBdICE9PSAnLycpIHtcbiAgICAgIHNvdXJjZVJvb3QgKz0gJy8nO1xuICAgIH1cbiAgICAvLyBUaGUgc3BlYyBzYXlzOlxuICAgIC8vICAgTGluZSA0OiBBbiBvcHRpb25hbCBzb3VyY2Ugcm9vdCwgdXNlZnVsIGZvciByZWxvY2F0aW5nIHNvdXJjZVxuICAgIC8vICAgZmlsZXMgb24gYSBzZXJ2ZXIgb3IgcmVtb3ZpbmcgcmVwZWF0ZWQgdmFsdWVzIGluIHRoZVxuICAgIC8vICAg4oCcc291cmNlc+KAnSBlbnRyeS4gIFRoaXMgdmFsdWUgaXMgcHJlcGVuZGVkIHRvIHRoZSBpbmRpdmlkdWFsXG4gICAgLy8gICBlbnRyaWVzIGluIHRoZSDigJxzb3VyY2XigJ0gZmllbGQuXG4gICAgc291cmNlVVJMID0gc291cmNlUm9vdCArIHNvdXJjZVVSTDtcbiAgfVxuXG4gIC8vIEhpc3RvcmljYWxseSwgU291cmNlTWFwQ29uc3VtZXIgZGlkIG5vdCB0YWtlIHRoZSBzb3VyY2VNYXBVUkwgYXNcbiAgLy8gYSBwYXJhbWV0ZXIuICBUaGlzIG1vZGUgaXMgc3RpbGwgc29tZXdoYXQgc3VwcG9ydGVkLCB3aGljaCBpcyB3aHlcbiAgLy8gdGhpcyBjb2RlIGJsb2NrIGlzIGNvbmRpdGlvbmFsLiAgSG93ZXZlciwgaXQncyBwcmVmZXJhYmxlIHRvIHBhc3NcbiAgLy8gdGhlIHNvdXJjZSBtYXAgVVJMIHRvIFNvdXJjZU1hcENvbnN1bWVyLCBzbyB0aGF0IHRoaXMgZnVuY3Rpb25cbiAgLy8gY2FuIGltcGxlbWVudCB0aGUgc291cmNlIFVSTCByZXNvbHV0aW9uIGFsZ29yaXRobSBhcyBvdXRsaW5lZCBpblxuICAvLyB0aGUgc3BlYy4gIFRoaXMgYmxvY2sgaXMgYmFzaWNhbGx5IHRoZSBlcXVpdmFsZW50IG9mOlxuICAvLyAgICBuZXcgVVJMKHNvdXJjZVVSTCwgc291cmNlTWFwVVJMKS50b1N0cmluZygpXG4gIC8vIC4uLiBleGNlcHQgaXQgYXZvaWRzIHVzaW5nIFVSTCwgd2hpY2ggd2Fzbid0IGF2YWlsYWJsZSBpbiB0aGVcbiAgLy8gb2xkZXIgcmVsZWFzZXMgb2Ygbm9kZSBzdGlsbCBzdXBwb3J0ZWQgYnkgdGhpcyBsaWJyYXJ5LlxuICAvL1xuICAvLyBUaGUgc3BlYyBzYXlzOlxuICAvLyAgIElmIHRoZSBzb3VyY2VzIGFyZSBub3QgYWJzb2x1dGUgVVJMcyBhZnRlciBwcmVwZW5kaW5nIG9mIHRoZVxuICAvLyAgIOKAnHNvdXJjZVJvb3TigJ0sIHRoZSBzb3VyY2VzIGFyZSByZXNvbHZlZCByZWxhdGl2ZSB0byB0aGVcbiAgLy8gICBTb3VyY2VNYXAgKGxpa2UgcmVzb2x2aW5nIHNjcmlwdCBzcmMgaW4gYSBodG1sIGRvY3VtZW50KS5cbiAgaWYgKHNvdXJjZU1hcFVSTCkge1xuICAgIHZhciBwYXJzZWQgPSB1cmxQYXJzZShzb3VyY2VNYXBVUkwpO1xuICAgIGlmICghcGFyc2VkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzb3VyY2VNYXBVUkwgY291bGQgbm90IGJlIHBhcnNlZFwiKTtcbiAgICB9XG4gICAgaWYgKHBhcnNlZC5wYXRoKSB7XG4gICAgICAvLyBTdHJpcCB0aGUgbGFzdCBwYXRoIGNvbXBvbmVudCwgYnV0IGtlZXAgdGhlIFwiL1wiLlxuICAgICAgdmFyIGluZGV4ID0gcGFyc2VkLnBhdGgubGFzdEluZGV4T2YoJy8nKTtcbiAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgIHBhcnNlZC5wYXRoID0gcGFyc2VkLnBhdGguc3Vic3RyaW5nKDAsIGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHNvdXJjZVVSTCA9IGpvaW4odXJsR2VuZXJhdGUocGFyc2VkKSwgc291cmNlVVJMKTtcbiAgfVxuXG4gIHJldHVybiBub3JtYWxpemUoc291cmNlVVJMKTtcbn1cbmV4cG9ydHMuY29tcHV0ZVNvdXJjZVVSTCA9IGNvbXB1dGVTb3VyY2VVUkw7XG4iLCIvKlxuICogQ29weXJpZ2h0IDIwMDktMjAxMSBNb3ppbGxhIEZvdW5kYXRpb24gYW5kIGNvbnRyaWJ1dG9yc1xuICogTGljZW5zZWQgdW5kZXIgdGhlIE5ldyBCU0QgbGljZW5zZS4gU2VlIExJQ0VOU0UudHh0IG9yOlxuICogaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL0JTRC0zLUNsYXVzZVxuICovXG5leHBvcnRzLlNvdXJjZU1hcEdlbmVyYXRvciA9IHJlcXVpcmUoJy4vbGliL3NvdXJjZS1tYXAtZ2VuZXJhdG9yJykuU291cmNlTWFwR2VuZXJhdG9yO1xuZXhwb3J0cy5Tb3VyY2VNYXBDb25zdW1lciA9IHJlcXVpcmUoJy4vbGliL3NvdXJjZS1tYXAtY29uc3VtZXInKS5Tb3VyY2VNYXBDb25zdW1lcjtcbmV4cG9ydHMuU291cmNlTm9kZSA9IHJlcXVpcmUoJy4vbGliL3NvdXJjZS1ub2RlJykuU291cmNlTm9kZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvY2Vzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9fNDY3X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX18zNDc2X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX182ODg0X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX185NTgyX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX181MzI3X187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX183ODM2X187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oODc3Nyk7XG4iLCIiXSwibmFtZXMiOlsiRXh0ZW5zaW9uQ29tcGlsZXIiLCJjb25maWciLCJwbHVnaW5PcHRpb25zIiwiY29tcGlsZXIiLCJ3ZWJwYWNrIiwiRXh0ZW5zaW9uUmVsb2FkZXJfMSIsImFwcGx5Iiwid2F0Y2giLCJlcnIiLCJzdGF0cyIsInRyZWF0RXJyb3JzIiwidG9TdHJpbmciLCJjb2xvcnMiLCJzdGFjayIsImRldGFpbHMiLCJleHBvcnRzIiwiYXJncyIsImFyZ3NfY29uc3RhbnRfMSIsInR5cGUiLCJldmVudHNfY29uc3RhbnRzXzEiLCJwYXlsb2FkIiwib3B0aW9uc19jb25zdGFudHNfMSIsInBvcnQiLCJtYW5pZmVzdCIsInJlbG9hZFBhZ2UiLCJvcHRQYXRoIiwid2VicGFja0NvbmZpZyIsImV2YWwiLCJtaW5pbWlzdCIsInByb2Nlc3MiLCJhcmd2Iiwic2xpY2UiLCJfIiwiX2EiLCJfX3Jlc3QiLCJFeHRlbnNpb25Db21waWxlcl8xIiwiZXhpdCIsImNvZGUiLCJFeHRlbnNpb25SZWxvYWRlckltcGwiLCJvcHRpb25zIiwiX29wdHMiLCJfY2h1bmtWZXJzaW9ucyIsIndlYnBhY2tfMSIsInNwbGl0IiwibWFqb3IiLCJwYXJzZUludCIsImNodW5rcyIsImJhY2tncm91bmQiLCJjb250ZW50U2NyaXB0IiwiZXh0ZW5zaW9uUGFnZSIsImNoYW5nZWRDaHVua3MiLCJjaHVuayIsIm9sZFZlcnNpb24iLCJuYW1lIiwiaGFzaCIsInB1c2giLCJjb250ZW50T3JCZ0NoYW5nZWQiLCJzb21lIiwiY29udGVudENoYW5nZWQiLCJiZ0NoYW5nZWQiLCJBcnJheSIsImlzQXJyYXkiLCJzY3JpcHQiLCJvbmx5UGFnZUNoYW5nZWQiLCJwYWdlQ2hhbmdlZCIsImRlZmF1bHRfb3B0aW9uc18xIiwiZW50cmllcyIsInBhcnNlZEVudHJpZXMiLCJlbnRyeSIsIm91dHB1dCIsIl9ldmVudEFQSSIsIkNvbXBpbGVyRXZlbnRzRmFjYWRlXzEiLCJfaW5qZWN0b3IiLCJfdHJpZ2dlcmVyIiwiYWZ0ZXJPcHRpbWl6ZUNodW5rcyIsImNvbXAiLCJhc3NldHMiLCJPYmplY3QiLCJhZnRlckVtaXQiLCJfd2hhdENoYW5nZWQiLCJfaXNXZWJwYWNrR1RvRVY1IiwibW9kZSIsImVudiIsIk5PREVfRU5WIiwiX3JlZ2lzdGVyUGx1Z2luIiwid2FybmluZ3NfMSIsImdldCIsIkFic3RyYWN0RXh0ZW5zaW9uUmVsb2FkZXJfMSIsIkhvdFJlbG9hZGVyU2VydmVyIiwiX3NlcnZlciIsIndzXzEiLCJvbiIsIndzIiwibXNnIiwidXNlckFnZW50IiwiaGVhZGVycyIsIl9zaWduRW1pdHRlciIsIlNpZ25FbWl0dGVyXzEiLCJkYXRhIiwiZmFtaWx5IiwiSlNPTiIsInBhcnNlIiwic2FmZVNpZ25DaGFuZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsIlNpZ25FbWl0dGVyIiwic2VydmVyIiwibWlub3IiLCJwYXRjaCIsIl9zYXRpc2ZpZXMiLCJmYXN0X3JlbG9hZGluZ19jb25zdGFudHNfMSIsInJlbG9hZENhbGxzIiwicmVsb2FkRGVib3VjaW5nRnJhbWUiLCJkZWJvdW5jZXIiLCJibG9ja2VyIiwiX3NhZmVTaWduQ2hhbmdlIiwiX3NldHVwU2FmZVNpZ25DaGFuZ2UiLCJyZXMiLCJyZWoiLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiX3NlbmRNc2ciLCJjbGllbnRzIiwiZm9yRWFjaCIsImNsaWVudCIsInJlYWR5U3RhdGUiLCJzZW5kIiwic3RyaW5naWZ5IiwiYnJvd3NlclZlcnNpb24iLCJ0YXJnZXRWZXJzaW9uIiwidmVyc2lvblBhaXJzIiwidmVyc2lvbiIsInRhcmdldCIsImNoYW5nZXNUcmlnZ2VyZXIiLCJIb3RSZWxvYWRlclNlcnZlcl8xIiwibGlzdGVuIiwic2lnbkNoYW5nZSIsImNoYW5nZXNfdHJpZ2dlcmVyXzEiLCJNZXNzYWdlIiwicmVmZXJlbmNlTnVtYmVyIiwibWVzc2FnZSIsImFkZGl0aW9uYWxEYXRhIiwiZ2V0UHJlZml4IiwicmVmTGluayIsInJlZmVyZW5jZV9kb2NzX2NvbnN0YW50c18xIiwibG9nX2NvbnN0YW50c18xIiwiTWVzc2FnZV8xIiwibWlkZGxld2FyZV9pbmplY3Rvcl8xIiwibWlkZGxld2FyZUluamVjdG9yIiwic291cmNlIiwic291cmNlRmFjdG9yeSIsInNvdXJjZXMiLCJ3ZWJwYWNrX3NvdXJjZXNfMSIsIm1hdGNoQmdPckNvbnRlbnRPclBhZ2UiLCJpbmNsdWRlcyIsImZyb20iLCJyZWR1Y2UiLCJwcmV2IiwiZmlsZXMiLCJlbnRyeVBvaW50IiwidGVzdCIsImZpbmFsU3JjIiwibWlkZGxlV2FyZVNvdXJjZUJ1aWxkZXIiLCJ0bXBsIiwid2VyX21pZGRsZXdhcmVfcmF3XzEiLCJXU0hvc3QiLCJSRUNPTk5FQ1RfSU5URVJWQUwiLCJtaWRkbGV3YXJlX2NvbmZpZ19jb25zdGFudHNfMSIsIlNPQ0tFVF9FUlJfQ09ERV9SRUYiLCJwb2x5ZmlsbFNvdXJjZSIsInJhd19sb2FkZXJfd2ViZXh0ZW5zaW9uX3BvbHlmaWxsXzEiLCJzaWduYWxzIiwiZGVib3VuY2VTaWduYWwiLCJkZWJvdWNpbmdGcmFtZSIsImNvbnRleHQiLCJmdW5jIiwiZmFzdFJlbG9hZEJsb2NrZXIiLCJtYXhDYWxscyIsIndhaXQiLCJjYWxscyIsImluV2FpdCIsImludGVydmFsIiwibG9nSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsInNldFRpbWVvdXQiLCJjbGVhckludGVydmFsIiwibG9nTGV2ZWwiLCJzZXRMb2dMZXZlbCIsImxldmVsIiwibG9nIiwiY29uc29sZSIsImluZm8iLCJ3YXJuIiwiZXJyb3IiLCJkZWJ1ZyIsImV4dHJhY3RFbnRyaWVzIiwid2VicGFja0VudHJ5IiwibWFuaWZlc3RQYXRoIiwid2VicGFja091dHB1dCIsIm1hbmlmZXN0SnNvbiIsImNvbnRlbnRfc2NyaXB0cyIsImZpbGVuYW1lIiwiRXJyb3IiLCJzY3JpcHRzIiwiVHlwZUVycm9yIiwiZXJyb3JzXzEiLCJiZ1NjcmlwdEZpbGVOYW1lcyIsInRvUmVtb3ZlIiwicmVwbGFjZSIsImJnV2VicGFja0VudHJ5Iiwia2V5cyIsImZpbmQiLCJlbnRyeU5hbWUiLCJiZ01hbmlmZXN0IiwiY29udGVudEVudHJpZXMiLCJtYXAiLCJqcyIsImNvbnRlbnRJdGVtIiwiZmlsdGVyIiwic2lnblJlbG9hZCIsInNpZ25SZWxvYWRlZCIsInNpZ25Mb2ciLCJBYnN0cmFjdEV4dGVuc2lvblJlbG9hZGVyIiwiQ29tcGlsZXJFdmVudHNGYWNhZGUiLCJfY29tcGlsZXIiLCJjYWxsIiwiaG9va3MiLCJjb21waWxhdGlvbiIsInRhcCIsImV4dGVuc2lvbk5hbWUiLCJTZXQiLCJhZnRlck9wdGltaXplQ2h1bmtBc3NldHMiLCJjaHVua3NBZnRlck9wdGltaXphdGlvbiIsInByb2Nlc3NBc3NldHMiLCJzdGFnZSIsIlBST0NFU1NfQVNTRVRTX1NUQUdFX0FOQUxZU0UiLCJhZGQiXSwic291cmNlUm9vdCI6IiJ9