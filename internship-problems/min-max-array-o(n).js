/* Given an array A of size N of integers. 
Your task is to find the minimum and maximum elements in the array.
Note: Return an array that contains 2 elements the first one will be a 
minimum element and the second will be a maximum of an array.
O(n) space
O(n) time
*/

function arrayChecker(array) {
  var min = Math.min(...array);
  var max = Math.max(...array);
  return max, min;
}

arrayChecker([9, 5, 1, 2, 3, 4]);

//REFACTORED SOLUTION WITH o(1) constant space

function arrayChecker2(arr) {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
      console.log(min);
    }
  }
  console.log(min);
}
arrayChecker2([3, 4, 1, 2, 3, 7, 4, -1, 23, -6]);
