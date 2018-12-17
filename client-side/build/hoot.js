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

eval("\r\n\r\nclass Display {\r\n\r\n    /*\r\n     * Constructor\r\n     */\r\n    constructor(name, config) {\r\n\r\n        //The display's identifier\r\n        this.name = name;\r\n\r\n\r\n\r\n        //The event handler\r\n        this.events = new Hoot.Events(\"display-\" + this.name);\r\n\r\n\r\n\r\n        //Set the config and fix it\r\n        this.config = this._fixConfig(config);\r\n\r\n\r\n\r\n        //The displays parent element\r\n        this.parent = this.config.parent;\r\n\r\n\r\n\r\n        //The size of the game\r\n        this.size = {\r\n            width: this.config.width,\r\n            height: this.config.height\r\n        };\r\n\r\n\r\n\r\n        //The scale of the game\r\n        this.scale = {\r\n            x: this.config.scaleX,\r\n            y: this.config.scaleY\r\n        };\r\n\r\n\r\n\r\n        //Smoothing is good for non pixel art\r\n        this.smoothingEnabled = this.config.smoothingEnabled;\r\n\r\n\r\n\r\n        //The actual element\r\n        this.canvas = null;\r\n\r\n\r\n\r\n        //Used for rendering\r\n        this.context = null;\r\n\r\n\r\n\r\n        //Check to see if the page is already loaded\r\n        if (document.readyState === \"complete\") {\r\n\r\n            this.init();\r\n\r\n        }else {\r\n\r\n            //If not wait until it is\r\n            window.onload = function() {\r\n\r\n                this.init();\r\n\r\n            }.bind(this);\r\n\r\n        }\r\n\r\n    }\r\n\r\n    //Makes it easier than typing 'this.events.on'\r\n    on(name, callback, callbackScope) {\r\n\r\n        this.events.on(name, callback, callbackScope);\r\n\r\n    }\r\n\r\n    //Initialize the display\r\n    init() {\r\n\r\n        //Create the canvas element\r\n        this.canvas = document.createElement(\"canvas\");\r\n\r\n\r\n\r\n        //Set Width\r\n        this.canvas.width = this.size.width;\r\n\r\n\r\n\r\n        //Set Height\r\n        this.canvas.height = this.size.height;\r\n\r\n\r\n\r\n        //Create the context\r\n        this.context = this.canvas.getContext(\"2d\");\r\n\r\n\r\n\r\n        //For a finer output\r\n        this.context.translate(0.5, 0.5);\r\n\r\n\r\n\r\n        //Set the scale of the context\r\n        this.context.scale(this.scale.x, this.scale.y);\r\n\r\n\r\n\r\n        //Should the context smooth out images\r\n        this.context.imageSmoothingEnabled = this.smoothingEnabled;\r\n\r\n\r\n\r\n        //If the parent is the body element of the page\r\n        if (this.parent === document.body) {\r\n\r\n            document.body.appendChild(this.canvas);\r\n\r\n        }else {\r\n\r\n            document.getElementById(this.parent).appendChild(this.canvas);\r\n\r\n        }\r\n\r\n\r\n\r\n        //Emit the event telling the rest of the game that the display is ready to be used\r\n        this.events.emit(\"ready\", { display: this });\r\n\r\n    }\r\n\r\n    //Fix the config given if needed\r\n    _fixConfig(config) {\r\n        \r\n        if (typeof config !== \"object\") {\r\n\r\n            config = {\r\n\r\n                parent: document.body,\r\n\r\n\r\n                width: 960,\r\n\r\n\r\n                height: 720,\r\n\r\n\r\n                scaleX: 1,\r\n\r\n\r\n                scaleY: 1,\r\n\r\n\r\n                smoothingEnabled: true\r\n\r\n            };\r\n\r\n        }else {\r\n            if (typeof config.parent !== \"string\") {\r\n\r\n                config.parent = document.body;\r\n\r\n            }\r\n\r\n\r\n\r\n            if (typeof config.width !== \"number\") {\r\n\r\n                config.width = 960;\r\n\r\n            }\r\n\r\n\r\n\r\n            if (typeof config.height !== \"number\") {\r\n\r\n                config.height = 720;\r\n\r\n            }\r\n\r\n\r\n\r\n            if (typeof config.scaleX !== \"number\") {\r\n\r\n                config.scaleX = 1;\r\n\r\n            }\r\n\r\n\r\n\r\n            if (typeof config.scaleY !== \"number\") {\r\n\r\n                config.scaleY = 1;\r\n\r\n            }\r\n\r\n\r\n\r\n            if (typeof config.smoothingEnabled !== \"boolean\") {\r\n\r\n                config.smoothingEnabled = true;\r\n\r\n            }\r\n\r\n        }\r\n\r\n\r\n\r\n        return config;\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Getters\r\n     */\r\n    //Width\r\n    getWidth() {\r\n\r\n        return this.size.width;\r\n\r\n    }\r\n\r\n    //Height\r\n    getHeight() {\r\n\r\n        return this.size.height;\r\n\r\n    }\r\n\r\n    //Canvas\r\n    getCanvas() {\r\n\r\n        return this.canvas;\r\n\r\n    }\r\n\r\n    //Context\r\n    getContext() {\r\n\r\n        return this.context;\r\n\r\n    }\r\n}\r\n\r\nmodule.exports = Display;\r\n\n\n//# sourceURL=webpack:///./DOM/Display.js");

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

