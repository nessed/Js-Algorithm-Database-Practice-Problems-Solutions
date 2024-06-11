function missingInt(arr, n) {
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) {
    actualSum += arr[i];
  }
  console.log(expectedSum - actualSum);
}
missingInt([1, 2, 3, 5], 5);
