1/11/21 CodeWars

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

