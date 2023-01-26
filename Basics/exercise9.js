/**
 * Write a JavaScript program to calculate days left until next Christmas.
 */
// your solution

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let cmas = new Date(new Date().getFullYear(), 11, 25);

if(cmas.getMonth() == 11 && cmas.getDate() > 25){
    cmas.setFullYear(cmas.getFullYear()+1)
}

console.log((cmas.getTime() - Date.parse("June 30, 2022"))/day)