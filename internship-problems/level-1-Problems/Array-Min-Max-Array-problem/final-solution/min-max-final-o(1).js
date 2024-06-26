/* Given an array A of size N of integers. 
Your task is to find the minimum and maximum elements in the array.
Note: Return an array that contains 2 elements the first one will be a 
minimum element and the second will be a maximum of an array.
O(n) space
O(1) time
*/
function arrayChecker(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log(min);
  console.log(max);
  return max, min;
}

arrayChecker([3, 50, 4, 1, 2, 3, 7, 4, -1, 23, -6]);
