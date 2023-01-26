/**
 * Write a JavaScript function to truncates a string if it is longer than the specified number of characters. 
 * Truncated strings will end with a translatable ellipsis sequence ("…") (by default) or specified characters.
Test Data :
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))
"We are doing JS string exercises."
"We are doing JS ..."
"We are doing !!"
 */

// my solution

function text_truncate(str, num, sym) {
  if (sym === undefined) sym = "...";
  if (num === undefined) return str;
  str = str.substring(0, num);
  return str.replace(str.slice(-sym.length), sym);
}

console.log(text_truncate("We are doing JS string exercises."));
console.log(text_truncate("We are doing JS string exercises.", 19));
console.log(text_truncate("We are doing JS string exercises.", 15, "!!"));
