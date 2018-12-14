
class Events {
    constructor(name) {
        this.name = name;
    }

    on(name, callback, callbackScope) {
        let callback2 = callback.bind(callbackScope || null);
        document.addEventListener(this.name + "-" + name, function(event) {
            callback2(event.detail);
        });
    }

    emit(name, options) {
        let eventName = this.name + "-" + name;
        let event = new CustomEvent(eventName, { detail: options });
        event.initEvent(eventName, true, true);
        document.dispatchEvent(event);
    }

}

module.exports = Events;