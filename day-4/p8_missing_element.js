function FindMissingNum(num) {
  for (let firstIndex = 0; firstIndex < num.length; firstIndex++) {
    if (!num.includes(firstIndex)) {
      return i;
    }
  }
}
console.log(FindMissingNum([1, 2, 3, 5]));
