
const Hoot = {
    Cameras: require("./Cameras"),
    Core: require("./Core"),
    DOM: require("./DOM"),
    GameObjects: require("./GameObjects"),
    Load: require("./Load"),
    Network: require("./Network"),
    Scenes: require("./Scenes"),
    Stored: require("./Stored"),
    Time: require("./Time"),
    Utils: require("./Utils")
};

module.exports = Hoot;
global.Hoot = Hoot;