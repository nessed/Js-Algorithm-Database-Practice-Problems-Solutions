//take any amount of arrays as input and merge them all into one array

function move(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr1.push(arr[i]);
      console.log(arr1);
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] >= 0) {
      arr1.push(arr[j]);
      console.log(arr1);
    }
  }
}

move([-2, -1, 4, 3, -10]);
