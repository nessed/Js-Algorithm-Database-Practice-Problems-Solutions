/*It initializes two pointers, left at the beginning of the array (0) and right at the end of the array (arr.length - 1).
It enters a while loop as long as left is less than right, which means there are still elements to check.
Inside the loop, it calculates the sum of the numbers at the positions pointed by left and right. If the sum is zero, it returns the pair [arr[left], arr[right]].
If the sum is greater than zero, it means the numbers at the current positions have too large a sum, so it decrements right to consider a smaller number.
If the sum is less than zero, it means the numbers at the current positions have too small a sum, so it increments left to consider a larger number.
It continues this process until it finds a pair with a sum of zero or until the left pointer surpasses the right pointer, indicating no such pair exists.*/

//O(N)Time
function sumZero(arr) {
  if (!arr) {
    console.log("empty");
    return false;
  }
  let left = 0;
  let right = arr.length - 1;
  let count = 0;
  while (left < right) {
    count = count + 1;
    let sum = arr[left] + arr[right];
    //console.log(arr[left], "(at", left,")", "+", arr[right], "(at", right,")","=", sum);
    // console.log(count,sum)

    if (sum === 0) {
      console.log("There is a pair,", arr[left], "&", arr[right]);
      // console.log(arr[left], arr[right]);
      return arr[left], arr[right];
    }
    if (count === arr.length - 1 && sum != 0) {
      console.log("There is no pair");
      return false;
    } else if (sum > 0) {
      right--;
    } else if (sum < 0) {
      left++;
    } else {
      console.log("none");
      return false;
    }
  }
}
sumZero([-9, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
