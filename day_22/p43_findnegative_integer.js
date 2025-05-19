// Find negative integer in every window of size k
function findNegativeInWindows(arr, k) {
  let result = [];
  for (let i = 0; i <= arr.length - k; i++) {
    let window = arr.slice(i, i + k);
    let negatives = window.filter((num) => num < 0);
    if (negatives.length > 0) {
      result.push(negatives);
    } else {
      result.push(0);
    }
  }
  return result;
}

let arr = [-8, 2, 3, -6, 1];
let k = 2;
let output = findNegativeInWindows(arr, k);
console.log(output);
