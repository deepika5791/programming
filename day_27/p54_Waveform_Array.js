// Sort an array in Wave form
// Input -> [20, 10, 8, 6, 4, 2]
// Output -> [20, 8, 10, 4, 6, 2]

function waveForm(arr) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}
console.log(waveform((20, 10, 2, 6, 4, 2)));
