function cubeNumber(number) {
    if (typeof number !== 'number' || number <= 0) {
        return 'Please, provaide a valid number.';
    }
    const result = (number * number * number);
    return result;
}

function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'Please, provaide all valid string.';
    }
    else if (string1.indexOf(string2) !== -1) {
        return true;
    } else {
        return false;
    }
}

function sortMaker(arr) {
    if (!Array.isArray(arr)) {
        return 'Please, provaide a valid array with two parameters.';
    } else {
        for (let i = 0; i = 1; i++) {
            if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
                return 'Please, provaide a valid number.';
            } else if (arr[0] < 0 || arr[1] < 0) {
                return 'Invalid Input';
            } else if (arr[0] === arr[1]) {
                return 'equal';
            } else if (arr[0] > arr[1]) {
                const arrayOne = [arr[0], arr[1]];
                return arrayOne;
            } else if (arr[1] > arr[0]) {
                const arrayTwo = [arr[1], arr[0]];
                return arrayTwo;
            }
        }
    }
}

function findAddress(obj) {
    if (typeof obj !== 'object') {
        return 'Please, provaide a valid object.';
    } else {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';
        return street + ',' + house + ',' + society
    }
}

function canPay(changeArray, totalDue) {
    if (!Array.isArray(changeArray) || changeArray.length === 0 || typeof totalDue !== 'number' || totalDue <= 0) {
        return 'Invalid input(s). Please, provaide valid input(s).';
    }
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        if (typeof changeArray[i] !== 'number' || changeArray[i] <= 0) {
            return 'Please, provaide all valid numbers in array.';
        }
        sum = sum + changeArray[i]
    }
    if (sum >= totalDue) {
        return true;
    }
    return false;
}