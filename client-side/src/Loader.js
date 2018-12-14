
class Loader {
    constructor(name, engine) {
        this.name = name;
        this.events = new Hoot.Events("loader-" + this.name);

        this.engine = null;
        if (engine instanceof Hoot.Engine) {
            this.engine = engine;
        }

        this.basePath = "./";

        this.status = "WAITING";

        this.queue = new Hoot.Utils.List();
        this.currentFile = null;
        this.loaded = new Hoot.Utils.List();

        this.images = new Hoot.Utils.List();

        this.canUse = false;
    }

    preLoad() {
        if (this.queue.length <= 0) {
            this.canUse = false;
        }
    }

    load() {
        if (this.queue.length > 0) {
            this.currentFile = this.queue.get("last");
            this.currentFile.load();

            this.currentFile.events.on("loaded", function(event) {
                this.loaded.add(event.image);

                if (this.queue.length <= 0) {
                    this.events.emit("complete", { loader: this });
                }
            }, this);

            this.queue.remove("last");
        }
    }

    postLoad() {
        if (this.queue.length <= 0) {
            this.canUse = true;
        }
    }

    start() {
        this.preLoad();
        this.load();
        this.postLoad();
    }

    /*
     * Load different file types
     */
    loadImage(key, path, config) {
        this.queue.add(new Hoot.Load.ImageFile(this, key, path, config));
        this.images.add(this.queue.get("last"));
    }

    get(key) {
        if (typeof key !== "string") {
            return false;
        }

        for (let i in this.loaded.array) {
            if (this.loaded.array[i].key === key) {
                return this.loaded.get(i).data;
            }
        }
    }
}

module.exports = Loader;