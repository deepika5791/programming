function areRotations(s1, s2) {
  for (let i = 0; i < s1.length; i++) {
    if (s1 == s2) {
      return true;
    }
    let firstChar = s1.slice(0, 1);
    s1 = s1.slice(1) + firstChar;
  }
  return false;
}
console.log(areRotations("aab", "aba"));
