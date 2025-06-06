// find the maximum value in each sliding window of size k.

function MaxpairVal(nums, k) {
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    let max = nums[i];
    for (let j = 1; j < k && i + j < nums.length; j++) {
      if (nums[i + j] > max) max = nums[i + j];
    }
    result.push(max);
  }
  return result;
}

let Arrays = [1, 3, 2, 1, 7, 8];
let K = 3;
console.log(MaxpairVal(Arrays, K));
