const reverseString = function(string) {
    const splitArray = string.split('');

    const reverseSplitArray = splitArray.reverse();

    let reverseString = '';

    for (let letter of reverseSplitArray) {
        reverseString += letter
    }

    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
