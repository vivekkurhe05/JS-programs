/**
 * Write a Java function to check whether a given value is hexcolor value or not.
 * hexcolor is either 3 or 6 characters long
 * hexcolor may or may not start with #
 * hexcolor contains either digits or alphabets or alphanumeric
 * digits range from 0-9
 * alphabets range from a-f or A-F
 */

// my solution
function validate(str) {
    // let re = /^#?(\d{3,6})|([a-fA-F]{3,6})|([a-fA-F0-9]{3,6})/g;
    let re = /^\#?(\d|[a-f]|[a-f0-9]){3,6}$/gi;
    return re.test(str);
}

console.log(validate("123456")); // true
console.log(validate("#eaecff")); // true
console.log(validate("#FF0000")); // true
console.log(validate("#DD5C5C")); // true
console.log(validate("#0000000")); // false