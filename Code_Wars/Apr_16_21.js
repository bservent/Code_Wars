/* Hiding the Card Number
Write a function that takes a credit card number and only displays the last four characters. The rest of the card number must be replaced by ************.

Examples
cardHide("1234123456785678") ➞ "************5678"

cardHide("8754456321113213") ➞ "************3213"

cardHide("35123413355523") ➞ "**********5523"
Examples
Ensure you return a string.
The length of the string must remain the same as the input. */

function cardHide(card) {
	return card.replace(/\d(?=\d{4})/g, "*");
}

/* Numbers to Arrays and Vice Versa
Write two functions:

toArray(), which converts a number to an array of its digits.
toNumber(), which converts an array of digits back to its number.
Examples
toArray(235) ➞ [2, 3, 5]

toArray(0) ➞ [0]

toNumber([2, 3, 5]) ➞ 235

toNumber([0]) ➞ 0
Notes
All test cases will be weakly positive numbers: >= 0 */

function toArray(num) {
	return num.toString().split('').map(x => parseInt(x))
}

function toNumber(arr) {
	return Number(arr.join(''))
}

