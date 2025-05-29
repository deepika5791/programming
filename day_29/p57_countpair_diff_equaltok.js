// Count pairs with absolute difference equal to k

function countPair(arr, k) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === k) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}
console.log(countPair([1, 4, 1, 4, 5], 3));
