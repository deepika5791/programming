function FindRotation(nums) {
  let min = nums[0];
  let index = 0;
  for (let firstIndex = 0; firstIndex < nums.length; firstIndex++) {
    if (nums[firstIndex] < min) {
      min = nums[firstIndex];
      index = firstIndex;
    }
  }
  return index;
}
console.log(FindRotation([3, 4, 5, 1, 2]));
