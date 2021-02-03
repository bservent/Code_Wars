/* 2/2/21 CodeWars */

//////////////////////////////////*

/* Convert Number to String of Dashes
Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

Examples
Go(1) ➞ "-"

Go(5) ➞ "-----"

Go(3) ➞ "---" */

function Go(num) {
	var str = ''
	for(let i = 0; i < num; i++) {
		str += '-';
	}
	return str
}

/* Which Function Returns the Larger Number?
Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

If f returns the larger number, return the string f.
If g returns the larger number, return the string g.
If the functions return the same number, return the string neither.
Examples
whichIsLarger(() => 5, () => 10) ➞ "g"

whichIsLarger(() => 25,  () => 25) ➞ "neither"

whichIsLarger(() => 505050, () => 5050) ➞ "f" */

function whichIsLarger(f, g) {
	if (f() > g()) {
		return 'f'
	} else if (g() > f()) {
		return 'g'
	} else {
		return 'neither'
	}
}

/* Number of Squares in an N * N Grid
Create a function that calculates the number of different squares in an n * n square grid. Check the Resources tab.

Examples
numberSquares(2) ➞ 5

numberSquares(4) ➞ 30

numberSquares(5) ➞ 55 */

function numberSquares(n) {
	return n*(n+1)*(2*n+1)/6
}

/* Older Than Me
Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

{other person name} is {older than / younger than / the same age as} me.

Examples
p1 = Person("Samuel", 24)
p2 = Person("Joel", 36)
p3 = Person("Lily", 24)
p1.compareAge(p2) ➞ "Joel is older than me."

p2.compareAge(p1) ➞ "Samuel is younger than me."

p1.compareAge(p3) ➞ "Lily is the same age as me." */

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		if (this.age > other.age) {
			return `${other.name} is younger than me.`
		} else if (this.age < other.age) {
			return `${other.name} is older than me.`
		} else {
			return `${other.name} is the same age as me.`
		}
	}
}


/* Sum of Resistance in Series Circuits
When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

RT = R1 + R2 + R3 ...
Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

Examples
seriesResistance([1, 5, 6, 3]) ➞ "15 ohms"

seriesResistance([16, 3.5, 6]) ➞ "25.5 ohms"

seriesResistance([0.5, 0.5]) ➞ "1 ohm" */

function seriesResistance(arr) {
  var ohms = arr.reduce((a, b) => a + b) 
  if (ohms <= 1) {
    return `${ohms} ohm`
   }else{
     return `${ohms} ohms`
   }
}

/* Find the Amount of Potatoes
Create a function to return the amount of potatoes there are in a string.

Examples
potatoes("potato") ➞ 1

potatoes("potatopotato") ➞ 2

potatoes("potatoapple") ➞ 1 */

function potatoes(str) {
	var arr = str.split("potato")
	return arr.length-1
}