
class Event {
    constructor(config) {
        this.config = this._fixConfig(config);

        this.data = null;
        this.repeated = 0;

        if (this.config.repeat == -1) {
            this.data = window.setInterval(this.config.callback.bind(this.config.callbackScope), this.config.delay);
        }else if (this.config.repeat > 0) {
            this.data = window.setInterval(function() {
                if (this.repeated <= this.config.repeat) {
                    this.config().callback.bind(this.config.callbackScope);
                }else {
                    this.stop();
                }

                this.repeated += 1;
            }.bind(this), this.config.delay);
        }else if (this.config.repeat == 0) {
            this.data = window.setTimeout(this.config.callback.bind(this.config.callbackScope), this.config.delay);
        }


        this.isRunning = true;
    }

    _fixConfig(config) {
        if (typeof config !== "object") {
            config = {
                delay: 100,
                callback: function() {},
                callbackScope: null,
                repeat: 0
            };
        }else {
            if (typeof config.delay !== "number") {
                config.delay = 100;
            }
            if (typeof config.callback !== "function") {
                callback.callback = function() {};
            }
            if (typeof config.callbackScope === "undefined") {
                config.callbackScope = null;
            }
            if (typeof config.repeat !== "number") {
                config.repeat = 0;
            }
        }

        return config;
    }

    start() {
        if (this.isRunning) {
            return;
        }

        this.isRunning = true;
    }

    stop() {
        if (!this.isRunning) {
            return;
        }

        this.isRunning = false;

        if (this.config.repeat === 0) {
            this.data = window.clearTimeout(this.data);
        }else {
            this.data = window.clearInterval(this.data);
        }
    }
}

module.exports = Event;