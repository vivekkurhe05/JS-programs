/**
 * Write a JavaScript program to create a new string from a given string 
 * changing the position of first and last characters. 
 * The string length must be greater than or equal to 1.
 */

// w3resource solution

function first_last(str) {
    
    if(str.length <= 1) return str
    return str.charAt(str.length-1) + str.substring(1, str.length-1) + str.charAt(0)
}

console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('abc'));