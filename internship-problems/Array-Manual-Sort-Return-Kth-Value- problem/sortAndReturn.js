// K’th Smallest/Largest Element in Unsorted Array
// Last Updated : 31 May, 2024
// Given an array arr[] of size N and a number K, where K is smaller than the size of the array. Find the K’th smallest element in the given array. Given that all array elements are distinct.

// Examples:

// Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 3
// Output: 7

// Input: arr[] = {7, 10, 4, 3, 20, 15}, K = 4
// Output: 10

/* basically have to sort an array and return the k'th element from it */
function selectionSort(arr) {
  for (i = 0; i < arr.length; i++) {
    let lowest = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}

function returnIndexElement(arr, k) {
  console.log(arr);
  k = k - 1;

  let sortedArr = selectionSort(arr);
  console.log(sortedArr);
  console.log(sortedArr[k]);
}

returnIndexElement([21, 5, -2, 1, 4, 3], 2);
