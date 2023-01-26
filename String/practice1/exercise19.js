/**
 * Write a JavaScript function to escape a HTML string. Go to the editor
Test Data :
console.log(escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
Output :
"&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;
 */

// my solution

function escape_HTML(str) {
  return str.replace(/[<">]/g, function (el) {
    let obj = {
      "<": "&lt;",
      '"': "&quot;",
      ">": "&gt;",
    };
    return obj[el] || el;
  });
}

console.log(
  escape_HTML('<a href="javascript-string-exercise-17.php" target="_blank">')
);