eval("\r\nclass Engine {\r\n\r\n    /*\r\n     * Constructor\r\n     */\r\n    constructor(name) {\r\n\r\n        //The scene's identifier\r\n        this.name = name;\r\n\r\n\r\n\r\n        //The event handler\r\n        this.events = new Hoot.Events(\"engine-\" + this.name);\r\n\r\n\r\n\r\n        //All the displays\r\n        this.displays = new Hoot.Utils.List();\r\n\r\n\r\n\r\n        //All the loaders\r\n        this.loaders = new Hoot.Utils.List();\r\n\r\n\r\n\r\n        //All the scenes\r\n        this.scenes = new Hoot.Utils.List();\r\n\r\n\r\n\r\n        //The current scene being updated and run of the game\r\n        this.currentScene = null;\r\n\r\n    }\r\n\r\n    //Add a display\r\n    addDisplay(display) {\r\n\r\n        //Check to make sure that the display is of 'Hoot.DOM.Display'\r\n        if (display instanceof Hoot.DOM.Display) {\r\n\r\n            //Add it to the list\r\n            this.displays.add(display);\r\n\r\n        }\r\n\r\n    }\r\n\r\n    //Add a loader\r\n    addLoader(loader) {\r\n\r\n        //Check to make sure that the loader is of 'Hoot.Loader'\r\n        if (loader instanceof Hoot.Loader) {\r\n\r\n            //Add it to the list\r\n            this.loaders.add(loader);\r\n\r\n        }\r\n\r\n    }\r\n\r\n    //Add a scene\r\n    addScene(scene) {\r\n\r\n        //Check to make sure that the scene is at least not 'null', 'undefined', or \"string\"\r\n        if (typeof scene === \"undefined\" || scene === null || typeof scene === \"string\") {\r\n            return;\r\n        }\r\n\r\n        //Because the scene is another instance of 'Hoot.Scene' just add the scene to the list\r\n        this.scenes.add(scene);\r\n\r\n    }\r\n\r\n    //Start a scene and pass in data\r\n    startScene(name, data) {\r\n\r\n        //Make sure that the name is a string\r\n        if (typeof name === \"string\") {\r\n\r\n            //Search through the list of scenes to find one with a matching 'name'\r\n            for (let i in this.scenes) {\r\n\r\n                //Check to see if the current searched scene has the same 'name'\r\n                if (this.scenes[i].name === name) {\r\n\r\n                    //Create a new version of the scene\r\n                    this.currentScene = new this.scenes[i]();\r\n\r\n\r\n\r\n                    //Start the created scene\r\n                    this.currentScene.start(data);\r\n\r\n                }\r\n\r\n            }\r\n\r\n        }\r\n\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = Engine;\n\n//# sourceURL=webpack:///./Engine.js");

/***/ }),

/***/ "./Events.js":
/*!*******************!*\
  !*** ./Events.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Events {\r\n    constructor(name) {\r\n        this.name = name;\r\n    }\r\n\r\n    on(name, callback, callbackScope) {\r\n        let callback2 = callback.bind(callbackScope || null);\r\n        document.addEventListener(this.name + \"-\" + name, function(event) {\r\n            callback2(event.detail);\r\n        });\r\n    }\r\n\r\n    emit(name, options) {\r\n        let eventName = this.name + \"-\" + name;\r\n        let event = new CustomEvent(eventName, { detail: options });\r\n        event.initEvent(eventName, true, true);\r\n        document.dispatchEvent(event);\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = Events;\n\n//# sourceURL=webpack:///./Events.js");

/***/ }),

