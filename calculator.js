// simple calculator class, with 4 methods: add, subtract, divide, and multiply.
class Calculator { 
  add (a, b) {
    return a + b;
  }

  sustraction (a, b) {
    return a - b;
  }

  multiplication (a, b) {
    return a * b;
  }

  divide (a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

module.exports = Calculator;