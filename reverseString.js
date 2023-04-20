// stringLength function take a string as an argument and return it reversed
let reverseString = (string) => {
  if(string.length === 0) {
    throw new Error('Input string must be at least 1 character long');
  } else if (string.length > 10) {
    throw new Error('Input string must not be longer than 10 characters');
  } else {
    const result = [].map.call(string, function(actualChar) {
      return actualChar;
    }).reverse().join('');
    return result;
    //console.log(typeof(result));        
  }
}

// reverseString('Ruth');
module.exports = reverseString;