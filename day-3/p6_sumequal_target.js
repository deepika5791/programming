// Find target sum.

function Sumequalstotarget(nums, target) {
  let result = [];
  for (let firstindex = 0; firstindex < nums.length; firstindex++) {
    for (let secondindex = 0; secondindex < nums.length; secondindex++) {
      if (nums[firstindex] + nums[secondindex] == target) {
        result.push(nums[firstindex]);
      }
    }
  }
  return result;
}
console.log(Sumequalstotarget([1, 2, 3, 4, 5, 6], 3));
