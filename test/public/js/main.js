
const engine = new Hoot.Core.Engine("./app-config.json");

const BootScene = new Hoot.Scenes.Scene(engine, "Boot", {
    init() {

    },

    preload() {
        this.load(new Hoot.Load.File("img-shoe", "assets/images/shoe.png", {}));
    },

    create() {


    },

    tick() {

    },

    render() {
        engine.getDisplay().getContext().drawImage(engine.loader.get("img-shoe"), 10, 10);
    }
});


const PreloadScene = new Hoot.Scenes.Scene(engine, "Preload", {
    init() {

    },

    preload() {

    },

    create() {

    },

    tick() {

    },

    render() {
        engine.getDisplay().getContext().drawImage(engine.loader.get("img-shoe"), 10, 10);
    }
});


engine.scene.add(BootScene);
engine.scene.add(PreloadScene);

Hoot.Core.Events.addListener("hoot-loaded", function() {
    engine.scene.start("Boot");

    let client = new Hoot.Network.Client(engine);
    client.createAction("text");
}, null);