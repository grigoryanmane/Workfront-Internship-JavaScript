/*
* Workfront Fullstack Internship 2019
* Javascript Homework #2
* Mane Grigoryan
*/
'use strict';

//PROBLEM #1
function isPrime(number) {
    let count = 0;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            count++;
        }
    }
    if (count > 0) {
        console.log(`${number} is not prime`);
    } else {
        console.log(`${number} is prime`);
    }
}

//FUNCTION USED IN PROBLEM #2 AND PROBLEM #3
function fibonacci(number) {
    let array = [];
    array[0] = 0;
    array[1] = 1;
    for (let i = 2; i <= number; i++) {
        array[i] = array[i - 1] + array[i - 2];
    }
    return array;
}

//PROBLEM #2
function fibNumber(number) {
    let array = fibonacci(number);
    console.log(`Fibonacci of ${number} is ${array[number]}`);

}

//PROBLEM #3
function fibonacciSeries(number) {
    let array = fibonacci(number);
    let sequence = "";
    for (let i = 0; i <= number; i++) {
        if (array[i] <= number) {
            sequence += ` ${array[i]},`;
        }
    }
    sequence = sequence.slice(0, -1);
    console.log(sequence);
}

//PROBLEM #4
function digitsCalculator(number) {
    number = String(number);
    let product = 1;
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        product *= number[i];
        sum += Number(number[i]);
    }

    if (sum !== 0) {
        if (product % sum === 0) {
            console.log(`Quotient is ${product / sum}`);
        } else {
            console.log(`Remainder is ${product % sum}`);
        }
    } else {
        console.log("Cannot Calculate");
    }
}

//PROBLEM #9
function arraySpread(start, end, range) {
    let array = [];
    if (range === 1) {
        array.push(start);
    } else {
        let difference = (end - start) / (range - 1);
        for (let i = start; i <= end; i += difference) {
            array.push(i);
        }
    }
    console.log(array);
}

//PROBLEM #10
function secondMaximum(array) {
    let max1 = -Infinity;
    let max2 = -Infinity;
    if (array.length === 1) {
        console.log(0);
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max1) {
                max2 = max1;
                max1 = array[i];
            } else if (array[i] > max2) {
                max2 = array[i];
            }
        }

    }
    let index = array.indexOf(max2);
    console.log(`Second max number is ${max2} and its index is ${index}`);
}

//PROBLEM #11
function paddingArray(array, padAmount, repeat) {
    if (padAmount <= array.length) {
        let firstElements = array.slice(0, padAmount);
        let lastElements = array.slice(array.length - padAmount);
        for (let i = 1; i <= repeat; i++) {
            array=firstElements.concat(array);
            array = array.concat(lastElements);
        }
    } else {
        console.log("Invalid padding amount");
    }
    console.log(array);
}

