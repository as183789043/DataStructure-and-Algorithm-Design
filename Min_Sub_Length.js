//給定一串陣列 選出加總大於目標數值的最少長度array

function MinSubLength(arr1, sum) {
  let minLength = Infinity;
  let left = 0;
  let right = 0;
  let currentSum = 0;

  while (right <= arr1.length) {
    currentSum += arr1[right];
    while (currentSum >= sum) {
      if (minLength > right - left + 1) {
        minLength = right - left + 1;
      }
      currentSum -= arr1[left];
      left++;
    }
    right++;
  }
  if (currentSum == Infinity) {
    return 0;
  } else {
    return minLength;
  }
}

console.log(MinSubLength([8, 1, 6, 15, 3, 16, 5, 7, 14, 30, 12], 60));
