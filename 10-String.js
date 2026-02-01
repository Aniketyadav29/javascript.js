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
// String  Methods in JavaScript:- String methods are used to manipulate strings. they are used to change the case of a string. they are used to extract a part of a string. they are used to replace a part of a string. they are used to

// Example:-
let name="Harry"
console.log(name.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(2,4))

// Example:-
let name1="Aniket"
let friend="  anupam   "
console.log(name1.length)
console.log(name1.replace("Aniket","Anupam"))
console.log(name1.concat(" is a friend of ",name1))
console.log(friend)
console.log(friend.trim())
// Quick Quiz:- use a for loop to print a string.
let name2="Aniket"
for(let i=0; i<name2.length; i++){
    console.log(name2[i])
}




