//  find index of a number which we have to find in array by given target
function findnumber(num) {
  let result = [];
  let target = 50;
  for (let i = 0; i < num.length; i++) {
    if (num[i] == target) result.push([i]);
  }
  return result;
}
console.log(findnumber([10, 20, 30, 40, 50, 60]));
