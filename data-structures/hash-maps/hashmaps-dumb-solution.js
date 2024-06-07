function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    console.log(key, value);
    total = (total + value) % arrayLen;
  }
  console.log("total", total);
  return total;
}
hash("orangered", 10);

/*
1)what's happening here is we take key (aka color name as parameter, and length of array as input too
2)then we loop through the chars of "cyan", find value using charcode-96
3)we put value of each character into the total value and then mod it by length of the array
4)total final value becomes hashed index
however:
problem with this
1)is it will only work with strings, not integers or arrays 
2)it's in o (n) as hashing time increases with length of input
3)it's not as random as alot of values land on the same index after hashing
*/
