// Write a function that takes any string as an argument and returns its characters count.

let stringLength = (string) => {

    if(string.length === 0) {
        return 'The string is empty';
        // return console.log('The string is empty');
    } else if (string.length > 10) {
        return 'The string is longer than 10 characters';
        // return console.log('The string is longer than 10 characters');
    } else {
        return string.length;
        // return console.log(string.length);
    }

}

stringLength('');


module.exports = stringLength;