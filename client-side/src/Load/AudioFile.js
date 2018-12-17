
class AudioFile {
    constructor(loader, key, path, config) {
        this.events = new Hoot.Events("audio-" + loader.name + "-" + (loader.audio.length).toString());

        this.loader = loader;

        this.key = key;

        this.path = path;

        this.config = this._fixConfig(config);

        this.extension = this.path.split(".").pop();

        this.loadable = false;
        if (this.extension === "mp3" || this.extension === "wav" || this.extension === "ogg" || this.extension === "flac") {
            this.loadable = true;
        }

        this.playable = false;

        this.volume = this.config.volume;

        this.isLoading = false;

        this.data = null;
    }

    _fixConfig(config) {
        if (typeof config !== "object") {
            config = {
                volume: 1
            };
        }else {
            if (typeof config.volume !== "number") {
                config.volume = 1;
            }
        }

        return config;
    }

    load() {
        if (this.loadable) {
            this.isLoading = true;

            this.data = document.createElement("audio");
            this.data.src = this.path;

            this.data.onload = function() {

                this.isLoading = false;

                this.events.emit("loaded", { audio: this });

            }.bind(this);

            this._checkPlayable();

        }
    }

    _checkPlayable() {
        if (this.extension === "mp3") {

            if (this.data.canPlayType("audio/mpeg")) {
                this.playable = true;
            }

        }else if (this.extension === "ogg") {

            if (this.data.canPlayType("audio/ogg")) {
                this.playable = true;
            }

        }else if (this.extension === "wav") {

            if (this.data.canPlayType("audio/wav")) {
                this.playable = true;
            }

        }else if (this.extension === "flac") {

            if (this.data.canPlayType("audio/flac")) {
                this.playable = true;
            }

        }
    }
}

module.exports = AudioFile;
