

const engine = new Hoot.Engine("engine");
const display = new Hoot.DOM.Display("display", {
    width: 960,
    height: 720,
    smoothingEnabled: false
});


class BootScene extends Hoot.Scene {
    constructor() {
        super("BootScene");
    }

    init() {

    }

    preload() {
        this.load.image("img-shoe", "assets/images/shoe.png");
    }

    create() {

    }

    tick() {

    }

    render() {

    }
}


display.on("ready", function() {
    engine.addScene(BootScene);



    engine.startScene("BootScene");
}, null);