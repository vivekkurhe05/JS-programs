/**
 * Write a JavaScript program to get the current date.  Go to the editor
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
 */

let d = new Date();

let dd = d.getDate()
let mm = d.getMonth()
let yyyy = d.getFullYear()

console.log(`${mm}-${dd}-${yyyy}`)
console.log(`${mm}/${dd}/${yyyy}`)
console.log(`${dd}-${mm}-${yyyy}`)
console.log(`${dd}/${mm}/${yyyy}`)