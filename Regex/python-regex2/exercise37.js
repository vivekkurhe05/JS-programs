/**
 * Write a python program to convert snake case string to camel case string.
 */

// my solution
function snake_to_camel(str) {
  str = str[0].toUpperCase() + str.slice(1);
  let re = /(?<=_)[a-z]/g;
  return str
    .replace(re, function (chr) {
      return chr.toUpperCase();
    })
    .replaceAll("_", "");
}

console.log(snake_to_camel("python_exercises_demo"));
