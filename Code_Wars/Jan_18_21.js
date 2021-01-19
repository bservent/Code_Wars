/* 1/18/21 CodeWars */

//////////////////////////////////*

/* Maximum Possible Total
Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

Examples
maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]) ➞ 43

maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]) ➞ 100

maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ➞ 40 */

function maxTotal(nums) {
	var array1 = nums.sort((a, b) => a - b)
	var array2 = array1.slice(5,10)
	var array3 = array2.reduce((a, b) => a + b)
	return array3
}

/* Flip the Boolean
Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.

Create a function that returns the opposite of the given boolean, as a number.

Examples
flipBool(true) ➞ 0

flipBool(false) ➞ 1

flipBool(1) ➞ 0

flipBool(0) ➞ 1 */

function flipBool(b) {
	if(b == false || 0) {
		return 1
	}else{
		return 0
	}
}

/* Profitable Gamble
Create a function that takes three arguments prob, prize, pay and returns true if prob * prize > pay; otherwise return false.

To illustrate:

profitableGamble(0.2, 50, 9)
... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.

Examples
profitableGamble(0.2, 50, 9) ➞ true

profitableGamble(0.9, 1, 2) ➞ false

profitableGamble(0.9, 3, 2) ➞ true */

function profitableGamble(prob, prize, pay) {
	if (prob * prize > pay) {
		return true
	}else{
		return false
	}
}

/* Front 3 - Slice Check Repeat Concatenate
Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

Examples
frontThree("Python") ➞ "PytPytPyt"

frontThree("Cucumber") ➞ "CucCucCuc"

frontThree("bioshock") ➞ "biobiobio" */

function frontThree(str) {
	var array1 = str.slice(0,3)
	return array1 + array1 + array1
}

/* Return the Last Element in an Array
Create a function that accepts an array and returns the last item in the array.

Examples
getLastItem([1, 2, 3]) ➞ 3

getLastItem(["cat", "dog", "duck"]) ➞ "duck"

getLastItem([true, false, true]) ➞ true  */

let getLastItem = (arr) => arr.pop()

/* Fix the Error: Check Whether a Given Number Is Odd
Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.

function isOdd(num){
  ret n % 19 += 123;
}
Examples
isOdd(-5) ➞ true

isOdd(25) ➞ true

isOdd(0) ➞ false */

function isOdd(num) {
	if (num % 2 != 0) {
		return true
	}else{
		return false
	}
}

/* Triangle and Parallelogram Area Finder
Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

Examples
areaShape(2, 3, "triangle") ➞ 3

areaShape(8, 6, "parallelogram") ➞ 48

areaShape(2.9, 1.3, "parallelogram") ➞ 3.77 */

function areaShape(base, height, shape) {
	if (shape == "triangle") {
		return .5 * (base * height)
	}else{
		return base * height
	}
}

/* Solve the Equation
Create a function that takes an equation (e.g. "1+1"), and returns the answer.

Examples
equation("1+1") ➞ 2

equation("7*4-2") ➞ 26

equation("1+1+1+1+1") ➞ 5 */

function equation(s) {
	return eval(s)
}

/* Pages and Chapters
Write a function that returns the closest chapter to the current page you are at. If two chapters are similarly close, return whichever has the higher page.

Examples
closestToPage({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) ➞ "Chapter 2"


closestToPage({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) ➞ "The End?"


closestToPage({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) ➞ "Chapter 1b" */

function closestToPage(chapters, page) {
	var keys = Object.keys(chapters)
	var val = Object.values(chapters).map(x => Math.abs(x - page)) 
	return keys[val.lastIndexOf(Math.min(...val))]
}