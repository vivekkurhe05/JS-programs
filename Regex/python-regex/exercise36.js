/**
 * Write a python program to convert camel case string to snake case string.
 */

function camel_to_snake(str) {
  let reg = /(?<=[a-z])[A-Z]/g;
  str = str[0].toLowerCase() + str.slice(1);
  return str.replace(reg, function (el) {
    return "-" + el.toLowerCase();
  });
}

console.log(camel_to_snake("PythonExercisesWorld"));
