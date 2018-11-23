
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
        if (index === "last") {
            index = (this.array.length - 1);
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
        if (index === "last") {
            index = (this.array.length - 1);
        }
        return this.array[index];
    }

}

module.exports = List;