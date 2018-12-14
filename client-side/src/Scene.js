
class Scene {
    constructor(name, engine) {
        this.name = name;

        this.events = new Hoot.Events("scene-" + this.name);

        if (engine instanceof Hoot.Engine) {
            this.engine = engine;

            this.engine.addScene(this);
        }

        this.isRunning = false;

        this.load = new Hoot.Loader("scene-" + this.name, this.engine);
    }

    init() {

    }

    preload() {

    }

    create() {

    }

    tick() {

    }

    render() {

    }

    _update() {
        if (this.isRunning) {
            this.tick();
            this.render();


            window.requestAnimationFrame(this._update.bind(this));
        }
    }

    start() {
        if (this.isRunning) {
            return;
        }

        this.isRunning = true;

        this.init();
        this.preload();
        this.load.start();

        this.load.events.on("complete", function() {
            this.create();

            this._update();
        }, this);

    }

    stop() {
        if (!this.isRunning) {
            return;
        }

        this.isRunning = false;
    }
}

module.exports = Scene;