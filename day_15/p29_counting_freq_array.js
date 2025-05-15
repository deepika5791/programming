// Counting the occurrences, Frequency of array

function countFrequency(arr) {
  let freq = {};
  for (const num of arr) {
    freq[num] = freq[num] ? freq[num] + 1 : 1;
  }
  return freq;
}

const arr1 = [5, 5, 5, 6, 6, 2];
const result = countFrequency(arr1);
console.log(result);
