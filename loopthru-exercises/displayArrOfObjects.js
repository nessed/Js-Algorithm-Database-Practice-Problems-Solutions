const people = [
  {
    name: "ali",
    age: 12,
    gender: "m",
  },
  {
    name: "abid",
    age: 18,
    gender: "m",
  },
];

function loopThroughAllProperties(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let key in arr[i]) {
      // Inner loop to go through properties of each object
      console.log(key + ": " + arr[i][key]); // Log property name and value
    }
  }
}
loopThroughAllProperties(people);
