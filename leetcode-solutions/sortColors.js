// Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of
//  the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(arr) {
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
  
    return arr;
  }