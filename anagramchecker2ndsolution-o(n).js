function validAnagram2(string1, string2) {
    if (string1.length !== string2.length) return false;
    const sorted1 = string1.split("").sort();
    const sorted2 = string2.split("").sort();
  
    for (let i = 0; i < sorted1.length; i++) {
      if (sorted1[i] !== sorted2[i]) {
        return false;
      }
    }
  
    return true;
  }

  
  module.exports = {
    validAnagram2
}