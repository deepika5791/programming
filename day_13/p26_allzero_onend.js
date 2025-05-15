// Move All zeros to end of Array
function MovezeroToEnd(nums) {
  nums.sort((a, b) => a - b);
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  console.log(nums);
}
MovezeroToEnd([0, 1, 0, 3, 0, 12]);
