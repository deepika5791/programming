// find intersection of Two Arrays
function Intersection(num1, num2) {
  let result = [];
  for (let i = 0; i < num1.length; i++) {
    for (let j = i; j < num1.length; j++) {
      if (num1[i] === num2[j]) {
        result.push(num1[i]);
      }
    }
  }
  return result;
}

console.log(Intersection([4, 9, 5], [9, 4, 9, 8, 4]));
