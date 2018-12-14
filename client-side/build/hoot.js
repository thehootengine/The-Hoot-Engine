(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Hoot", [], factory);
	else if(typeof exports === 'object')
		exports["Hoot"] = factory();
	else
		root["Hoot"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./hoot.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///../node_modules/webpack/buildin/global.js");

/***/ }),

/***/ "./Cameras/index.js":
/*!**************************!*\
  !*** ./Cameras/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst Cameras = {\r\n    Camera2d: __webpack_require__(/*! ./modules/Camera2d */ \"./Cameras/modules/Camera2d.js\")\r\n};\r\n\r\nmodule.exports = Cameras;\n\n//# sourceURL=webpack:///./Cameras/index.js");

/***/ }),

/***/ "./Cameras/modules/Camera2d.js":
/*!*************************************!*\
  !*** ./Cameras/modules/Camera2d.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nclass Camera2d {\r\n    constructor(engine) {\r\n        this.engine = engine || null;\r\n        this.hasEngine = true;\r\n        if (this.engine === null) {\r\n            this.hasEngine = false;\r\n        }\r\n\r\n        this.perspective = {\r\n            x: 0,\r\n            y: 0,\r\n            width: 960,\r\n            height: 720\r\n        };\r\n\r\n        if (this.hasEngine) {\r\n            this.perspective.width = this.engine.getDisplay().getWidth();\r\n            this.perspective.height = this.engine.getDisplay().getHeight();\r\n        }\r\n\r\n        this.target = target;\r\n\r\n        this.rendered = new Hoot.Utils.List();\r\n    }\r\n\r\n    setTarget(target) {\r\n        if (!(target instanceof Hoot.GameObjects.Sprite)) {\r\n            return false;\r\n        }\r\n        this.target = target;\r\n    }\r\n\r\n    add(gameObject) {\r\n        if (!(gameObject instanceof Hoot.GameObjects)) {\r\n            return false;\r\n        }\r\n\r\n        this.rendered.add(gameObject);\r\n    }\r\n\r\n    tick() {\r\n\r\n    }\r\n\r\n    render() {\r\n\r\n    }\r\n}\r\n\r\nmodule.exports = Camera2d;\n\n//# sourceURL=webpack:///./Cameras/modules/Camera2d.js");

/***/ }),

/***/ "./DOM/Display.js":
/*!************************!*\
  !*** ./DOM/Display.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nclass Display {\r\n    constructor(name, engine, config) {\r\n        this.name = name;\r\n        this.events = new Hoot.Events(\"display-\" + this.name);\r\n\r\n        this.engine = null;\r\n        if (engine instanceof Hoot.Engine) {\r\n            this.engine = engine;\r\n        }\r\n\r\n        this.config = this._fixConfig(config);\r\n\r\n        this.parent = null;\r\n        this.size = {\r\n            width: null,\r\n            height: null\r\n        };\r\n        this.scale = {\r\n            x: 1,\r\n            y: 1\r\n        };\r\n\r\n        this.smoothingEnabled = null;\r\n\r\n        this.canvas = null;\r\n        this.context = null;\r\n\r\n        this.events.on(\"config-loaded\", function(event) {\r\n            this.parent = this.config.parent;\r\n            this.size.width = this.config.width;\r\n            this.size.height = this.config.height;\r\n            this.smoothingEnabled = this.config.smoothingEnabled;\r\n\r\n            if (document.readyState === \"complete\") {\r\n                this.init();\r\n            }else {\r\n                window.onload = function() {\r\n                    this.init();\r\n                }.bind(this);\r\n            }\r\n        }, this);\r\n\r\n        this.events.on(\"ready\", function(event) {\r\n            console.log(\"Display Ready\");\r\n        }, this);\r\n\r\n        this.events.emit(\"config-loaded\", { config: this.config });\r\n    }\r\n\r\n    init() {\r\n        this.canvas = document.createElement(\"canvas\");\r\n        this.canvas.width = this.size.width;\r\n        this.canvas.height = this.size.height;\r\n        this.context = this.canvas.getContext(\"2d\");\r\n        this.context.translate(0.5, 0.5);\r\n        this.context.scale(this.scale.x, this.scale.y);\r\n\r\n        this.context.imageSmoothingEnabled = this.smoothingEnabled;\r\n\r\n        if (this.parent === document.body) {\r\n            document.body.appendChild(this.canvas);\r\n        }else {\r\n            document.getElementById(this.parent).appendChild(this.canvas);\r\n        }\r\n\r\n        this.events.emit(\"ready\", { display: this });\r\n    }\r\n\r\n    _fixConfig(config) {\r\n        if (typeof config !== \"object\") {\r\n            config = {\r\n                parent: document.body,\r\n                width: 960,\r\n                height: 720,\r\n                smoothingEnabled: true\r\n            };\r\n        }else {\r\n            if (typeof config.parent !== \"string\") {\r\n                config.parent = document.body;\r\n            }\r\n            if (typeof config.width !== \"number\") {\r\n                config.width = 960;\r\n            }\r\n            if (typeof config.height !== \"number\") {\r\n                config.height = 720;\r\n            }\r\n            if (typeof config.smoothingEnabled !== \"boolean\") {\r\n                config.smoothingEnabled = true;\r\n            }\r\n        }\r\n\r\n        return config;\r\n    }\r\n\r\n    getWidth() {\r\n        return this.size.width;\r\n    }\r\n\r\n    getHeight() {\r\n        return this.size.height;\r\n    }\r\n\r\n    getCanvas() {\r\n        return this.canvas;\r\n    }\r\n\r\n    getContext() {\r\n        return this.context;\r\n    }\r\n}\r\n\r\nmodule.exports = Display;\r\n\n\n//# sourceURL=webpack:///./DOM/Display.js");

/***/ }),

