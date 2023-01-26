/**
 * Write a JavaScript function to hide email addresses to protect from unauthorized user.
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
 */

// my solution
function protect_email(str) {
  let re = /(_[a-z]+)+(?=@)/g;
  return str.replace(re, "...");
}

console.log(protect_email("robin_singh@example.com"));

// or my solution

function protect_email2(str) {
  let str_arr = str.split("_");
  let surname = str_arr[1].substring(0, str_arr[1].indexOf("@"));
  let dots = str_arr[1].replace(surname, "...");

  return str_arr[0] + dots;
}

console.log(protect_email2("robin_singh@example.com"));
