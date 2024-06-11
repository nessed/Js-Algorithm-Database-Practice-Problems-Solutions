function sumRange(n,total =0){
    if(n <= 0){
        console.log(total)
        return total
    }
     return sumRange(n-1, total+n)
}

sumRange(3)