function Ispalindrome(nums) {
  let original = nums.toString();
  let reverse = original.split("").reverse().join("");

  return original === reverse ? "true" : "false";
}
console.log(Ispalindrome(121));
