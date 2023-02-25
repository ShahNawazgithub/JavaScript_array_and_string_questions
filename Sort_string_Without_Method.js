var str ="Nawaz";
let new_str=charAt(str);
// var new_str2=[];
for(let i=0;i<=new_str.length;i++){
    for(let j=0;j<=new_str.length;j++){
        if(new_str[i]>new_str[j]){
            var temp=new_str[i]
            new_str[i]=new_str[j]
            new_str[j]=temp
        }
    }
}
console.log(new_str);