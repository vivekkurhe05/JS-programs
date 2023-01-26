/**
 * Write a JavaScript program to display the current day and time in the following format.  Go to the editor
Sample Output : Today is : Tuesday.
Current time is : 10 PM : 30 : 38
 */

const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function addZero(num) {

    if(num.toString().length < 2){
        num = "0" + num;
    }
    return num;
}

var d = new Date();

const day = weekdays[d.getDay()];
console.log("Today is", day);

var hrs = addZero(d.getHours());
var mins = addZero(d.getMinutes());
var sec = addZero(d.getSeconds());

const format = hrs >= 12 ? "PM" : "AM";
if(hrs >= 12){
    hrs = hrs - 12;
}

console.log(`Current time is : ${hrs} ${format} : ${mins} : ${sec}`);