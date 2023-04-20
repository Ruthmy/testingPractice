// import the capitalize function
const capitalize = require('./capitalize.js');

describe('capitalize', () =>{
    it('Returns a string with the first character capitalized', () => {
        // Arrange
        const input = 'string';
        const expectedOutput = 'String';
        
        // Act
        const result = capitalize(input);

        // Assert
        expect(result).toBe(expectedOutput);
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



