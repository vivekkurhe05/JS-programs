/**
 * Write a JavaScript function to escapes special characters (&, <, >, ', ") for use in HTML. Go to the editor
Test Data :
console.log(escape_html('PHP & MySQL'));
"PHP &amp; MySQL"
console.log(escape_html('3 > 2'));
"3 &gt; 2"
 */

function escape_html(str) {
  return str.replace(/[&>]/g, function (el) {
    let obj = {
      "&": "&amp;",
      ">": "&gt;",
    };
    return obj[el] || el;
  });
}
console.log(escape_html("PHP & MySQL"));
console.log(escape_html("3 > 2"));
