1/8/21 CodeWars

//////////////////////////////////*

/* Convert Hours into Seconds
Write a function that converts hours into seconds. */

/* Examples
howManySeconds(2) ➞ 7200

howManySeconds(10) ➞ 36000

howManySeconds(24) ➞ 86400 */

/* Notes
60 seconds in a minute, 60 minutes in an hour
Don't forget to return your answer. */

function howManySeconds(hours) {
  return hours * 60 * 60
}

//////////////////////////////////*

/* Return the Sum of Two Numbers
Create a function that takes two numbers as arguments and return their sum.
 */

/* Examples
addition(3, 2) ➞ 5

addition(-3, -6) ➞ -9

addition(7, 3) ➞ 10 */

/* Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. */

function sumOfNumbers(a, b) {
  return a + b
}

//////////////////////////////////*

/* Maximum Edge of a Triangle
Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

Examples
nextEdge(8, 10) ➞ 17

nextEdge(5, 7) ➞ 11

nextEdge(9, 2) ➞ 10

Notes
(side1 + side2) - 1 = maximum range of third edge.
The side lengths of the triangle are positive integers.
Don't forget to return the result. */

function nextEdge(side1, side2) {
	return (side1 + side2) - 1
}

//////////////////////////////////*

/* Power Calculator
Create a function that takes voltage and current and returns the calculated power.

Examples
circuitPower(230, 10) ➞ 2300

circuitPower(110, 3) ➞ 330

circuitPower(480, 20) ➞ 9600

Notes
Requires basic calculation of electrical circuits (see Resources for info). */

function circuitPower(voltage, current) {
	return voltage*current
}

//////////////////////////////////*

/* Convert Minutes into Seconds
Write a function that takes an integer minutes and converts it to seconds.

Examples
convert(5) ➞ 300

convert(3) ➞ 180

convert(2) ➞ 120
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. */

function convert(minutes) {
	return minutes * 60 
}

//////////////////////////////////*

/* Correct the Mistakes
Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
squared(5) ➞ 25

squared(9) ➞ 81

squared(100) ➞ 10000
Notes
READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
Don't overthink this challenge; it's not supposed to be hard. */

function squared(b) {
	return b * b
}

//////////////////////////////////*

/* Return the First Element in an Array
Create a function that takes an array containing only numbers and return the first element.

Examples
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500
Notes
The first element in an array always has an index of 0 */

function getFirstValue(arr) {
	return arr[0]
}

//////////////////////////////////*

/* Find the Perimeter of a Rectangle
Create a function that takes length and width and finds the perimeter of a rectangle.

Examples
findPerimeter(6, 7) ➞ 26

findPerimeter(20, 10) ➞ 60

findPerimeter(2, 9) ➞ 22
Notes
Don't forget to return the result.
If you're stuck, find help in the Resources tab.
If you're really stuck, find solutions in the Solutions tab. */

function findPerimeter(length, width) {
	return (length*2) + (width*2)
}

//////////////////////////////////*

/* Convert Age to Days
Create a function that takes the age and return the age in days.

Examples
calcAge(65) ➞ 23725

calcAge(0) ➞ 0

calcAge(20) ➞ 7300
Notes
Use 365 days as the length of a year for this challenge.
Ignore leap years and days between last birthday and now.
Expect only positive integer inputs. */

function calcAge(age) {
	return age * 365
}