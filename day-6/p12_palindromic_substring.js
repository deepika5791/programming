function Palindromic(substring) {
  let result = [];
  for (let firstIndex = 0; firstIndex < substring.length; firstIndex++) {
    for (
      let secondIndex = firstIndex + 2;
      secondIndex < substring.length;
      secondIndex++
    ) {
      let sub = substring.slice(firstIndex, secondIndex);
      if (sub === sub.split("").reverse().join("")) {
        result.push(sub);
      }
    }
  }
  return result;
}
console.log(Palindromic("babad"));
