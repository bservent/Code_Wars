/* 1/31/21 CodeWars */

//////////////////////////////////*

/* Write a function that returns the number of users in a chatroom based on the following rules:

If there is no one, return "no one online".
If there is 1 person, return "user1 online".
If there are 2 people, return "user1 and user2 online".
If there are n>2 people, return the first two names and add "and n-2 more online".
For example, if there are 5 users, return:

"user1, user2 and 3 more online"
Examples
chatroomStatus([]) ➞ "no one online"

chatroomStatus(["paRIE_to"]) ➞ "paRIE_to online"

chatroomStatus(["s234f", "mailbox2"]) ➞ "s234f and mailbox2 online"

chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
➞ "pap_ier44, townieBOY and 4 more online" */

function chatroomStatus(users) {
  switch (users.length) {
    case 0: return 'no one online'
    case 1: return users[0] + ' online'
    case 2: return users[0] + ' and ' + users[1] + ' online'
    default: return users[0] + ', ' + users[1] + ', ' + user(users.length-2) + ' more online'
  }
}

/* Convert a Number to Base-2
Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

Examples
binary(1) ➞ "1"
// 1*1 = 1

binary(5) ➞ "101"
// 1*1 + 1*4 = 5

binary(10) ➞ "1010"
// 1*2 + 1*8 = 10 */

const binary = d => d.toString(2);

/* Primorial of a Number
In mathematics, primorial, denoted by “#”, is a function from natural numbers to natural numbers similar to the factorial function, but rather than successively multiplying positive integers, the function only multiplies prime numbers.

Create a function that takes an integer n and returns its primorial.

Examples
primorial(1) ➞ 2
// First prime number = 2

primorial(2) ➞ 6
// Product of first two prime numbers = 2*3 = 6

primorial(6) ➞ 30030 */

function isPrime(num) {
  for(var i = 2; i < num; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}

function primorial(n){
  let arr = []
  let i = 2
  while(arr.length < n){
    if(isPrime(i)){
      arr.push(i)
    }
   i++
  }
  return arr.reduce((a,b) => a * b)
}

/* Find the Smallest and Biggest Numbers
Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1] */

const minMax = (arr) => [Math.min(...arr), Math.max(...arr)]

/* Add up the Numbers from a Single Number
Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300 */

function addUp(num) {
	let sum = 0
	for (let i = 0; i <= num; i++) {
		sum += i
	}
	return sum
}

/* Check if One Array can be Nested in Another
Create a function that returns true if the first array can be nested inside the second.

arr1 can be nested inside arr2 if:

arr1's min is greater than arr2's min.
arr1's max is less than arr2's max.
Examples
canNest([1, 2, 3, 4], [0, 6]) ➞ true

canNest([3, 1], [4, 0]) ➞ true

canNest([9, 9, 8], [8, 9]) ➞ false

canNest([1, 2, 3, 4], [2, 3]) ➞ false */

function canNest(arr1, arr2) {
	if (Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)) {
		return true
	}else{
		return false
	}
}


 
