/**
 * Write a JavaScript function to remove HTML/XML tags from string. Go to the editor
Test Data :
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
"PHP Exercises"
 */

// w3resource solution

function strip_html_tags(str) {
  return str.replace(/<[^>]*>/g, "");
}
console.log(strip_html_tags("<p><strong><em>PHP Exercises</em></strong></p>"));
