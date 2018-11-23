

class Camera2d {
    constructor(engine) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.perspective = {
            x: 0,
            y: 0,
            width: 960,
            height: 720
        };

        if (this.hasEngine) {
            this.perspective.width = this.engine.getDisplay().getWidth();
            this.perspective.height = this.engine.getDisplay().getHeight();
        }

        this.target = target;

        this.rendered = new Hoot.Utils.List();
    }

    setTarget(target) {
        if (!(target instanceof Hoot.GameObjects.Sprite)) {
            return false;
        }
        this.target = target;
    }

    add(gameObject) {
        if (!(gameObject instanceof Hoot.GameObjects)) {
            return false;
        }

        this.rendered.add(gameObject);
    }

    tick() {

    }

    render() {

    }
}

module.exports = Camera2d;