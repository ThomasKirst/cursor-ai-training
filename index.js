function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }

    return a / b;
}

console.log(add(1, 2));

try {
    console.log(divide(1, 0));
} catch (error) {
    console.log("Error:", error.message);
}

