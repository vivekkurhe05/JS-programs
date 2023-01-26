/**
 * Write a Python program to find the occurrence and position of the substrings within a string
 * Found "exercises" at 7:16                                                                                  
Found "exercises" at 22:31                                                                                    
Found "exercises" at 36:45
 */

let text = "Python exercises, PHP exercises, C# exercises";
let re = /exercises/g;
let matches = [];
let match;

do {
  match = re.exec(text);
  if (match) {
    matches.push(match);
  }
} while (match != null);

matches.forEach((el) => {
  console.log(`Found ${el[0]} at ${el.index}:${el.index + el[0].length}`);
});
