//find the smallest palindrome by adding character at the beginning
function Smallpalindrome(str) {
  let reverse = str.split("").reverse().join("");
  for (let i = 0; i < str.length; i++) {
    if (str.startsWith(reverse.slice(i))) {
      return reverse.slice(0, i) + str;
    }
  }
}
console.log(Smallpalindrome("abcd"));
