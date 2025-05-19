// Check if array a has all elements of array b
function allElementsIn(a, b) {
  const setA = new Set(a);
  for (let item of b) {
    if (!setA.has(item)) {
      return false;
    }
  }
  return true;
}

const a = [1, 2, 3, 4, 5];
const b = [2, 3];
console.log(allElementsIn(a, b));
