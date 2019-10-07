/*
* Workfront Fullstack Internship 2019
* Javascript Homework #1
* Mane Grigoryan
*/

//PROBLEM #1
function numbersOddEven(number) {
    if (number % 2 === 0) {
        console.log("even");
    } else {
        console.log("even");
    }
}


//PROBLEM #2
function isDivisible(number1, number2) {
    if (number1 % number2 === 0 || number2 % number1 === 0) {
        console.log(1);
    } else {
        console.log(0);
    }
}

//PROBLEM #3
function notMultiplication(number) {
    let newNumber = "";
    for (let i = 1; i <= 3; i++) {
        newNumber += number * i;
    }
    newNumber = Number(newNumber); // if You require it to be type Number, if not we can avoid this line
    console.log(newNumber);
}

//PROBLEM #4
function lastDigit(number) {
    let lastDigit = number % 10;
    if (number < 10) {
        console.log(number);
    } else if (lastDigit === 0) {
        console.log(number);
    } else {
        number -= lastDigit;
        number /= 10;
        number = String(number);
        let power = number.length;
        power = 10 ** power;
        number = Number(number);
        number += lastDigit * power;
        console.log(number);
    }
}

//PROBLEM #5
function printAvg(n1, n2, n3, n4, n5) {
    let avg = (n1 + n2 + n3 + n4 + n5) / 5;
    console.log(avg);
}


//PROBLEM #6
function findAsc(n1, n2, n3) {


}

//PROBLEM #7
function productSign(n1, n2, n3) {
    myArray = [n1, n2, n3];
    let count = 0;
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === 0) {
            console.log("unsigned");
            return;
        } else if (myArray[i] < 0) {
            count++;
        }
    }
    if (count % 2 === 0) {
        console.log("+");
    } else {
        console.log("-");
    }
}
