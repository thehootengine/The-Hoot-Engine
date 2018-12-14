
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

        this.events = new Hoot.Events();

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
                    this._init2();
                }else {
                    this.engine.on("ready", function() {
                        this._init2();
                    }.bind(this));
                }
            }
        }
    }

    _init2() {
        this.config = this.engine.config;

        //Check to see if there are views in the config
        let hasViews = false;
        if (this.config.client.views.length > 0) {
            hasViews = true;
        }

        //Test to see if there is a default view
        let hasDefault = false;
        for (let j in this.config.client.views) {
            if (this.config.client.views[j].default) {
                hasDefault = true;
            }
        }

        //If there's no default view then set the first view in the array to default
        if (hasViews) {
            if (!hasDefault) {
                console.log(this.config.client.views[0]);
                this.config.client.views[0].default = true;
            }
        }



        /*
         * Routing
         */
        for (let i in this.config.client.views) {

            if (this.config.client.views[i].default) {
                this.app.get('/', function (req, res) {
                    res.sendFile(path.join(this.config.client.basePath, this.config.client.views[i].path), {root: path.resolve('./')});
                }.bind(this));
            }else {
                this.app.get('/' + this.config.client.views[i].name, function (req, res) {
                    res.sendFile(path.join(this.config.client.basePath, this.config.client.views[i].path), {root: path.resolve("./")});
                }.bind(this));
            }

        }

        this.app.use(express.static(this.config.client.basePath));

    }

    start() {
        if (this.hasEngine) {
            if (this.engine.enabled) {
                if (this.engine.status === "ready") {
                    this._start2();
                }else {
                    this.engine.on("ready", function() {
                        this._start2();
                    }.bind(this));
                }
            }
        }
    }

    _start2() {
        this.app.listen(this.config.server.port);
        console.log("Server running: http://localhost:" + this.config.server.port.toString());

        this.events.emit("started", { server: this });
    }
}

module.exports = Server;