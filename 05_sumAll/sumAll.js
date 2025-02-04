const sumAll = function(startNum, endNum) {
    if (
        !(isInt(startNum) && isInt(endNum)) ||
        !(isPositive(startNum) && isPositive(endNum))
    ) {
        return "ERROR";
        }

    if (startNum > endNum) {
        let tempNum = startNum;
        startNum = endNum;
        endNum = tempNum;
    }

    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
};

function isInt(number) {
    return Number(number) === number && number % 1 === 0;
}

function isPositive(number) {
    return number > 0;
}

// Do not edit below this line
module.exports = sumAll;
