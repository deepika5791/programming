// How is the current Fibonacci number being calculated in each iteration of the loop?
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55;

function fib(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}
console.log(fib(5));
