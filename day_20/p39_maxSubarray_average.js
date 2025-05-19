// Maximum Average Subarray

function findMaxAverage(nums, k) {
  let max = -Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    let sum = 0;
    for (let j = 0; j < k; j++) {
      sum += nums[i + j];
    }
    max = Math.max(max, sum / k);
  }
  return max;
}

let Arrgs = [1, 12, -5, -6, 50, 3];
let K = 4;
console.log(findMaxAverage(Arrgs, K));
