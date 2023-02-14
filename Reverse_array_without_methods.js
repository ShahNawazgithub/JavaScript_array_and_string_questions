// var arr=[1,3,7,9,13,15]
// for(let i=arr.length-1 ;i>=0;i--){
//     console.log(arr[i]);
// }

var arr=[1,3,7,9,13,15]
var arr2=[]
for(let i=arr.length-1;i>=0;i--){
    // console.log(arr[i]);
    arr2[i]=arr[arr.length-1-i]
}
console.log(arr2);