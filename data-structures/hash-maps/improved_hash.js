function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}
/* 
here, steps are basically same as dumb solution except:
1)we initialized a prime number
2)in our loop, we made it so that the loop only runs as far as 100 if length of the string is bigger than 100
3)we used traditional for loop format rather than for of
4)we multiply total by prime number to make its value more random so there is less chance of collision or value landing on 
same index then we modulate it by arrayLen again

however: 
what happens when string is bigger than 100 characters?
some of its ending values after 100 get skipped over
is that an issue?
*/
