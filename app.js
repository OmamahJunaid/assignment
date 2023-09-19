// ***************************** Class Assignment******************************
// Q1

// Q2

// Q3
for(var i=1;i<=10;i++){document.write("<br>" ,i);}
//  Q4
var user=+prompt("enter");

 var table=+prompt("enter");

 for (var i=1;i<=table;i++){
     document.write("user"+"x"+i+"="+user*i+"<br>")
  }
// Q5

var fruits=["banana","mango","apple","orange"];
  for(var i=0;i<fruits.length;i++){
     console.log("element of"+fruits[i]+"at"+""+i);
}
// Q6
document.write("<br> <h1>Counting</h1> <br>")
for(var i=1; i<=15;i++){
    document.write(i+",")
}
document.write("<br> <h1>Reverse counting </h1> <br>")
for(var i=10; i>=1;i--){
    document.write(i+",")
}
document.write("<br> <h1>Even counting </h1> <br>")
for(var i=0; i<=20;i=i+2){
    document.write(i+",")
}
document.write("<br> <h1>odd counting </h1> <br>")
for(var i=1; i<=19;i=i+2){
    document.write(i+",")
}
document.write("<br> <h1>series counting </h1> <br>")
for(var i=2; i<=20;i=i+2){
    document.write(i+"k,")
}
document.write("<br>")
// Q10
for(var i=5; i<=100; i=i+5){
    document.write( i+ ",")
}
// ***************************** Home Assignment******************************
// Q1
for(var i=1 ; i<=10 ;i++){
console.log(i)
}
// Q2
for(var i=0 ; i<=11 ;i++){
    console.log(i)
}
// Q3
for (var i=0 ;i<=4 ;i++){
    console.log(i)
}
// Q4
for(var a=0;a<=99;a++){
    console.log(a)
}
// Q5
for(var i=3; i>=1; i--)
{
    console.log(i)
}
// Q6
 var arrayy=[10,20,30,40]
//  Q7
var flag = true
// Q8
var pets=["cat","dog","parrot","chickens"]
for(var i=0; i<pets.length;i++){
    console.log(i)
}
// Q9
for (var i=0; i<=10;i++){
    if(i===1){
        break;
    }
}
// Q10
var firstName=["omamah","junaid","ali","bilal"]
var userinput=prompt("Enter username")
for (var i = 0; i <firstName.length; i++) {
 if (userinput=== firstName[i]) {
 alert(userinput);
    }
    else{
        alert("sorry enter correct username")
    }
}
// Q12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (var i = 0; i < firstArr.length; i++) {
  for (var j = 0; j < secondArr.length; j++) {
    console.log(firstArr[i] + secondArr[j]);
  }
}