/***/ "./DOM/index.js":
/*!**********************!*\
  !*** ./DOM/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst DOM = {\r\n    Display: __webpack_require__(/*! ./Display */ \"./DOM/Display.js\")\r\n};\r\n\r\nmodule.exports = DOM;\n\n//# sourceURL=webpack:///./DOM/index.js");

/***/ }),

/***/ "./Engine.js":
/*!*******************!*\
  !*** ./Engine.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Engine {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.events = new Hoot.Events(\"engine-\" + this.name);\r\n\r\n        this.events.on(\"ready\", function(event) {\r\n            console.log(\"Engine Ready\");\r\n        }, this);\r\n\r\n        this.events.emit(\"ready\", { engine: this });\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = Engine;\n\n//# sourceURL=webpack:///./Engine.js");

/***/ }),

/***/ "./Events.js":
/*!*******************!*\
  !*** ./Events.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Events {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n\r\n    on(name, callback, callbackScope) {\r\n        let callback2 = callback.bind(callbackScope || null);\r\n        document.addEventListener(this.name + \"-\" + name, function(event) {\r\n            callback2(event.detail);\r\n        });\r\n    }\r\n\r\n    emit(name, options) {\r\n        let eventName = this.name + \"-\" + name;\r\n        let event = new CustomEvent(eventName, { detail: options });\r\n        event.initEvent(eventName, true, true);\r\n        document.dispatchEvent(event);\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = Events;\n\n//# sourceURL=webpack:///./Events.js");

/***/ }),

/***/ "./GameObjects/index.js":
/*!******************************!*\
  !*** ./GameObjects/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst GameObjects = {\r\n    Sprite: __webpack_require__(/*! ./modules/Sprite */ \"./GameObjects/modules/Sprite.js\")\r\n};\r\n\r\nmodule.exports = GameObjects;\n\n//# sourceURL=webpack:///./GameObjects/index.js");

/***/ }),

/***/ "./GameObjects/modules/Sprite.js":
/*!***************************************!*\
  !*** ./GameObjects/modules/Sprite.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nclass Sprite {\r\n    constructor(engine, x, y, texture, frame) {\r\n        this.engine = engine || null;\r\n        this.hasEngine = true;\r\n        if (this.engine === null) {\r\n            this.hasEngine = false;\r\n        }\r\n\r\n        this.position = {\r\n            x: x,\r\n            y: y\r\n        };\r\n\r\n        this.texture = texture;\r\n        this.frame = frame;\r\n\r\n        this.scroll = {\r\n            x: x,\r\n            y: y\r\n        };\r\n    }\r\n\r\n    tick() {\r\n\r\n    }\r\n\r\n    render() {\r\n        this.engine.getDisplay().getContext().drawImage(this.texture.data, this.scroll.x, this.scroll.y, this.texture.data.width, this.texture.data.height);\r\n    }\r\n}\r\n\r\nmodule.exports = Sprite;\n\n//# sourceURL=webpack:///./GameObjects/modules/Sprite.js");

/***/ }),

