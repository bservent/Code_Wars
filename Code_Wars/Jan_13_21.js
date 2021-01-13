/* 1/13/21 CodeWars */

//////////////////////////////////*

/* Emphasise the Words
Create a function that returns a capitalized version of the string passed. The first letter of each word in the string should be capitalized while the rest of each word should be lowercase.

Examples
emphasise("hello world") ➞ "Hello World"

emphasise("GOOD MORNING") ➞ "Good Morning"

emphasise("99 red balloons!") ➞ "99 Red Balloons!" */

function emphasise(str) {
	if (str.length === 0) return str;
	var a = str.toLowerCase()
	var words = a.split(" ")
	for (let i = 0; i < words.length; i++) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1)
	}
	return words.join(" ")
}

/* Recursion: Length of a String
Write a function that returns the length of a string. Make your function recursive.

Examples
length("apple") ➞ 5

length("make") ➞ 4

length("a") ➞ 1

length("") ➞ 0 */

function length(str) {
	if(str === "") return 0;
	return length(str.substr(1)) + 1;
}

/* Using the "&&" Operator
JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.

Consider a && b:

a is checked if it is true or false.
If a is false, false is returned.
b is checked if it is true or false.
If b is false, false is returned.
Otherwise, true is returned (as both a and b are therefore true ).
The && operator will only return true for true && true.

Make a function using the && operator. */

function and(a, b) {
	if(a && b == true) {
		return true
	}else{
		return false
	}
}

