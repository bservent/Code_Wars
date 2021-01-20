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

/* On/Off Switches
Create a function that returns how many possible outcomes can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different combinations of on and off can we have?

Examples
posCom(1) ➞ 2

posCom(3) ➞ 8

posCom(10) ➞ 1024 */

function posCom(num) {
	return Math.pow(2,num)
}

/* Burglary Series (09): Filter Values
The insurance guy calls, the policy you chose doesn't cover values below 5000€, it wouldn't dignify your status you said at the time. Given an object with a list of the stolen items, return a copy of that list without the values below 5000.

Examples
{ tv: 4999, guitar:5000, fork: 5001 } ➞ { guitar:5000, fork: 5001 }

{ tv: 4999 } ➞ {}

{ guitar: 5000 } ➞ { guitar: 5000 }

{} ➞ {} */

function filterValues(obj) {
	return Object.fromEntries(Object.entries(obj).filter(item => item[1] >= 5000))
}

/* Find the Index (Part #2)
Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

Examples
search([1, 2, 3, 4], 3) ➞ 2

search([2, 4, 6, 8, 10], 8) ➞ 3

search([1, 3, 5, 7, 9], 11) ➞ -1 */

function search(arr, item) {
	return arr.indexOf(item)
}