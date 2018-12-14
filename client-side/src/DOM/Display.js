

class Display {
    constructor(name, engine, config) {
        this.name = name;
        this.events = new Hoot.Events("display-" + this.name);

        this.engine = null;
        if (engine instanceof Hoot.Engine) {
            this.engine = engine;
        }

        this.config = this._fixConfig(config);

        this.parent = null;
        this.size = {
            width: null,
            height: null
        };
        this.scale = {
            x: 1,
            y: 1
        };

        this.smoothingEnabled = null;

        this.canvas = null;
        this.context = null;

        this.events.on("config-loaded", function(event) {
            this.parent = this.config.parent;
            this.size.width = this.config.width;
            this.size.height = this.config.height;
            this.smoothingEnabled = this.config.smoothingEnabled;

            if (document.readyState === "complete") {
                this.init();
            }else {
                window.onload = function() {
                    this.init();
                }.bind(this);
            }
        }, this);

        this.events.on("ready", function(event) {
            console.log("Display Ready");
        }, this);

        this.events.emit("config-loaded", { config: this.config });
    }

    init() {
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.size.width;
        this.canvas.height = this.size.height;
        this.context = this.canvas.getContext("2d");
        this.context.translate(0.5, 0.5);
        this.context.scale(this.scale.x, this.scale.y);

        this.context.imageSmoothingEnabled = this.smoothingEnabled;

        if (this.parent === document.body) {
            document.body.appendChild(this.canvas);
        }else {
            document.getElementById(this.parent).appendChild(this.canvas);
        }

        this.events.emit("ready", { display: this });
    }

    _fixConfig(config) {
        if (typeof config !== "object") {
            config = {
                parent: document.body,
                width: 960,
                height: 720,
                smoothingEnabled: true
            };
        }else {
            if (typeof config.parent !== "string") {
                config.parent = document.body;
            }
            if (typeof config.width !== "number") {
                config.width = 960;
            }
            if (typeof config.height !== "number") {
                config.height = 720;
            }
            if (typeof config.smoothingEnabled !== "boolean") {
                config.smoothingEnabled = true;
            }
        }

        return config;
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
