/*first step:turn string to object and array make two objects, take their keys to use as index letter and to check their length, then run a for loop and check keys */

function object(array) {
    return array.reduce((totalcount, currentLetter) => {
      if (totalcount[currentLetter] !== undefined) {
        totalcount[currentLetter]++;
      } else {
        totalcount[currentLetter] = 1;
      }
      return totalcount;
    }, {});
  }
  
  function validAnagram(string1, string2) {
    const arr1 = string1.split(""); //str to arr
    const arr2 = string2.split("");
    const countObject1 = object(arr1); //arr to obj w/ count
    const countObject2 = object(arr2);
    const objKey1 = Object.keys(countObject1); //taking keys of obj to use later
    const objKey2 = Object.keys(countObject2);
  
    if (objKey1.length != objKey2.length) {
      //checker to save time
      console.log("wrong length");
      return false;
    }
    for (var i in countObject1) {
      //checks for matches through index of object, if matched, 1 is added to counter
      console.log("object1", [i], countObject1[i]);
      console.log("object2", [i], countObject2[i]);
      if (countObject1[i] == countObject2[i]) {
        //checking values of each object through index as sorted
        console.log(countObject1);
        console.log(countObject2);
        console.log("its a match");
      } else {
        console.log("this is not a match"); //if not match terminated
        return false;
      }
    }
    return true;
  }