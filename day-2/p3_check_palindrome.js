function Palindrome(check) {
  let reverse = check.split("").reverse().join("");
  return check === reverse;
}
console.log(Palindrome("naman"));
