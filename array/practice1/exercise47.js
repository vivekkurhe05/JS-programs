/**
 * Write a JavaScript program to remove all falsy values from an given object or array.
 * Test Data :
const obj = {
a: null,
b: false,
c: true,
d: 0,
e: 1,
f: '',
g: 'a',
h: [null, false, '', true, 1, 'a'],
i: { j: 0, k: false, l: 'a' }
Expected Output:
{"c":true,"e":1,"g":"a","h":[true,1,"a"],"i":{"l":"a"}}
 */

const obj = {
    a: null,
    b: false,
    c: true,
    d: 0,
    e: 1,
    f: '',
    g: 'a',
    h: [null, false, '', true, 1, 'a'],
    i: { j: 0, k: false, l: 'a' }
}
