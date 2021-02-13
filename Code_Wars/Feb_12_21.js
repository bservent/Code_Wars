/* 2/12/21 CodeWars */

//////////////////////////////////*

/* RegEx XV : Group Ranges - Negated Character Sets
Groups and ranges indicate groups and ranges of expression characters. Negated character sets match any characters that are NOT inside of brackets [ ]. You differentiate a negated character set from a regular character set by inserting a ^ inside of the [ ].

"1234cba5678".match(/[^abc]/g)
// "12345678", matches any character that are not a, b, or c.
You can also negate ranges, but like with regular character sets, if the hyphen is at the beginning or ending of a range then it will be considered a literal hyphen.

"excludenumbers123".match(/[^1-3]/g)
// "excludenumbers", matches any character that are not the numbers 1, 2 or 3.
Create a REGEXP that matches any characters except letters, digits and spaces. You must use a negated character set in your expression.

 "alice15@gmail.com".match(/REGEXP/gi) ➞ ["@", "."] */

 const REGEXP = /[^a-z^1-9]/gi

/*  Drink Sorting
You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

drinks = [
  {name: "lemonade", price: 50},
  {name: "lime", price: 10}
]
The output of the sorted drinks object will be:

Examples
sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}] */

function sortDrinkByPrice(drinks) {
	return drinks.sort((a,b)=> a.price - b.price)
}