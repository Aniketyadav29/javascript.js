// Conditional Expressions:- if, else, else if, switch, ternary operator.

//if else statement:- if the condition is true then the code inside the if block will be executed. if the condition is false then the code inside the else block will be executed.
// prompt:- prompt is used to take input from the user.
// let age=prompt("Enter your age")
// Alert:- alert is used to display a message to the user.
let a =prompt("Hey whats your age?")
a=Number.parseInt(a) // converting the string to a number.
if(a>0){
  alert("This is a valid age")
}
else{
    alert("This is an invalid age")
}

/* if else ladder:- if the first condition is true then the code inside the if block will be executed. if the first condition is false then the code inside the else if block will be executed. if the first condition is false and the second
condition is true then the code inside the else if block will be executed. if the first condition is false and the second condition is false then the code inside the else block will be executed. */
let age=prompt("Enter your age")
age=Number.parseInt(age)
if(age<0){
  alert("This is an invalid age")
}
else if(age<9){
  console.log("You are a kid and you cannot even think of driving")
}
else if(age<18 && age>=9){
  alert("You are a kid and you can think of driving after 18")
}
else{
  alert("You can now drive as you are above 18")
}

// type 2:-
let age1=23
age1=Number.parseInt(age1)
if(age1<0){
  console.log("This is an invalid age1")
}
else if(age1<9){
  console.log("You are a kid and you cannot even think of driving")
}
else if(age1<18 && age1>=9){
  console.log("You are a kid and you can think of driving after 18")
}
else{
  console.log("You can now drive as you are above 18")
}
/* switch statement:- switch statement is used to perform different actions based on different conditions. */


// Ternary Operator:- condition ? expr1 : expr2 :- if the condition is true then expr1 will be executed. if the condition is false then expr2 will be executed.

// console.log("You can", (a<18? "not drive":"drive"))