/***/ "./GameObjects/Sprite.js":
/*!*******************************!*\
  !*** ./GameObjects/Sprite.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\nclass Sprite {\r\n    constructor(engine, x, y, texture, frame) {\r\n        this.engine = engine || null;\r\n        this.hasEngine = true;\r\n        if (this.engine === null) {\r\n            this.hasEngine = false;\r\n        }\r\n\r\n        this.position = {\r\n            x: x,\r\n            y: y\r\n        };\r\n\r\n        this.texture = texture;\r\n        this.frame = frame;\r\n\r\n        this.scroll = {\r\n            x: x,\r\n            y: y\r\n        };\r\n    }\r\n\r\n    tick() {\r\n\r\n    }\r\n\r\n    render() {\r\n        this.engine.getDisplay().getContext().drawImage(this.texture.data, this.scroll.x, this.scroll.y, this.texture.data.width, this.texture.data.height);\r\n    }\r\n}\r\n\r\nmodule.exports = Sprite;\n\n//# sourceURL=webpack:///./GameObjects/Sprite.js");

/***/ }),

/***/ "./GameObjects/index.js":
/*!******************************!*\
  !*** ./GameObjects/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst GameObjects = {\r\n    Sprite: __webpack_require__(/*! ./Sprite */ \"./GameObjects/Sprite.js\")\r\n};\r\n\r\nmodule.exports = GameObjects;\n\n//# sourceURL=webpack:///./GameObjects/index.js");

/***/ }),

/***/ "./Load/AudioFile.js":
/*!***************************!*\
  !*** ./Load/AudioFile.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass AudioFile {\r\n    constructor(loader, key, path, config) {\r\n        this.events = new Hoot.Events(\"audio-\" + loader.name + \"-\" + (loader.audio.length).toString());\r\n\r\n        this.loader = loader;\r\n\r\n        this.key = key;\r\n\r\n        this.path = path;\r\n\r\n        this.config = this._fixConfig(config);\r\n\r\n        this.extension = this.path.split(\".\").pop();\r\n\r\n        this.loadable = false;\r\n        if (this.extension === \"mp3\" || this.extension === \"wav\" || this.extension === \"ogg\" || this.extension === \"flac\") {\r\n            this.loadable = true;\r\n        }\r\n\r\n        this.playable = false;\r\n\r\n        this.volume = this.config.volume;\r\n\r\n        this.isLoading = false;\r\n\r\n        this.data = null;\r\n    }\r\n\r\n    _fixConfig(config) {\r\n        if (typeof config !== \"object\") {\r\n            config = {\r\n                volume: 1\r\n            };\r\n        }else {\r\n            if (typeof config.volume !== \"number\") {\r\n                config.volume = 1;\r\n            }\r\n        }\r\n\r\n        return config;\r\n    }\r\n\r\n    load() {\r\n        if (this.loadable) {\r\n            this.isLoading = true;\r\n\r\n            this.data = document.createElement(\"audio\");\r\n            this.data.src = this.path;\r\n\r\n            this.data.onload = function() {\r\n\r\n                this.isLoading = false;\r\n\r\n                this.events.emit(\"loaded\", { audio: this });\r\n\r\n            }.bind(this);\r\n\r\n            this._checkPlayable();\r\n\r\n        }\r\n    }\r\n\r\n    _checkPlayable() {\r\n        if (this.extension === \"mp3\") {\r\n\r\n            if (this.data.canPlayType(\"audio/mpeg\")) {\r\n                this.playable = true;\r\n            }\r\n\r\n        }else if (this.extension === \"ogg\") {\r\n\r\n            if (this.data.canPlayType(\"audio/ogg\")) {\r\n                this.playable = true;\r\n            }\r\n\r\n        }else if (this.extension === \"wav\") {\r\n\r\n            if (this.data.canPlayType(\"audio/wav\")) {\r\n                this.playable = true;\r\n            }\r\n\r\n        }else if (this.extension === \"flac\") {\r\n\r\n            if (this.data.canPlayType(\"audio/flac\")) {\r\n                this.playable = true;\r\n            }\r\n\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = AudioFile;\r\n\n\n//# sourceURL=webpack:///./Load/AudioFile.js");

/***/ }),

