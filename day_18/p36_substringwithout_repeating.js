// Find longest substring without repeating

function substring(str) {
  let start = 0;
  let end = 0;
  let max_length = 0;
  let substr = new Set();
  while (end < str.length) {
    if (!substr.has(str[end])) {
      substr.add(str[end]);
      max_length = Math.max(max_length, substr.size);
      end++;
    } else {
      substr.delete(str[start]);
      start++;
    }
  }
  return max_length;
}
const result = "GreeksforGreeks";
console.log(substring(result));
