//String:- String is a sequence of characters. it is used to store and manipulate text. it is a primitive data type. it is immutable.
let name="Aniket"
console.log(name.length )
console.log(name[0])
// Eample:-
let friend='Prakash'
console.log(friend.length)
console.log(friend[0])
// Template literals:- Template literals are used to create strings. they are used to create strings with embedded expressions. they are used to create multi-line strings. they are used to create strings with tags.
// Example:-
let boy1="Pramod"
let boy2="Nikhil"
// Nikhil is a friend of Pramod
let sentence=`${boy2} is a friend of ${boy1}`
console.log(sentence)

// Example:-

let  boy3="Aniket"
let boy4="Anupam"
// Anuoam is a friend of Aniket
let sentence1=`${boy3} is a friend of ${boy4}`
console.log(sentence1)
// Escape Sequence Characters:- Escape sequence characters are used to insert special characters in a string. they are used to insert quotes in a string. they are used to insert new lines in a string. they are used to insert tabs in a string.

// Example:-
let fruit='Bana\'na'
console.log(fruit.length)
console.log(fruit)

// Example:-
let fruit1='Bana"\r na'
console.log(fruit1.length)
console.log(fruit1)

