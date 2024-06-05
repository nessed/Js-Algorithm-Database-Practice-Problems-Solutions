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
    let temp = arr[i]
    arr[i] = arr[lowest]
    arr[lowest] = temp
  }
  console.log(arr)
  return arr
}

selectionSort([34, -1,-93993,919,  22, 10, 19, 17]);
