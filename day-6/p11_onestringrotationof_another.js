function Rotation(str1, str2) {
  for (let firstIndex = 0; firstIndex < string.length; firstIndex) {
    if (str1 == str2) {
      return true;
    }
    let last = str1[str1.length - 1];
    str1 = last + str1.slice(0, str1.length - 1);
  }
  return false;
}
console.log(Rotation("aab", "aba"));
