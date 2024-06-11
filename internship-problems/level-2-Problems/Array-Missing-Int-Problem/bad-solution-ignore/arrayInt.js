// Given an array of size n-1 such that it only contains distinct integers in the range of 1 to n.
// Return the missing element.

// Examples:

// Input: n = 5, arr[] = {1,2,3,5}
// Output: 4
// Explanation : All the numbers from 1 to 5 are present except 4.
// Input: n = 2, arr[] = {1}
// Output: 2
// Explanation : All the numbers from 1 to 2 are present except 2.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(1)

function missingInt(arr, n) {
  let arr2 = [];
  let str = null;
  for (let i = 1; i <= n; i++) {
    arr2.push(i);
  }
  for (let i of arr) {
    if (arr[i] != arr2[i]) {
        str = arr[i]
    }

  }
  console.log(arr);
  console.log(arr2);
  console.log(str)

}

missingInt([1, 2, 4], 4);