/***/ "./Load/ImageFile.js":
/*!***************************!*\
  !*** ./Load/ImageFile.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass ImageFile {\r\n    constructor(loader, key, path, config) {\r\n        this.events = new Hoot.Events(\"image-\" + (loader.images.length).toString());\r\n\r\n        this.loader = loader;\r\n\r\n        this.key = key;\r\n        this.path = path;\r\n        this.config = this._fixConfig(config);\r\n\r\n        this.extension = this.path.split(\".\").pop();\r\n\r\n        this.loadable = false;\r\n        if (this.extension === \"png\" || this.extension === \"jpg\" || this.extension === \"jpeg\") {\r\n            this.loadable = true;\r\n        }\r\n\r\n        this.frame = {};\r\n        if (this.config.frameWidth === \"get\") {\r\n            this.frame.width = null;\r\n        }else {\r\n            this.frame.width = this.config.frameWidth;\r\n        }\r\n\r\n        if (this.config.frameHeight === \"get\") {\r\n            this.frame.height = null;\r\n        }else {\r\n            this.frame.height = this.config.frameHeight;\r\n        }\r\n\r\n        this.size = {\r\n            width: null,\r\n            height: null\r\n        };\r\n\r\n        this.isLoading = true;\r\n\r\n        this.data = null;\r\n    }\r\n\r\n    _fixConfig(config) {\r\n        if (typeof config !== \"object\") {\r\n            config = {\r\n                frameWidth: \"get\",\r\n                frameHeight: \"get\"\r\n            };\r\n        }else {\r\n            if (typeof config.frameWidth !== \"number\") {\r\n                config.frameWidth = \"get\";\r\n            }\r\n            if (typeof config.frameHeight !== \"number\") {\r\n                config.frameHeight = \"get\";\r\n            }\r\n        }\r\n\r\n\r\n        return config;\r\n    }\r\n\r\n    load() {\r\n        if (this.loadable) {\r\n            this.data = new Image();\r\n            this.data.src = this.loader.basePath + this.path;\r\n\r\n            this.data.onload = function() {\r\n                this.size.width = this.data.width;\r\n                this.size.height = this.data.height;\r\n\r\n                if (this.frame.width === null) {\r\n                    this.frame.width = this.data.width;\r\n                }\r\n                if (this.frame.height === null) {\r\n                    this.frame.height = this.data.height;\r\n                }\r\n\r\n                this.events.emit(\"loaded\", { image: this });\r\n            }.bind(this);\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = ImageFile;\r\n\n\n//# sourceURL=webpack:///./Load/ImageFile.js");

/***/ }),

/***/ "./Load/index.js":
/*!***********************!*\
  !*** ./Load/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\nconst Load = {\r\n    ImageFile: __webpack_require__(/*! ./ImageFile */ \"./Load/ImageFile.js\")\r\n};\r\n\r\nmodule.exports = Load;\n\n//# sourceURL=webpack:///./Load/index.js");

/***/ }),

