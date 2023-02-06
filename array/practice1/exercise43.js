/**
 * Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.
 * Test Data :
unzip([['a', 1, true], ['b', 2, false]])
unzip([['a', 1, true], ['b', 2]])
Expected Output:
[["a","b"],[1,2],[true,false]]
[["a","b"],[1,2],[true]]
 */

// incomplete solution
function unzip(parentArray) {
    let arr1 = parentArray[0];
    let arr2 = parentArray[1];

    for(let i=0; i<Math.max(arr1.length, arr2.length); i++) {
        console.log([arr1[i], arr2[i]])
        
    }
}
unzip([['a', 1, true], ['b', 2, false]])
unzip([['a', 1, true], ['b', 2]])