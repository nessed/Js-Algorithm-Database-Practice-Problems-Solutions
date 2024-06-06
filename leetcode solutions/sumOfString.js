// You are given a string s. The score of a string is defined as the sum of the absolute difference between the ASCII values of adjacent characters.

// Return the score of s.



// Example 1:

// Input: s = "hello"

// Output: 13

// Explanation:

// The ASCII values of the characters in s are: 'h' = 104, 'e' = 101, 'l' = 108, 'o' = 111. So, the score of s would be |104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13.

/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function (text) {
    let sum = 0;
    let firstI = 0;
    let secondI = 0;
    let i = 0;
    for (let j = i + 1; j < text.length; j++) {
      firstI = text.charCodeAt(i);
      secondI = text.charCodeAt(j);
      diff = Math.abs(firstI - secondI);
      sum += diff;
      console.log(text[i], firstI, "-", text[j], secondI, "=", diff);
      i = i + 1;
    }
  
    console.log(diff);
    console.log(sum);
    return sum;
  };
  scoreOfString("hello");
  