/***/ "./Loader.js":
/*!*******************!*\
  !*** ./Loader.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Loader {\r\n    constructor(name, engine) {\r\n        this.name = name;\r\n        this.events = new Hoot.Events(\"loader-\" + this.name);\r\n\r\n        this.engine = null;\r\n        if (engine instanceof Hoot.Engine) {\r\n            this.engine = engine;\r\n        }\r\n\r\n        this.basePath = \"./\";\r\n\r\n        this.status = \"WAITING\";\r\n\r\n        this.queue = new Hoot.Utils.List();\r\n        this.currentFile = null;\r\n        this.loaded = new Hoot.Utils.List();\r\n\r\n        this.images = new Hoot.Utils.List();\r\n\r\n        this.canUse = false;\r\n    }\r\n\r\n    preLoad() {\r\n        if (this.queue.length <= 0) {\r\n            this.canUse = false;\r\n        }\r\n    }\r\n\r\n    load() {\r\n        if (this.queue.length > 0) {\r\n            this.currentFile = this.queue.get(\"last\");\r\n            this.currentFile.load();\r\n\r\n            this.currentFile.events.on(\"loaded\", function(event) {\r\n                this.loaded.add(event.image);\r\n\r\n                if (this.queue.length <= 0) {\r\n                    this.events.emit(\"complete\", { loader: this });\r\n                }\r\n            }, this);\r\n\r\n            this.queue.remove(\"last\");\r\n        }\r\n    }\r\n\r\n    postLoad() {\r\n        if (this.queue.length <= 0) {\r\n            this.canUse = true;\r\n        }\r\n    }\r\n\r\n    start() {\r\n        this.preLoad();\r\n        this.load();\r\n        this.postLoad();\r\n    }\r\n\r\n    /*\r\n     * Load different file types\r\n     */\r\n    loadImage(key, path, config) {\r\n        this.queue.add(new Hoot.Load.ImageFile(this, key, path, config));\r\n        this.images.add(this.queue.get(\"last\"));\r\n    }\r\n\r\n    get(key) {\r\n        if (typeof key !== \"string\") {\r\n            return false;\r\n        }\r\n\r\n        for (let i in this.loaded.array) {\r\n            if (this.loaded.array[i].key === key) {\r\n                return this.loaded.get(i).data;\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Loader;\n\n//# sourceURL=webpack:///./Loader.js");

/***/ }),

/***/ "./Math/Random.js":
/*!************************!*\
  !*** ./Math/Random.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nfunction random(min, max, decimal) {\r\n    if (typeof min !== \"number\") {\r\n        return Math.random();\r\n    }\r\n    if (typeof max !== \"number\") {\r\n        return Math.random();\r\n    }\r\n    if (typeof decimal !== \"number\") {\r\n        min = Math.ceil(min);\r\n        max = Math.floor(max);\r\n\r\n        return (Math.random() * (max - min + 1)) + min;\r\n    }\r\n\r\n    min = Math.ceil(min);\r\n    max = Math.floor(max);\r\n\r\n    return (Math.floor(Math.random() * (max - min + 1)) + min).toFixed(decimal);\r\n}\r\n\r\nmodule.exports = random;\n\n//# sourceURL=webpack:///./Math/Random.js");

/***/ }),

/***/ "./Math/index.js":
/*!***********************!*\
  !*** ./Math/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst Math = {\r\n    random: __webpack_require__(/*! ./Random */ \"./Math/Random.js\")\r\n};\r\n\r\nmodule.exports = Math;\n\n//# sourceURL=webpack:///./Math/index.js");

/***/ }),

/***/ "./Network/index.js":
/*!**************************!*\
  !*** ./Network/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst Network = {\r\n    Server: __webpack_require__(/*! ./modules/Server */ \"./Network/modules/Server.js\"),\r\n    Client: __webpack_require__(/*! ./modules/Client */ \"./Network/modules/Client.js\")\r\n};\r\n\r\nmodule.exports = Network;\n\n//# sourceURL=webpack:///./Network/index.js");

/***/ }),

/***/ "./Network/modules/Client.js":
/*!***********************************!*\
  !*** ./Network/modules/Client.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Client {\r\n    constructor(engine) {\r\n        this.engine = engine || null;\r\n        this.hasEngine = true;\r\n        if (this.engine === null) {\r\n            this.hasEngine = false;\r\n        }\r\n\r\n\r\n    }\r\n\r\n    createAction(text) {\r\n        let data = new Blob([text], { type: 'text/plain' });\r\n\r\n        let textFile = window.URL.createObjectURL(data);\r\n    }\r\n}\r\n\r\nmodule.exports = Client;\n\n//# sourceURL=webpack:///./Network/modules/Client.js");

/***/ }),

