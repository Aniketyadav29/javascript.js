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






