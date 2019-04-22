var randomFixedInteger = function (length) {
    return Math.floor(Math.pow(10, length - 1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1));
}
console.log(randomFixedInteger(16))

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}