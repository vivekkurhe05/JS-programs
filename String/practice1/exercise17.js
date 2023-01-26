/**
 * Write a JavaScript function to chop a string into chunks of a given length. Go to the editor
Test Data :
console.log(string_chop('w3resource'));
console.log(string_chop('w3resource',2));
console.log(string_chop('w3resource',3));
["w3resource"]
["w3", "re", "so", "ur", "ce"]
["w3r", "eso", "urc", "e"]
 */

function string_chop(str, num) {
  return str.match(new RegExp(".{1," + num + "}", "g"));
}
console.log(string_chop("w3resource"));
console.log(string_chop("w3resource", 2));
console.log(string_chop("w3resource", 3));
