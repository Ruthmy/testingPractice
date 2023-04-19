// stringLength.test.js
const stringLength = require('./stringLength.js');

/*
// I created this code to test the jest test and see if this works with it.

it('The function returns the right lenght', () => {
    expect(stringLength('Ruth')).toBe(4);
    expect(stringLength('Hello, world!')).toBe('The string is longer than 10 characters');
    expect(stringLength('')).toBe('The string is empty');
    expect(stringLength('Lorem ipsum dolor sit amet.')).toBe('The string is longer than 10 characters');    
});
*/

// This part of the code works with AAA patterns

describe('stringLength', () => {
  it('returns the length of a string if it meets length requirements', () => {
    // Arrange
    const input = 'Hello';
    const expectedOutput = 5;

    // Act
    const output = stringLength(input);

    // Assert
    expect(output).toBe(expectedOutput);
  });
  
  it('throws an error if input string is longer than 10 characters', () => {
    // Arrange
    const input = 'Hello, world!';
    const expectedOutput = 13;

    // Act and Assert
    expect(() => { 
        stringLength(input);
    }).toThrow('Input string must not be longer than 10 characters');
  });

  it('throws an error if input string is empty', () => {
    // Arrange
    const input = '';

    // Act and Assert
    expect(() => {
        stringLength(input);
      }).toThrow('Input string must be at least 1 character long');
  });
});
