//PROBLEM #1
function largestProduct(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product = (array[i] * array[i + 1] >= product) ? array[i] * array[i + 1] : product;
    }
    return product;
}

//PROBLEM #2
function missingElements(array) {
    let min = array[0];
    let max = array[0];
    for (let i = 0; i < array.length; i++) {
        min = (array[i] <= min) ? array[i] : min;
        max = (array[i] >= max) ? array[i] : max;
    }
    let difference = max - min;
    return difference - (array.length - 1);
}

//PROBLEM #3
function createAcronym(sentence) {
    let acronym = sentence[0].toUpperCase();
    for (let i = 1; i < sentence.length - 1; i++) {
        if (sentence[i] === ' ') {
            acronym = acronym.concat(sentence[i + 1].toUpperCase());
        }
    }
    return acronym;
}

//PROBLEM #4
function subStrings(string, length) {
    let subStringsArray = [];
    for (let i = 0; i < string.length - length + 1; i++) {
        subStringsArray = subStringsArray.concat(string.slice(i, i + length))
    }
    return subStringsArray;
}

//PROBLEM #5
function treeObjects(array) {
    let tree = {};
    for (let obj in array) {

    }


}
