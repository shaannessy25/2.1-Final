// const { pi } = require("mathjs")
function goldenRatio(num) {
    return num * 1.61803398875;
}
function degToRad(number) {
    return number * (Math.PI / 180);
}
function radToDeg(number) {
    return number * (180 / Math.PI);
}
function valueToDollar(number) {
    return number + ".00";
}
module.exports.goldenRatio = goldenRatio;
module.exports.degToRad = degToRad;
module.exports.radToDeg = radToDeg;
module.exports.valueToDollar = valueToDollar;
