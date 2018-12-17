
class Scene {

    /*
     * Constructor
     */
    constructor(name) {

        //How the rest of the game recognizes this scene
        this.name = name;



        //The event handler
        this.events = new Hoot.Events("scene-" + this.name);



        //Set to null as default
        this.engine = null;



        /*
         * Scene Status
         */

        //Is the scene running
        this.isRunning = false;



        //Is the scene loading
        this.isLoading = false;



        //Used mainly in the preload stage.
        this.load = new Hoot.Loader("scene-" + this.name);

    }


    /*
     * Basic game stages
     */
    init() {

    }

    preload() {

    }

    create() {

    }

    tick() {

    }

    render() {

    }


    //Called mainly by 'window.requestAnimationFrame'
    _update() {

        //Is the game running
        if (this.isRunning) {

            //Updates variables and anything not being rendered onto the screen
            this.tick();



            //Renders all gameObjects onto the screen
            this.render();



            //Call the '_update' loop again using 'requestAnimationFrame'
            window.requestAnimationFrame(this._update.bind(this));

        }

    }

    //Start the scene and pass in any data
    start(data) {

        //Check to see if config is an object
        if (typeof data !== "object") {

            //Make the data an object
            data = {};

        }



        //If the scene is already running don't start again
        if (this.isRunning) {
            return;
        }



        //Set the scene's 'isRunning' status to true
        this.isRunning = true;



        //Run the dev's init code
        this.init(data);



        //Load all the images for the scene
        this.preload(data);



        //When the game's assets have been loaded
        this.load.events.on("complete", function() {

            //Run the scene's create code
            this.create(data);



            //Start the update loop
            this._update(data);

        }, this);



        //Start the load process
        this.load.start();

    }

    stop() {

        //If the scene is already NOT running don't stop it again
        if (!this.isRunning) {
            return;
        }



        //Set the scene's 'isRunning' status to true
        this.isRunning = false;

    }
}

module.exports = Scene;