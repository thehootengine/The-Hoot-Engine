
class List extends Array {
    constructor(...items) {
        super(...items);

        this.items = items;
    }

    add(value) {
        this.push(value);
        this.items.push(value);
    }

    remove(index) {
        if (typeof index === "undefined") {
            index = "first";
        }

        if (index === "last") {
            index = (this.length - 1);
        }

        if (index === "first") {
            index = 0;
        }

        if (index === "random") {
            index = Hoot.Math.random(0, (this.length - 1), 0);
        }

        this.splice(index, 1);
        this.items.splice(index, 1);
    }

    clear() {
        this.splice(0, this.length);
        this.items = [];
    }

    get(index) {
        if (typeof index === "undefined") {
            index = "first";
        }

        if (index === "last") {
            index = (this.length - 1);
        }

        if (index === "first") {
            index = 0;
        }

        if (index === "random") {
            index = Hoot.Math.random(0, (this.length - 1), 0);
        }

        return this[index];
    }

}

module.exports = List;