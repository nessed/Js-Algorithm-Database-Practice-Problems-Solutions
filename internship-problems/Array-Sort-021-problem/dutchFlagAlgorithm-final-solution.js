// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

// Example 1:

// Input:
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2
// Explanation:
// 0s 1s and 2s are segregated
// into ascending order.

//Space: O(1) Runtime: O(N)
function dutchSort(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  while (mid <= high) {
    if (arr[mid] === 0) {
      [arr[mid], arr[low]] = [arr[low], arr[mid]];
      low++;
      mid++;
    } else if (arr[mid] === 1) {
      mid++;
    } else {
      [arr[mid], arr[high]] = [arr[high], arr[mid]];
      high--;
    }
  }

  console.log(arr);
}
dutchSort([2, 2, 2, 0, 0, 0, 1, 1]);
