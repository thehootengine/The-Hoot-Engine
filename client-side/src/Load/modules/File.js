

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