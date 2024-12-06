# Javascript and Cursor AI: Solutions

Remember: These solutions are just one approach to solving these challenges. There are often multiple valid ways to write correct and efficient code.

## Challenge 1: Array Filtering

**Solution:**

```javascript
const getEvenNumbers = (numbers) =>
  numbers.filter((number) => number % 2 === 0);
```

We are using the .filter() method to create a new array with all elements that pass the test implemented by the provided function.

The "%" or modulus operator is used to check if a number is divisible by 2. If the remainder is 0, the number is even.

## Challenge 2: Writing Tests with Jest

**Solution:**

```javascript
// sum.test.js
const sum = require("./sum.js"); // Make sure this path is correct for your file structure

describe("Add Function", () => {
  it("should add two positive numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should handle adding negative numbers", () => {
    expect(sum(-5, 10)).toBe(5);
  });

  it("should handle adding multiple numbers", () => {
    expect(sum(1, 2, 3, 4)).toBe(10);
  });
});
```

## Challenge 3: Improving Code Readability

**Solution:**

```javascript
/**
 * Calculates the area of a rectangle.
 *
 * @param {number} length - The length of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @returns {number} The calculated area of the rectangle.
 */
function calculateArea(length, width) {
  return length * width;
}
```

## Challenge 4 & 5:

For these challenges, there are no specific code solutions as they involve experimenting with Cursor's commands and features. The goal is to encourage exploration and hands-on learning with the AI coding tool.
