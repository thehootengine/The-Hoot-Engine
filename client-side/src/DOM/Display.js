

class Display {

    /*
     * Constructor
     */
    constructor(name, config) {

        //The display's identifier
        this.name = name;



        //The event handler
        this.events = new Hoot.Events("display-" + this.name);



        //Set the config and fix it
        this.config = this._fixConfig(config);



        //The displays parent element
        this.parent = this.config.parent;



        //The size of the game
        this.size = {
            width: this.config.width,
            height: this.config.height
        };



        //The scale of the game
        this.scale = {
            x: this.config.scaleX,
            y: this.config.scaleY
        };



        //Smoothing is good for non pixel art
        this.smoothingEnabled = this.config.smoothingEnabled;



        //The actual element
        this.canvas = null;



        //Used for rendering
        this.context = null;



        //Check to see if the page is already loaded
        if (document.readyState === "complete") {

            this.init();

        }else {

            //If not wait until it is
            window.onload = function() {

                this.init();

            }.bind(this);

        }

    }

    //Makes it easier than typing 'this.events.on'
    on(name, callback, callbackScope) {

        this.events.on(name, callback, callbackScope);

    }

    //Initialize the display
    init() {

        //Create the canvas element
        this.canvas = document.createElement("canvas");



        //Set Width
        this.canvas.width = this.size.width;



        //Set Height
        this.canvas.height = this.size.height;



        //Create the context
        this.context = this.canvas.getContext("2d");



        //For a finer output
        this.context.translate(0.5, 0.5);



        //Set the scale of the context
        this.context.scale(this.scale.x, this.scale.y);



        //Should the context smooth out images
        this.context.imageSmoothingEnabled = this.smoothingEnabled;



        //If the parent is the body element of the page
        if (this.parent === document.body) {

            document.body.appendChild(this.canvas);

        }else {

            document.getElementById(this.parent).appendChild(this.canvas);

        }



        //Emit the event telling the rest of the game that the display is ready to be used
        this.events.emit("ready", { display: this });

    }

    //Fix the config given if needed
    _fixConfig(config) {
        
        if (typeof config !== "object") {

            config = {

                parent: document.body,


                width: 960,


                height: 720,


                scaleX: 1,


                scaleY: 1,


                smoothingEnabled: true

            };

        }else {
            if (typeof config.parent !== "string") {

                config.parent = document.body;

            }



            if (typeof config.width !== "number") {

                config.width = 960;

            }



            if (typeof config.height !== "number") {

                config.height = 720;

            }



            if (typeof config.scaleX !== "number") {

                config.scaleX = 1;

            }



            if (typeof config.scaleY !== "number") {

                config.scaleY = 1;

            }



            if (typeof config.smoothingEnabled !== "boolean") {

                config.smoothingEnabled = true;

            }

        }



        return config;

    }


    /*
     * Getters
     */
    //Width
    getWidth() {

        return this.size.width;

    }

    //Height
    getHeight() {

        return this.size.height;

    }

    //Canvas
    getCanvas() {

        return this.canvas;

    }

    //Context
    getContext() {

        return this.context;

    }
}

module.exports = Display;
