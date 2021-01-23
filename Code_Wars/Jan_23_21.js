/* 1/23/21 CodeWars */

//////////////////////////////////*

/* Where is Bob!?!
Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

Examples
findBob(["Jimmy", "Layla", "Bob"]) ➞ 2

findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]) ➞ 0

findBob(["Jimmy", "Layla", "James"]) ➞ -1
Notes
Assume all names start with a capital letter and are lowercase thereafter (i.e. don't worry about finding "BOB" or "bob"). */

function findBob(names) {
	for (let i = 0; i < names.length; i++) {
		if(names[i] == 'Bob') {
			return names.indexOf('Bob')
		}
	}return -1
}

/* Repeat String
Create a function that takes a string txt and a number n and returns the repeated string n number of times.

If given argument txt is not a string, return Not A String !!

Examples
repeatString("Mubashir", 2) ➞ "MubashirMubashir"

repeatString("Matt", 3) ➞ "MattMattMatt"

repeatString(1990, 7) ➞ "Not A String !!" */

function repeatString(txt, n){
  return typeof txt === "string"? txt.repeat(n): "Not A String !!";
}

/* Check if an Array Contains a Given Number
Write a function to check if an array contains a particular number.

Examples
check([1, 2, 3, 4, 5], 3) ➞ true

check([1, 1, 2, 1, 1], 3) ➞ false

check([5, 5, 5, 6], 5) ➞ true

check([], 5) ➞ false */

function check(arr, el) {
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] == el) {
			return true
		}
	} return false
}

const check = (arr, el) => arr.includes(el)

/* Letters Shared between Two Words
Create a function that returns the number of characters shared between two words.

Examples
sharedLetters("apple", "meaty") ➞ 2
// Since "ea" is shared between "apple" and "meaty".

sharedLetters("fan", "forsook") ➞ 1

sharedLetters("spout", "shout") ➞ 4 */

function sharedLetters(str1, str2) {
	return str2.split("").filter(x => str1.includes(x)).length;
}

/* Name Greeting!
Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

Examples
helloName("Gerald") ➞ "Hello Gerald!"

helloName("Tiffany") ➞ "Hello Tiffany!"

helloName("Ed") ➞ "Hello Ed!" */

const helloName = name => 'Hello '+ name + '!'

/* Recreating the abs() Function
The Math.abs() function returns the absolute value of a number. This means that it returns a number's positive value. You can think of it as the distance away from zero.

Create a function that recreates this functionality.

Examples
absolute(-1.217197940) ➞ 1.21719794

absolute(-12.1320) ➞ 12.132
 
absolute(-544.0) ➞ 544

absolute(4666) ➞ 4666

absolute(-3.14) ➞ 3.14

absolute(250) ➞ 250 */

const absolute = (n) => n > 0 ? n : n*-1


