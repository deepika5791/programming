//Implement string compression
function compression(str) {
  let compressed = "";
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += count + str[i];
      count = 1;
    }
  }
  const result = compressed;
  console.log(compressed);
}
compression("aaabbccc");
