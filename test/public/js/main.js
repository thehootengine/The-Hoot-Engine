

const engine = new Hoot.Engine("engine");
const display = new Hoot.DOM.Display("display", engine, {
    width: 960,
    height: 720,
    smoothingEnabled: false
});

const loader = new Hoot.Loader("loader", engine);
loader.loadImage("img-test", "assets/images/shoe.png");

loader.events.on("complete", function() {
    console.log("Event Complete");
});
loader.start();