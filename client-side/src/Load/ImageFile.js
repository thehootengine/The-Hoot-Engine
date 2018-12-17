
class ImageFile {

    /*
     * Constructor
     */
    constructor(loader, key, path, config) {

        //The event handler
        this.events = new Hoot.Events(loader.name + "-image-" + (loader.images.length).toString());



        //The loader has to be of 'Hoot.Loader'
        this.loader = loader;



        //The image key that can be used to identify it
        this.key = key;



        //The path used to set the image source
        this.path = path;



        //Any configurations for the image file
        this.config = this._fixConfig(config);



        //Gets the extension of the image from the path
        this.extension = this.path.split(".").pop();



        //Is the image loadable set to false by default
        this.loadable = false;



        //Check to see if the file extension is loadable
        if (this.extension === "png" || this.extension === "jpg" || this.extension === "jpeg") {

            //If so; set loadable to true
            this.loadable = true;

        }



        //For spritesheets
        this.frame = {};



        //If the given frame width is not 'get'
        if (this.config.frameWidth !== "get") {

            //Width
            this.frame.width = this.config.frameWidth;

        }



        //If the given frame height is not 'get'
        if (this.config.frameHeight !== "get") {

            //Height
            this.frame.height = this.config.frameHeight;

        }



        //The size of the image file as a whole
        this.size = {

            width: null,


            height: null

        };



        //Is the image file is loading
        this.isLoading = false;



        //Is the image file loaded
        this.isLoaded = false;



        //The actual image
        this.data = null;
    }

    //Easier than typing 'this.events.on'
    on(name, callback, callbackScope) {

        this.events.on(name, callback, callbackScope);

    }

    //Fix the configuation of the config passes in the constructor
    _fixConfig(config) {

        /*
         * Check and fix all missing occurrences of config's required fields
         */
        if (typeof config !== "object") {

            config = {

                frameWidth: "get",


                frameHeight: "get"

            };

        }else {

            //Frame WIDTH
            if (typeof config.frameWidth !== "number") {

                config.frameWidth = "get";

            }



            //Frame HEIGHT
            if (typeof config.frameHeight !== "number") {

                config.frameHeight = "get";

            }

        }



        return config;

    }

    //Load the image
    load() {

        //If the image is loadable than load it
        if (this.loadable) {

            //Set the loading status to 'true'
            this.isLoading = true;



            //Create a new 'Image'
            this.data = new Image();



            //Set the image source to the loaders basePath attached with the path
            this.data.src = this.loader.basePath + this.path;



            //When the image is loaded
            this.data.onload = function() {

                //Set the loading status to 'false'
                this.isLoading = false;



                //Set the loaded status to 'true'
                this.isLoaded = true;



                //Set the 'size.width' to the image files width
                this.size.width = this.data.width;



                //Set the 'size.height' to the image files height
                this.size.height = this.data.height;



                //If the 'frame.width' still equal get than now that the image has been loaded change it
                if (this.frame.width === "get") {

                    //Image WIDTH
                    this.frame.width = this.data.width;

                }



                //If the 'frame.height' still equals 'get' than now that the image has been loaded change it
                if (this.frame.height === null) {

                    //Image HEIGHT
                    this.frame.height = this.data.height;

                }



                //Emit the event that the image has loaded
                this.events.emit("loaded", { image: this });

            }.bind(this);

        }

    }

}

module.exports = ImageFile;
