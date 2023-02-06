/**
 * Write a JavaScript function to remove a specific element from an array.
 * Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]
 */

// my solution
function remove_array_element(arr, ele) {
    arr.splice(arr.indexOf(ele), 1);
    return arr;
}

console.log(remove_array_element([2, 5, 9, 6], 5));

// or w3resource solution

function remove_array_element(arr, ele) {
   
    let index = arr.indexOf(ele);
    if(index > -1) {
        arr.splice(index, 1);
    }

    return arr;
}

console.log(remove_array_element([2, 5, 9, 6], 5));