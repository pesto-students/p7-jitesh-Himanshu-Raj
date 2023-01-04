const hasPairWithDifference = (arr, diff) => {
  // Create a set to store the elements in the array
  const set = new Set();
  // Iterate over the array
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (set.has(elem - diff)) {
      return 1;
    }
    // Add the current element to the set
    set.add(elem);
  }
  // If no such pair is found, return 0
  return 0;
};

console.log(hasPairWithDifference([5, 10, 3, 2, 50, 80], 78));
console.log(hasPairWithDifference([-10, 20], 30));
