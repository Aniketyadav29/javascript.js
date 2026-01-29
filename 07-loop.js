// Loops in JavaScript:- Loops are used to execute a block of code multiple times. there are three types of loops in JavaScript:- for, while, do while.
// 1. for loop:- for loop is used to execute a block of code multiple times. it is used when the number of iterations is known.

// while loop:- while loop is used to execute a block of code multiple times. it is used when the number of iterations is not known.

// do while loop:- do while loop is used to execute a block of code multiple times. it is used when the number of iterations is not known. the difference between while loop and do while loop is that in do while loop the code inside the loop will be executed at least once.

// for of  loop:- for of loop is used to iterate over the elements of an array.

// for in loop:- for in loop is used to iterate over the properties of an object. 
//Example:-
for(let i=0; i<100; i++){
  console.log(i)
}
//Example:-

for(let i=0; i<500; i++){
  console.log(i+1)
}

//Example:-

let sum=0
// let n=prompt("Enter the value of n")
let n =12
// n=Number.parsingInt(n)
for(let i=0;i<n;i++){
  sum+=(i+1)
}
console.log(" sum of first " + n + " Natural numbers is " + sum )
// Example:-
let sum=0
let n=15
// let n=prompt("Enter Your NUmber")
// n=Number.parsingInt(n)
for(let i=0; i<n; i++){
   sum+=(i+1)
}
console.log("sum of first " + n + " Natural numbers is " + sum)

/* for in loop:- for in loop is used to iterate over the properties of an object. */
//Example:-

let obj={
  Harry:90,
  Shubh:45,
  shivika:67,
  anupam:89
}
for(let a in obj)
  console.log("Marks of " + a +" are " + obj[a])




for(let i=0; i<500; i++){
  console.log(i+1)
}

//Example:-
