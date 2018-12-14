
class Number {
    constructor(name, value) {
        this.name = name || "hoot-unknown";
        this.value = value || 0;

        if (this.exists()) {
            this.value = this.get();
        }else {
            localStorage.setItem(this.name, this.value);
        }
    }

    get() {
        return localStorage.getItem(this.name);
    }

    set(value) {
        if (typeof value !== "number") {
            return false;
        }

        this.value = value || this.value;

        localStorage.setItem(this.name, this.value);
    }

    exists() {
        if (this.get() === null) {
            return false;
        }else {
            return true;
        }
    }
}

module.exports = Number;