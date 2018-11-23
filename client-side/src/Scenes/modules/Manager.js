
class Manager {
    constructor(engine) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.scenes = new Hoot.Utils.List();

        this.current = {
            scene: null
        };
    }

    add(scene) {
        if (!(scene instanceof Hoot.Scenes.Scene)) {
            return false;
        }

        this.scenes.add(scene);
    }

    start(name) {
        if (typeof key !== "string") {
            if (this.scenes.length >= 1) {
                name = this.scenes.get(0).name;
            }else {
                return false;
            }
        }

        for (let i in this.scenes.array) {
            if (this.scenes.get(i).name === name) {
                this.scenes.get(i).start();

                this.current.scene = this.scenes.get(i);
            }
        }
    }

    stop() {
        for (let i in this.scenes.array) {
            this.scenes.get(i).stop();
        }
    }
}

module.exports = Manager;