/* 1/21/21 CodeWars */

//////////////////////////////////*

/* Stack the Boxes
Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...

Stack the Boxes

Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

Examples
stackBoxes(1) ➞ 1

stackBoxes(2) ➞ 4

stackBoxes(0) ➞ 0 */

function stackBoxes(n) {
	return Math.pow(n,2)
}

/* Rotate the List by One 🔄
Given a list, rotates the values clockwise by one (the last value is sent to the first position).

Check the examples for a better understanding.

Examples
rotate_by_one([1, 2, 3, 4, 5]) ➞ [5, 1, 2, 3, 4]

rotate_by_one([6, 5, 8, 9, 7]) ➞ [7, 6, 5, 8, 9]

rotate_by_one([20, 15, 26, 8, 4]) ➞ [4, 20, 15, 26, 8] */

var rotateByOne = (arr, k=1) => {
	for(let i = 0; i < k; i++) {
		arr.unshift(arr.pop());
	}
	return arr
}	

/* Fix the Bug: Simple Array Manipulation
Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

Examples
incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3] */

var incrementItems = (arr) => arr.map(x => (x + 1))

/* Four Passengers and a Driver
A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

Examples
carsNeeded(5) ➞ 1

carsNeeded(11) ➞ 3

carsNeeded(0) ➞ 0 */

function carsNeeded(n) {
	return Math.ceil(n / 5);
}

/* Reverse Psychology
For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

Examples
reversePsychology("wash the dishes") ➞ "Do not wash the dishes."

reversePsychology("eat your lunch") ➞ "Do not eat your lunch."

reversePsychology("go to school") ➞ "Do not go to school." */

function reversePsychology(s) { 
	if ( s == undefined) {
		return 'Do not do anything.'
	}else{
		return 'Do not ' + s + '.'
	}
}
/* 
Check String for Spaces
Create a function that returns true if a string contains any spaces.

Examples
hasSpaces("hello") ➞ false

hasSpaces("hello, world") ➞ true

hasSpaces(" ") ➞ true

hasSpaces("") ➞ false

hasSpaces(",./!@#") ➞ false */

function hasSpaces(str) {
	return (str.indexOf(' ') >= 0) 
}