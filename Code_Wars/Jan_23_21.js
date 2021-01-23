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


