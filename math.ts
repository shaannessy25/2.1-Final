const { pi } = require("mathjs")

function goldenRatio(num: number): number {
    return num * 1.61803398875
}

function degToRad(number: number): number {
    return number * (pi/180)
}






module.exports.goldenRatio = goldenRatio
module.exports.degToRad = degToRad