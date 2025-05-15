// Find Longest substring without repeating.
function Substring(str) {
  let start = 0;
  let end = 0;
  let maxLength = 0;
  let subStr = new Set();

  while (end < str.length) {
    if (!subStr.has(str[end])) {
      subStr.add(str[end]);
      maxLength = Math.max(maxLength, subStr.size);
      end++;
    } else {
      subStr.delete(str[start]);
      start++;
    }
  }
  return maxLength;
}

const result = "GreeksforGreeks";
console.log(Substring(result));
