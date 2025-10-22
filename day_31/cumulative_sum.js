// The cumulative sum of an array at index i is defined as the sum of all elements of the array from index 0 to index i.

function cumulativeSum(nums){
    let result = []
    let sum = 0
    for(let i = 0 ; i < nums.length ; i++){
        sum += nums[i]
        result.push(sum)
    }
    return result
}
console.log(cumulativeSum([1, 2, 3, 4]));