/**
 * Write a python program to convert snake case string to camel case string.
 */

function snake_to_camel(str) {
  let arr = str.split("_");
  return arr
    .map((el) => {
      return el.replace(/^[a-z]/, function (chr) {
        return chr.toUpperCase();
      });
    })
    .join("");
}

console.log(snake_to_camel("python_exercises"));
