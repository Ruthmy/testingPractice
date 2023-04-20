// reverseString.test.js
const reverseString = require('./reverseString.js');

describe('reverseString', () => {
    it('returns a reverse string', () => {
        // Arrange
        const input = 'Ruth';
        const expectedOutput = 'htuR';

        // Assert
        const output = reverseString(input);

        // Assert
        expect(output).toBe(expectedOutput);
    });

    it('throws an error if input string is longer than 10 characters', () => {
        // Arrange
        const input = 'Hello, world!';
    
        // Act and Assert
        expect(() => { 
            reverseString(input);
        }).toThrow('Input string must not be longer than 10 characters');
      });
    
      it('throws an error if input string is empty', () => {
        // Arrange
        const input = '';
    
        // Act and Assert
        expect(() => {
            reverseString(input);
          }).toThrow('Input string must be at least 1 character long');
      });
});

