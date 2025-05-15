// Find the maximum ocurring character in a string.
function maxoccuring(str) {
  let maxcount = 0;
  let maxChar = "";
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count++;
      }
    }
    if (count > maxcount) {
      maxcount = count;
      maxChar = str[i];
    }
  }
  return maxChar;
}

let result = maxoccuring("apple");
console.log(result);
