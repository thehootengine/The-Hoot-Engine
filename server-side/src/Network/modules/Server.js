
const express = require("express");
const fs = require("fs");
const path = require("path");

class Server {
    constructor(engine) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.events = new Hoot.Core.Events();

        this.config = null;
        this.app = express();

        this.view = null;
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

    init() {
        if (this.hasEngine) {
            if (this.engine.enabled) {
                if (this.engine.status === "ready") {
                    this._init();
                }else {
                    this.engine.on("ready", function() {
                        this._init();
                    }.bind(this));
                }
            }
        }
    }

    _init() {
        this.config = this.engine.config;

        for (let i in this.config.client.views) {
            if (this.config.client.views[i].default) {
                this.view = this.config.client.views[i];
            }
        }

        this.app.use(express.static(this.config.client.basePath));

        this.app.get('/', function(req, res) {
            res.sendFile(path.join(this.config.client.basePath, this.currentView.path), { root: path.resolve('./') });
        }.bind(this));
    }

    start() {
        if (this.hasEngine) {
            if (this.engine.enabled) {
                if (this.engine.status === "ready") {
                    this._start();
                }else {
                    this.engine.on("ready", function() {
                        this._start();
                    }.bind(this));
                }
            }
        }
    }

    _start() {
        this.app.listen(this.config.server.port);
        console.log("Server running: http://localhost:" + this.config.server.port.toString());

        this.events.emit("started", { server: this });
    }
}

module.exports = Server;