/* 2/4/21 CodeWars */

//////////////////////////////////*
/* 
Hex to Binary
Create a function that will take a HEX number and returns the binary equivalent (as a string).

Examples
toBinary(0xFF) ➞ "11111111"

toBinary(0xAA) ➞ "10101010"

toBinary(0xFA) ➞ "11111010" */

function toBinary(num) {
	var bin = num.toString(2)
	return bin
}

/* Happy Birthday! 🍩
Mubashir is getting old but he wants to celebrate his 20th or 21st birthday only. It is possible with some basic maths skills. He just needs to select the correct number base with your help!

For example, if his current age is 22, that's exactly 20 - in base 11. Similarly, 65 is exactly 21 - in base 32 and so on.

Create a function that takes his current age and returns the given age 20 (or 21) years, with number base in the format specified in the below examples.

Examples
happyBirthday(22) ➞ "Mubashir is just 20, in base 11!"

happyBirthday(65) ➞ "Mubashir is just 21, in base 32!"

happyBirthday(83) ➞ "Mubashir is just 21, in base 41!" */

function happyBirthday(age){
  return `Mubashir is just ${20+age%2}, in base ${Math.floor(age/2)}!`
}

/* Error Messages
Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

The input error will be 1 to 5:

1 >> "Check the fan"
2 >> "Emergency stop"
3 >> "Pump Error"
4 >> "c"
5 >> "Temperature Sensor Error"
For any other value, return 101 (you can use an if statment here).

Examples
error(1) ➞ "Check the fan: e1"

error(2) ➞ "Emergency stop: e2"

error(3) ➞ "Pump Error: e3" */

function error(n) {
	return {
		1: 'Check the fan: e1',
		2: 'Emergency stop: e2',
		3: 'Pump Error: e3',
		4: 'c: e4',
		5: 'Temperature Sensor Error: e5',
	}[n] || 101
}