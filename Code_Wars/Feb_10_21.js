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


