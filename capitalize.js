// capitalize function takes a string as an argument and returns that string with the first character capitalized.
let capitalize = (string) => {
  if(string.length === 0) {
    throw new Error('Input string must be at least 1 character long');
  }
  
  const firstLetter = string[0].toUpperCase();
  const restOfWord = string.slice(1);

  return `${firstLetter}${restOfWord}`;
}

module.exports = capitalize;