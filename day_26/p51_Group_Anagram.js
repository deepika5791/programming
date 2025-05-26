function groupAnagrams(strs) {
  const map = {};
  for (let str of strs) {
    let key = str.split("").sort().join("");
    map[key] = map[key] || [];
    map[key].push(str);
  }
  return Object.values(map);
}
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "hat", "bat"]));
