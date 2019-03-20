var num1,num2,ch,ans;
num1=prompt("enter 1 num");
num2=prompt("enter 2 num");
ch=prompt("enter choice 1-4");
function add(num1,num2){
return num1+num2;
}

function sub(num1,num2){
return num1-num2;
}
function multiply(num1,num2){
return num1*num2;
}
function divide(num1,num2){
return num1/num2;
}
switch(ch)
{
case 1:ans=add(num1,num2);break;
case 2:ans=sub(num1,num2);break;
case 3:ans=multiply(num1,num2);break;
case 4:ans=divide(num1,num2);break;
}
ans=console.log("answer");
