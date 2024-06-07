/* search through array and find index of value input in function */
function findIndex(arr, val) {
    let temp = -1;
    for (let i = 0; i < arr.length; i++) {
      if (val === arr[i]) {
        temp = i;
        break;
      }
    }
    console.log(temp);
  }
  
  findIndex([1, 2, 33, 4, 1, -1], 4);
  