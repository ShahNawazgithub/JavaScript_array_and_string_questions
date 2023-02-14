var str=["maam"]
var new_str=str
for(let i=0;i<=str.lenght-1;i++){
    for(let j=arr[i].length;j>=0;j--){
        if(arr[i].charAt(j)==new_str){
            console.log(`String is Palindrome `);
        }
        else
        console.log(`String is not Palindrome `);

    }
}