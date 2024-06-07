/*Multiple Pointers - countUniqueValues
Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
There can be negative numbers in the array, but it will always be sorted.

countUniqueValues([1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
Time Complexity - O(n)

Space Complexity - O(n)

Bonus

You must do this with constant or O(1) space and O(n) time.*/
function countUniqueValues(arr) {
  let left = 0;
  let right = arr.length - 1;
  let arr1 = [];
  while (left < right) {
    if (arr[left] != arr[right]) {
      right = right - 1;
      console.log(arr[left], arr[right]);
    } else {
      arr1.push(arr[right]);
    }
  }
  console.log(arr1);
}
countUniqueValues([1, 1, 2, 3, 4, 5, 5]);
