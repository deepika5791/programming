// Sum of minimum and maximum elements of all Subarray of size k
function MinAndMaxElement(nums, k) {
  let total = 0;
  for (let FirstIndex = 0; FirstIndex <= nums.length - k; FirstIndex++) {
    let window = nums.slice(FirstIndex, FirstIndex + k);
    let min = Math.min(...window);
    let max = Math.max(...window);
    total += min + max;
  }
  return total;
}
const nums = [2, 5, -1, 7, -3, -1, -2];
let k = 4;
console.log(MinAndMaxElement(nums, k));
