console.log("This is the First.js file.");
console.log("It contains some basic JavaScript code.");
function greet(name) {
    return `Hello, ${name}!`;
}

console.log('hello world');
function addthreenumbers(a, b, c) {
    return a + b + c;
console.log(addthreenumbers(1, 2, 3));

// Variables in Java Script :- Variables are containers for storing data values. In JavaScript, we use the var, let, and const keywords to declare variables.//
age=24;
console.log(age);

name="Aniket Yadav";
consile.log("name");

let a = 10; // let is used to declare a variable that can be reassigned
const b = 20; // const is used to declare a variable that cannot be reassigned
console.log(a)

// let 8harry = "harry" // Not allowed this will throw an error
// let var = 45 // Not allowed this will throw an error

// var:- var is a global variable and can be reassigned.

// var:- var is a global variable and can be reassigned.

var a = 45; // a is a global variable
var b = "harry"; // b is a local variable
var c = null; // c is a null variable
var d = undefined; // d is a undefined variable
var e= true; // e is a boolean variable
var f = [1,2,3,4,5]; // f is a array variable
var g = {a:1, b:2, c:3}; // g is a object variable
var h = function(){}; // h is a function variable
var i = new Date(); // i is a date variable
var j = /^[A-Za-z0-9]+$/; // j is a regular expression variable

{
    let b = 'this'; // b is a local variable
    console.log(b)
}

// let:- let is a local variable and can not be redeclare. it is a block level variable.
let c = "harry";
let d= null;
let e= true;
let f = [1,2,3,4,5];
let g = {a:1, b:2, c:3};
// let g = 6; // throws an error because g is already declared.
console.log(c)

// const:- const is a local variable and can not be redeclare. it is a block level variable.
const author = 'harry';
// author = 5 // throws an error because const author is already declared.
console.log(author)
console.log(b)
// Data Types in JavaScript:- 1. Primitive Data Types 2. Reference Data Types
// 1. Primitive Data Types:- String, Number, Boolean, Null, Undefined, Symbol
// 2. Reference Data Types:- Arrays, Object Literals, Functions, Dates

// NN BB SS U:- Null, Number, Boolean, BigInt, String, Symbol, Undefined.

let a=null;
let b=345; 
let c=true; // can also be false
let d=BigInt("567")
let e="harry"
let f=Symbol("I am a nice symbol")
let g=undefined  // let g; // both are same
console.log(a,b,c,d,e,f,g) // null, 345, true, 570n, harry, Symbol(I am a nice symbol), undefined
console.log(typeof d)
console.log(typeof c)  

// Non-Primitive Data Types:- Objects, Arrays, Functions, Dates, etc.

// Objects in JavaScript:- objects are key value pairs, they are used to store data in a structured way.
// Objects are non-primitive data types and are used to store collections of data.

// objects in JS :
const item={
  "harry":true,
  "shubh":false,
  "lovish":67,
  "rohan":undefined
}
console.log(item["harry"]) 
console.log(item["rohan"])

// practice set:-
// Q1:- create a variable of type string and try to add a number to it.

let m="Harry"
let n=6
add= m+n
console.log(add)

// Q2:- use typeof operator to find the datatype of the string in last question.

console.log(typeof add)
console.log(typeof m)
console.log(typeof n)

// Q3:- create a const object in javascript can you change it to hold a number later?

const a1={
  name:"Aniket",
  section:1,
  isPrincipal:false
  // isPrincipal=true // this will throw an error because const object can not be changed.
}
// a1="harry" // this will throw an error because const object can not be changed."

// Q4:- try to add a new key to the const object in problem 3 were you able to do it?

a1['friend']="shubham" // this will not throw an error because we are not changing the object but adding a new key to it.

console.log(a1)

// Q5:- write a JS program to create a word meaning dictionary of 5 words.

const dict={
  apple:"a fruit",
  book:"a source of knowledge",
  pen:"a writing instrument",
  table:"a piece of furniture",
  chair:"a piece of furniture"
}
console.log(dict)
console.log(dict.apple)


// Operators in JavaScript:- Operators are used to perform operations on variables and values.
// 1. Arithmetic Operators:- +, -, *, /, %, ++, --, **
// 2. Assignment Operators:- =, +=, -=, *=, /=, %=, **=
// 3. Comparison Operators:- ==, ===, !=, !==, >, <, >=, <=
// 4. Logical Operators:- &&, ||, !
// 5. Bitwise Operators:- &, |, ^, ~, <<, >>, >>>
// 6. Ternary Operator:- condition ? expr1 : expr2
// 7. Type Operators:- typeof, instanceof
// 8. String Operators:- +, +=
// 9. Comma Operator:- ,
// 10. Unary Operators:- delete, void, typeof, +, -, ~, !
// 11. Relational Operators:- in, instanceof
// 12. Conditional (Ternary) Operator:- condition ? expr1 : expr2
// 13. Assignment Operators:- =, +=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, |=
// 14. Spread Operator:- ...
// 15. Rest Operator:- ...
// 16. Destructuring Assignment:- [] and {}
// 17. Optional Chaining Operator:- ?.
// 18. Nullish Coalescing Operator:- ??
// 19. Logical Nullish Assignment:- ??=
// 20. Logical AND Assignment:- &&=
// 21. Logical OR Assignment:- ||=
// 22. Exponentiation Assignment:- **=
// 23. Exponentiation Operator:- **
// 24. Remainder Operator:- %
// 25. Increment Operator:- ++
// 26. Decrement Operator:- --
// 27. Equality Operator:- ==
// 28. Strict Equality Operator:- ===
// 29. Inequality Operator:- !=
// 30. Strict Inequality Operator:- !==
// 31. Greater Than Operator:- >
// 32. Greater Than or Equal To Operator:- >=
// 33. Less Than Operator:- <
// 34. Less Than or Equal To Operator:- <=

// 79;
// "harry bhai"
console.log("Operators in JS")
// Arithmetic Operators:- +, -, *, /, %, ++, --, **
let a2=45;
let b2=4;
console.log("a + b =",a2+b2)
console.log("a - b =",a2-b2)
console.log("a / b =",a2/b2)
console.log("a ** b =",a2**b2)
console.log("a % b =",a2%b2) // moduolo operator:- gives the remainder of the division.
console.log("++a =",++a2) // increment operator:- increases the value of the variable by 1.
console.log("a++ =",a2++) // increment operator:- increases the value of the variable by 1.

// difference between ++a and a++ is that ++a increases the value of the variable by 1 and then returns the value of the variable. while a++ returns the value of the variable and then increases the value of the variable by 1

console.log("--a =",--a2) // decrement operator:- decreases the value of the variable by 1.
console.log("a-- =",a2--) // decrement operator:- decreases the value of the variable by 1.
console.log("a =",a2)
console.log("a-- =",a2--)

// Assignment Operators:- =, +=, -=, *=, /=, %=, **=

let x=1;
x+=5 // x=x+5
console.log(x)
x-=5 // x=x-5
console.log(x)


// Comparison Operators:- ==, ===, !=, !==, >, <, >=, <=

let cop1=6;
let cop2=7;
console.log("cop1==cop2",cop1==cop2)
console.log("cop1!=cop2",cop1!=cop2 )
console.log("cop1===cop2",cop1===cop2)
console.log("cop1!==  cop2",cop1!==cop2 )
console.log("cop1>cop2",cop1>cop2)

// Logical Operators:- &&, ||, ! :- and, or, not they  are used to combine multiple conditions.used on  boolean values.

let y=6;
let z=7;
console.log(y<z && y==6 )
console.log(y>z || y==6 )
console.log(!false)
console.log(!true)
// Comments in JavaScript:- Comments are used to make the code more readable and understandable. They are ignored by the JavaScript engine.

// Single line comment:- // this is a single line comment.
/* Multi line comment:- this is a multi line comment. */ 

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
  console.log("This is an invalid age")
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

console.log("You can", (a<18? "not drive":"drive"))
console.log("You can", (a<18? "not drive":"drive"))

/* Practice Set:- */
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

// print "you can drive" or "you cannot drive" based on age being greater than 18 using ternary operator.
let age=19;
let a=age>18?"you can drive":"you cannot drive"
console.log(a)
console.log(age>18?"you can drive":"you cannot drive")

// Loops in JavaScript:- Loops are used to execute a block of code multiple times. there are three types of loops in JavaScript:- for, while, do while.
// 1. for loop:- for loop is used to execute a block of code multiple times. it is used when the number of iterations is known.

// while loop:- while loop is used to execute a block of code multiple times. it is used when the number of iterations is not known.

// do while loop:- do while loop is used to execute a block of code multiple times. it is used when the number of iterations is not known. the difference between while loop and do while loop is that in do while loop the code inside the loop will be executed at least once.

// for of  loop:- for of loop is used to iterate over the elements of an array.

// for in loop:- for in loop is used to iterate over the properties of an object.

  

/* Functions in JavaScript:- Functions are used to perform a specific task. they are used to make the code more readable and understandable. they are used to avoid the repetition of the code. */

// Example:-
function avg(x,y){
    console.log("Done")
    return (x+y)/2
}
let p=10
let q=20
let r=50
console.log("Average of p and q is ", avg (p,q))
console.log("Average of q and r is ", avg(q,r))
console.log("Average of p and r is ", avg(p,r))

// Example:-
function avg(x,y){
    console.log("Done")
    return (x+y)/2
}
let u=10
let v=20
let w=50
console.log("Average of u and v is ", avg (u,v))
console.log("Average of v and w is ", avg(v,w))
console.log("Average of u and w is ", avg(u,w))

// Example:-
const  sum=(p,q)=>{
    return p+q
}

console.log(n)
console.log(sum(9,7))
console.log(sum(100,9))


