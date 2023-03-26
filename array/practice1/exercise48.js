/**
 * Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.
 * Test Data :
([2,3,5,7]) -> true
([2,3,5,7,8]) -> false
Expected Output:
Original array of integers: 2,3,5,7
In the said array check every numbers are prime or not! true
Original array of integers: 2,3,5,7,8
In the said array check every numbers are prime or not! false
 */

// w3resource solution
function isPrime(arr) {
    let isPrime = arr.every(el => {
        if(el == 1 | el > 2 & el % 2 == 0) {
            return false
        }else {
            return true
        }
    })

    return isPrime
}

console.log(isPrime([2,3,5,7])) // true
console.log(isPrime([2,3,5,7,8])) // false