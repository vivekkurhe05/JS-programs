/**
 *  Write a JavaScript function to get nth largest element from an unsorted array. Go to the editor

Test Data :
console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
89
 */

// my solution
function nthlargest(arr, highest) {
    return arr.sort((a,b) => {
        return a-b;
    })[highest];
}

console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));