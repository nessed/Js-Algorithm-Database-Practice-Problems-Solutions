<<<<<<< HEAD
function delFirstHalf(arr, half) {
    return (arr = arr.slice(0, half - 1));
  }
  
  function delSecondHalf(arr, half) {
    return arr.slice(half, arr.length);
  }
  
  function binarySearch(arr, val) {
    if (!arr || arr.length === 0) {
      console.log(-1); // Element not found
      return;
    }
  
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
  
      if (arr[mid] === val) {
        console.log("Element found at index:", mid);
        return;
      } else if (val < arr[mid]) {
        high = mid - 1; // Search in the left half
      } else {
        low = mid + 1; // Search in the right half
      }
    }
  
    console.log(-1); // Element not found
  }
  
  binarySearch([-1, 0, 1, 2, 3], 2);
=======
function binarySearch(arr, val) {
  if (!arr || arr.length === 0) {
    console.log(-1); // Element not found
    return;
  }
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === val) {
      console.log("Element found at index:", mid);
      return;
    } else if (val < arr[mid]) {
      high = mid - 1; // Search in the left half
    } else {
      low = mid + 1; // Search in the right half
    }
  }
  console.log(-1); // Element not found
}

binarySearch([-1, 0, 1, 2, 3], 2);
>>>>>>> f6b1715b161aea5a2b0b65273f3cd2e6a31090da
