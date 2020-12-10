const { exportSpecifier, exportAllDeclaration } = require('@babel/types')
const lib = require('../math')


test('Golden Ratio', () => {
    expect(lib.goldenRatio(1)).toBe(1.61803398875)
})