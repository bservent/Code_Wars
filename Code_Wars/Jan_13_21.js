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

//a divided by b must have no remainder == true
//a divided by b with remainder == false

function dividesEvenly(a, b) {
	if(a % b == 0) {
		return true
	}else{
		return false
	}
}

/* Concatenate First and Last Name into One String
Given two strings, firstName and lastName, return a single string in the format "last, first".

Examples
concatName("First", "Last") ➞ "Last, First"

concatName("John", "Doe") ➞ "Doe, John"

concatName("Mary", "Jane") ➞ "Jane, Mary" */

function concatName(firstName, lastName) {
	var str = lastName.concat(", " + firstName)
	return str}


/*   Buggy Code (Part 4)
  Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.
  
  Can you help her?
  
  Examples
  greeting("Matt") ➞ "Hello, Matt!"
  
  greeting("Helen") ➞ "Hello, Helen!"
  
  greeting("Mubashir") ➞ "Hello, my Love!" */

  function greeting(name) {
    if (name != "Mubashir")
      return "Hello, " + name + "!";
    if(name == "Mubashir") {
      return "Hello, my Love!";
    }
  }