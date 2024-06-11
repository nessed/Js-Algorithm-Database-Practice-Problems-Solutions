// Given two arrays a[] and b[] of size n and m respectively. The task is to find the number of elements in the union between these two arrays.

// Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.

// Note : Elements are not necessarily distinct.

// Example 1:

// Input:
// 5 3
// 1 2 3 4 5
// 1 2 3
// Output:
// 5
// Explanation:
// 1, 2, 3, 4 and 5 are the
// elements which comes in the union set
// of both arrays. So count is 5.
function selectionSort(arr) {
    for (i = 0; i < arr.length; i++) {
      let lowest = i;
      for (j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[lowest]) {
          lowest = j;
          //console.log("lowest", lowest);
        }
        //console.log(arr[i], arr[j]);
      }
      let temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
    return arr;
  }
  function unionArrays(arr1, arr2) {
    let set1 = new Set(arr1);
    console.log(set1);
    let set2 = new Set(arr2);
    console.log(set2);
    let mergedSet = new Set([...set1, ...set2]);
    console.log(mergedSet);
    let setToArr = [];
    for (let i of mergedSet) {
      setToArr.push(i);
    }
    console.log(setToArr);
    selectionSort(setToArr);
    console.log(setToArr);
    console.log(setToArr.length)
  }
  
  unionArrays([1, 1, 1, 2, 3, 4, 5, 9], [1, 2, 1, 5, 6, 7, 7, 8]);