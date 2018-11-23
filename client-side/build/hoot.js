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

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./Cameras/index.js":
/*!**************************!*\
  !*** ./Cameras/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const Cameras = {
    Camera2d: __webpack_require__(/*! ./modules/Camera2d */ "./Cameras/modules/Camera2d.js")
};

module.exports = Cameras;

/***/ }),

/***/ "./Cameras/modules/Camera2d.js":
/*!*************************************!*\
  !*** ./Cameras/modules/Camera2d.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



class Camera2d {
    constructor(engine) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.perspective = {
            x: 0,
            y: 0,
            width: 960,
            height: 720
        };

        if (this.hasEngine) {
            this.perspective.width = this.engine.getDisplay().getWidth();
            this.perspective.height = this.engine.getDisplay().getHeight();
        }

        this.target = target;

        this.rendered = new Hoot.Utils.List();
    }

    setTarget(target) {
        if (!(target instanceof Hoot.GameObjects.Sprite)) {
            return false;
        }
        this.target = target;
    }

    add(gameObject) {
        if (!(gameObject instanceof Hoot.GameObjects)) {
            return false;
        }

        this.rendered.add(gameObject);
    }

    tick() {

    }

    render() {

    }
}

module.exports = Camera2d;

/***/ }),

/***/ "./Core/index.js":
/*!***********************!*\
  !*** ./Core/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const Core = {
    Engine: __webpack_require__(/*! ./modules/Engine */ "./Core/modules/Engine.js"),
    Event: __webpack_require__(/*! ./modules/Event */ "./Core/modules/Event.js"),
    Events: __webpack_require__(/*! ./modules/Events */ "./Core/modules/Events.js"),
    Loader: __webpack_require__(/*! ./modules/Loader */ "./Core/modules/Loader.js")
};

module.exports = Core;



/***/ }),

/***/ "./Core/modules/Engine.js":
/*!********************************!*\
  !*** ./Core/modules/Engine.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



class Engine {
    constructor(config) {
        this.config = null;
        if (typeof config === "string") {
            let xhttp = new XMLHttpRequest();
            xhttp.onload = function() {
                this.config = this.fixConfig(JSON.parse(xhttp.responseText));
                new Hoot.Core.Event("hoot-engine-config-loaded", {}).dispatch();
            }.bind(this);
            xhttp.open("GET", config);
            xhttp.send(null);
        }else {
            this.config = this.fixConfig(config);
            new Hoot.Core.Event("hoot-engine-config-loaded", {}).dispatch();
        }

        this.display = null;
        Hoot.Core.Events.addListener("hoot-engine-config-loaded", function(event) {
            Hoot.Core.Events.addListener("hoot-display-loaded", function(event2) {
                this.display = event2.display;
                new Hoot.Core.Event("hoot-loaded", { engine: this }).dispatch();
            }, this);

            this.display = new Hoot.DOM.Display(this, this.config.parent, this.config.width, this.config.height, {
                smoothingEnabled: this.config.renderer.smoothingEnabled
            });
        }, this);


        this.loader = new Hoot.Core.Loader(this);
        this.time = new Hoot.Time.Manager(this);
        this.scene = new Hoot.Scenes.Manager(this);

    }

    fixConfig(config) {
        if (typeof config !== "object") {
            config = {
                title: "",
                author: "",
                version: "1.0.0",
                description: "",
                parent: "",
                scale: {
                    width: 960,
                    height: 720,
                    mode: "DEFAULT"
                },
                renderer: {
                    smoothing: true
                }
            };
        }else {
            // TODO Put all configuration values that will need to be set and FIXED here!
            if (typeof config.title !== "string") {
                config.title = "";
            }
            if (typeof config.author !== "string") {
                config.author = "";
            }
            if (typeof config.version !== "string") {
                config.version = "1.0.0";
            }
            if (typeof config.description !== "string") {
                config.description = "";
            }
            if (typeof config.parent !== "string") {
                config.parent = "";
            }
            if (typeof config.scale !== "object") {
                config.scale = {
                    width: 960,
                    height: 720,
                    mode: "DEFAULT"
                };
            } else {
                if (typeof config.scale.width !== "number") {
                    config.scale.width = 960;
                }
                if (typeof config.scale.height !== "number") {
                    config.scale.height = 720;
                }
                if (typeof config.scale.mode !== "string") {
                    config.scale.mode = "DEFAULT";
                }
            }
            if (typeof config.renderer !== "object") {
                config.renderer = {
                    smoothingEnabled: true
                };
            } else {
                if (typeof config.renderer.smoothingEnabled !== "boolean") {
                    config.renderer.smoothingEnabled = true;
                }
            }
        }

        return config;
    }


    getDisplay() {
        return this.display;
    }

    getLoader() {
        return this.loader;
    }
}

module.exports = Engine;

/***/ }),

