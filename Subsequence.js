console.log(isSubsequence("book", "brookly"));
console.log(isSubsequence("", "brookly"));
console.log(isSubsequence("turkey", "hello world"));

function isSubsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (str1.length == 0) {
      return true;
    } else if (str1[pointer1] == str2[pointer2]) {
      pointer1++;
    }
    pointer2++;
    if (pointer1 == str1.length) {
      return true;
    }
  }
  return false;
}
