// n array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

// Examples :

// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5
// // Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(n)

function moveNeg(arr) {
    let negArr = [];
    let posArr = [];
    let newArr = [];
    for (let i of arr) {
      if (i < 0) {
        negArr.push(i);
      }
    }
    for (let i of arr) {
      if (i >= 0) {
        posArr.push(i);
      }
    }
    console.log("arr", arr);
    console.log("neg array: ", negArr);
    console.log("neg array: ", negArr);
    newArr = negArr.concat(posArr);
    console.log("new array: ", newArr);
  }
  
  moveNeg([1, 2, -1, 3, -9, 1, -81937, 781731, 0]);
  