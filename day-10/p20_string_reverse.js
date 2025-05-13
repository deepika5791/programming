// Reverse string without using Reverse.
function Reverse(str) {
  let result = "";
  for (let firstIndex = str.length - 1; firstIndex >= 0; firstIndex--) {
    result += str[firstIndex];
  }
  return result;
}
console.log(Reverse("deepika"));
