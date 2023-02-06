/**
 * Write a JavaScript function to get a random item from an array.
 */

// my solution
function random_item(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));