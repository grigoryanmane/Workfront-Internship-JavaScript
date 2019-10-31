//HOMEWORK #4
//BY MANE GRIGORYAN
//WORKFRONT INTERNSHIP 2019


//PROBLEM #1
function largerNumbers(array, number) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= number) {
            newArray.push(array[i]);
        }
    }
    if (newArray.length === 0) {
        console.log("Such values do not exist");
    } else {
        console.log(...newArray);
    }

}


function even(element) {
    return element % 2 === 0;
}

//PROBLEM #2
function evenDigits(number1, number2) {
    let evens = [];
    let max = Math.max(number1, number2);
    let min = Math.min(number1, number2);
    for (let i = min; i <= max; i++) {
        let evenNumber = i;
        evenNumber = evenNumber.toString().split("");
        if (evenNumber.every(even)) {
            evens.push(i);
        }
    }
    if (evens.length === 0) {
        console.log("Such values do not exist");
    } else {
        console.log(...evens);
    }
}

//PROBLEM #3
function recursiveOdd(number) {
    if (number <= 9) {
        return number % 2 !== 0;
    } else {
        let remainder = number % 10;
        if (recursiveOdd(remainder)) {
            number -= remainder;
            number /= 10;
            return recursiveOdd(number);
        } else {
            return false;
        }
    }
}


//PROBLEM 4
function minPositiveIntegers(array, min) {

    if (array.length === 0) {
        return min === undefined ? -1 : min;
    } else {
        min = (array[0] >= 0 && array[0] <= min) ? array[0] : min;
        min = (min === undefined && array[0] >= 0) ? array[0] : min;
        array.shift();
        return minPositiveIntegers(array, min);
    }

}


//PROBLEM 5
function findIndex(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                return j;
            }
        }
    }
    return "No such index";
}

