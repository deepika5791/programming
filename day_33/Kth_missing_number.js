function KthmissingNumbers(arr , k){
    let count = 0
    let nums = 1
    while(true){
        if(!arr.includes(nums)){
            count++
            if(count === k){
                return nums
            }
        }
        nums++
}
}
console.log(KthmissingNumbers([2, 3, 4, 7, 11] , 5))