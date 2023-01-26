/**
 * Write a JavaScript program to check whether a given string represents a correct sentence or not.
 * A string is considered correct sentence if it starts with the capital letter and ends with a full stop (.).
 */

// my solution

function is_correct_Sentence(str) {
  return /^[A-Z]/.test(str) && /[.]$/.test(str);
}

console.log(
  is_correct_Sentence(
    "This tool will help you write better English and efficiently corrects texts."
  )
);
console.log(
  is_correct_Sentence(
    "This tool will help you write better English and efficiently corrects texts"
  )
);
console.log(
  is_correct_Sentence(
    "this tool will help you write better English and efficiently corrects texts."
  )
);
console.log(is_correct_Sentence("T."));
