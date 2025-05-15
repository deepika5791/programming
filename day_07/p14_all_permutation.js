function allPermutations(str) {
  if (str.length === 1) {
    return [str];
  }

  let result = [];
  for (let i = 0; i < str.length; i++) {
    const currentElement = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const permutationsOfRemaining = allPermutations(remaining);

    for (let permutation of permutationsOfRemaining) {
      result.push(currentElement + permutation);
    }
  }
  return result;
}

const string = "ABC";
console.log(allPermutations(string));
