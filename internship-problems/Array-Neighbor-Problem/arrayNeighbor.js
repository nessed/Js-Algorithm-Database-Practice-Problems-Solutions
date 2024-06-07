// Given an array arr of n elements that is first strictly increasing and then maybe strictly decreasing, find
// the maximum element in the array.
// Note: If the array is increasing then just print the last element will be the maximum value.
// Example:
// Input: array[]= {5, 10, 20, 15}
// Output: 20
// Explanation: The element 20 has neighbors 10 and 15, both of them are less than 20.
function arrNeigbor(arr) {
    let newarr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i + 1]) {
      console.log(arr[i], arr[i + 1]);
arr= arr.splice(arr[i],arr[i]);
    }
  }
  console.log(arr);
}
arrNeigbor([5, 10, 20, 15]);
