// Merge Two Sorted Arrays
function mergeTwoSortedArray(arr1, arr2) {
  let result = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }
  return result.concat(arr1, arr2);
}

let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
console.log(mergeTwoSortedArray(arr1, arr2));
