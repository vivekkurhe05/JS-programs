/**
 * How to extract value of a property as array from an array of objects ?
 * [
    {
        apple: 2,
        mango: 4,
    },
    {
        apple: 3,
        mango: 6,
    },
    {
        apple: 7,
        mango: 11,
    },
]
Output: [2, 3, 7]
 */

// my solution
const input = [
    {
        apple: 2,
        mango: 4,
    },
    {
        apple: 3,
        mango: 6,
    },
    {
        apple: 7,
        mango: 11,
    },
]

const arr = []

for(let i=0; i<input.length; i++) {
    arr[i] = input[i].apple
}
console.log(arr)