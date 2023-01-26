/**
 * Write a JavaScript function to uncamelize a string. Go to the editor
Test Data :
console.log(uncamelize('helloWorld'));
console.log(uncamelize('helloWorld','-'));
console.log(uncamelize('helloWorld','_'));
"hello world"
"hello-world"
"hello_world"
 */

// my solution

function uncamelize(str, sep) {
  if (sep === undefined) sep = " ";
  return str.replace(/[A-Z]/g, (chr) => sep + chr.toLowerCase());
}
console.log(uncamelize("helloWorld"));
console.log(uncamelize("helloWorld", "-"));
console.log(uncamelize("helloWorld", "_"));