/***/ "./Load/ImageFile.js":
/*!***************************!*\
  !*** ./Load/ImageFile.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass ImageFile {\r\n\r\n    /*\r\n     * Constructor\r\n     */\r\n    constructor(loader, key, path, config) {\r\n\r\n        //The event handler\r\n        this.events = new Hoot.Events(loader.name + \"-image-\" + (loader.images.length).toString());\r\n\r\n\r\n\r\n        //The loader has to be of 'Hoot.Loader'\r\n        this.loader = loader;\r\n\r\n\r\n\r\n        //The image key that can be used to identify it\r\n        this.key = key;\r\n\r\n\r\n\r\n        //The path used to set the image source\r\n        this.path = path;\r\n\r\n\r\n\r\n        //Any configurations for the image file\r\n        this.config = this._fixConfig(config);\r\n\r\n\r\n\r\n        //Gets the extension of the image from the path\r\n        this.extension = this.path.split(\".\").pop();\r\n\r\n\r\n\r\n        //Is the image loadable set to false by default\r\n        this.loadable = false;\r\n\r\n\r\n\r\n        //Check to see if the file extension is loadable\r\n        if (this.extension === \"png\" || this.extension === \"jpg\" || this.extension === \"jpeg\") {\r\n\r\n            //If so; set loadable to true\r\n            this.loadable = true;\r\n\r\n        }\r\n\r\n\r\n\r\n        //For spritesheets\r\n        this.frame = {};\r\n\r\n\r\n\r\n        //If the given frame width is not 'get'\r\n        if (this.config.frameWidth !== \"get\") {\r\n\r\n            //Width\r\n            this.frame.width = this.config.frameWidth;\r\n\r\n        }\r\n\r\n\r\n\r\n        //If the given frame height is not 'get'\r\n        if (this.config.frameHeight !== \"get\") {\r\n\r\n            //Height\r\n            this.frame.height = this.config.frameHeight;\r\n\r\n        }\r\n\r\n\r\n\r\n        //The size of the image file as a whole\r\n        this.size = {\r\n\r\n            width: null,\r\n\r\n\r\n            height: null\r\n\r\n        };\r\n\r\n\r\n\r\n        //Is the image file is loading\r\n        this.isLoading = false;\r\n\r\n\r\n\r\n        //Is the image file loaded\r\n        this.isLoaded = false;\r\n\r\n\r\n\r\n        //The actual image\r\n        this.data = null;\r\n    }\r\n\r\n    //Easier than typing 'this.events.on'\r\n    on(name, callback, callbackScope) {\r\n\r\n        this.events.on(name, callback, callbackScope);\r\n\r\n    }\r\n\r\n    //Fix the configuation of the config passes in the constructor\r\n    _fixConfig(config) {\r\n\r\n        /*\r\n         * Check and fix all missing occurrences of config's required fields\r\n         */\r\n        if (typeof config !== \"object\") {\r\n\r\n            config = {\r\n\r\n                frameWidth: \"get\",\r\n\r\n\r\n                frameHeight: \"get\"\r\n\r\n            };\r\n\r\n        }else {\r\n\r\n            //Frame WIDTH\r\n            if (typeof config.frameWidth !== \"number\") {\r\n\r\n                config.frameWidth = \"get\";\r\n\r\n            }\r\n\r\n\r\n\r\n            //Frame HEIGHT\r\n            if (typeof config.frameHeight !== \"number\") {\r\n\r\n                config.frameHeight = \"get\";\r\n\r\n            }\r\n\r\n        }\r\n\r\n\r\n\r\n        return config;\r\n\r\n    }\r\n\r\n    //Load the image\r\n    load() {\r\n\r\n        //If the image is loadable than load it\r\n        if (this.loadable) {\r\n\r\n            //Set the loading status to 'true'\r\n            this.isLoading = true;\r\n\r\n\r\n\r\n            //Create a new 'Image'\r\n            this.data = new Image();\r\n\r\n\r\n\r\n            //Set the image source to the loaders basePath attached with the path\r\n            this.data.src = this.loader.basePath + this.path;\r\n\r\n\r\n\r\n            //When the image is loaded\r\n            this.data.onload = function() {\r\n\r\n                //Set the loading status to 'false'\r\n                this.isLoading = false;\r\n\r\n\r\n\r\n                //Set the loaded status to 'true'\r\n                this.isLoaded = true;\r\n\r\n\r\n\r\n                //Set the 'size.width' to the image files width\r\n                this.size.width = this.data.width;\r\n\r\n\r\n\r\n                //Set the 'size.height' to the image files height\r\n                this.size.height = this.data.height;\r\n\r\n\r\n\r\n                //If the 'frame.width' still equal get than now that the image has been loaded change it\r\n                if (this.frame.width === \"get\") {\r\n\r\n                    //Image WIDTH\r\n                    this.frame.width = this.data.width;\r\n\r\n                }\r\n\r\n\r\n\r\n                //If the 'frame.height' still equals 'get' than now that the image has been loaded change it\r\n                if (this.frame.height === null) {\r\n\r\n                    //Image HEIGHT\r\n                    this.frame.height = this.data.height;\r\n\r\n                }\r\n\r\n\r\n\r\n                //Emit the event that the image has loaded\r\n                this.events.emit(\"loaded\", { image: this });\r\n\r\n            }.bind(this);\r\n\r\n        }\r\n\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = ImageFile;\r\n\n\n//# sourceURL=webpack:///./Load/ImageFile.js");

/***/ }),

