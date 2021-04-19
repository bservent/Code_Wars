//given two integer arrays, nums1 and nums2, return an array of their intersection
//each element in result must be unique and you may return the result in any order

//Example 1:
/* Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted. */

//psuedocode: 
//write function that takes two integer arrays for parameters
//declair new array variable to hold integers of nums1
//use for loop to loop through array variable and compare to nums2
//use if statement to compare
//if == true then return integer into new array variable (result)
//else 

function similarArr(nums1, nums2) {
  let result = []
  for (let i = 0; i < nums2.length; i++) {
    if(nums1.includes(nums2[i]) && (!result.includes(nums2[i]))) {
      result.push(nums2[i])
    }
  }
  return result
}

console.log(similarArr([4,9,5], [9,4,9,8,4]))