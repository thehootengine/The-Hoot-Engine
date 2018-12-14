
class Engine {
    constructor(name) {
        this.name = name;
        this.events = new Hoot.Events("engine-" + this.name);

        this.events.on("ready", function(event) {
            console.log("Engine Ready");
        }, this);

        this.events.emit("ready", { engine: this });
    }

}

module.exports = Engine;