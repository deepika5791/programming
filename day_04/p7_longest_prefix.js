function FindPrefix(str) {
  for (let firstIndex = 0; firstIndex < str[0].length; firstIndex++) {
    for (let secondIndex = 1; secondIndex < str.length; secondIndex++) {
      if (str[0][firstIndex] !== str[secondIndex][firstIndex]) {
        return str[0].slice(0, firstIndex);
      }
    }
  }
  return str[0];
}
console.log(FindPrefix(["flame", "flower", "flash"]));
