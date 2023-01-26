/**
 * Write a Python program to find urls in a string.
 */

// my solution
let text =
  '<p>Contents :</p><a href="https://w3resource.com">Python Examples</a><a href="http://github.com">Even More Examples</a>';

let re = /http(s)?:\/\/[A-Za-z0-9]+\.com/g;
text = text.match(re);
console.log(text);
