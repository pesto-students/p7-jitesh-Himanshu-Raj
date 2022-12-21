const { sum, diff, product } = require("./Exercise5.4");
// console.log(calc);

test("testing sum of two numbers", () => {
  expect(sum(2, 2)).toBe(4);
});

test("testing diff of two numbers", () => {
  expect(diff(2, 2)).toBe(0);
});

test("testing product of two numbers", () => {
  expect(product(10, 3)).toBe(30);
});
