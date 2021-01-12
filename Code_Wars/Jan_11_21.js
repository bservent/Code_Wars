/* 1/11/21 CodeWars */

//////////////////////////////////*

/* Fix the Error: Vowel Edition
Your friend is trying to write a function that removes all vowels from a string. They write:

function removeVowels(str) {
  return str.replace(/[aeiou]/, "")
}
However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.

Examples
removeVowels("candy") ➞ "cndy"

removeVowels("hello") ➞ "hllo" */
// The "e" is removed, but the "o" is still there!

/* removeVowels("apple") ➞ "pple" */

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "")
}

/* Convert Hours and Minutes into Seconds
Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

Examples
convert(1, 3) ➞ 3780

convert(2, 0) ➞ 7200

convert(0, 0) ➞ 0
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. */

function convert(hours, minutes) {
	return (hours*60*60) + (minutes*60)
}

/* Boolean to String Conversion
Create a function which takes two a boolean variable flag and returns it as a string.

Examples
boolToString(true) ➞ "true"

boolToString(false) ➞ "false"
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. */

function boolToString(flag){
	return flag.toString()
}

/* Buggy Code (Part 1)
Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
cubes(3) ➞ 27

cubes(5) ➞ 125

cubes(10) ➞ 1000
Notes
READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
Don't overthink this challenge; it's not supposed to be hard. */

function cubes(a) {
	return a ** 3
}

/* Two Makes Ten
Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

Examples
makesTen(9, 10) ➞ true

makesTen(9, 9) ➞ false

makesTen(1, 9) ➞ true
Notes
Don't forget to return the result. */

function makesTen(a, b) {
	if(a === 10) {
		return true
} else if (b === 10) {
	return true
} else if ((a + b) === 10) {
		return true
} else {
		return false
	}
}

/* Buggy Code (Part 5)
Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

Examples
printArray(1) ➞ [1]

printArray(3) ➞ [1, 2, 3]

printArray(6) ➞ [1, 2, 3, 4, 5, 6]
Notes
READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
Don't overthink this challenge; it's not supposed to be hard. */

function printArray(number) {
  var newArray = [];

  for(var i = 1; i <= number;i++) {
    newArray.push(i);
  }

  return newArray;
}

/* Many Operators!
Some basic arithmetic operators are +, -, *, /, and %. In this challenge you will be given three parameters, num1, num2, and an operator. Use the operator on number 1 and 2.

Examples
operate(1, 2, "+") ➞ 3
// 1 + 2 = 3

operate(7, 10, "-") ➞ -3
// 7 - 10 = -3

operate(20, 10, "%") ➞ 0
// 20 % 10 = 0
Notes
There will not be any divisions by zero. */

function operate(num1, num2, operator) {
	return eval(num1 + operator + num2)
}

/* Buggy Code (Part 2)
Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
maxNum(3, 7) ➞ 7

maxNum(-1, 0) ➞ 0

maxNum(1000, 400) ➞ 1000
Notes
READ EVERY WORD CAREFULLY, CHARACTER BY CHARACTER!
Don't overthink this challenge; it's not supposed to be hard. */

function maxNum(n1,n2) {
	if (n1<n2) {
	  return n2
	} else {
	return n1
  }
}

/* Area of a Rectangle
Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

Examples
area(3, 4) ➞ 12

area(10, 11) ➞ 110

area(-1, 5) ➞ -1

area(0, 2) ➞ -1 */

function area(h, w) {
	if ((h * w) > 0 && h > 0 && w > 0) {
		return h * w
	} else {
		return -1
	}
}