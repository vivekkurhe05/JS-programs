/**
 * Write a JavaScript program to create a new string from a given string, removing the first 
 * and last characters of the string if the first or last character are 'P'. 
 * Return the original string if the condition is not satisfied.
 */

// incomplete
function nop(str){

    if(str.startsWith("P") || str.endsWith("P")) return str.slice(1, str.length-1)
    else return str
}
console.log(nop("PythonP"));
console.log(nop("Python"));
console.log(nop("JavaScript"));
