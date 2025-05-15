//  find maximum sum of subarray size of k by sliding method
function slidingMaxVal(arr, k) {
  let maxSum = 0;
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
const arr = [2, 7, 1, 5, 1, 2, 2];
const k = 3;
console.log(slidingMaxVal(arr, k));
