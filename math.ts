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




module.exports.goldenRatio = goldenRatio
module.exports.degToRad = degToRad
module.exports.radToDeg = radToDeg