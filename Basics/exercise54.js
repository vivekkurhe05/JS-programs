/**
 * Write a JavaScript program to count the number of vowels in a given string.
 */

// my solution

function vowel_Count(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "A" ||
      str[i] === "e" ||
      str[i] === "E" ||
      str[i] === "i" ||
      str[i] === "I" ||
      str[i] === "o" ||
      str[i] === "O" ||
      str[i] === "u" ||
      str[i] === "U"
    ) {
      count++;
    }
  }

  return count;
}

console.log(vowel_Count("Python"));
console.log(vowel_Count("w3resource.com"));

// or
// my solution

function count_vowels_2(str) {
  let count = 0;
  let i = 0;
  while (str[i] != undefined) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      count++;
    }
    i++;
  }
  return count;
}
console.log(count_vowels_2("education"));
console.log(count_vowels_2("Python"));
console.log(count_vowels_2("w3resource.com"));
