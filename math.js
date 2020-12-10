const { pi } = require("mathjs")

function goldenRatio(num) {
    return num * 1.61803398875
}

function degToRad(number) {
    return number * (pi/180)
}


console.log(degToRad(1))





module.exports.goldenRatio = goldenRatio