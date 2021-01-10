1/10/21 CodeWars

//////////////////////////////////*

/* Recreating the String.length Property
Create a function which returns the length of a string, WITHOUT using String.length property.

Examples
length("Hello World") ➞ 11

length("Edabit") ➞ 6

length("wash your hands!") ➞ 16 */

function length(s) {
	return s.lastIndexOf("")
}

/* Basic Variable Assignment
A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and stores it in a variable called result. He needs your help to fix this code.

Examples
nameString("Mubashir") ➞ "MubashirEdabit"

nameString("Matt") ➞ "MattEdabit"

nameString("javaScript") ➞ "javaScriptEdabit" */

function nameString(name){
	var b = "Edabit"
	var result = name + b
  	return result
}

/* Return the Remainder from Two Numbers
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

Examples
remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0 */

function remainder(x, y) {
	return (x % y)
}

/* Drinks Allowed?
A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

Examples
shouldServeDrinks(17, true) ➞ false

shouldServeDrinks(19, false) ➞ true

shouldServeDrinks(30, true) ➞ false
Notes
Return true or false.
Some countries have a slightly higher drinking age, but for the purposes of this challenge, it will be 18. */

function shouldServeDrinks(age, onBreak) {
  return age >= 18 && !onBreak
}

/* Is the Number Less than or Equal to Zero?
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

Examples
lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true */

function lessThanOrEqualToZero(num) {
	if (num <= 0) 
		return true
	else 
		return false
}

/* The Farm Problem
In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

Examples
animals(2, 3, 5) ➞ 36

animals(1, 2, 3) ➞ 22

animals(5, 2, 8) ➞ 50 */

function animals(chickens, cows, pigs) {
	return (chickens * 2) + (cows * 4) + (pigs * 4)
}

/* Less Than 100?
Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

Examples
lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true */

function lessThan100(a, b) {
	if (a + b >= 100){
		return false
	} else {
		return true
	}
}

/* Return Something to Me!
Write a function that returns the string "something" joined with a space " " and the given argument a.

Examples
giveMeSomething("is better than nothing") ➞ "something is better than nothing"

giveMeSomething("Bob Jane") ➞ "something Bob Jane"

giveMeSomething("something") ➞ "something something" */

function giveMeSomething(a) {
	return "something " + a
}

/* Equality Check
In this challenge, you must verify the equality of two different values given the parameters a and b.

Both the value and type of the parameters need to be equal. The possible types of the given parameters are:

Numbers
Strings
Booleans (false or true)
Special values: undefined, null and NaN
What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

Implement a function that returns true if the parameters are equal, and false if they are not. */

/* Examples
checkEquality(1, true) ➞ false */
// A number and a boolean: the value and type are different.

/* checkEquality(0, "0") ➞ false */
// A number and a string: the type is different.

/* checkEquality(1,  1) ➞ true */
// A number and a number: the type and value are equal.

function checkEquality(a, b) {
  if (a === b) {
		return true
	} else {
		return false
	}
}

/* Are the Numbers Equal?
Create a function that returns true when num1 is equal to num2; otherwise return false.

Examples
isSameNum(4, 8) ➞ false

isSameNum(2, 2) ➞  true

isSameNum(2, "2") ➞ false */

function isSameNum(num1, num2) {
	if (num1 === num2) {
		return true
	} else { 
	return false
	}
}

/* Football Points
Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

wins get 3 points
draws get 1 point
losses get 0 points
Examples
footballPoints(3, 4, 2) ➞ 13

footballPoints(5, 0, 2) ➞ 15

footballPoints(0, 0, 1) ➞ 0 */

function footballPoints(wins, draws, losses) {
	return (wins * 3) + (draws)
}

/* Return the Next Number from the Integer Passed
Create a function that takes a number as an argument, increments the number by +1 and returns the result.

Examples
addition(0) ➞ 1

addition(9) ➞ 10

addition(-3) ➞ -2
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. */

function addition(num) {
	return num += 1
}

/* String Match by Two Letters
Create a function that takes two strings, a and b. Return the number of matching positions where they both contain the same exact two letters one after the other.

For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.

Examples
strMatchBy2char("yytaazz", "yyjaaz") ➞ 3

strMatchBy2char("edabit", "ed") 1 ➞ 1

strMatchBy2char("", "") ➞ 0
Notes
Don't forget to return the result. */

function strMatchBy2char(a, b) {
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    if (a.slice(i, i + 2) === b.slice(i, i + 2) && a.slice(i, i + 2).length === 2)
    res += 1;
  }
  return res;
}

/* Basketball Points
You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

Examples
points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100 */

function points(twoPointers, threePointers) {
	return (twoPointers * 2) + (threePointers * 3)
}