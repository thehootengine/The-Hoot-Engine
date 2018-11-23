
class Loader {
    constructor(engine) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.status = "WAITING";

        this.queue = new Hoot.Utils.List();
        this.loading = null;
        this.loaded = new Hoot.Utils.List();

        this.canUse = false;
        this.alreadyLoaded = false;

        Hoot.Core.Events.addListener("hoot-loader-add-callback", function(event) {
            this.preload(event.callback, event.caller);
        }, this);
    }

    preload(callback, caller) {
        if (typeof callback !== "function") {
            return false;
        }

        callback.call(this);

        this.start(caller);
    }

    load(file) {
        if (!file instanceof Hoot.Load.File) {
            return false;
        }

        if (!this.alreadLoaded) {
            this.queue.add(file);
        }
    }

    start(caller) {
        if (this.queue.length <= 0) {
            console.log("Hoot: Loader Complete");
            this.status = "COMPLETE";
            this.canUse = true;
            this.alreadyLoaded = true;

            new Hoot.Core.Event("hoot-loader-complete", { caller: caller, loader: this }).dispatch();
        }else if (this.queue.length >= 1) {
            this.status = "LOADING";

            this.loading = this.queue.get("last");
            this.queue.remove("last");

            this.loading.load();

            Hoot.Core.Events.addListener("hoot-loader-file-complete", function(event) {
                if (event.file === this.loading) {
                    this.loading = null;

                    this.loaded.add(event.file);

                    this.start();
                }
            }, this);
        }
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