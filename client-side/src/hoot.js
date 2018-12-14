
const Hoot = {
    //Files
    Engine: require("./Engine"),
    Events: require("./Events"),
    Loader: require("./Loader"),
    //Folders
    Cameras: require("./Cameras"),
    DOM: require("./DOM"),
    GameObjects: require("./GameObjects"),
    Load: require("./Load"),
    Math: require("./Math"),
    Network: require("./Network"),
    Scenes: require("./Scenes"),
    Stored: require("./Stored"),
    Time: require("./Time"),
    Utils: require("./Utils")
};

module.exports = Hoot;
global.Hoot = Hoot;