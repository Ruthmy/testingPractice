// import the capitalize function
const capitalize = require('./capitalize.js');

describe('capitalize', () =>{
  //If everything is ok
  describe('when given a valid string', () => {
    it('Returns a string with the first character capitalized', () => {
      // Arrange
      const input = 'ruth mery';
      const expectedOutput = 'Ruth mery';
          
      // Act
      const result = capitalize(input);

      // Assert
      expect(result).toEqual(expectedOutput);
    });

    it('Trows an error if the string is empty', () => {
      // Arrange
      const input = '';

      // Act and Assert
      expect(() => {
        capitalize(input);
      }).toThrow('Input string must be at least 1 character long');
    });   
  });

  describe('when given a non-string argument', () => {
    test('throws an error with the message "Argument must be a string"', () => {
      // Arrange
      const input = 123;

      // Act and Assert
      expect(() => capitalize(input)).toThrow('Argument must be a string');
    });
  });

  describe('when given a string with a number as the first character', () => {
    test('throws an error with the message "First character of string cannot be a number"', () => {
      // Arrange
      const input = '2024 welcome';

      // Act and Assert
      expect(() => capitalize(input)).toThrow('First character of string cannot be a number');
    });
  });
});