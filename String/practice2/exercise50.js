/**
 * Write a JavaScript program to check if a given string contains alphanumeric characters that are palindromes regardless of special characters and letter case.
A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as the words madam or racecar, the date/time stamps 11/11/11 11:11 and 02/02/2020, and the sentence: "A man, a plan, a canal - Panama". The 19-letter Finnish word saippuakivikauppias (a soapstone vendor), is the longest single-word palindrome in everyday use, while the 12-letter term tattarrattat (from James Joyce in Ulysses) is the longest in English.
Test Data :
('$22_|1372^2731|_22') -> true
('12%^&2') -> false
('234%$$%432') -> true
(1234) -> "It must be string"
('aba%$aba') -> true
('Aba%$aba') -> true
 */

// my solution

function is_Palindrome(input) {
  let re = /[^a-z0-9]+/gi;
  if (typeof input !== "string") return "It must be a string";
  let str = input.replace(re, "");
  let reverse = str.split("").reverse().join("");

  return str.toLowerCase() === reverse.toLowerCase();
}

console.log(is_Palindrome("$22_|1372^2731|_22")); // true
console.log(is_Palindrome("12%^&2")); // false
console.log(is_Palindrome("234%$$%432")); // true
console.log(is_Palindrome(1234)); // It must be a string
console.log(is_Palindrome("aba%$aba")); // true
console.log(is_Palindrome("Aba%$aba")); // true
