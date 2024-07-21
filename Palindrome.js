let str1 = "tacocat";
let str2 = "abcdba";
let str3 = "";

function palindrome(str) {
  let left = 0;
  let right = str.length - 1;

  if (str.length == 0) {
    return false;
  }
  while (left <= right)
    if (str[left] == str[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  return true;
}

console.log(palindrome(str1));
console.log(palindrome(str2));
console.log(palindrome(str3));
