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