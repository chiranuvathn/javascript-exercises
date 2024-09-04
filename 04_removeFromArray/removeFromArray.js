const removeFromArray = function(array, ...args) {
    for (const arg of args) {
        let argIndex = array.indexOf(arg);

        while (argIndex !== -1) {
            array.splice(argIndex, 1);
            argIndex = array.indexOf(arg);
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
