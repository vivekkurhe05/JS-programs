/**
 * Write a JavaScript program to remove a character at the specified position of a given string and return the new string.
 */

// my solution

function remove_character(str, pos) {
  let arr = str.trim().split("");
  arr.splice(pos, 1);
  return arr.join("");
}

console.log(remove_character("Python", 0));
console.log(remove_character("Python", 3));
console.log(remove_character("Python", 5));

// or
// my solution

function remove_character2(str, pos) {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    if (i === pos) continue;
    else word += str[i];
  }
  return word;
}

console.log(remove_character2("Python", 0));
console.log(remove_character2("Python", 3));
console.log(remove_character2("Python", 5));

// or
// w3resource slotion

function remove_character3(str, char_pos) {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return part1 + part2;
}

console.log(remove_character3("Python", 0));
console.log(remove_character3("Python", 3));
console.log(remove_character3("Python", 5));
