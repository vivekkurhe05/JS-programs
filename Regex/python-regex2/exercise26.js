/**
 * Write a Python program to match if two words from a list of words starting with letter 'P'.
 */

// my solution
function match_words(arr) {
  let re = /^P\w+\sP[a-z]+/gi;
  return arr.filter((el) => {
    return re.test(el);
  })[0];
}

let words = ["Python PHP", "Java JavaScript", "c c++", "Python Java"];
console.log(match_words(words));
