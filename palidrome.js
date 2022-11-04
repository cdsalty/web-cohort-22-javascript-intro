// Given a string, check to see if the string is a palindrome or not.

let str = "RaCE Car".toLowerCase().replace(" ", "");

function isPalindrome(str) {
  let s = "";
  for (let i = str.length - 1; i >= 0; i--) {
    s = s + str[i];
  }
  if (str == s) return true;
  return false;
}

isPalindrome(str);
let palindromeFlag = isPalindrome(str);
console.log(palindromeFlag);
