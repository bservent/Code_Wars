/* 412. Fizz Buzz
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i if non of the above conditions are true.
 

Example 1:
Input: n = 3
Output: ["1","2","Fizz"]

Example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"] */

/**
 * @param {number} n
 * @return {string[]}
 */

function fizzBuzz(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    console.log(i)
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    }else if(i % 3 === 0) {
      result.push("Fizz");
    }else if(i % 5 === 0) {
      result.push("Buzz");
    }else{ 
      result.push(i.toString());
    }
  }
  return result
};

console.log(fizzBuzz('16'))