function areThereDuplicates(...values) {
    console.log('Valkues', values)
    const a = new Set();
    console.log(a); 
    for(let i = 0; i< values.length; i++) {
      if(a.has(values[i])){
        return true
      } else {
        a.add(values[i])
        console.log(a)
      }
    }
    return false 
  }