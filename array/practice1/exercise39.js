/**
 * Write a JavaScript function to filter false, null, 0 and blank values from an array.
 * Test Data :
console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));
[58, "abcd", true]
 */

// my solution
function filter_array_values(arr) {
    return arr.filter((el) => {
        return el != false && el != null && el != 0 && el != "";
    })
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0]));