/***/ "./Core/modules/Event.js":
/*!*******************************!*\
  !*** ./Core/modules/Event.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Event extends CustomEvent {
    constructor(eventName, options) {
        super(eventName, { detail: options });

        this.name = eventName;
        this.options = options;
    }

    dispatch() {
        document.dispatchEvent(this);
    }
}

module.exports = Event;

/***/ }),

/***/ "./Core/modules/Events.js":
/*!********************************!*\
  !*** ./Core/modules/Events.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Events {
    static addListener(eventName, callback, callbackScope) {
        if (typeof eventName !== "string") {
            console.error("Hoot: Could not add event listener with 'eventName' of undefined!");
            return false;
        }
        if (typeof callback !== "function") {
            console.error("Hoot: There is no event listener's 'callback'");
            return false;
        }
        if (typeof callbackScope === "undefined") {
            callbackScope = null;
        }
        let callback2 = callback.bind(callbackScope);
        document.addEventListener(eventName, function(event) {
            callback2(event.detail);
        });
    }
}

module.exports = Events;

/***/ }),

/***/ "./Core/modules/Loader.js":
/*!********************************!*\
  !*** ./Core/modules/Loader.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Loader {
    constructor(engine) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.status = "WAITING";

        this.queue = new Hoot.Utils.List();
        this.loading = null;
        this.loaded = new Hoot.Utils.List();

        this.canUse = false;
        this.alreadyLoaded = false;

        Hoot.Core.Events.addListener("hoot-loader-add-callback", function(event) {
            this.preload(event.callback, event.caller);
        }, this);
    }

    preload(callback, caller) {
        if (typeof callback !== "function") {
            return false;
        }

        callback.call(this);

        this.start(caller);
    }

    load(file) {
        if (!file instanceof Hoot.Load.File) {
            return false;
        }

        if (!this.alreadLoaded) {
            this.queue.add(file);
        }
    }

    start(caller) {
        if (this.queue.length <= 0) {
            console.log("Hoot: Loader Complete");
            this.status = "COMPLETE";
            this.canUse = true;
            this.alreadyLoaded = true;

            new Hoot.Core.Event("hoot-loader-complete", { caller: caller, loader: this }).dispatch();
        }else if (this.queue.length >= 1) {
            this.status = "LOADING";

            this.loading = this.queue.get("last");
            this.queue.remove("last");

            this.loading.load();

            Hoot.Core.Events.addListener("hoot-loader-file-complete", function(event) {
                if (event.file === this.loading) {
                    this.loading = null;

                    this.loaded.add(event.file);

                    this.start();
                }
            }, this);
        }
    }

    get(key) {
        if (typeof key !== "string") {
            return false;
        }

        for (let i in this.loaded.array) {
            if (this.loaded.array[i].key === key) {
                return this.loaded.get(i).data;
            }
        }
    }
}

module.exports = Loader;

/***/ }),

/***/ "./DOM/index.js":
/*!**********************!*\
  !*** ./DOM/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const DOM = {
    Display: __webpack_require__(/*! ./modules/Display */ "./DOM/modules/Display.js")
};

module.exports = DOM;

/***/ }),

/***/ "./DOM/modules/Display.js":
/*!********************************!*\
  !*** ./DOM/modules/Display.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



class Display {
    constructor(engine, parent, width, height, options) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.parent = parent || null;
        this.options = options || {};

        this.size = {
            width: width || 960,
            height: height || 720
        };

        this.scale = {
            x: 1,
            y: 1
        };

        this.canvas = null;
        this.context = null;
        if (document.readyState === "complete") {
            this.init();
        }else {
            window.onload = function() {
                this.init();
            }.bind(this);
        }

    }

    init() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
        this.context = this.canvas.getContext("2d");
        this.context.translate(0.5, 0.5);
        this.context.scale(this.scale.x, this.scale.y);

        if (typeof this.options.smoothingEnabled === "boolean") {
            this.context.imageSmoothingEnabled = this.options.smoothingEnabled;
        }

        if (typeof this.parent !== "string") {
            document.body.appendChild(this.canvas);
        }else {
            document.getElementById(this.parent).appendChild(this.canvas);
        }

        new Hoot.Core.Event("hoot-display-loaded", { display: this }).dispatch();
    }

    getWidth() {
        return this.size.width;
    }

    getHeight() {
        return this.size.height;
    }

    getCanvas() {
        return this.canvas;
    }

    getContext() {
        return this.context;
    }
}

module.exports = Display;


/***/ }),

