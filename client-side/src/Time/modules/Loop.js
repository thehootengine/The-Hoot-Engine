
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