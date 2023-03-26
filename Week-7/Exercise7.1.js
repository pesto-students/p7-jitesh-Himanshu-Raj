const maxContiguousSubArraySum = (arr) => {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    if (currentSum < 0) {
      currentSum = 0;
    }
  }
  return maxSum;
};

const output1 = maxContiguousSubArraySum([1, 2, 3, 4, -10]);
console.log(
  "The [1, 2, 3, 4, -10] has subarray with maximum possible sum of :",
  output1
);

const output2 = maxContiguousSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(
  "The [-2, 1, -3, 4, -1, 2, 1, -5, 4] has subarray with maximum possible sum of :",
  output2
);
