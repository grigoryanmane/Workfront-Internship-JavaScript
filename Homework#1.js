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
    let numbers = [n1, n2, n3];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] > numbers[j]) {
                let temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    console.log(numbers);

}
findAsc(1);

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

//PROBLEM #8

function quadraticEquation(a, b, c) {
    if (isNaN(a) == true || isNaN(b) == true || isNaN(c) == true || a == 0) {
        console.log("Enter Valid Constants");
        return;
    }
    let d = Math.pow(b, 2) - 4 * a * c;
    if (d < 0) {
        console.log("Solution does not exists");
    } else if (d == 0) {
        let x1 = -b / (2 * a);
        console.log("Solution is " + x1);
    } else {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        console.log("Solutions are " + x1 + " and " + x2);
    }
}

//PROBLEM #9

function rewrite() {
    let n = +prompt();
    let i = 0;
    let j = 0;
    if (n % 2 === 0 && !Math.floor(n / 10)) {
        i += 1;
    }
    if (n % 3 === 0 && n % 10 === 1) {
        j += 1;
    }
}

//PROBLEM #10

function inNumber(digit, number) {
    let count = 0;
    number = String(number);
    for (let i = 0; i < number.length; i++) {
        if (number[i] == digit) {
            count++;
        }
    }
    if (count >= 1) {
        console.log("Yes");
    } else {
        console.log("No");
    }
}

//PROBLEM #11
function reverseElements(string) {
    string = String(string);
    if (string.length == 1) {
        console.log(string);
        return;
    }
    let lastElement = string[string.length - 1];
    let firstElement = string[0];
    let newString = "";
    newString += lastElement;
    for (let i = 1; i < string.length - 1; i++) {
        newString += string[i];
    }
    newString += firstElement;
    console.log(newString);
}

//PROBLEM #12

function area(height, base) {
    let figure = prompt("What is the figure?");
    console.log(figure);
    figure = figure.toLowerCase();
    let area;
    if (figure == 'triangle') {
        area = (height * base) / 2;
    } else if (figure == 'rectangle') {
        area = (height * base);
    } else {
        area = "Unknown figure";
    }
    console.log(area);
}


//PROBLEM #13
function difference(number) {
    number = String(number);

    let min = number[0];
    let max = number[0];
    if (number.length == 1) {
        console.log(Number(max - min));
    } else {
        for (let i = 0; i < number.length; i++) {
            if (Number(number[i]) >= max) {
                max = number[i];
            }
            if (Number(number[i]) <= min) {
                min = number[i];
            }
        }
        console.log(Number(max - min));
    }
}
