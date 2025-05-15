// Find Dublicate Elements From Array.
function FindDublicate(nums) {
  let result = [];
  for (let Dublicate = 0; Dublicate < nums.length; Dublicate++) {
    for (let DublicateNums = 0; DublicateNums < nums.length; DublicateNums++) {
      if (nums[Dublicate] == nums[DublicateNums]) {
        result.push(nums[Dublicate]);
      }
    }
  }
  return result;
}
console.log(FindDublicate([1, 2, 3, 4, 1, 4]));
