// intersection

nums1 = [12, 2, 3, 4, 5, 6, 7, 8];
nums2 = [6, 7, 8, 9, 10, 12, 11];

function Counter(arr1, arr2) {
  let result = [];
  let counter = {};
  let arr3 = arr1.concat(arr2);
  for (let i = 0; i < arr3.length; i++) {
    if (!counter[arr3[i]]) {
      counter[arr3[i]] = 1;
    } else {
      counter[arr3[i]]++;
    }
  }
  console.log(counter);
  for (let index in counter) {
    if (counter[index] >= 2) {
      result.push(index); //[6,7,8,12]
    }
  }
  return result;
}

console.log(Counter(nums1, nums2));
