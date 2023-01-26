/**
 * Write a python program to convert camel case string to snake case string.
 */

// Note
function camel_to_snake(str) {
  let re = /(?<=[a-z])[A-Z]/g;
  str = str[0].toLowerCase() + str.slice(1);
  return str.replace(re, (chr) => {
    return "-" + chr.toLowerCase();
  });
}

console.log(camel_to_snake("PythonExercisesWorld"));
