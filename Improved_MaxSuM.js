console.log(Imporved_MaxSum([2, 7, 3, 0, 6, 25, 1, -5, -12, -11], 3));

function Imporved_MaxSum(arr, size) {
  if (size > arr.length) {
    return null;
  }

  let MaxValue = 0;
  for (let i = 0; i < size; i++) {
    MaxValue += arr[i];
  }

  let TmpValue = MaxValue;
  for (let j = size; j < arr.length; j++) {
    TmpValue = TmpValue - arr[j - size] + arr[j];
    if (MaxValue < TmpValue) {
      MaxValue = TmpValue;
    }
  }
  return MaxValue;
}
