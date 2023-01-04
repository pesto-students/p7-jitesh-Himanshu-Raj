function sortArray(arr) {
  const count = [0, 0, 0];

  // Count the number of 0s, 1s, and 2s in the array
  for (const num of arr) {
    count[num]++;
  }

  // Overwrite the original array with the sorted elements
  let i = 0;
  for (let num = 0; num < 3; num++) {
    for (let j = 0; j < count[num]; j++) {
      arr[i++] = num;
    }
  }
  return arr;
}

console.log(sortArray([0, 2, 1, 2, 0]));
console.log(sortArray([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]));
