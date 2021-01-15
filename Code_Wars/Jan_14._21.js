/* 1/14/21 CodeWars */

//////////////////////////////////*

/* Buggy Code (Part 3)
Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

Examples
sumArray([1, 2, 3, 4, 5]) ➞ 15

sumArray([-1, 0, 1]) ➞ 0

sumArray([0, 4, 8, 12]) ➞ 24 */

function sumArray(arr) {
	var sum = 0	
  for (i=0; i<arr.length; i++) {
	  sum+=arr[i]
	}
  return sum
}

/* Upvotes vs Downvotes
Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

Examples
getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0 */

function getVoteCount(votes) {
	return votes.upvotes - votes.downvotes
}

/* Buggy Code
The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.

Examples
has_bugs(true) ➞ "sad days"

has_bugs(false) ➞ "it's a good day" */

function has_bugs(buggy_code) {
	if (buggy_code == true) {
		return "sad days"
	} else {
		return "it's a good day"
	}
}
