/**
 * Write a Python program to extract year, month and date from an url
 */

// my solution
function extractDate(str) {
  let re = /\d{4}\/\d{1,2}\/\d{1,2}/g;
  return str.match(re)[0];
}

let url1 =
  "https://www.washingtonpost.com/news/football-insider/wp/2016/09/02/odell-beckhams-fame-rests-on-one-stupid-little-ball-josh-norman-tells-author/";

console.log(extractDate(url1));
