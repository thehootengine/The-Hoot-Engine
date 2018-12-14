
class ImageFile {
    constructor(loader, key, path, config) {
        this.events = new Hoot.Events("image-" + (loader.images.length).toString());

        this.loader = loader;

        this.key = key;
        this.path = path;
        this.config = this._fixConfig(config);

        this.extension = this.path.split(".").pop();

        this.loadable = false;
        if (this.extension === "png" || this.extension === "jpg" || this.extension === "jpeg") {
            this.loadable = true;
        }

        this.frame = {};
        if (this.config.frameWidth === "get") {
            this.frame.width = null;
        }else {
            this.frame.width = this.config.frameWidth;
        }

        if (this.config.frameHeight === "get") {
            this.frame.height = null;
        }else {
            this.frame.height = this.config.frameHeight;
        }

        this.size = {
            width: null,
            height: null
        };

        this.isLoading = true;

        this.data = null;
    }

    _fixConfig(config) {
        if (typeof config !== "object") {
            config = {
                frameWidth: "get",
                frameHeight: "get"
            };
        }else {
            if (typeof config.frameWidth !== "number") {
                config.frameWidth = "get";
            }
            if (typeof config.frameHeight !== "number") {
                config.frameHeight = "get";
            }
        }


        return config;
    }

    load() {
        if (this.loadable) {
            this.data = new Image();
            this.data.src = this.loader.basePath + this.path;

            this.data.onload = function() {
                this.size.width = this.data.width;
                this.size.height = this.data.height;

                if (this.frame.width === null) {
                    this.frame.width = this.data.width;
                }
                if (this.frame.height === null) {
                    this.frame.height = this.data.height;
                }

                this.events.emit("loaded", { image: this });
            }.bind(this);
        }
    }
}

module.exports = ImageFile;
