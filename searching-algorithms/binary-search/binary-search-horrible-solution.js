// Binary search pseudocode

// If the array is empty, return -1 as the element cannot be found.
// If the array has elements, find the middle element in the array. If the target is equal to the middle element, return the middle element index.
// If the target is less than the middle element, binary search the left half of the array.
// If the target is greater than the middle element, binary search the right half of the array.

function delFirstHalf(arr, half) {
  return (arr = arr.slice(0, half - 1));
}

function delSecondHalf(arr, half) {
  return arr.slice(half, arr.length);
}

function binarySearch(arr, val) {
  if (!arr) {
    console.log(-1);
  }
  const half = Math.floor(arr.length / 2);

  let index = arr.length - 1;
  if (arr[index / 2] === val) {
    console.log(val);
  } else if (val > arr[index / 2]) {
    arr = delSecondHalf(arr, half);
    console.log(arr);
    if (arr.length / 2 != 0) {
    }
  }
}
binarySearch([-1, 0, 1, 2, 3], 2);
