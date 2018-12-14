
class Loader {
    constructor(name, engine) {
        this.name = name;
        this.events = new Hoot.Events("loader-" + this.name);

        if (engine instanceof Hoot.Engine) {
            this.engine = engine;

            this.engine.addLoader(this);
        }

        this.basePath = "./";

        this.status = "WAITING";

        this.queue = new Hoot.Utils.List();
        this.currentFile = null;
        this.loaded = new Hoot.Utils.List();

        this.images = new Hoot.Utils.List();
        this.audio = new Hoot.Utils.List();

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
        let file = new Hoot.Load.ImageFile(this, key, path, config);

        this.queue.add(file);

        this.images.add(file);
    }

    loadAudio(key, path, config) {
        let file = new Hoot.Load.AudioFile(this, key, path, config);

        this.queue.add(file);

        this.audio.add(file);
    }


    image(key, path, config) {
        this.loadImage(key, path, config);
    }

    audio(key, path, config) {
        this.loadAudio(key, path, config);
    }


    get(key) {
        if (typeof key !== "string") {
            return false;
        }

        for (let i in this.loaded.array) {
            if (this.loaded.get(i).key === key) {
                return this.loaded.get(i);
            }
        }
    }
}

module.exports = Loader;