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

