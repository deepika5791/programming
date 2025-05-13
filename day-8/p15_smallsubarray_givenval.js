// Smallest subarray with sum greater than a given value
function smallestSub(x, nums) {
  let res = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let curr = 0;

    for (let j = i; j < nums.length; j++) {
      curr += nums[j];
      if (curr > x) {
        res = Math.min(res, j - i + 1);
        break;
      }
    }
  }
  return res;
}

const arr = [1, 4, 45, 6, 0, 19];
const x = 51;
console.log(smallestSub(x, arr));
