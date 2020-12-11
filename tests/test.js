const { exportSpecifier, exportAllDeclaration } = require('@babel/types')
const { expect } = require('@jest/globals')
const lib = require('../math')


test('Golden Ratio', () => {
    expect(lib.goldenRatio(1)).toBe(1.61803398875)
})


test('Testing Degrees to Radians', () => {
    expect(lib.degToRad(1)).toBe(0.017453292519943295)
})