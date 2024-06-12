function countUniqueValues(array) {
  array.sort()
  let length = 0
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[i + 1]) {
      length +=1
    }
  }
  console.log(length)
  return length;
}
countUniqueValues([1, 2, 3, 4, 7, 7, 4, 12, 12, 13]);
