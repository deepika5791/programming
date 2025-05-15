// product of Array except self
function productNums(nums) {
  const totalProduct = nums.reduce((a, b) => a * b);

  return nums.map((num) => totalProduct / num);
}
console.log(productNums([1, 2, 3, 4]));
