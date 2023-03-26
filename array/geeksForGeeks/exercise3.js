/**
 * How to get distinct values from an array of objects in JavaScript?
 * Input:
[
    { name: "Ram", age: 17 },
    { name: "Shyam", age: 17 },
    { name: "Mohan", age: 30 },
]
Output: [17, 30]
 */

// my solution
const input = [
    { name: "Ram", age: 17 },
    { name: "Shyam", age: 17 },
    { name: "Mohan", age: 30 },
]

const arr = []

for(let i=0;i<input.length;i++) {
    if(!arr.includes(input[i].age)) arr.push(input[i].age)
}

console.log(arr)