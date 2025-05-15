// function the largest sum subarray of size at least k

function Maxsubarrayofk(arr, k) {
  let maxsum = -Infinity;
  for (let largestsum = 0; largestsum <= arr.length - k; largestsum++) {
    let subarray = arr.slice(largestsum, largestsum + k);
    let sum = 0;
    for (let num of subarray) {
      sum += num;
    }
    maxsum = Math.max(maxsum, sum);
  }
  return maxsum;
}
const arr = [-4, -2, 1, -3];
const k = 2;
console.log(Maxsubarrayofk(arr, k));
