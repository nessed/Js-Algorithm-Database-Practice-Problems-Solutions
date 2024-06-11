// Find duplicates in an array
// EasyAccuracy: 18.95%Submissions: 710K+Points: 2
// Given an array arr of size n which contains elements in range from 0 to n-1, you need to find all
// the elements occurring more than once in the given array. Return the answer in ascending order.
// If no such element is found, return list containing [-1].

// Note: Try and perform all operations within the provided array. The extra (non-constant) )
// space needs to be used only for the array to be returned.

// Examples:

// Input: arr[] = {0,3,1,2}, n = 4
// Output: -1
// Explanation: There is no repeating element in the array. Therefore output is -1.
// Input: arr[] = {2,3,1,2,3}, n = 5
// Output: 2 3
// Explanation: 2 and 3 occur more than once in the given array.

// O(N) space and time

function findDuplicates(arr) {
  if (!arr) {
    return false;
  } else {
    let obj1 = {};
    let dups = [];
    let string = "";
    for (let key of arr) {
      if (obj1[key] === undefined) {
        obj1[key] = 1;
      } else {
        obj1[key] += 1;
      }
    }
    for (let i in obj1) {
      if (obj1[i] > 1) {
        dups.push(i);
      }
    }
    for (let i = 0; i < dups.length; i++) {
      string += dups[i];
      if (i < dups.length - 1) {
        string += " "; // Add space only if it's not the last string
      }
    }
    console.log(string);
  }
}

findDuplicates([2, 1, 2, 2, 3, 4]);
