//Max without sorting
var arr = [5, 9, 4, 1, 7, 88, 35, 98, 100, 3, 6, 4, 5]
var max = arr[0]
for (let i = 1; i <= arr.length - 1; i++) {
    if (max < arr[i]){
        max= arr[i]
    }
}
console.log(max);