// Find Non-Dublicate Elements From Array.
function Nondublicate(nums) {
  let result = [];
  for (let Nondublicate = 0; Nondublicate < nums.length; Nondublicate++) {
    let count = 0;
    for (
      let NondublicateNums = 0;
      NondublicateNums < nums.length;
      NondublicateNums++
    ) {
      if (nums[Nondublicate] == nums[NondublicateNums]) {
        count++;
      }
    }
    if (count === 1) {
      result.push(nums[Nondublicate]);
    }
  }
  return result;
}
console.log(Nondublicate([2, 3, 4, 1, 2]));
