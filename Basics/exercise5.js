/**
 * Write a JavaScript program to rotate the string 'w3resource' 
 * in right direction by periodically removing one letter from the 
 * end of the string and attaching it to the front.
 */

let str = "w3resource";
let stack = [];

for(let i=0; i<str.length; i++) {
    stack.push(str.charAt(i));
}

while(stack.length > 0) {
    let el = stack.pop();
    stack.unshift(el);
    console.log(stack.join(""))
}