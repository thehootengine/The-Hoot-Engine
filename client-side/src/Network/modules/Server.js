


class Server {
    constructor(engine, url) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }

        this.connectionTries = 3;
        this.connectionTryDelay = 5000;

        this.local = true;

        this.url = url || "localhost:8000";

        this.socket = false;
        this.connect();

        this.socket.addEventListener("error", function(event) {
            if (this.connectionTries > 0) {
                this.connectionTries -= 1;

                console.error("Hoot Server: Connection Failed - Retrying in " + this.connectionTryDelay + "ms");

                window.setTimeout(this.connect(), this.connectionTryDelay);
            }else {
                console.error("Hoot Server: Connection Failed")
            }
        }.bind(this));
    }

    connect() {
        this.socket = new WebSocket(this.url);
        console.log(this.socket);
    }
}

module.exports = Server;