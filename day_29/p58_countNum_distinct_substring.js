// Count number of Distinct Substring in a String
function Substring(arr) {
  let result = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      result.add(arr.slice(i, j));
    }
  }
  return result.size;
}
console.log(Substring("abcd"));
