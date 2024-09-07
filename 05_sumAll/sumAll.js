const sumAll = function(num1, num2) {
    let sortedNum = [num1, num2].sort((a, b) => a - b);

    if (sortedNum[0] > 0 && sortedNum[1] > 0 && Number.isInteger(sortedNum[0]) && Number.isInteger(sortedNum[1])) {
        let finalSum = 0;
        for (let i = sortedNum[0]; i <= sortedNum[1]; i++) {
            finalSum += i;
        }
        return finalSum
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = sumAll;
