function displayArray(arr) {
    for (let i = 0; i < arr.length; i++) {
      console.log([i])
  
      // if(i!=0){
      //     console.log("new arr")
      //   } 
      for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
      
      }
    }
  }
  
  displayArray([
    [1, 2, 3],
    [4, 5, 6]]
  );
  