/* Is the Number Less than or Equal to Zero?
Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

Examples
lessThanOrEqualToZero(5) ➞ false

lessThanOrEqualToZero(0) ➞ true

lessThanOrEqualToZero(-2) ➞ true */

function numberLess(num) {
  if(num <= 0) {
    return true
  }else{
    return false
  };
};

console.log(numberLess(3))

/* Sort by String Length
Create a function that returns an array of strings sorted by length in ascending order.

Examples
sortByLength(["a", "ccc", "dddd", "bb"]) ➞ ["a", "bb", "ccc", "dddd"]

sortByLength(["apple", "pie", "shortcake"]) ➞ ["pie", "apple", "shortcake"]

sortByLength(["may", "april", "september", "august"]) ➞ ["may", "april", "august", "september"]

sortByLength([]) ➞ [] */

function sortByLength(arr){
  return arr.sort((a,b) =>
    a.length - b.length
  )
};

console.log(sortByLength["a", "ccc", "dddd", "bb"])