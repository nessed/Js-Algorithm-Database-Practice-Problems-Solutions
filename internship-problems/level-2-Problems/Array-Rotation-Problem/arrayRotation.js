// Given an array, the task is to cyclically rotate the array clockwise by one time.

// Examples:

// Input: arr[] = {1, 2, 3, 4, 5}
// Output: arr[] = {5, 1, 2, 3, 4}

// Input: arr[] = {2, 3, 4, 5, 1}
// Output: {1, 2, 3, 4, 5}

//O:N time, O(1) space
function arrayCycle(arr) {
  if (arr.length == 0) {
    return false;
  } else {
    arr.unshift(arr[arr.length - 1]);
    arr.pop();
    console.log(arr);
    return arr;
  }
}

arrayCycle([1, 2, 3, 4, 5]);
