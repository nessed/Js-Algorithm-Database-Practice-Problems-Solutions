// Time complexity : O(n log(n))
// Auxiliary Space : O(1)

// Program to find the minimum (or maximum) element of an array

function bigSmall(arr) {
  arr.sort();
  console.log("min:", arr[0], "max", arr[arr.length - 1]);
}
bigSmall([1, 2, 3, 3, 1, 2, 3, 5, 6, 7, 8, 9, 7]);