/***/ "./Load/index.js":
/*!***********************!*\
  !*** ./Load/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\nconst Load = {\r\n    AudioFile: __webpack_require__(/*! ./AudioFile */ \"./Load/AudioFile.js\"),\r\n    ImageFile: __webpack_require__(/*! ./ImageFile */ \"./Load/ImageFile.js\")\r\n};\r\n\r\nmodule.exports = Load;\n\n//# sourceURL=webpack:///./Load/index.js");

/***/ }),

/***/ "./Loader.js":
/*!*******************!*\
  !*** ./Loader.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Loader {\r\n\r\n    /*\r\n     * Constructor\r\n     */\r\n    constructor(name) {\r\n\r\n        //Mainly for the event handler\r\n        this.name = name;\r\n\r\n\r\n\r\n        //The event handler\r\n        this.events = new Hoot.Events(\"loader-\" + this.name);\r\n\r\n\r\n\r\n        //The base path of where all the files should be loaded\r\n        this.basePath = \"./\";\r\n\r\n\r\n\r\n        //The status of the loader\r\n        this.status = \"WAITING\";\r\n\r\n\r\n\r\n        //Files in here are just waiting to be loaded\r\n        this.queue = new Hoot.Utils.List();\r\n\r\n\r\n\r\n        //The current file being loaded\r\n        this.currentFile = null;\r\n\r\n\r\n\r\n        //All the loaded files\r\n        this.loaded = new Hoot.Utils.List();\r\n\r\n\r\n\r\n        //All the images loaded/not loaded/loading\r\n        this.images = new Hoot.Utils.List();\r\n\r\n\r\n\r\n        //All the audio files loaded/not loaded/loading\r\n        this.audio = new Hoot.Utils.List();\r\n\r\n\r\n\r\n        //Can the loader be used\r\n        this.canUse = false;\r\n\r\n    }\r\n\r\n\r\n\r\n    //Get the loader ready for loading\r\n    preload() {\r\n\r\n        //Make sure that there is at least 1 file in the queue before loading\r\n        if (this.queue.length > 0) {\r\n\r\n            //Make the loader not usable\r\n            this.canUse = false;\r\n\r\n\r\n\r\n            //Next load state\r\n            this.load();\r\n\r\n        }\r\n\r\n    }\r\n\r\n\r\n\r\n    //Load a file from the queue last-first\r\n    load() {\r\n\r\n        //Gets the last file from the queue\r\n        this.currentFile = this.queue.get(\"last\");\r\n\r\n\r\n\r\n        //Remove the last file from the queue\r\n        this.queue.remove(\"last\");\r\n\r\n\r\n\r\n        //When the file is done loading\r\n        this.currentFile.on(\"loaded\", function(event) {\r\n\r\n            //Add it to the array/list of loaded files\r\n            this.loaded.add(event.image);\r\n\r\n\r\n\r\n            //Call the final repeatable stage of the loading process\r\n            this.postload(false);\r\n\r\n\r\n\r\n            //If there are no more files to be loaded\r\n            if (this.queue.length > 0) {\r\n\r\n                //Tell the postload function to repeat the loading cycle\r\n                this.postload(true);\r\n\r\n            }\r\n\r\n        }, this);\r\n\r\n\r\n\r\n        //Load the current file\r\n        this.currentFile.load();\r\n\r\n    }\r\n\r\n    //The final state of the load process\r\n    postload(repeatLoad) {\r\n\r\n        //Check to see if the preload function should be called\r\n        if (repeatLoad === true) {\r\n\r\n            //Repeat the load process\r\n            this.preload();\r\n\r\n        }else {\r\n\r\n            //Set it so the loader can be used\r\n            this.canUse = true;\r\n\r\n\r\n\r\n            //The loading is complete\r\n            this.events.emit(\"complete\", { loader: this });\r\n\r\n        }\r\n\r\n    }\r\n\r\n    //Start\r\n    start() {\r\n\r\n        //Call the first state of the load process\r\n        this.preload();\r\n\r\n    }\r\n\r\n    /*\r\n     * Load different file types\r\n     */\r\n    //Images\r\n    loadImage(key, path, config) {\r\n\r\n        //Pass through the 'key', 'path', and 'config' to load an image file\r\n        let file = new Hoot.Load.ImageFile(this, key, path, config);\r\n\r\n\r\n\r\n        //Add the image file to the queue\r\n        this.queue.add(file);\r\n\r\n\r\n\r\n        //Add it to the list of images\r\n        this.images.add(file);\r\n\r\n    }\r\n\r\n    //Audio\r\n    loadAudio(key, path, config) {\r\n\r\n        //Pass through the 'key', 'path', and 'config' to load an audio file\r\n        let file = new Hoot.Load.AudioFile(this, key, path, config);\r\n\r\n\r\n\r\n        //Add the audio file to the queue\r\n        this.queue.add(file);\r\n\r\n\r\n\r\n        //Add it to the list of audio files\r\n        this.audio.add(file);\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Easily called methods\r\n     */\r\n    //Image\r\n    image(key, path, config) {\r\n\r\n        this.loadImage(key, path, config);\r\n\r\n    }\r\n\r\n    //Audio\r\n    audio(key, path, config) {\r\n\r\n        this.loadAudio(key, path, config);\r\n\r\n    }\r\n\r\n\r\n    //Get any loaded item\r\n    get(key) {\r\n\r\n        //Check to see if there's a key supplied\r\n        if (typeof key !== \"string\") {\r\n            return;\r\n        }\r\n\r\n\r\n\r\n        //Go through the list of loaded assets to find a matching key\r\n        for (let i in this.loaded) {\r\n\r\n            //Check to see if key matches\r\n            if (this.loaded[i].key === key) {\r\n\r\n                //Return the loaded asset\r\n                return this.loaded[i];\r\n\r\n            }\r\n\r\n        }\r\n\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = Loader;\n\n//# sourceURL=webpack:///./Loader.js");

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

/***/ "./Scene.js":
/*!******************!*\
  !*** ./Scene.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Scene {\r\n\r\n    /*\r\n     * Constructor\r\n     */\r\n    constructor(name) {\r\n\r\n        //How the rest of the game recognizes this scene\r\n        this.name = name;\r\n\r\n\r\n\r\n        //The event handler\r\n        this.events = new Hoot.Events(\"scene-\" + this.name);\r\n\r\n\r\n\r\n        //Set to null as default\r\n        this.engine = null;\r\n\r\n\r\n\r\n        /*\r\n         * Scene Status\r\n         */\r\n\r\n        //Is the scene running\r\n        this.isRunning = false;\r\n\r\n\r\n\r\n        //Is the scene loading\r\n        this.isLoading = false;\r\n\r\n\r\n\r\n        //Used mainly in the preload stage.\r\n        this.load = new Hoot.Loader(\"scene-\" + this.name);\r\n\r\n    }\r\n\r\n\r\n    /*\r\n     * Basic game stages\r\n     */\r\n    init() {\r\n\r\n    }\r\n\r\n    preload() {\r\n\r\n    }\r\n\r\n    create() {\r\n\r\n    }\r\n\r\n    tick() {\r\n\r\n    }\r\n\r\n    render() {\r\n\r\n    }\r\n\r\n\r\n    //Called mainly by 'window.requestAnimationFrame'\r\n    _update() {\r\n\r\n        //Is the game running\r\n        if (this.isRunning) {\r\n\r\n            //Updates variables and anything not being rendered onto the screen\r\n            this.tick();\r\n\r\n\r\n\r\n            //Renders all gameObjects onto the screen\r\n            this.render();\r\n\r\n\r\n\r\n            //Call the '_update' loop again using 'requestAnimationFrame'\r\n            window.requestAnimationFrame(this._update.bind(this));\r\n\r\n        }\r\n\r\n    }\r\n\r\n    //Start the scene and pass in any data\r\n    start(data) {\r\n\r\n        //Check to see if config is an object\r\n        if (typeof data !== \"object\") {\r\n\r\n            //Make the data an object\r\n            data = {};\r\n\r\n        }\r\n\r\n\r\n\r\n        //If the scene is already running don't start again\r\n        if (this.isRunning) {\r\n            return;\r\n        }\r\n\r\n\r\n\r\n        //Set the scene's 'isRunning' status to true\r\n        this.isRunning = true;\r\n\r\n\r\n\r\n        //Run the dev's init code\r\n        this.init(data);\r\n\r\n\r\n\r\n        //Load all the images for the scene\r\n        this.preload(data);\r\n\r\n\r\n\r\n        //When the game's assets have been loaded\r\n        this.load.events.on(\"complete\", function() {\r\n\r\n            //Run the scene's create code\r\n            this.create(data);\r\n\r\n\r\n\r\n            //Start the update loop\r\n            this._update(data);\r\n\r\n        }, this);\r\n\r\n\r\n\r\n        //Start the load process\r\n        this.load.start();\r\n\r\n    }\r\n\r\n    stop() {\r\n\r\n        //If the scene is already NOT running don't stop it again\r\n        if (!this.isRunning) {\r\n            return;\r\n        }\r\n\r\n\r\n\r\n        //Set the scene's 'isRunning' status to true\r\n        this.isRunning = false;\r\n\r\n    }\r\n}\r\n\r\nmodule.exports = Scene;\n\n//# sourceURL=webpack:///./Scene.js");

/***/ }),

