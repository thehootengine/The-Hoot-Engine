

class Sprite {
    constructor(engine, x, y, texture, frame) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.position = {
            x: x,
            y: y
        };

        this.texture = texture;
        this.frame = frame;

        this.scroll = {
            x: x,
            y: y
        };
    }

    tick() {

    }

    render() {
        this.engine.getDisplay().getContext().drawImage(this.texture.data, this.scroll.x, this.scroll.y, this.texture.data.width, this.texture.data.height);
    }
}

module.exports = Sprite;