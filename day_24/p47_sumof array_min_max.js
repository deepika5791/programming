// sum of minimum and maximum element of all subarray of size K
function mixMaxElement(nums, k) {
  let total = 0;
  for (let i = 0; i <= nums.length - k; i++) {
    let window = nums.slice(i, i + k);
    let min = Math.min(...window);
    let max = Math.max(...window);
    total += min + max;
  }
  return total;
}

let nums = [2, 5, -1, 7, -3, -1, -2];
let k = 4;
console.log(mixMaxElement(nums, k));
