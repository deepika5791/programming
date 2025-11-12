// Ceiling of a number in sorted array

function ceilingNum(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(ceilingNum([2, 4, 6, 10, 15], 5));
