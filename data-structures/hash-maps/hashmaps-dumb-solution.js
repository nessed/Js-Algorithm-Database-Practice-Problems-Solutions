function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    console.log(key,value);
    total = (total + value) % arrayLen;
  }
  console.log("total", total);
  return total;
}
hash("orangered", 10);
 
/*problem with this is it will only work with strings, not integers 
or arrays 
it's in o (n) as hashing time increases with length of input
it's not as random as alot of values land on the same index after 
hashing

*/