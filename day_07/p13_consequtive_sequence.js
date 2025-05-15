// find the longest consecutive sequencing
function Consequtric(nums) {
  let Ordering = nums.sort((a, b) => a - b);
  let count = 1;
  let result = [Ordering[0]];
  for (let i = 1; i < Ordering.length; i++) {
    if (Ordering[i] == Ordering[i - 1] + 1) {
      result.push(Ordering[i]);
      count++;
    }
  }
  return [result, count];
}
const Sequencing = [100, 0, 1, 200, 2, 3, 4];
const output = Consequtric(Sequencing);
console.log(output);
