
class Manager {
    constructor(engine) {

        this.engine = engine || null;
        if (this.engine === null) {
            new Hoot.Core.Event("hoot-engine-handler-requestEngine", { data: this }).dispatch();
            this.hasEngine = false;
        }else {
            this.hasEngine = true;
        }

        this.animationFrameCallbacks = new Hoot.Utils.List();
    }

    addAnimationFrameCallback(callback) {
        this.animationFrameCallbacks.add(callback);
    }

    removeAnimationFrameCallback(callback) {
        for (let i in this.animationFrameCallbacks.array) {
            if (this.animationFrameCallbacks.array[i] === callback) {
                this.animationFrameCallbacks.remove(i);
            }
        }
    }

    animationFrame() {
        for (let i in this.animationFrameCallbacks.array) {
            this.animationFrameCallbacks.array[i].bind(null).call(null);
        }

        window.requestAnimationFrame(this.animationFrame);
    }
}

module.exports = Manager;