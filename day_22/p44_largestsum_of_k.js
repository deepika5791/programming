// Find the largest sum of any subarray of size at least k

function maxSubarrayofK(arr, k) {
  let maxsum = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let subarray = arr.slice(i, i + k);
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
console.log(maxSubarrayofK(arr, k));
