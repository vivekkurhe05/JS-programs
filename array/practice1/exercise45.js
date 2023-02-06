/**
 * Write a JavaScript program to find all unique values in an given array of numbers.
 * Test Data :
[1, 2, 2, 3, 4, 4, 5]
[1, 2, 3, 4, 5]
[1, -2, -2, 3, 4, -5, -6, -5]
Expected Output:
[1,2,3,4,5]
[1,2,3,4,5]
[1,-2,3,4,-5,-6]
 */

// my solution
function findUnique(arr) {

    let arr1 = [];
    for(let i=0; i< arr.length; i++) {
        if(!arr1.includes(arr[i])) arr1.push(arr[i]);
    }

    return arr1;
}

console.log(findUnique([1, 2, 2, 3, 4, 4, 5]))
console.log(findUnique([1, 2, 3, 4, 5]))
console.log(findUnique([1, -2, -2, 3, 4, -5, -6, -5]))

// my solution

function findUnique2(arr) {
    return Array.from(new Set(arr));
}

console.log(findUnique2([1, 2, 2, 3, 4, 4, 5]))
console.log(findUnique2([1, 2, 3, 4, 5]))
console.log(findUnique2([1, -2, -2, 3, 4, -5, -6, -5]))