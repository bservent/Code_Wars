/* 1/19/21 CodeWars */

//////////////////////////////////*

/* Incorrect Import Statement
When importing objects from a module in Python, the syntax usually is as follows:

from module_name import object
Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

Examples
fixImport("import object from module_name") ➞ "from module_name import object"

fixImport("import randint from random") ➞ "from random import randint"

fixImport("import pi from math") ➞ "from math import pi" */

function fixImport(s) {
	let [a,b,c,d] = s.split(' ')
	return `${c} ${d} ${a} ${b}`
}

/* 50-30-20 Strategy
The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

Examples
fiftyThirtyTwenty(10000) ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }

fiftyThirtyTwenty(50000) ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }

fiftyThirtyTwenty(13450) ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 } */

function fiftyThirtyTwenty(ati) {
	var budget = {
		Needs : (ati * .50),
		Wants : (ati * .30),
		Savings : (ati * .20)
	}
return budget
}

/* Learn Lodash: _.drop, Drop the First Elements of an Array
According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

Your challenge is to write your own version using vanilla JavaScript.

Examples
drop([1, 2, 3], 1) ➞ [2, 3]

drop([1, 2, 3], 2) ➞ [3]

drop([1, 2, 3], 5) ➞ []

drop([1, 2, 3], 0) ➞ [1, 2, 3] */

function drop(arr, val) {
	return arr.slice(val)
}

/* Find the Index
Create a function that takes an array and a string as arguments and return the index of the string.

Examples
findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

findIndex(["a", "g", "y", "d"], "d") ➞ 3

findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0 */

function findIndex(arr, str) {
	for (let i = 0; i < arr.length; i++) {
		if ( arr[i] == str ) {
			return arr.indexOf(str)
		}
	}
}

/* Convert All Array Items to String
Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

Examples
parseArray([1, 2, "a", "b"]) ➞ ["1", "2", "a", "b"]

parseArray(["abc", 123, "def", 456]) ➞ ["abc", "123", "def", "456"]

parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]) ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]

parseArray([]) ➞ [] */

function parseArray(arr) {
	return arr.map(String)
}

/* Concatenating Two Integer Arrays
Create a function to concatenate two integer arrays.

Examples
concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3] */

function concat(arr1, arr2) {
	return arr1.concat(arr2)
}

