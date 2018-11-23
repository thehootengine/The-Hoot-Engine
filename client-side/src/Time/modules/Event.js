
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