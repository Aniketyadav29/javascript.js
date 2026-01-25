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
console.log(b)

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

