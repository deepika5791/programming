// Find the second largest Element

function SecondlargestEle(nums) {
  const MaxElement = Math.max(...nums);
  const index = nums.indexOf(MaxElement);
  nums.splice(index, 1);
  const secondEle = Math.max(...nums);
  return secondEle;
}
console.log(SecondlargestEle([2, 3, 24, 28, 43]));
