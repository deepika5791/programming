// insert adjacent dublicate for all occurance of a given element

function Dublicatenums(arr,target){
    let result = []
    for(let i = 0 ; i < arr.length ; i++){
        result.push(arr[i])
        if(arr[i] == target){
            result.push(arr[i])
        }
    }
    return result
}
let arr = [1,2,3,2,4]
let target = 2
console.log(Dublicatenums(arr,target))