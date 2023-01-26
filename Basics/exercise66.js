/**
 * Write a JavaScript program to display the city name if the string begins with "Los" or "New" otherwise return blank.
 */

// my solution

function city_name(str) {
  if (str.startsWith("Los") || str.startsWith("New")) return str;
  return "";
}

console.log(city_name("New York"));
console.log(city_name("Los Angeles"));
console.log(city_name("London"));
