// find the minimum jumps to reach the end of an array
function JumpToLast(nums) {
  let maxIndex = 0;
  let currentEnd = 0;
  let jump = 0;
  for (let i = 0; i < nums.length; i++) {
    maxIndex = Math.max(maxIndex, i + nums[i]);
    if (i == currentEnd) {
      jump++;
      currentEnd = maxIndex;
      if (currentEnd == nums.length - 1) break;
    }
  }
  return jump;
}

const result = [2, 3, 1, 1, 4];
console.log(JumpToLast(result));
