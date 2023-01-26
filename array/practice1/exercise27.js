/**
 * Write a JavaScript function to retrieve the value of a given property from all elements in an array.
 */

// my solution
function property_value(arr, val) {
  let prop = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].hasOwnProperty(val)) {
      prop[i] = arr[i][val];
    }
  }

  return prop;
}

var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];

console.log(property_value(library, "title"));
console.log(property_value(library, "author"));
