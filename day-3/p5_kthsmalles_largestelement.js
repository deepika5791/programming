// Find Kth Smallest and Largest
function kthSmallAndLargest(nums, k) {
  let Sorting = nums.sort((a, b) => a - b);
  let Small = Sorting[k - 1];
  let Largest = Sorting[Sorting.length - 1];
  return { Small, Largest };
}

console.log(kthSmallAndLargest([1, 3, 4, 5, 6, 7], 3));
