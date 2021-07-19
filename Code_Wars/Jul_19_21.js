/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];
      const diffIndex = nums.indexOf(diff);
      if (diffIndex !== -1 && diffIndex !== i) {
        return [i, diffIndex]
      }
    }
};

/* Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

A word is a maximal substring consisting of non-space characters only.

 

Example 1:

Input: s = "Hello World"
Output: 5

Example 2:

Input: s = " "
Output: 0 */

s = "Hello World"

var lengthOfLastWord = function(s) {
  let trimTheFat = s.trim()
  let words = trimTheFat.split(' ')
  if (words[words.length-1] === ""){
      words.pop()
      return words.length
  } else {
      let lastWord = words[words.length-1]
      return lastWord.length
  }
}



