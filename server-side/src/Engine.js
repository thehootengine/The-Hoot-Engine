
const fs = require("fs");
const path = require("path");

class Engine {
    constructor(config) {
        this.enabled = true;
        if (typeof config !== "string" && typeof config !== "object") {
            console.log("Hoot: No 'package.json' file path supplied");
            this.enabled = false;
        }
        this.events = new Hoot.Events();

        this.status = "working";

        this.config = null;
        if (this.enabled) {
            if (typeof config === "string") {
                fs.readFile(config, "utf-8", function(err, data) {
                    if (err) {
                        throw err;
                    }

                    data = JSON.parse(data);
                    this.config = this._fixConfig(data);

                    this.events.emit("config-loaded", { config: this.config });
                }.bind(this));
            }else if (typeof config === "object") {
                this.config = this._fixConfig(config);

                this.events.emit("config-loaded", { config: this.config });
            }
        }

        this.server = new Hoot.Network.Server(this);
        this.on("config-loaded", function(event) {
            this.status = "ready";

            this.server.init();
            this.server.start();

            this.events.emit("ready", { engine: this });
        }.bind(this));

    }

    on(eventName, callback) {
        if (typeof eventName !== "string") {
            return false;
        }
        if (typeof callback !== "function") {
            return false;
        }

        this.events.on(eventName, callback);
    }

    _fixConfig(config) {
        if (typeof config !== "object") {
            config = {
                server: {
                    port: 8080,
                    local: true
                },
                client: {
                    basePath: "",
                    views: []
                }
            };
        }else {
            if (typeof config.server !== "object") {
                config.server = {
                    port: 8080,
                    local: true
                };
            }else {
                if (typeof config.server.port !== "number") {
                    config.server.port = 8080;
                }
                if (typeof config.server.local !== "boolean") {
                    config.server.local = true;
                }
            }

            if (typeof config.client !== "object") {
                config.client = {
                    basePath: "",
                    views: []
                };
            }else {
                if (typeof config.client.basePath !== "string") {
                    config.client.basePath = "";
                }
                if (typeof config.client.views !== "object") {
                    config.client.views = [];
                }
            }
        }
        return config;
    }
}

module.exports = Engine;