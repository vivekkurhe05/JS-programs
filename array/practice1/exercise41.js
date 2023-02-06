/**
 * Write a JavaScript function to generate an array between two integers of 1 step length.
 * Test Data :
console.log(rangeBetwee(4, 7));
[4, 5, 6, 7]
console.log(rangeBetwee(-4, 7));
[-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]
 */

// my solution
function rangeBetwee(start, end) {
    let arr = [];
    if(start > end) start = start - end;
    for(let i=start; i<=end; i++) {
        arr.push(i);
    }
    
    return arr;
}

console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));