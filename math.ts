// const { pi } = require("mathjs")

function goldenRatio(num: number): number {
    return num * 1.61803398875
}

function degToRad(number: number): number {
    return number * (Math.PI/180)
}

function radToDeg(number: number): number {
    return number * (180/Math.PI)
}


function valueToDollar(number: number): string{
    return `${number}.00`
}

function randomNumber(min: number, max: number): string{
    const ran_num = min + Math.random() * (max - min);
    return ran_num.toFixed(0)
}

module.exports.goldenRatio = goldenRatio
module.exports.degToRad = degToRad
module.exports.radToDeg = radToDeg
module.exports.valueToDollar = valueToDollar
module.exports.randomNumber = randomNumber