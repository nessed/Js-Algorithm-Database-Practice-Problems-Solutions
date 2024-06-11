// You are given a string s. You need to reverse the string.
// Expected Time Complexity: O(|S|).
// Expected Auxiliary Space: O(1).


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
