// Find the minimum number of deletions to make a string a palindrome

function minDeletionsToPalindrome(string) {
  const startIndex = 0;
  const endIndex = string.length - 1;
  return countMinDeletions(startIndex, string, endIndex);
}

function countMinDeletions(str, left, right) {
  if (left >= right) return 0;
  if (str[left] === str[right]) {
    return countMinDeletions(str, left + 1, right - 1);
  } else {
    return (
      1 +
      Math.min(
        countMinDeletions(str, left + 1, right),
        countMinDeletions(str, left, right - 1)
      )
    );
  }
}

const result = minDeletionsToPalindrome("aebcda");
console.log(result);
