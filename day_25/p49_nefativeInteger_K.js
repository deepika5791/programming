//  negative integer in every window of size k
function checkNegativeInWindow(arr, k) {
  for (let i = 0; i < arr.length - k + 1; i++) {
    let window = arr.slice(i, i + k);
    let negatives = window.filter((num) => num < 0);
    if (negatives.length > 0) {
      console.log(negatives);
    } else {
      console.log(0);
    }
  }
}
checkNegativeInWindow([-8, 2, 3, -6, 1], 2);
