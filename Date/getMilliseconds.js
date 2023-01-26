function addZero(i, n) {
  while (i.toString().length < n) {
    i = "0" + i;
  }
  return i;
}

let date = new Date(2022, 11, 19, 7, 9, 8, 2);
let hr = addZero(date.getHours(), 2);
let min = addZero(date.getMinutes(), 2);
let sec = addZero(date.getSeconds(), 2);
let ms = addZero(date.getMilliseconds(), 3);

let time = hr + ":" + min + ":" + sec + ":" + ms;
console.log(time);
