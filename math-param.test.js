//The operation should return the sum of two numbers

const { addition } = require("./addition");

test.each([
  [3, 4, 7],
  [5, -10, -5],
  [0, 2, 2],
])("a + b = c", (a, b, expected) => {
  expect(addition(a, b)).toBe(expected);
});
