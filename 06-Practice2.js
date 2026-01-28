// Q1:- use logical operators to find whether the age of a person lies between 10 and 20?
let age1=prompt("What is your age?")
age1=Number.parseInt(age1)
if(age1>10 && age1<20){
  console.log("Your age lies between 10 and 20")
}
else{
   console.log("Your age does not lies between 10 and 20")
}

// write a java script program to find whether a number is divisible by 2 and 3.
let num=prompt("enter the  number")
num=Number.parseInt(num)
if(num%2==0 && num%3==0){
  console.log("Your number is divisible by 2 and 3")
  
}
else{
  console.log("Your number is not divisible by 2 and 3")
}
  
