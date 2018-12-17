
class Loader {

    /*
     * Constructor
     */
    constructor(name) {

        //Mainly for the event handler
        this.name = name;



        //The event handler
        this.events = new Hoot.Events("loader-" + this.name);



        //The base path of where all the files should be loaded
        this.basePath = "./";



        //The status of the loader
        this.status = "WAITING";



        //Files in here are just waiting to be loaded
        this.queue = new Hoot.Utils.List();



        //The current file being loaded
        this.currentFile = null;



        //All the loaded files
        this.loaded = new Hoot.Utils.List();



        //All the images loaded/not loaded/loading
        this.images = new Hoot.Utils.List();



        //All the audio files loaded/not loaded/loading
        this.audio = new Hoot.Utils.List();



        //Can the loader be used
        this.canUse = false;

    }



    //Get the loader ready for loading
    preload() {

        //Make sure that there is at least 1 file in the queue before loading
        if (this.queue.length > 0) {

            //Make the loader not usable
            this.canUse = false;



            //Next load state
            this.load();

        }

    }



    //Load a file from the queue last-first
    load() {

        //Gets the last file from the queue
        this.currentFile = this.queue.get("last");



        //Remove the last file from the queue
        this.queue.remove("last");



        //When the file is done loading
        this.currentFile.on("loaded", function(event) {

            //Add it to the array/list of loaded files
            this.loaded.add(event.image);



            //Call the final repeatable stage of the loading process
            this.postload(false);



            //If there are no more files to be loaded
            if (this.queue.length > 0) {

                //Tell the postload function to repeat the loading cycle
                this.postload(true);

            }

        }, this);



        //Load the current file
        this.currentFile.load();

    }

    //The final state of the load process
    postload(repeatLoad) {

        //Check to see if the preload function should be called
        if (repeatLoad === true) {

            //Repeat the load process
            this.preload();

        }else {

            //Set it so the loader can be used
            this.canUse = true;



            //The loading is complete
            this.events.emit("complete", { loader: this });

        }

    }

    //Start
    start() {

        //Call the first state of the load process
        this.preload();

    }

    /*
     * Load different file types
     */
    //Images
    loadImage(key, path, config) {

        //Pass through the 'key', 'path', and 'config' to load an image file
        let file = new Hoot.Load.ImageFile(this, key, path, config);



        //Add the image file to the queue
        this.queue.add(file);



        //Add it to the list of images
        this.images.add(file);

    }

    //Audio
    loadAudio(key, path, config) {

        //Pass through the 'key', 'path', and 'config' to load an audio file
        let file = new Hoot.Load.AudioFile(this, key, path, config);



        //Add the audio file to the queue
        this.queue.add(file);



        //Add it to the list of audio files
        this.audio.add(file);

    }


    /*
     * Easily called methods
     */
    //Image
    image(key, path, config) {

        this.loadImage(key, path, config);

    }

    //Audio
    audio(key, path, config) {

        this.loadAudio(key, path, config);

    }


    //Get any loaded item
    get(key) {

        //Check to see if there's a key supplied
        if (typeof key !== "string") {
            return;
        }



        //Go through the list of loaded assets to find a matching key
        for (let i in this.loaded) {

            //Check to see if key matches
            if (this.loaded[i].key === key) {

                //Return the loaded asset
                return this.loaded[i];

            }

        }

    }

}

module.exports = Loader;