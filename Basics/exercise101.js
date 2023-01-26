/**
 * Write a JavaScript program to check whether a given string contains only Latin letters and
 * no two uppercase and no two lowercase letters are in adjacent positions.
 */

// w3resource solution

function test_string(str) {
  is_lower_case = function (chr) {
    if ("a" <= chr && chr <= "z") return true;
    else return false;
  };

  is_upper_case = function (chr) {
    if ("A" <= chr && chr <= "Z") return true;
    else return false;
  };

  let is_first_char_lower = is_lower_case(str[0]),
    is_first_char_upper = is_upper_case(str[0]);

  //   if (!(is_first_char_lower || is_first_char_upper)) return false;

  for (let i = 0; i < str.length; i++) {
    if (i % 2) {
      if (
        is_lower_case(str[i]) === is_first_char_lower ||
        is_upper_case(str[i]) === is_first_char_upper
      ) {
        return false;
      }
    } else {
      if (
        is_lower_case(str[i]) !== is_first_char_lower ||
        is_upper_case(str[i]) !== is_first_char_upper
      ) {
        return false;
      }
    }
  }
  return true;
}

console.log(test_string("xYr"));
console.log(test_string("XXyx"));
console.log(test_string("WeLcOmE"));
console.log(test_string("welCOME"));
