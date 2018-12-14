
class List {
    constructor(array) {
        this.array = array || [];

        this.length = this.array.length;
    }

    add(value) {
        this.array.push(value);

        this.length = this.array.length;
    }

    remove(index) {
        if (typeof index === "undefined") {
            index = "first";
        }

        if (index === "last") {
            index = (this.array.length - 1);
        }

        if (index === "first") {
            index = 0;
        }

        if (index === "random") {
            index = Hoot.Math.random(0, (this.array.length - 1), 0);
        }

        let array = this.array;
        this.array = [];

        for (let i in array) {
            if (i != (index)) {
                this.array.push(array[i]);
            }
        }

        this.length = this.array.length;
    }

    get(index) {
        if (typeof index === "undefined") {
            index = "first";
        }

        if (index === "last") {
            index = (this.array.length - 1);
        }

        if (index === "first") {
            index = 0;
        }

        if (index === "random") {
            index = Hoot.Math.random(0, (this.array.length - 1), 0);
        }

        return this.array[index];
    }

}

module.exports = List;