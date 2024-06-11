function countDown(n){
    if(n<=0){
        console.log("Hooray")
        return
    } else {
    console.log(n)
    countDown(n-1)
    return
    }
}
countDown(3)