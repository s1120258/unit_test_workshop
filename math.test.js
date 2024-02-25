//The operation should return the sum of two numbers

const { addition } = require("./addition");

test("2 + 3 = 5", () => {
  expect(addition(2, 3)).toBe(5);
});

test.skip("1 + 7 = 8", () => {
  expect(addition(1, 7)).toBe(8);
});