/***/ "./Network/modules/Server.js":
/*!***********************************!*\
  !*** ./Network/modules/Server.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\n\r\nclass Server {\r\n    constructor(engine, url) {\r\n        this.engine = engine || null;\r\n        this.hasEngine = true;\r\n        if (this.engine === null) {\r\n            this.hasEngine = false;\r\n        }\r\n\r\n        this.connectionTries = 3;\r\n        this.connectionTryDelay = 5000;\r\n\r\n        this.local = true;\r\n\r\n        this.url = url || \"localhost:8000\";\r\n\r\n        this.socket = false;\r\n        this.connect();\r\n\r\n        this.socket.addEventListener(\"error\", function(event) {\r\n            if (this.connectionTries > 0) {\r\n                this.connectionTries -= 1;\r\n\r\n                console.error(\"Hoot Server: Connection Failed - Retrying in \" + this.connectionTryDelay + \"ms\");\r\n\r\n                window.setTimeout(this.connect(), this.connectionTryDelay);\r\n            }else {\r\n                console.error(\"Hoot Server: Connection Failed\")\r\n            }\r\n        }.bind(this));\r\n    }\r\n\r\n    connect() {\r\n        this.socket = new WebSocket(this.url);\r\n        console.log(this.socket);\r\n    }\r\n}\r\n\r\nmodule.exports = Server;\n\n//# sourceURL=webpack:///./Network/modules/Server.js");

/***/ }),

/***/ "./Scenes/index.js":
/*!*************************!*\
  !*** ./Scenes/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\nconst Scenes = {\r\n    Scene: __webpack_require__(/*! ./modules/Scene */ \"./Scenes/modules/Scene.js\"),\r\n    Manager: __webpack_require__(/*! ./modules/Manager */ \"./Scenes/modules/Manager.js\")\r\n};\r\n\r\nmodule.exports = Scenes;\n\n//# sourceURL=webpack:///./Scenes/index.js");

/***/ }),

/***/ "./Scenes/modules/Manager.js":
/*!***********************************!*\
  !*** ./Scenes/modules/Manager.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Manager {\r\n    constructor(engine) {\r\n        this.engine = engine || null;\r\n        this.hasEngine = true;\r\n        if (this.engine === null) {\r\n            this.hasEngine = false;\r\n        }\r\n\r\n        this.scenes = new Hoot.Utils.List();\r\n\r\n        this.current = {\r\n            scene: null\r\n        };\r\n    }\r\n\r\n    add(scene) {\r\n        if (!(scene instanceof Hoot.Scenes.Scene)) {\r\n            return false;\r\n        }\r\n\r\n        this.scenes.add(scene);\r\n    }\r\n\r\n    start(name) {\r\n        if (typeof key !== \"string\") {\r\n            if (this.scenes.length >= 1) {\r\n                name = this.scenes.get(0).name;\r\n            }else {\r\n                return false;\r\n            }\r\n        }\r\n\r\n        for (let i in this.scenes.array) {\r\n            if (this.scenes.get(i).name === name) {\r\n                this.scenes.get(i).start();\r\n\r\n                this.current.scene = this.scenes.get(i);\r\n            }\r\n        }\r\n    }\r\n\r\n    stop() {\r\n        for (let i in this.scenes.array) {\r\n            this.scenes.get(i).stop();\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Manager;\n\n//# sourceURL=webpack:///./Scenes/modules/Manager.js");

/***/ }),

/***/ "./Scenes/modules/Scene.js":
/*!*********************************!*\
  !*** ./Scenes/modules/Scene.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Scene {\r\n    constructor(engine, name, callbacks) {\r\n        this.engine = engine || null;\r\n        this.hasEngine = true;\r\n        if (this.engine === null) {\r\n            this.hasEngine = false;\r\n        }\r\n\r\n        this.callbacks = callbacks || {\r\n            init: function() {},\r\n            preload: function() {},\r\n            create: function() {},\r\n            tick: function() {},\r\n            render: function() {}\r\n        };\r\n\r\n        this.isRunning = false;\r\n    }\r\n\r\n    start(data) {\r\n        if (this.isRunning) {\r\n            return false;\r\n        }\r\n\r\n        if (this.hasEngine) {\r\n            this.callbacks.init(data);\r\n\r\n            new Hoot.Core.Event(\"hoot-loader-add-callback\", { callback: this.callbacks.preload, caller: this }).dispatch();\r\n\r\n            Hoot.Core.Events.addListener(\"hoot-loader-complete\", function(event) {\r\n                //if (event.caller === this) {\r\n                    this.callbacks.create(data);\r\n\r\n                    this.isRunning = true;\r\n\r\n                    this.engine.time.addAnimationFrameCallback(this.callbacks.tick(data), null);\r\n                    this.engine.time.addAnimationFrameCallback(this.callbacks.render(data), null);\r\n                //}\r\n            }, this);\r\n        }\r\n    }\r\n\r\n    stop() {\r\n        if (!this.isRunning) {\r\n            return false;\r\n        }\r\n\r\n        this.isRunning = false;\r\n\r\n        this.engine.time.removeAnimationFrameCallback(this.callbacks.tick, this.engine);\r\n        this.engine.time.removeAnimationFrameCallback(this.callbacks.render, this.engine);\r\n    }\r\n}\r\n\r\nmodule.exports = Scene;\n\n//# sourceURL=webpack:///./Scenes/modules/Scene.js");

/***/ }),

