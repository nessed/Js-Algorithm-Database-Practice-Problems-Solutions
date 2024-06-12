/*Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate
th maximum sum of n consecutive elements in the array */
function maxSum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  console.log(max);
}

maxSum([1, 2, 3, 4], 1);
