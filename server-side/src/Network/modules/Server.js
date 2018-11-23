
const express = require("express");
const path = require("path");

class Server {
    constructor(port, filePath) {
        this.port = port || 8000;
        this.path = filePath || path.join(__dirname, filePath);

        this.app = express();
        this.app.use(express.static('/'));
        this.app.get('/', function(require, response) {
            response.sendFile(this.path);
        });
    }

    start() {
        this.app.listen(this.port);
        console.log("Server running: http://localhost:" + this.port.toString());
    }
}

module.exports = Server;