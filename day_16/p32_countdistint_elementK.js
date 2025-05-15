// Count distinct element in every window of size

function distingElement(nums, k) {
  let result = [];
  for (let FirstIndex = 0; FirstIndex <= nums.length - k; FirstIndex++) {
    let window = nums.slice(FirstIndex, FirstIndex + k);
    let distingElementcount = new Set(window).size;
    result.push(distingElementcount);
  }
  return result;
}

const nums = [1, 2, 1, 3, 4, 2, 3];
let k = 4;
console.log(distingElement(nums, k));
