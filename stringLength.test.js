// stringLength.test.js
const stringLength = require('./stringLength');

it('The function returns the right lenght', () => {
    expect(stringLength('Ruth')).toBe(4);
    expect(stringLength('Hello, world!')).toBe('The string is longer than 10 characters');
    expect(stringLength('')).toBe('The string is empty');
    expect(stringLength('Lorem ipsum dolor sit amet.')).toBe('The string is longer than 10 characters');
});

// Arrange

// Act

// Assert





