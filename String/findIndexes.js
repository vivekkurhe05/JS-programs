// Find indexes of all matches

let text = "Is this all there is?";
let re = /is/gi;

let matches = [];
let result;

do {
  result = re.exec(text);
  if (result) {
    matches.push(result);
  }
} while (result != null);

console.log(matches.map((el) => el.index));
