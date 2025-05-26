//first unique character
function firstUniqueChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s[i];
    }
  }
  return null;
}
console.log(firstUniqueChar("leetcode"));
