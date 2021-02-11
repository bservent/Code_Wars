/* 2/10/21 CodeWars */

//////////////////////////////////*

/* Return the Index of the First Vowel
Create a function that returns the index of the first vowel in a string.

Examples
firstVowel("apple") ➞ 0

firstVowel("hello") ➞ 1

firstVowel("STRAWBERRY") ➞ 3

firstVowel("pInEaPPLe") ➞ 1 */

function firstVowel(str) {
	let re = /[aeiou]/i
	return str.search(re)
}

/* Check If It's a Title String
Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

Examples
checkTitle("A Mind Boggling Achievement") ➞ true

checkTitle("A Simple Java Script Program!") ➞ true

checkTitle("Water is transparent") ➞ false */

function checkTitle(title) {
	return title.split(' ')
		.map(el => el[0] == el[0].toUpperCase())
		.includes(false) ? false : true;
}


