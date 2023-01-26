/**
 * Write a JavaScript function to get unique guid (an acronym for 'Globally Unique Identifier?) 
 * of the specified length, or 32 by default.
Test Data :
console.log(guid());
console.log(guid(15));
"hRYilcoV7ajokxsYFl1dba41AyE0rUQR"
"b7pwBqrZwqaDrex"
 */

// my solution

function guid(num = 32) {
  let str = [];
  chrs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < num; i++) {
    str[i] = chrs[Math.floor(Math.random() * chrs.length)];
  }
  return str.join("");
}
console.log(guid());
console.log(guid(15));
