//arr[] = [1 3 2 4]
//Output: 3 4 4 -1
//Explanation: In the array, the next larger element to 1 is 3 ,
//3 is 4 , 2 is 4 and for 4 ? since it doesn't exist, it is -1

const nextGreaterElement = (arr) => {
  if (arr.length <= 1) {
    return;
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      const iVal = arr[i];
      const jVal = arr[j];
      //console.log("iVal:", iVal, "jVal:", jVal);
      if (jVal > iVal) {
        result.push(jVal);
        break;
      } else if (jVal < iVal) {
        continue;
      } else {
        result.push(-1);
      }
    }
  }
  return result;
};

console.log(nextGreaterElement([1, 3, 2, 4]));

//Time complexity: O(N^2)
//Space complexity: O(1)
