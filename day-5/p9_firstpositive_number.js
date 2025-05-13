function FindPositiveNum(nums) {
  nums.sort((a, b) => a - b);
  let res = 1;
  for (let FirstIndex = 0; FirstIndex < nums.length; FirstIndex++) {
    if (nums[FirstIndex] == res) {
      res++;
    }
  }
  return res;
}
console.log(FindPositiveNum([1, 2, 0]));
