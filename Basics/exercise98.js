/**
 * Write a JavaScript program to switch case of the minimum possible number of letters 
 * to make a given string written in the upper case or in the lower case.
Fox example "Write" will be write and "PHp" will be "PHP"
 */

// my solution

function change_case(str) {
  let lower = 0,
    upper = 0;

  let is_lower_case = function (sym) {
    if ("a" <= sym && sym <= "z") return true;
    else return false;
  };

  let is_upper_case = function (sym) {
    if ("A" <= sym && sym <= "Z") return true;
    else return false;
  };

  for (let i = 0; i < str.length; i++) {
    if (is_lower_case(str[i])) lower++;
    if (is_upper_case(str[i])) upper++;
  }

  if (lower > upper) str = str.toLowerCase();
  else str = str.toUpperCase();

  return str;
}

console.log(change_case("Write"));
console.log(change_case("PHp"));

// or

function change_case2(str) {
  let lower = 0,
    upper = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toLowerCase()) lower++;
    else upper++;
  }

  if (lower > upper) str = str.toLowerCase();
  else str = str.toUpperCase();

  return str;
}

console.log(change_case2("Write"));
console.log(change_case2("PHp"));
