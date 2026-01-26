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


