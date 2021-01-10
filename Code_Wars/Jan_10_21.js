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