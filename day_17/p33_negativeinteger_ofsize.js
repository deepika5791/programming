// First negative integer in every window of size k

function findNegativeInwindow(nums, k) {
  let result = [];
  for (let negative = 0; negative <= nums.length - k; negative++) {
    let window = nums.slice(negative, negative + k);
    let negativesnumbers = window.filter((elements) => elements < 0);
    if (negativesnumbers.length > 0) {
      result.push(negativesnumbers);
    } else {
      result.push(0);
    }
  }
  return result;
}
let arr = [-8, 2, 3, -6, 1];
let k = 2;
let output = findNegativeInwindow(arr, k);
console.log(output);
