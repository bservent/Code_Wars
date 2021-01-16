/* 1/14/21 CodeWars */

//////////////////////////////////*
/* 
Slightly Superior
You will be given two extremely similar arrays, but exactly one of the items in an array will be valued slightly higher than its counterpart (which means that evaluating the value > the other value will return true).

Create a function that returns whether the first array is slightly superior to that of the second.

Worked Example
isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.
Examples
isFirstSuperior(["a", "d", "c"], ["a", "b", "c"]) ➞ true

isFirstSuperior(["zebra", "ostrich", "whale"], ["ant", "ostrich", "whale"]) ➞ true

isFirstSuperior([1, 2, 3, 4], [1, 2, 4, 4]) ➞ false

isFirstSuperior([true, 10, "zebra"], [true, 10, "zebra"]) ➞ false */

const isFirstSuperior = (arr1, arr2) => arr1 > arr2;

/* Arrow Functions
In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

Write five adder functions:

add2(x) should return 2 + x.
add3(x) should return 3 + x.
add5(x) should return 5 + x.
add7(x) should return 7 + x.
add11(x) should return 11 + x.
Tips
Functions that consists only of a return, can be written as oneliner with an arrow function.

For example, the code:

function areSame(a, b) {
    return a == b;
}
Can be simplified to:

areSame = (a, b) => a == b; */

const add2 = (x) => x + 2;

const add3 = (x) => x + 3;

const add5 = (x) => x + 5;

const add7 = (x) => x + 7;

const add11 = (x) => x + 11;

/* Minimal I: If Boolean Then Boolean
In this series we're going to see common redundancies and superfluities that make our code unnecessarily complicated and less readable, and we're going to learn how to avoid them.

In line with the spirit of the series, we can summarize the general rules of minimalist code in two simple principles:

Keep your code clean and readable.
While not violating the first principle: get rid of everything superfluous.
In order to achieve this you should:

Deepen your knowledge of logics.
Deepen your understanding of the particular language you're coding with.
I would also add: observe and learn from the pros. Make a habit of checking the Solutions tab after solving a challenge on Edabit. There is absolutely nothing wrong in assimilating features of someone else's coding style, especially if yours is not yet fully developed.

Goal
In the Code tab you will find a code that is missing a single character in order to pass the tests. However, YOUR GOAL is to submit a function as minimalist as possible. Use the tips in the Tips section down below.

Write a function that returns true if the given integer is even, and false if it's odd. */

function isEven(n) {
	if (n % 2 === 0) {
		return true
	}else{
		return false
	}
}

/* Using Ternary Operators
The ternary operator (sometimes called Conditional Expressions) in JavaScript is an alternative to the if... else... statement.

It is written in the format:

condition ? result_if_true : result_if_false
Ternary operators are often more compact than multi-line if statements, and are useful for simple conditional tests.

For example:

is_nice = true

// Using ternary operator.
state = is_nice ? "nice" : "not nice"

// Equivalent code using multi-line if statements.
if (is_nice)
  state = "nice"
else
  state = "not nice"
Write a function that uses the ternary operator to return "yeah" if b is true, and "nope" otherwise. */

const yeah_nope = (bool) => bool ? "yeah" : "nope";

/* Reverse an Array
Write a function to reverse an array.

Examples
reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

reverse([]) ➞ []
Notes
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab. */

const reverse = (arr) => arr.reverse();

/* Minimal IV: if-else if-else Inferno
Check the principles of minimalist code in the intro to the first challenge.

In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.

Tips
Executing a return will effectively end your function.

For example, the code:

function compare_to_100 (x) {
  if (x > 100) {
      return "greater"
  } else if (x < 100) {
        return "smaller"
    } else {
      return "equal"
    }
}
Can be simplified to:

function compare_to_100 (x) {
    if (x > 100) return "greater"
    if (x < 100) return "smaller"
    return "equal"
}
If x is greater than 100, JavaScript will not execute the code past the first return.
If x is smaller than 100, JavaScript will not execute the code inside the first if statement or past the second return.
If x is equal to 100, JavaScript will not execute the code inside the two if statements.
This can only be used if you have a return inside your if statement. */

const equilibrium = (x) => (x > 0) ? "positive" : (x < 0) ? "negative" : true;