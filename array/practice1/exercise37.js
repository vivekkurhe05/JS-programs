/**
 * Write a JavaScript function to create a specified number of elements with pre-filled string value array.
 * Test Data :
console.log(array_filled(3, 'default value'));
["default value", "default value", "default value"]
console.log(array_filled(4, 'password'));
["password", "password", "password", "password"]
 */

// my solution
function array_filled(size, el) {
    let arr = Array(size);
    return arr.fill(el, 0, size)
}
console.log(array_filled(3, 'default value'));
console.log(array_filled(4, 'password'));