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
  /*

  it('throws an error if input is not a string', () => {
    // Arrange
    const input = 123;
  
    // Act and Assert
    expect(() => capitalize(input)).toThrow('Input is not a string');
  });
  it('throws an error if first character is a number', () => {
    // Arrange
    const input = '2hello world';
  
    // Act and Assert
    expect(() => capitalize(input)).toThrow('First character is a number');
  });
*/
});



