
function random(min, max, decimal) {
    if (typeof min !== "number") {
        return Math.random();
    }
    if (typeof max !== "number") {
        return Math.random();
    }
    if (typeof decimal !== "number") {
        min = Math.ceil(min);
        max = Math.floor(max);

        return (Math.random() * (max - min + 1)) + min;
    }

    min = Math.ceil(min);
    max = Math.floor(max);

    return (Math.floor(Math.random() * (max - min + 1)) + min).toFixed(decimal);
}

module.exports = random;