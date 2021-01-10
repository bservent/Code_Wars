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

