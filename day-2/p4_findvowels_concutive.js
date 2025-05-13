function VowelsAndConsonants(str) {
  let vowels = "aioue";
  let countvowels = 0;
  let consonants = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      countvowels++;
    } else {
      consonants++;
    }
  }
  return { countvowels, consonants };
}
console.log(VowelsAndConsonants("print"));
