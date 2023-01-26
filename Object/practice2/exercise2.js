/**
 * Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };
 */

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12,
};

console.log("Student object before deleting the property");
for (let key in student) {
  console.log(key);
}

delete student.rollno;

console.log("Student object after deleting the rollno property");
for (let key in student) {
  console.log(key);
}
