//Majority Element
//given an array nums of size n return the Majority Element
//the Majority Element is the element that appears more than n / 2 times
//you may assume the Majority Element always exists in the array

//Example 1:
/* Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2 */

//psuedocode
//write a function named majorityElement that will take in an array of nums and return the majority number found in the array of numbers
//create 2 counters
//loop through the array with a for loop and keep track of the nums by incrementing the counters
//then write a if statement with a condition on which counter is highest and then I will return the highest count number

function majorityElement(nums) {
  let numsObject = {}
  for(let num of nums) {
    numsObject[num] = numsObject[num] + 1 || 1
  }
  for(let key in numsObject) {
    if (numsObject[key] > Math.floor(nums.length / 2)) {
    return key
  }
}
}

console.log(majorityElement([2,2,1,1,1,2,2]))