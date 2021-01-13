/* 1/12/21 CodeWars */

//////////////////////////////////*

/* String to Integer and Vice Versa
Write two functions:

toInt() : A function to convert a string to an integer.
toStr() : A function to convert an integer to a string.
Examples
toInt("77") ➞ 77

toInt("532") ➞ 532

toStr(77) ➞ "77"

toStr(532) ➞ "532" */

function toInt(str) {
	return parseInt(str)
}

function toStr(int) {
	return int.toString()
}

/* Pair Management
Given two arguments, return an array which contains these two arguments.

Examples
makePair(1, 2) ➞ [1, 2]

makePair(51, 21) ➞ [51, 21]

makePair(512124, 215) ➞ [512124, 215] */

function makePair(num1, num2) {
	var arr = []
	arr.push(num1, num2)
	return arr
}

/* Area of a Rectangle
Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

Examples
area(3, 4) ➞ 12

area(10, 11) ➞ 110

area(-1, 5) ➞ -1

area(0, 2) ➞ -1 */

function area(h, w) {
	if (h > 0 && w > 0) {
		return h * w
	}else{
		return -1
	}
}

/* Is the String Empty?
Create a function that returns true if a string is empty and false otherwise.

Examples
isEmpty("") ➞ true

isEmpty(" ") ➞ false

isEmpty("a") ➞ false
Notes
A string containing only whitespaces " " does not count as empty.
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. */

function isEmpty(s) {
	if (s === "") {
		return true
	}else{
		return false
	}
}

/* Frames Per Second
Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

Examples
frames(1, 1) ➞ 60

frames(10, 1) ➞ 600

frames(10, 25) ➞ 15000
Notes
FPS stands for "frames per second" and it's the number of frames a computer screen shows every second. */

function frames(minutes, fps) {
	return (60*fps) * minutes
}

/* Check if an Integer is Divisible By Five
Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

Examples
divisibleByFive(5) ➞ true

divisibleByFive(-55) ➞ true

divisibleByFive(37) ➞ false
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. */

function divisibleByFive(n) {
	if (n % 5 == 0) {
		return true
	}else{
		return false
	}
}

/* Regex Series: Even Number?
Write a regular expression that matches only an even number. Numbers will be presented as strings.

Examples
"2341" ➞ false

"132" ➞ true

"29" ➞ false

"5578" ➞ true */

let x = /[02468]$/

/* Area of a Triangle
Write a function that takes the base and height of a triangle and return its area.

Examples
triArea(3, 2) ➞ 3

triArea(7, 4) ➞ 14

triArea(10, 10) ➞ 50 */

function triArea(base, height) {
	return (base*height)/2
}

/* Return Negative
Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

Examples
returnNegative(4) ➞ -4

returnNegative(15) ➞ -15

returnNegative(-4) ➞ -4

returnNegative(0) ➞ 0 */

function returnNegative(n) {
	if (n > 0) {
		return -1 * (n)
	}else{
		return n
	}
}
