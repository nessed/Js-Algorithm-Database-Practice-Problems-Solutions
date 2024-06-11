// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order
// Input:
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2
// Explanation:
// 0s 1s and 2s are segregated
// into ascending order.

//   Expected Time Complexity: O(N)
//   Expected Auxiliary Space: O(1)

function arrSort(arr) {
  arr.sort();
  for (let i of arr) {
    if (i != 0 && i != 1 && i != 2) {
      console.log(i, "wrong input");
    }
  }
  console.log(arr);
}

arrSort([0, 2, 2, 1, 0, 2, 1]);
