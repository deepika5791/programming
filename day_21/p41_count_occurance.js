// Function to count occurrences of items in an array
function countItems(arr) {
  const count = {};
  for (let item of arr) {
    count[item] = (count[item] || 0) + 1;
  }
  return count;
}

const items = ["Apple", "Orange", "Orange"];
console.log(countItems(items));
