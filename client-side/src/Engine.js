
class Engine {
    constructor(name) {
        this.name = name;
        this.events = new Hoot.Events("engine-" + this.name);

        this.displays = new Hoot.Utils.List();
        this.loaders = new Hoot.Utils.List();
        this.scenes = new Hoot.Utils.List();

        this.events.emit("ready", { engine: this });
    }

    addDisplay(display) {
        if (display instanceof Hoot.DOM.Display) {
            this.displays.add(display);
        }
    }

    addLoader(loader) {
        if (loader instanceof Hoot.Loader) {
            this.loaders.add(loader);
        }
    }

    addScene(scene) {
        if (scene instanceof Hoot.Scene) {
            this.scenes.add(scene);
        }
    }
}

module.exports = Engine;