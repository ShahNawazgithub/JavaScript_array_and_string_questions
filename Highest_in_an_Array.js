var arr = [90, 33, 45, 87, 90, 1, 3, 5, 7, 80, 90, 99, 34, 76, 55, 31, 22, 11]
arr.sort(function sort(a,b){
    return a-b
})
console.log(arr);
// Lowest in an Array
var Lowest =arr[0]
console.log(Lowest);
// Highest in an Array
var highest =arr[arr.length-1]
console.log(highest);


// arr.sort((a, b) => a-b)
// console.log(arr);
// var lowest = arr[0]
// console.log(lowest);
// var highest = arr[arr.length - 1]
// console.log(highest);