/***/ "./GameObjects/index.js":
/*!******************************!*\
  !*** ./GameObjects/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const GameObjects = {
    Sprite: __webpack_require__(/*! ./modules/Sprite */ "./GameObjects/modules/Sprite.js")
};

module.exports = GameObjects;

/***/ }),

/***/ "./GameObjects/modules/Sprite.js":
/*!***************************************!*\
  !*** ./GameObjects/modules/Sprite.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



class Sprite {
    constructor(engine, x, y, texture, frame) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.position = {
            x: x,
            y: y
        };

        this.texture = texture;
        this.frame = frame;

        this.scroll = {
            x: x,
            y: y
        };
    }

    tick() {

    }

    render() {
        this.engine.getDisplay().getContext().drawImage(this.texture.data, this.scroll.x, this.scroll.y, this.texture.data.width, this.texture.data.height);
    }
}

module.exports = Sprite;

/***/ }),

/***/ "./Load/index.js":
/*!***********************!*\
  !*** ./Load/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {



const Load = {
    File: __webpack_require__(/*! ./modules/File */ "./Load/modules/File.js")
};

module.exports = Load;

/***/ }),

/***/ "./Load/modules/File.js":
/*!******************************!*\
  !*** ./Load/modules/File.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



class File {
    constructor(key, path, options) {
        this.key = key || "";
        this.path = path || "";
        this.options = options || {};

        this.extension = this.path.split(".").pop();
        this.type = null;

        this.data = null;

        this.init();
    }

    init() {
        if (this.extension === "png" || this.extension === "jpg" || this.extension === "jpeg") {
            this.type = "image";
        }else if (this.extension === "mp3" || this.extension === "wav" || this.extension === "ogg") {
            this.type = "audio";
        }else if (this.extension === "js") {
            this.type = "script";
        }else {
            this.type = "unknown";
        }
    }

    load() {
        this.data = new Image();
        this.data.src = this.path;

        this.data.onload = function() {
            let event = new Hoot.Core.Event("hoot-loader-file-complete", { file: this }).dispatch();
        }.bind(this);
    }

    on(eventName, callback, callbackScope) {
        if (typeof eventName !== "string") {
            return false;
        }
        if (typeof callback !== "function") {
            return false;
        }
        const callback2 = callback.bind(callbackScope || null);
        if (eventName === "complete") {
            Hoot.Core.Events.addListener("hoot-loader-file-complete", function(event) {
                if (event.data === this) {
                    callback2();
                }
            }, this);
        }
    }
}

module.exports = File;

/***/ }),

/***/ "./Network/index.js":
/*!**************************!*\
  !*** ./Network/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const Network = {
    Server: __webpack_require__(/*! ./modules/Server */ "./Network/modules/Server.js"),
    Client: __webpack_require__(/*! ./modules/Client */ "./Network/modules/Client.js")
};

module.exports = Network;

/***/ }),

/***/ "./Network/modules/Client.js":
/*!***********************************!*\
  !*** ./Network/modules/Client.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Client {
    constructor(engine) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }


    }

    createAction(text) {
        let data = new Blob([text], { type: 'text/plain' });

        let textFile = window.URL.createObjectURL(data);
    }
}

module.exports = Client;

/***/ }),

/***/ "./Network/modules/Server.js":
/*!***********************************!*\
  !*** ./Network/modules/Server.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {




class Server {
    constructor(engine, url) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.connectionTries = 3;
        this.connectionTryDelay = 5000;

        this.local = true;

        this.url = url || "localhost:8000";

        this.socket = false;
        this.connect();

        this.socket.addEventListener("error", function(event) {
            if (this.connectionTries > 0) {
                this.connectionTries -= 1;

                console.error("Hoot Server: Connection Failed - Retrying in " + this.connectionTryDelay + "ms");

                window.setTimeout(this.connect(), this.connectionTryDelay);
            }else {
                console.error("Hoot Server: Connection Failed")
            }
        }.bind(this));
    }

    connect() {
        this.socket = new WebSocket(this.url);
        console.log(this.socket);
    }
}

module.exports = Server;

/***/ }),

