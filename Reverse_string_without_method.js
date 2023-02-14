var arr=["I LOVE JAVASCRIPT"]
var arr2=[]
for (let i=0;i<=arr.length-1;i++){
    for (let j=arr[i].length;j>=0;j--){
        console.log(arr[i].charAt(j));
    }
}
// console.log(arr2);

// var arr=["I LOVE JAVASCRIPT"]
// var str=[]
// for (let i=0;i<=arr.length-1;i++){
//     for (let j=arr[i].length;j>=0;j--){
//         console.log(arr[i].charAt(j).push(str));
//     }
// }

// function ReverseString(str) {
//     // Check input
//     if(!str || str.length < 2 ||
//             typeof str!== 'string') {
//         return 'Not valid';
//     }     
//     // Take empty array revArray
//     const revArray = [];
//     const length = str.length - 1;    
//     // Looping from the end
//     for(let i = length; i >= 0; i--) {
//         revArray.push(str[i]);
//     }     
//     // Joining the array elements
//     return revArray.join('');
// } 
// console.log(ReverseString("Geeks for Geeks"))