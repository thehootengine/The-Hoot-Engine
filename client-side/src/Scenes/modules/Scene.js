
class Scene {
    constructor(engine, name, callbacks) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.callbacks = callbacks || {
            init: function() {},
            preload: function() {},
            create: function() {},
            tick: function() {},
            render: function() {}
        };

        this.isRunning = false;
    }

    start(data) {
        if (this.isRunning) {
            return false;
        }

        if (this.hasEngine) {
            this.callbacks.init(data);

            new Hoot.Core.Event("hoot-loader-add-callback", { callback: this.callbacks.preload, caller: this }).dispatch();

            Hoot.Core.Events.addListener("hoot-loader-complete", function(event) {
                //if (event.caller === this) {
                    this.callbacks.create(data);

                    this.isRunning = true;

                    this.engine.time.addAnimationFrameCallback(this.callbacks.tick(data), null);
                    this.engine.time.addAnimationFrameCallback(this.callbacks.render(data), null);
                //}
            }, this);
        }
    }

    stop() {
        if (!this.isRunning) {
            return false;
        }

        this.isRunning = false;

        this.engine.time.removeAnimationFrameCallback(this.callbacks.tick, this.engine);
        this.engine.time.removeAnimationFrameCallback(this.callbacks.render, this.engine);
    }
}

module.exports = Scene;