/***/ "./Stored/Number.js":
/*!**************************!*\
  !*** ./Stored/Number.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Number {\r\n    constructor(name, value) {\r\n        this.name = name || \"hoot-unknown\";\r\n        this.value = value || 0;\r\n\r\n        if (this.exists()) {\r\n            this.value = this.get();\r\n        }else {\r\n            localStorage.setItem(this.name, this.value);\r\n        }\r\n    }\r\n\r\n    get() {\r\n        return localStorage.getItem(this.name);\r\n    }\r\n\r\n    set(value) {\r\n        if (typeof value !== \"number\") {\r\n            return false;\r\n        }\r\n\r\n        this.value = value || this.value;\r\n\r\n        localStorage.setItem(this.name, this.value);\r\n    }\r\n\r\n    exists() {\r\n        if (this.get() === null) {\r\n            return false;\r\n        }else {\r\n            return true;\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Number;\n\n//# sourceURL=webpack:///./Stored/Number.js");

/***/ }),

/***/ "./Stored/index.js":
/*!*************************!*\
  !*** ./Stored/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst Stored = {\r\n    Number: __webpack_require__(/*! ./Number */ \"./Stored/Number.js\")\r\n};\r\n\r\nmodule.exports = Stored;\n\n//# sourceURL=webpack:///./Stored/index.js");

