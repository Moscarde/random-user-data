function randomNumber() {
    return Math.floor(Math.random() * 100);
}

function randomAge(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = {randomNumber, randomAge};
