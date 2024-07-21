function SameFrequency(str1, str2) {
  let list1 = str1.split("");
  let list2 = str2.split("");
  let counter1 = {};
  let counter2 = {};
  if (list1.length != list2.length) {
    return false;
  } else {
    for (let i = 0; i < list1.length; i++) {
      if (!counter1[list1[i]]) {
        counter1[list1[i]] = 1;
      } else {
        counter1[list1[i]]++;
      }
    }

    for (let i = 0; i < list2.length; i++) {
      if (!counter2[list2[i]]) {
        counter2[list2[i]] = 1;
      } else {
        counter2[list2[i]]++;
      }
    }
    console.log(counter1);
    console.log(counter2);

    for (let index in counter1) {
      if (!counter2[index]) {
        return false;
      }
      if (counter1[index] != counter2[index]) {
        return false;
      }
    }
    return true;
  }
}

console.log(SameFrequency("aabc", "ccba"));
console.log(SameFrequency("aabbc", "cbbaa"));
