/**
 * Write a Python program to replace whitespaces with an underscore and vice versa.
 * 
 * Python_Exercises                                                                                              
Python Exercises
 */

function text_transform(str) {
  let text = "";
  if (str.indexOf("_") != -1) {
    text = str.replace(/_/, " ");
  } else if (str.indexOf(" ") != -1) {
    text = str.replace(/\s/, "_");
  }
  return text;
}

console.log(text_transform("Python_Exercises"));
console.log(text_transform("Python Exercises"));
