
class Client {
    constructor(engine) {
        this.engine = engine || null;
        this.hasEngine = true;
        if (this.engine === null) {
            this.hasEngine = false;
        }


    }

    createAction(text) {
        let data = new Blob([text], { type: 'text/plain' });

        let textFile = window.URL.createObjectURL(data);
    }
}

module.exports = Client;