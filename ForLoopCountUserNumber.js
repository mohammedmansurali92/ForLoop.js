//for loop count user number
var m= parseInt(prompt("Enter your first number"));
var n= parseInt(prompt("Enter your Second number"));
var sum=0;
for(var x=m; x<=n; x=x+1){
    sum=sum+x;
}
document.write(sum);