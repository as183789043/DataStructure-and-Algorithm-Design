array1 = [-11, 0, 1, 2, 3, 9, 14, 17, 21];

function Pointer(arr, number) {
  let left = 0;
  let right = arr.length - 1;
  let result = [];

  while (left < right) {
    let temp_avg = (arr[left] + arr[right]) / 2;
    if (temp_avg < number) {
      left++;
    } else if (temp_avg > number) {
      right--;
    } else {
      result.push([arr[left], arr[right]]);
      left++;
      right--;
    }
  }
  return result;
}

console.log(Pointer(array1, 1.5));
