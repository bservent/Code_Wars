//is subset
//write a function that returns true if the first array is a subset of the second otherwise return false
//isSubset([3, 2, 5], [5, 3, 7, 9, 2]) ➞ true
  /* isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]) ➞ true
   isSubset([1, 2], [3, 5, 9, 1]) ➞ false */

//input = two arrays
//output = boolean

//psuedocode: loop through array1 and write conditional statement for array1[i]. If array1[i] is found within array2 then return true else return false.

function isSubset(array1, array2) {
  for (let i = 0; i <= array1.length; i++) {
    if (array2.indexOf(array1[i]) === -1){
      return false
    }else{
      return true
    }
  }
}

console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]))