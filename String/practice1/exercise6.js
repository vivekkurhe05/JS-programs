/**
 * Write a JavaScript function to hide email addresses to protect from unauthorized user. Go to the editor
Test Data :
console.log(protect_email("robin_singh@example.com"));
"robin...@example.com"
 */

// my solution

function protect_email(str) {
  let split_addresses = str.split("_");
  let substr = split_addresses[1].substring(0, split_addresses[1].indexOf("@"));
  let substr2 = split_addresses[1].replace(substr, "...");
  return split_addresses[0] + substr2;
}
console.log(protect_email("robin_singh@example.com"));
