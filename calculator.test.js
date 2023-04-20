// import the calculator class calculator.test.js
const { default: expect } = require('expect');
const Calculator = require('./calculator.js');

// create a new instance of the calculator
beforeEach(() => {
  calculator = new Calculator();
});

// Test the calculator
describe('calculator', () => {
  // test the add method
  it('The sum of two numbers works fine', () => {
    //Arrange
    const a = 465;
    const b = 12;
    
    // Act
    const result = calculator.add(a, b);
    
    // Assert
    expect(result).toBe(477);
  });
  
  it('adds two negative numbers', () => {
    // Arrange
    const a = -12;
    const b = -52;

    // Act
    const result = calculator.add(a, b);

    // Assert
    expect(result).toBe(-64);
  });
  
  it('adds a positive and a negative number', () => {
    // Arrange
    const a = 2;
    const b = -3;

    // Act
    const result = calculator.add(a, b);

    // Assert
    expect(result).toBe(-1);
  });  
});


// test the subtract method
  
describe('sustraction', () => {
  it('subtracts two positive numbers', () => {
    // Arrange
    const a = 5;
    const b = 3;

    // Act
    const result = calculator.sustraction(a, b);

    // Assert
    expect(result).toBe(2);
  });

  it('subtracts two negative numbers', () => {
    // Arrange
    const a = -5;
    const b = -3;

    // Act
    const result = calculator.sustraction(a, b);

    // Assert
    expect(result).toBe(-2);
  });

  it('subtracts a positive and a negative number', () => {
    // Arrange
    const a = 5;
    const b = -3;

    // Act
    const result = calculator.sustraction(a, b);

    // Assert
    expect(result).toBe(8);
  });
});

// test the multiply method

describe('multiply', () => {
  it('multiplies two positive numbers', () => {
    // Arrange
    const a = 2;
    const b = 3;

    // Act
    const result = calculator.multiplication(a, b);

    // Assert
    expect(result).toBe(6);
  });

  it('multiplies two negative numbers', () => {
    // Arrange
    const a = -2;
    const b = -3;

    // Act
    const result = calculator.multiplication(a, b);

    // Assert
    expect(result).toBe(6);
  });

  it('multiplies a positive and a negative number', () => {
    // Arrange
    const a = 2;
    const b = -3;

    // Act
    const result = calculator.multiplication(a, b);

    // Assert
    expect(result).toBe(-6);
  });
});

// test the divide method

describe('divide', () => {
  it('divides a number by zero', () => {
    // Arrange
    const a = 6;
    const b = 0;

    // Act and Assert
    expect(() => calculator.divide(a, b)).toThrow('Cannot divide by zero');
  });

  it('divides two positive numbers', () => {
    // Arrange
    const a = 6;
    const b = 3;

    // Act
    const result = calculator.divide(a, b);

    // Assert
    expect(result).toBe(2);
  });

  it('divides two negative numbers', () => {
    // Arrange
    const a = -6;
    const b = -3;

    // Act
    const result = calculator.divide(a, b);

    // Assert
    expect(result).toBe(2);
  });

  it('divides a positive and a negative number', () => {
    // Arrange
    const a = 6;
    const b = -3;

    // Act
    const result = calculator.divide(a, b);

    // Assert
    expect(result).toBe(-2);
  });
});



