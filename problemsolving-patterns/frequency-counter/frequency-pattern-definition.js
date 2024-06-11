/* in a frequency counter pattern 
step 1) Add edge cases
step 2) Store counts in 2 objects
step 3) Run a for loop through array items for both arrays, 
step 4) check if these array items exist in object, if they don't, add 1 to the object key, if they
dont, initialize and add 1 to the key. 
obj1[key] = key value, key = key of object
step 5) compare obj1 and obj2. add two comparison checkers, one to see if keys match and second to 
see if key values match 
*/

function squaredChecker(arr1, arr2) {
  if (!arr1 || !arr2) {
    return false;
  }
  if (arr1.length != arr2.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = {};
  for (let key of arr1) {
    if (obj1[key] == undefined) {
      obj1[key] = 1;
      //console.log(obj1);
    } else {
      obj1[key] = obj1[key] + 1;
    }
  }
  for (let key of arr2) {
    if (obj2[key] == undefined) {
      obj2[key] = 1;
      //console.log(obj2);
    } else {
      obj2[key] = obj2[key] + 1;
    }
  }
  for (let key in obj1) {
    if (!(key in obj2)) {
      console.log("false", key, "does not exist in array 2");
      return false;
    }
    if (obj2[key] !== obj1[key]) {
      console.log("false, key values not same");
      return false;
    }
  }
  console.log("true, all values and keys match");
  return true;
}
squaredChecker([1, 2, 4, 4, 4], [1, 2, 4, 4, 4]);