/***/ "./Scenes/index.js":
/*!*************************!*\
  !*** ./Scenes/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {



const Scenes = {
    Scene: __webpack_require__(/*! ./modules/Scene */ "./Scenes/modules/Scene.js"),
    Manager: __webpack_require__(/*! ./modules/Manager */ "./Scenes/modules/Manager.js")
};

module.exports = Scenes;

/***/ }),

/***/ "./Scenes/modules/Manager.js":
/*!***********************************!*\
  !*** ./Scenes/modules/Manager.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Manager {
    constructor(engine) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.scenes = new Hoot.Utils.List();

        this.current = {
            scene: null
        };
    }

    add(scene) {
        if (!(scene instanceof Hoot.Scenes.Scene)) {
            return false;
        }

        this.scenes.add(scene);
    }

    start(name) {
        if (typeof key !== "string") {
            if (this.scenes.length >= 1) {
                name = this.scenes.get(0).name;
            }else {
                return false;
            }
        }

        for (let i in this.scenes.array) {
            if (this.scenes.get(i).name === name) {
                this.scenes.get(i).start();

                this.current.scene = this.scenes.get(i);
            }
        }
    }

    stop() {
        for (let i in this.scenes.array) {
            this.scenes.get(i).stop();
        }
    }
}

module.exports = Manager;

/***/ }),

/***/ "./Scenes/modules/Scene.js":
/*!*********************************!*\
  !*** ./Scenes/modules/Scene.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Scene {
    constructor(engine, name, callbacks) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.callbacks = callbacks || {
            init: function() {},
            preload: function() {},
            create: function() {},
            tick: function() {},
            render: function() {}
        };

        this.isRunning = false;
    }

    start(data) {
        if (this.isRunning) {
            return false;
        }

        if (this.hasEngine) {
            this.callbacks.init(data);

            new Hoot.Core.Event("hoot-loader-add-callback", { callback: this.callbacks.preload, caller: this }).dispatch();

            Hoot.Core.Events.addListener("hoot-loader-complete", function(event) {
                //if (event.caller === this) {
                    this.callbacks.create(data);

                    this.isRunning = true;

                    this.engine.time.addAnimationFrameCallback(this.callbacks.tick(data), null);
                    this.engine.time.addAnimationFrameCallback(this.callbacks.render(data), null);
                //}
            }, this);
        }
    }

    stop() {
        if (!this.isRunning) {
            return false;
        }

        this.isRunning = false;

        this.engine.time.removeAnimationFrameCallback(this.callbacks.tick, this.engine);
        this.engine.time.removeAnimationFrameCallback(this.callbacks.render, this.engine);
    }
}

module.exports = Scene;

/***/ }),

/***/ "./Stored/index.js":
/*!*************************!*\
  !*** ./Stored/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const Stored = {
    Number: __webpack_require__(/*! ./modules/Number */ "./Stored/modules/Number.js")
};

module.exports = Stored;

/***/ }),

/***/ "./Stored/modules/Number.js":
/*!**********************************!*\
  !*** ./Stored/modules/Number.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Number {
    constructor(name, value) {
        this.name = name || "hoot-unknown";
        this.value = value || 0;

        if (this.exists()) {
            this.value = this.get();
        }else {
            localStorage.setItem(this.name, this.value);
        }
    }

    get() {
        return localStorage.getItem(this.name);
    }

    set(value) {
        if (typeof value !== "number") {
            return false;
        }

        this.value = value || this.value;

        localStorage.setItem(this.name, this.value);
    }

    exists() {
        if (this.get() === null) {
            return false;
        }else {
            return true;
        }
    }
}

module.exports = Number;

/***/ }),

/***/ "./Time/index.js":
/*!***********************!*\
  !*** ./Time/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const Time = {
    Event: __webpack_require__(/*! ./modules/Event */ "./Time/modules/Event.js"),
    Loop: __webpack_require__(/*! ./modules/Loop */ "./Time/modules/Loop.js"),
    Manager: __webpack_require__(/*! ./modules/Manager */ "./Time/modules/Manager.js")
};

module.exports = Time;

/***/ }),

/***/ "./Time/modules/Event.js":
/*!*******************************!*\
  !*** ./Time/modules/Event.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Event {
    constructor(delay, callback, callbackScope, engine) {
        if (typeof delay !== "number") {
            delay = 1000;
        }
        if (typeof callback !== "function") {
            callback = function() {};
        }
        this.delay = delay;
        this.callback = callback.bind(callbackScope || null);
        this.engine = engine || null;

        this.data = null;
        this.running = false;
    }

    start() {
        if (this.running) {
            return;
        }

        this.data = window.setTimeout(this.callback, this.delay);
        this.running = true;
    }

    stop() {
        if (!this.running) {
            return;
        }

        window.clearTimeout(this.data);
        this.data = null;
        this.running = false;
    }
}

module.exports = Event;

/***/ }),

