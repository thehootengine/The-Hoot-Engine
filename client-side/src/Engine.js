
class Engine {

    /*
     * Constructor
     */
    constructor(name) {

        //The scene's identifier
        this.name = name;



        //The event handler
        this.events = new Hoot.Events("engine-" + this.name);



        //All the displays
        this.displays = new Hoot.Utils.List();



        //All the loaders
        this.loaders = new Hoot.Utils.List();



        //All the scenes
        this.scenes = new Hoot.Utils.List();



        //The current scene being updated and run of the game
        this.currentScene = null;

    }

    //Add a display
    addDisplay(display) {

        //Check to make sure that the display is of 'Hoot.DOM.Display'
        if (display instanceof Hoot.DOM.Display) {

            //Add it to the list
            this.displays.add(display);

        }

    }

    //Add a loader
    addLoader(loader) {

        //Check to make sure that the loader is of 'Hoot.Loader'
        if (loader instanceof Hoot.Loader) {

            //Add it to the list
            this.loaders.add(loader);

        }

    }

    //Add a scene
    addScene(scene) {

        //Check to make sure that the scene is at least not 'null', 'undefined', or "string"
        if (typeof scene === "undefined" || scene === null || typeof scene === "string") {
            return;
        }

        //Because the scene is another instance of 'Hoot.Scene' just add the scene to the list
        this.scenes.add(scene);

    }

    //Start a scene and pass in data
    startScene(name, data) {

        //Make sure that the name is a string
        if (typeof name === "string") {

            //Search through the list of scenes to find one with a matching 'name'
            for (let i in this.scenes) {

                //Check to see if the current searched scene has the same 'name'
                if (this.scenes[i].name === name) {

                    //Create a new version of the scene
                    this.currentScene = new this.scenes[i]();



                    //Start the created scene
                    this.currentScene.start(data);

                }

            }

        }

    }

}

module.exports = Engine;