function reverseString(str) {
  let array = str.split("");
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--)  {
    reversed.push(array[i]);
  }
  let nString = reversed.join("");
  console.log(nString);
  return nString;
}
reverseString("hello");
