//take any amount of arrays as input and merge them all into one array//take
//hello//
function mergeArrays() {
  let text = "";
  const arrayOfArray = [];
  for (let i in arguments) {
    arrayOfArray.push(arguments[i]);
    arrayOfArray.concat("");
    const merge = arrayOfArray.flat(1);
    text = merge.join("");
  }
  console.log("Test");
  console.log(text);
}

mergeArrays(
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  ["dog"],
  ["cat"],
  "Afasfa",
  [5125315315],
  ["@#%#%#%#"]
);
