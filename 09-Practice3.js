// Q1:- write a program to print the marks of a student in an object using for loop.

let obj={
    harry:90,
    Aniket:99,
    shubh:56,
    ritika:-1,
    Anupam:99
        
}
for(let a in obj){
     console.log("Marks of " + a +" are " + obj[a])
}

// write  a program to print "try again" until the user enters the correct number.
let cn=43
let i
while(i!=cn){
    console.log("Try again")
    i=prompt("Enter a number")
}
console.log("You have entered a correct number")

// write a function to find mean of 5 numbers.
function Mean(a,b,c,d,e){
    return (a+b+c+d+e)/5
}
let p=1
let b=2
let c=3
let d=4
let e=5
console.log(Mean(1,2,3,4,5))


