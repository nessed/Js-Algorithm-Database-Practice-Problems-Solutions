// Count pairs with given sum
// Last Updated : 13 Apr, 2024
// Given an array of N integers, and an integer K, the task is to find the number of pairs of integers in the
// array whose sum is equal to K.

// Examples:

// Input: arr[] = {1, 5, 7, -1}, K = 6
// Output:  2
// Explanation: Pairs with sum 6 are (1, 5) and (7, -1).

// Input: arr[] = {1, 5, 7, -1, 5}, K = 6
// Output:  3

function countPairs(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  arr.sort()
  while (left < right) {
    if (arr[left] + arr[right] != num) {
      right = right - 1;
    } else {
      console.log(arr[left], arr[right]);
    }
  }
}

countPairs([1, 5, 7, -1, 5], 5);
