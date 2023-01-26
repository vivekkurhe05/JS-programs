/**
 * Write a Python program to extract year, month and date from an url
 */

function extractDate(str) {
  let regex = /(\d{4})\/(\d{1,2})\/(\d{1,2})/g;
  return str.match(regex);
}

let url1 =
  "https://www.washingtonpost.com/news/football-insider/wp/2016/09/02/odell-beckhams-fame-rests-on-one-stupid-little-ball-josh-norman-tells-author/";

console.log(extractDate(url1));
