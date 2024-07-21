array1 = [-11, 0, 1, 2, 3, 9, 14, 17, 21];

function AveragePair(array, avg) {
  let result = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if ((array1[i] + array1[j]) / 2 === avg) {
        result.push([array1[i], array1[j]]);
      }
    }
  }
  return result;
}
console.log("開始運行");
console.log(AveragePair(array1, 1.5));
