// Find Maximum product of integer of any array.

function MaxproductIntiger(nums) {
  nums.sort((a, b) => a - b);
  let product1 = nums[nums.length - 1] * nums[nums.length - 2];
  let product2 = nums[0] * nums[1];
  return Math.max(product1, product2);
}
const Arrays = [1, 2, 3, 4];
console.log(MaxproductIntiger(Arrays));
