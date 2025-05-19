// Rearrange an array in alternating positive and negative element.
function RearrangeArr(nums) {
  let positive = nums.filter((element) => element > 0);
  let negative = nums.filter((element) => element < 0);
  let result = [];
  let i = 0,
    j = 0;
  while (i < positive.length && j < negative.length) {
    result.push(negative[j++]);
    result.push(positive[i++]);
  }
  while (j < negative.length) {
    result.push(negative[j++]);
  }
  while (i < positive.length) {
    result.push(positive[i++]);
  }

  return result;
}
const arr = [3, 1, -2, -5, 2, -4];
console.log(RearrangeArr(arr));
