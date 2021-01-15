/* 1/14/21 CodeWars */

//////////////////////////////////*

/* Buggy Code (Part 3)
Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
sumArray([1, 2, 3, 4, 5]) ➞ 15

sumArray([-1, 0, 1]) ➞ 0

sumArray([0, 4, 8, 12]) ➞ 24 */

function sumArray(arr) {
	var sum = 0	
  for (i=0; i<arr.length; i++) {
	  sum+=arr[i]
	}
  return sum
}

/* Upvotes vs Downvotes
Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

Examples
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0 */

function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes
}

/* Buggy Code
The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.

Examples
has_bugs(true) ➞ "sad days"

has_bugs(false) ➞ "it's a good day" */

function has_bugs(buggy_code) {
	if (buggy_code == true) {
		return "sad days"
	} else {
		return "it's a good day"
	}
}

/* Array Indexing
Given an index and an array, return the value of the array with the given index.

Examples
valueAt([1, 2, 3, 4, 5, 6], 10 / 2) ➞ 6

valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2) ➞ 5

valueAt([1, 2, 3, 4], 6.535355314 / 2) ➞ 4
Notes
Math.floor() can be helpful. */

function valueAt(arr, i) {
	return Math.floor(i) + 1
}

/* Nth Even Number
Create a function that takes a number n and returns the nth even number.

Examples
nthEven(1) ➞ 0
// 0 is first even number

nthEven(2) ➞ 2
// 2 is second even number

nthEven(100) ➞ 198 */

function nthEven(n) {
	return (n*2) - 2
}

/* Return a String as an Integer
Create a function that takes a string and returns it as an integer.

Examples
stringInt("6") ➞ 6

stringInt("1000") ➞ 1000

stringInt("12") ➞ 12
Notes
All numbers will be whole.
All numbers will be positive. */

function stringInt(str) {
	return parseInt(str)
}

/* Format I: Template String
Write a template string according to the following example:

Example
const a = "John";
const b = "Joe";
const c = "Jack";
const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack." */

// modify the template variable to be a template string 
function format(a, b, c) {
  // the result string must give: "Their names were: a, b and c."
    const names = (a, b, c)
    const template = `Their names were: ${a}, ${b} and ${c}.`
    return template
  }

/*   Evaluate an Equation
Create a function that evaluates an equation.

Examples
eq("1+2") ➞ 3

eq("6/(9-7)") ➞ 3

eq("3+2-4") ➞ 1 */

function eq(evaluate) {
	return eval(evaluate)
}

/* Miserable Parody of a Calculator
Create a function that will handle simple math expressions. The input is an expression in the form of a string.

Examples
calculator("23+4") ➞ 27

calculator("45-15") ➞ 30

calculator("13+2-5*2") ➞ 5

calculator("49/7*2-3") ➞ 11 */

function calculator(str) {
	return eval(str)
}

/* Movie Theatre Admittance
Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

The person is at least 15 years old.
They have parental supervision.
The function accepts two parameters, age and isSupervised. Return a boolean.

Examples
acceptIntoMovie(14, true) ➞ true

acceptIntoMovie(14, false) ➞ false

acceptIntoMovie(16, false) ➞ true */

function acceptIntoMovie(age, isSupervised) {
	return (age >= 15 || isSupervised)
}
