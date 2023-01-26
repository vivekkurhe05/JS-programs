let min = 1000 * 60;
let hr = min * 60;
let day = hr * 24;
let year = day * 365;

let date = new Date();
let years = Math.round(date.getTime() / year);
console.log(years);
