/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const formattedString = str.toLowerCase();
  let s = 0;
  let e = formattedString.length - 1;
  while (s < e) {
    if (formattedString[s] < "a" || formattedString[s] > "z") {
      s++;
      continue;
    }
    if (formattedString[e] < "a" || formattedString[e] > "z") {
      e--;
      continue;
    }
    if (formattedString[s++] != formattedString[e--]) {
      return false;
    }
  }
  return true;
}

module.exports = isPalindrome;