/***/ "./Time/modules/Loop.js":
/*!******************************!*\
  !*** ./Time/modules/Loop.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Loop {
    constructor(delay, callback, callbackScope, autoStart, engine) {
        if (typeof delay !== "number") {
            delay = 1000;
        }
        if (typeof callback !== "function") {
            callback = function() {};
        }
        if (typeof autoStart !== "boolean") {
            autoStart = true;
        }
        this.delay = delay;
        this.callback = callback.bind(callbackScope || null);
        this.callbackScope = callbackScope || null;
        this.engine = engine || null;

        this.data = null;
        this.running = false;

        if (autoStart) {
            this.start();
        }
    }

    start() {
        if (this.running) {
            return;
        }

        this.data = window.setInterval(this.callback, this.delay);
        this.running = true;
    }

    stop() {
        if (!this.running) {
            return;
        }

        window.clearInterval(this.data);
        this.data = null;
        this.running = false;
    }
}

module.exports = Loop;

/***/ }),

/***/ "./Time/modules/Manager.js":
/*!*********************************!*\
  !*** ./Time/modules/Manager.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {


class Manager {
    constructor(engine) {

        this.engine = engine || null;
        if (this.engine === null) {
            new Hoot.Core.Event("hoot-engine-handler-requestEngine", { data: this }).dispatch();
            this.hasEngine = false;
        }else {
            this.hasEngine = true;
        }

        this.animationFrameCallbacks = new Hoot.Utils.List();
    }

    addAnimationFrameCallback(callback) {
        this.animationFrameCallbacks.add(callback);
    }

    removeAnimationFrameCallback(callback) {
        for (let i in this.animationFrameCallbacks.array) {
            if (this.animationFrameCallbacks.array[i] === callback) {
                this.animationFrameCallbacks.remove(i);
            }
        }
    }

    animationFrame() {
        for (let i in this.animationFrameCallbacks.array) {
            this.animationFrameCallbacks.array[i].bind(null).call(null);
        }

        window.requestAnimationFrame(this.animationFrame);
    }
}

module.exports = Manager;

/***/ }),

/***/ "./Utils/index.js":
/*!************************!*\
  !*** ./Utils/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


const Utils = {
    List: __webpack_require__(/*! ./modules/List */ "./Utils/modules/List.js")
};

module.exports = Utils;

/***/ }),

/***/ "./Utils/modules/List.js":
/*!*******************************!*\
  !*** ./Utils/modules/List.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


class List {
    constructor(array) {
        this.array = array || [];

        this.length = this.array.length;
    }

    add(value) {
        this.array.push(value);

        this.length = this.array.length;
    }

    remove(index) {
        if (index === "last") {
            index = (this.array.length - 1);
        }
        let array = this.array;
        this.array = [];

        for (let i in array) {
            if (i != (index)) {
                this.array.push(array[i]);
            }
        }

        this.length = this.array.length;
    }

    get(index) {
        if (index === "last") {
            index = (this.array.length - 1);
        }
        return this.array[index];
    }

}

module.exports = List;

/***/ }),

/***/ "./hoot.js":
/*!*****************!*\
  !*** ./hoot.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
const Hoot = {
    Cameras: __webpack_require__(/*! ./Cameras */ "./Cameras/index.js"),
    Core: __webpack_require__(/*! ./Core */ "./Core/index.js"),
    DOM: __webpack_require__(/*! ./DOM */ "./DOM/index.js"),
    GameObjects: __webpack_require__(/*! ./GameObjects */ "./GameObjects/index.js"),
    Load: __webpack_require__(/*! ./Load */ "./Load/index.js"),
    Network: __webpack_require__(/*! ./Network */ "./Network/index.js"),
    Scenes: __webpack_require__(/*! ./Scenes */ "./Scenes/index.js"),
    Stored: __webpack_require__(/*! ./Stored */ "./Stored/index.js"),
    Time: __webpack_require__(/*! ./Time */ "./Time/index.js"),
    Utils: __webpack_require__(/*! ./Utils */ "./Utils/index.js")
};

module.exports = Hoot;
global.Hoot = Hoot;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ })

/******/ });
});
//# sourceMappingURL=hoot.js.map