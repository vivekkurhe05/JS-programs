/**
 * Javascript program for counting frequencies of array elements
 * 
 * Input :  arr[] = {10, 20, 20, 10, 10, 20, 5, 20}
Output : 10 3
         20 4
         5  1

Input : arr[] = {10, 20, 20}
Output : 10 1
         20 2 
 */

const arr = [10, 20, 20, 10, 10, 20, 5, 20]

let newArr = []

for(let i=0; i<arr.length; i++) {
    let count = 0
    let index = arr.indexOf(arr[i], 0)

    while(index != -1) {
        count++
        index = arr.indexOf(arr[i], index+1)
    }

    if(!newArr.includes(arr[i])) newArr.push(arr[i], count)
}

console.log(newArr)
const arr2 = []
for(let i=0;i<newArr.length; i+=2) {
    arr2.push(newArr.slice(0,2))
}

console.log(arr2)