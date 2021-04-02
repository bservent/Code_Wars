/* Valid Zip Code
Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

Must only contain numbers (no non-digits allowed).
Must not contain any spaces.
Must not be greater than 5 digits in length.
Examples
isValid("59001") ➞ true

isValid("853a7") ➞ false

isValid("732 32") ➞ false

isValid("393939") ➞ false */

function isValid(zip) {
  return zip.length == 5 && !isNaN(zip);
  }

/*   Secret Society
  A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
  
  Create a function that takes in an array of names and returns the name of the secret society.
  
  Examples
  societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"
  
  societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"
  
  societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR" */

  function societyName(friends) {
    let name = friends.map(name => name.charAt(0))
    return name.sort().join('')
  }

/*   Cycling Through Strings
Given two strings, repeatedly cycle through all of the letters in the first string until it is the same length as the second string.

Examples
stringCycling("abc", "hello") ➞ "abcab"

stringCycling("programming", "edabit") ➞ "progra"

stringCycling("the world in me evolves in hers", "i love Tesh, so much so") ➞ "the world in me evolves"

stringCycling("a thing of beauty is a joy forever", "indulge me surely") ➞ "a thing of beauty"

stringCycling("to", "hide") ➞ "toto"

stringCycling("such a feeling coming over me", "top of the world") ➞ "such a feeling c" */

function stringCycling(a, b) {
	for (let i = 0; i < b.length; i++) {
		a = a + a
	}	
	return a.slice(0, b.length)
}

