/**
 * Write a Python program to replace whitespaces with an underscore and vice versa.
 * 
 * Python_Exercises                                                                                              
Python Exercises
 */

// my solution
function text_transform(str) {
  let new_str = "";
  for (let i = 0; i < str.length; i++) {
    if (str.includes("_")) {
      new_str = str.replace(/_/, " ");
    } else {
      new_str = str.replace(/\s/, "_");
    }
  }
  return new_str;
}

console.log(text_transform("Python_Exercises"));
console.log(text_transform("Python Exercises"));