/***/ }),

/***/ "./Time/Event.js":
/*!***********************!*\
  !*** ./Time/Event.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\nclass Event {\r\n    constructor(config) {\r\n        this.config = this._fixConfig(config);\r\n\r\n        this.data = null;\r\n\r\n        this.repeated = 0;\r\n\r\n        if (this.config.repeat == -1) {\r\n\r\n            this.data = window.setInterval(this.config.callback.bind(this.config.callbackScope), this.config.delay);\r\n\r\n        }else if (this.config.repeat > 0) {\r\n\r\n            this.data = window.setInterval(function() {\r\n\r\n                if (this.repeated <= this.config.repeat) {\r\n\r\n                    this.config().callback.bind(this.config.callbackScope);\r\n\r\n                }else {\r\n\r\n                    this.stop();\r\n\r\n                }\r\n\r\n                this.repeated += 1;\r\n\r\n            }.bind(this), this.config.delay);\r\n\r\n        }else if (this.config.repeat == 0) {\r\n\r\n            this.data = window.setTimeout(this.config.callback.bind(this.config.callbackScope), this.config.delay);\r\n\r\n        }\r\n\r\n\r\n        this.isRunning = true;\r\n    }\r\n\r\n    _fixConfig(config) {\r\n        if (typeof config !== \"object\") {\r\n            config = {\r\n                delay: 100,\r\n                callback: function() {},\r\n                callbackScope: null,\r\n                repeat: 0\r\n            };\r\n        }else {\r\n            if (typeof config.delay !== \"number\") {\r\n                config.delay = 100;\r\n            }\r\n            if (typeof config.callback !== \"function\") {\r\n                callback.callback = function() {};\r\n            }\r\n            if (typeof config.callbackScope === \"undefined\") {\r\n                config.callbackScope = null;\r\n            }\r\n            if (typeof config.repeat !== \"number\") {\r\n                config.repeat = 0;\r\n            }\r\n        }\r\n\r\n        return config;\r\n    }\r\n\r\n    start() {\r\n        if (this.isRunning) {\r\n            return;\r\n        }\r\n\r\n        this.isRunning = true;\r\n    }\r\n\r\n    stop() {\r\n        if (!this.isRunning) {\r\n            return;\r\n        }\r\n\r\n        this.isRunning = false;\r\n\r\n        if (this.config.repeat === 0) {\r\n            this.data = window.clearTimeout(this.data);\r\n\r\n        }else {\r\n            this.data = window.clearInterval(this.data);\r\n        }\r\n    }\r\n}\r\n\r\nmodule.exports = Event;\n\n//# sourceURL=webpack:///./Time/Event.js");

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

eval("\r\nclass List extends Array {\r\n    constructor(...items) {\r\n        super(...items);\r\n\r\n        this.items = items;\r\n    }\r\n\r\n    add(value) {\r\n        this.push(value);\r\n        this.items.push(value);\r\n    }\r\n\r\n    remove(index) {\r\n        if (typeof index === \"undefined\") {\r\n            index = \"first\";\r\n        }\r\n\r\n        if (index === \"last\") {\r\n            index = (this.length - 1);\r\n        }\r\n\r\n        if (index === \"first\") {\r\n            index = 0;\r\n        }\r\n\r\n        if (index === \"random\") {\r\n            index = Hoot.Math.random(0, (this.length - 1), 0);\r\n        }\r\n\r\n        this.splice(index, 1);\r\n        this.items.splice(index, 1);\r\n    }\r\n\r\n    clear() {\r\n        this.splice(0, this.length);\r\n        this.items = [];\r\n    }\r\n\r\n    get(index) {\r\n        if (typeof index === \"undefined\") {\r\n            index = \"first\";\r\n        }\r\n\r\n        if (index === \"last\") {\r\n            index = (this.length - 1);\r\n        }\r\n\r\n        if (index === \"first\") {\r\n            index = 0;\r\n        }\r\n\r\n        if (index === \"random\") {\r\n            index = Hoot.Math.random(0, (this.length - 1), 0);\r\n        }\r\n\r\n        return this[index];\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = List;\n\n//# sourceURL=webpack:///./Utils/List.js");

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

eval("/* WEBPACK VAR INJECTION */(function(global) {\r\nconst Hoot = {\r\n    //Files\r\n    Engine: __webpack_require__(/*! ./Engine */ \"./Engine.js\"),\r\n    Events: __webpack_require__(/*! ./Events */ \"./Events.js\"),\r\n    Loader: __webpack_require__(/*! ./Loader */ \"./Loader.js\"),\r\n    Scene: __webpack_require__(/*! ./Scene */ \"./Scene.js\"),\r\n    //Folders\r\n    Cameras: __webpack_require__(/*! ./Cameras */ \"./Cameras/index.js\"),\r\n    DOM: __webpack_require__(/*! ./DOM */ \"./DOM/index.js\"),\r\n    GameObjects: __webpack_require__(/*! ./GameObjects */ \"./GameObjects/index.js\"),\r\n    Load: __webpack_require__(/*! ./Load */ \"./Load/index.js\"),\r\n    Math: __webpack_require__(/*! ./Math */ \"./Math/index.js\"),\r\n    Network: __webpack_require__(/*! ./Network */ \"./Network/index.js\"),\r\n    //Scenes: require(\"./Scenes\"),\r\n    Stored: __webpack_require__(/*! ./Stored */ \"./Stored/index.js\"),\r\n    Time: __webpack_require__(/*! ./Time */ \"./Time/index.js\"),\r\n    Utils: __webpack_require__(/*! ./Utils */ \"./Utils/index.js\")\r\n};\r\n\r\nmodule.exports = Hoot;\r\nglobal.Hoot = Hoot;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ \"../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./hoot.js");

/***/ })

/******/ });
});