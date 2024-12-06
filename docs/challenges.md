# Javascript and Cursor AI — Worksheet

Welcome to this hands-on session with JavaScript and Cursor AI!
Today, we're going to explore some fundamental JavaScript concepts and see how Cursor AI can help us write code more efficiently.

Remember, Cursor AI is a tool that can assist you in your coding journey; it's not a replacement for understanding the underlying principles of programming.

🚀 Let's get started!

## Challenge 1: Array Filtering

**Objective:** Practice using the .filter() array method to select specific elements from an array.

**Starting Code:**

```javascript
function getEvenNumbers(numbers) {
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}
```

**Challenge:** Rewrite the getEvenNumbers function using the .filter() array method. Try to make the code as concise as possible.

**Cursor AI Tip:** Use Cursor's "Smart Rewrites" feature (Cmd+K or Ctrl+K) to explore how the AI might suggest a solution.

**Think About:**

- How does the .filter() method work?
- What condition are we using to determine if a number is even?

## Challenge 2: Writing Tests with Jest

**Objective:** Learn how to write basic test cases using the Jest testing framework.

**Starting Code:**

```javascript
// sum.js
function sum(...numbers) {
  return numbers.reduce((accumulator, current) => accumulator + current, 0);
}
```

**Challenge:** Create a Jest test suite (in a separate file) to check if the `sum` function is working as expected. Include at least two test cases to cover different scenarios. You can pass any number of arguments to the `sum` function.

**Cursor AI Tip:** Use Cursor's chat mode (Cmd+L / Ctrl+L) to help you set up the test suite structure and generate individual test cases.

**Think About:**

- What are the essential parts of a Jest test suite?
- What kind of input values should we test the add function with?

💡 **Hint:** You can use the `module.exports` syntax to export the `sum` function and import it in your test file with `const { sum } = require('your-file.js');`.

## Challenge 3: Improving Code Readability

**Objective:** Enhance the readability of code by adding clear and concise comments.

**Starting Code:**

```javascript
function calculateArea(length, width) {
  return length * width;
}
```

**Challenge:** Add [JS Docs](https://jsdoc.app/) comments to the calculateArea function to explain its purpose, parameters, and the value it returns.

**Cursor AI Tip:** Cursor AI benefits from well-commented code as it provides more context for codebase indexing. Try using @codebase in the chat after adding your comments to see if Cursor can locate and understand your function better.

**Think About:**

- What information would be most helpful for someone trying to understand this function?
- How can comments improve code maintainability in the long run?

## Challenge 4: Exploring Cursor's Capabilities

**Objective:** Become familiar with some of Cursor's core commands and AI features.

**Challenge:**

1. Refer to the "Cursor Cheatsheet" provided ([cheat-sheet.md](./cheat-sheet.md)).
2. Experiment with different commands like:
   - Cmd+K / Ctrl+K (for inline edits)
   - Cmd+L / Ctrl+L (to toggle chat mode)
   - Cmd+I / Ctrl+I (for composer mode)

**Think About:**

- How can these commands help you write code faster?
- Which features do you find most useful?

## Challenge 5: Let's Get Creative with Composer Mode

**Objective:** Practice using Cursor's composer mode (Cmd+I / Ctrl+I) to generate a simple website with more elaborate instructions.

**Challenge:**

Let's create a simple website that writes a summary about what we learned today.

The website should consist of several files for the HTML, CSS and JavaScript.

The website could have a quiz section to practice today's material.

The website could have a dark mode toggle switch.

You could give it a game like theme or something nostalgic, super modern or something else. Be creative!

**Think About:**

- How can you phrase your prompts as specific as possible to get the most accurate and helpful results from Cursor AI?
- How does composer mode differ from using the inline edit command (Cmd+K / Ctrl+K)?
