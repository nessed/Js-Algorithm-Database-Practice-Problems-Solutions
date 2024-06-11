//Given a sorted array arr[] of size N and a number X, you need to find the number of occurrences of X in given array.

//Note: Expected time complexity is O(log(n)) 


function inputChecker(arr, input) {
  if (!arr) {
    return false;
  }
  const obj1 = {};
  for (let key of arr) {
    if (obj1[key] == undefined) {
      obj1[key] = 1;
    } else {
      obj1[key] +=  1;
    }
   // console.log(obj1);
  }
  let res = obj1[input];
  if(res !== undefined || 0){
  console.log(input, "occurs", res, "times.");
} else {
    console.log(input, "does not occur in this array")
    return false
}
}
inputChecker(
  [1, 2, 2, 3, 2, 1, 1, 2, 2, 3, 3, 3, 3, 8, 1, 14, 16, 17, 4646, 64646, 4646],
  198
)