/***/ "./Stored/index.js":
/*!*************************!*\
  !*** ./Stored/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst Stored = {\r\n    Number: __webpack_require__(/*! ./modules/Number */ \"./Stored/modules/Number.js\")\r\n};\r\n\r\nmodule.exports = Stored;\n\n//# sourceURL=webpack:///./Stored/index.js");

/***/ }),

/***/ "./Stored/modules/Number.js":
/*!**********************************!*\
  !*** ./Stored/modules/Number.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Number {\r\n    constructor(name, value) {\r\n        this.name = name || \"hoot-unknown\";\r\n        this.value = value || 0;\r\n\r\n        if (this.exists()) {\r\n            this.value = this.get();\r\n        }else {\r\n            localStorage.setItem(this.name, this.value);\r\n        }\r\n    }\r\n\r\n    get() {\r\n        return localStorage.getItem(this.name);\r\n    }\r\n\r\n    set(value) {\r\n        if (typeof value !== \"number\") {\r\n            return false;\r\n        }\r\n\r\n        this.value = value || this.value;\r\n\r\n        localStorage.setItem(this.name, this.value);\r\n    }\r\n\r\n    exists() {\r\n        if (this.get() === null) {\r\n            return false;\r\n        }else {\r\n            return true;\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Number;\n\n//# sourceURL=webpack:///./Stored/modules/Number.js");

/***/ }),

/***/ "./Time/Event.js":
/*!***********************!*\
  !*** ./Time/Event.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Event {\r\n    constructor(config) {\r\n        this.config = this._fixConfig(config);\r\n\r\n        this.data = null;\r\n        this.repeated = 0;\r\n\r\n        if (this.config.repeat == -1) {\r\n            this.data = window.setInterval(this.config.callback.bind(this.config.callbackScope), this.config.delay);\r\n        }else if (this.config.repeat > 0) {\r\n            this.data = window.setInterval(function() {\r\n                if (this.repeated <= this.config.repeat) {\r\n                    this.config().callback.bind(this.config.callbackScope);\r\n                }else {\r\n                    this.stop();\r\n                }\r\n\r\n                this.repeated += 1;\r\n            }.bind(this), this.config.delay);\r\n        }else if (this.config.repeat == 0) {\r\n            this.data = window.setTimeout(this.config.callback.bind(this.config.callbackScope), this.config.delay);\r\n        }\r\n\r\n\r\n        this.isRunning = true;\r\n    }\r\n\r\n    _fixConfig(config) {\r\n        if (typeof config !== \"object\") {\r\n            config = {\r\n                delay: 100,\r\n                callback: function() {},\r\n                callbackScope: null,\r\n                repeat: 0\r\n            };\r\n        }else {\r\n            if (typeof config.delay !== \"number\") {\r\n                config.delay = 100;\r\n            }\r\n            if (typeof config.callback !== \"function\") {\r\n                callback.callback = function() {};\r\n            }\r\n            if (typeof config.callbackScope === \"undefined\") {\r\n                config.callbackScope = null;\r\n            }\r\n            if (typeof config.repeat !== \"number\") {\r\n                config.repeat = 0;\r\n            }\r\n        }\r\n\r\n        return config;\r\n    }\r\n\r\n    start() {\r\n        if (this.isRunning) {\r\n            return;\r\n        }\r\n\r\n        this.isRunning = true;\r\n    }\r\n\r\n    stop() {\r\n        if (!this.isRunning) {\r\n            return;\r\n        }\r\n\r\n        this.isRunning = false;\r\n\r\n        if (this.config.repeat === 0) {\r\n            this.data = window.clearTimeout(this.data);\r\n        }else {\r\n            this.data = window.clearInterval(this.data);\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Event;\n\n//# sourceURL=webpack:///./Time/Event.js");

/***/ }),

