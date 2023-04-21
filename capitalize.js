// capitalize function takes a string as an argument and returns that string with the first character capitalized.
let capitalize = (string) => {
  if(string.length === 0) {
    throw new Error('Input string must be at least 1 character long');
  }

  if (typeof string !== 'string') {
    throw new Error('Argument must be a string');
  }

  if (/^\d/.test(string)) {
    throw new Error('First character of string cannot be a number');
  }
    
  const capitalizedFirstLetter = string.charAt(0).toUpperCase();
  const restOfWord = string.slice(1);

  return `${capitalizedFirstLetter}${restOfWord}`;
}

module.exports = capitalize;