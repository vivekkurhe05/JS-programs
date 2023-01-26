/**
 * Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.
 */

// your solution

for(let i=2014; i<=2050; i++) {
    let d = new Date(i,0,1);
    if(d.getDay() === 0){
        console.log("1st January is a Sunday in year: ",i)
    }
}