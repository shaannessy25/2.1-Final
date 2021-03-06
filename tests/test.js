const { exportSpecifier, exportAllDeclaration } = require("@babel/types");
const { expect } = require("@jest/globals");
const lib = require("../math");

test("Golden Ratio", () => {
  expect(lib.goldenRatio(1)).toBe(1.61803398875);
});

test("Testing Degrees to Radians", () => {
  expect(lib.degToRad(1)).toBe(0.017453292519943295);
});

test("Testing Radians to Degrees", () => {
  expect(lib.radToDeg(1)).toBe(57.29577951308232);
});

test("Testing value to dollar", () => {
  expect(lib.valueToDollar(23)).toBe("23.00");
  expect(lib.valueToDollar(3)).toBe("3.00");
  expect(lib.valueToDollar(0)).toBe("0.00");
  expect(lib.valueToDollar(203)).toBe("203.00");
});

test("Testing random number", () => {
  expect(lib.randomNumber(1, 1)).toBe("1");
});