/***/ "./Time/index.js":
/*!***********************!*\
  !*** ./Time/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst Time = {\r\n    Event: __webpack_require__(/*! ./Event */ \"./Time/Event.js\")\r\n};\r\n\r\nmodule.exports = Time;\n\n//# sourceURL=webpack:///./Time/index.js");

/***/ }),

/***/ "./Utils/List.js":
/*!***********************!*\
  !*** ./Utils/List.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass List {\r\n    constructor(array) {\r\n        this.array = array || [];\r\n\r\n        this.length = this.array.length;\r\n    }\r\n\r\n    add(value) {\r\n        this.array.push(value);\r\n\r\n        this.length = this.array.length;\r\n    }\r\n\r\n    remove(index) {\r\n        if (typeof index === \"undefined\") {\r\n            index = \"first\";\r\n        }\r\n\r\n        if (index === \"last\") {\r\n            index = (this.array.length - 1);\r\n        }\r\n\r\n        if (index === \"first\") {\r\n            index = 0;\r\n        }\r\n\r\n        if (index === \"random\") {\r\n            index = Hoot.Math.random(0, (this.array.length - 1), 0);\r\n        }\r\n\r\n        let array = this.array;\r\n        this.array = [];\r\n\r\n        for (let i in array) {\r\n            if (i != (index)) {\r\n                this.array.push(array[i]);\r\n            }\r\n        }\r\n\r\n        this.length = this.array.length;\r\n    }\r\n\r\n    get(index) {\r\n        if (typeof index === \"undefined\") {\r\n            index = \"first\";\r\n        }\r\n\r\n        if (index === \"last\") {\r\n            index = (this.array.length - 1);\r\n        }\r\n\r\n        if (index === \"first\") {\r\n            index = 0;\r\n        }\r\n\r\n        if (index === \"random\") {\r\n            index = Hoot.Math.random(0, (this.array.length - 1), 0);\r\n        }\r\n\r\n        return this.array[index];\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = List;\n\n//# sourceURL=webpack:///./Utils/List.js");

/***/ }),

/***/ "./Utils/index.js":
/*!************************!*\
  !*** ./Utils/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst Utils = {\r\n    List: __webpack_require__(/*! ./List */ \"./Utils/List.js\")\r\n};\r\n\r\nmodule.exports = Utils;\n\n//# sourceURL=webpack:///./Utils/index.js");

/***/ }),

/***/ "./hoot.js":
/*!*****************!*\
  !*** ./hoot.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {\r\nconst Hoot = {\r\n    //Files\r\n    Engine: __webpack_require__(/*! ./Engine */ \"./Engine.js\"),\r\n    Events: __webpack_require__(/*! ./Events */ \"./Events.js\"),\r\n    Loader: __webpack_require__(/*! ./Loader */ \"./Loader.js\"),\r\n    //Folders\r\n    Cameras: __webpack_require__(/*! ./Cameras */ \"./Cameras/index.js\"),\r\n    DOM: __webpack_require__(/*! ./DOM */ \"./DOM/index.js\"),\r\n    GameObjects: __webpack_require__(/*! ./GameObjects */ \"./GameObjects/index.js\"),\r\n    Load: __webpack_require__(/*! ./Load */ \"./Load/index.js\"),\r\n    Math: __webpack_require__(/*! ./Math */ \"./Math/index.js\"),\r\n    Network: __webpack_require__(/*! ./Network */ \"./Network/index.js\"),\r\n    Scenes: __webpack_require__(/*! ./Scenes */ \"./Scenes/index.js\"),\r\n    Stored: __webpack_require__(/*! ./Stored */ \"./Stored/index.js\"),\r\n    Time: __webpack_require__(/*! ./Time */ \"./Time/index.js\"),\r\n    Utils: __webpack_require__(/*! ./Utils */ \"./Utils/index.js\")\r\n};\r\n\r\nmodule.exports = Hoot;\r\nglobal.Hoot = Hoot;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./hoot.js");

/***/ })

/******/ });
});