// Write a function that takes any string as an argument and returns its characters count.

let stringLength = (string) => {
    if(string.length === 0) {
        throw new Error('Input string must be at least 1 character long');
    } else if (string.length > 10) {
        throw new Error('Input string must not be longer than 10 characters');
    } else {
        return string.length;
    }
}

//stringLength('');
module.exports = stringLength;