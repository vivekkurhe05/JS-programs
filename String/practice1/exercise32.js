/**
 * Write a JavaScript function to remove?non-printable ASCII chars. Go to the editor
Test Data :
console.log(remove_non_ascii('???????PHP-MySQL??????'));
"PHP-MySQL"
 */

// my solution

function remove_non_ascii(str) {
  return str.replace(/^\W+|\W+$/g, "");
}
console.log(remove_non_ascii("äÄçÇéÉêPHP-MySQLöÖÐþúÚ"));
