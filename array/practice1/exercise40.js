/**
 *  Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.
 * Test Data :
console.log(array_range(1, 4));
[1, 2, 3, 4]
console.log(array_range(-6, 4));
[-6, -5, -4, -3]
 */

// w3resource solution
function array_range(el, size) {
    let arr = Array(size);
    for(let i=0; i<size; i++) {
        arr[i] = el;
        el+=1
    }
    
    return arr;
}

console.log(array_range(1, 4));
console.log(array_range(-6, 4));