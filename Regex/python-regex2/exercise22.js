/**
 * Write a Python program to find the occurrence and position of the substrings within a string
 * Found "exercises" at 7:16                                                                                  
Found "exercises" at 22:31                                                                                    
Found "exercises" at 36:45
 */

// Note

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

matches.forEach((arr) => {
  console.log(`Found ${arr[0]} at ${arr.index}:${arr.index + arr[0].length}`);
});
