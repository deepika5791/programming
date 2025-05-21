// Count Distinct Element in every window of size k
function countDistinct(nums, k) {
  let result = [];
  for (let i = 0; i < nums.length - k + 1; i++) {
    let window = nums.slice(i, i + k);
    let distinctCount = new Set(window).size;
    result.push(distinctCount);
  }
  return result;
}

let arr = [1, 2, 1, 3, 4, 2, 3];
let k = 4;
console.log(countDistinct(arr, k));
