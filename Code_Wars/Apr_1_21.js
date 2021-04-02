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