
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