function longestprefixSurfix(str) {
  let n = str.length;
  for (let i = n - 1; i > 0; i--) {
    if (str.slice(0, i) === str.slice(n - i)) {
      return str.slice(0, i);
    }
  }
  return "";
}
console.log(longestprefixSurfix("level"));
