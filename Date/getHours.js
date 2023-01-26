function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

let date = new Date();
let hr = addZero(date.getHours());
let min = addZero(date.getMinutes());
let sec = addZero(date.getSeconds());

if (hr >= 12) {
  hr = hr - 12;
  hr = addZero(hr);
}
let time = hr + ":" + min + ":" + sec;
console.log(time);
