// reduce method

// let array = [1, 2, 3, 4, 5, 6, 7];

// // problem: find the sum of all the numbers in the array

// function sumReducer(previousValue, currentValue) {
//     return previousValue + currentValue;
// }

// console.log(array.reduce(sumReducer));

/*
    previousValue = 1
    currentValue = 2

    previousValue = previousValue + currentValue
                  = 1 + 2
                  = 3

    currentValue = 3
    previousValue = previousValue + currentValue
                  = 3 + 3
                  = 6
*/

// let array = [1, 2, 3, 4, 5];

// function sumReducer(previousValue, currentValue, index, array) {
//     return previousValue + currentValue;
// }

// console.log(array.reduce(sumReducer, 10));

// problem: given an array, remove all the duplicates

let array = [1, 3, 4, 3, 2, 1, 3, 5, 6, 3, 2, 4, 5, 3, 2, 6];

function removeDuplicates(previousValue, currentValue) {
    if (!previousValue.includes(currentValue)) {
        return [...previousValue, currentValue];
    } else {
        return previousValue;
    }
}

console.log(array.reduce(removeDuplicates, []).sort((a, b) => a-b));

/*
    previousValue = [1, 3, 4, 2, 5, 6, ]
    currentValue = 2
*/

