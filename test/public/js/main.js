

const engine = new Hoot.Engine("engine");
const display = new Hoot.DOM.Display("display", engine, {
    width: 960,
    height: 720,
    smoothingEnabled: false
});


class BootScene extends Hoot.Scene {
    constructor() {
        super("BootScene", engine);
    }

    init() {

    }

    preload() {
        this.load.image("img-shoe", "assets/images/shoe.png");
    }

    create() {
        console.log("Creating");
    }

    tick() {

    }

    render() {

    }
}


display.events.on("ready", function() {
    const scene = new BootScene();
    scene.start();
});