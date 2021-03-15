/* Radioactive Decay
A half life is the amount of time for half of a radioactive substance to decay.

After 1 half life, 50% of a substance will be left.
After 2 half lives, 25% of a substance will be left.
After 3 half lives, 12.5% of a substance will be left, etc...
Create a function which calculates the remaining mass and the number of years that it took for the substance to decay. You will be given:

The mass of the substance.
The time in years for a halflife to elapse.
The number of half lives.
Worked Example
halflifeCalculator(1000, 5730, 2) ➞ [250, 11460]

// There are 2 half lives, so the mass decays from 1000 to 500, then from 500 to 250.
// Each halflife is 5730 years, and since there were 2, it took 11460 years in total.
Examples
halflifeCalculator(1600, 6, 3) ➞ [200, 18]

halflifeCalculator(13, 500, 1) ➞ [6.5, 500]

halflifeCalculator(100, 35, 5) ➞ [3.125, 175]
Notes
Round the final mass to three decimal places.
All inputs are positive numbers.
Return the final mass first, then the number of years. */

function halflifeCalculator(mass, hlife, n) {
	let years = hlife * n
	for (let i=0; i < n; i++) {
		mass = mass/2
	}
	return [+mass.toFixed(3), years]
}

/* Promises III: Native Promise, Introducing the Executor
Promises are just objects that contain the outcome of asynchronous operations. So when do you use one? When you want to control the outcome of an asynchronous operation. All you have to do is wrap the asynchronous function with a promise constructor.

The promise constructor requires you to pass a function called the executor which takes two parameters, resolve and reject. Both are functions that you use to pass or reject a value that is usually the result of the async operation. Here's an example of a simple promise:

let promise = new Promise( (resolve, reject) => {
  setTimeout(( ) => {
     resolve("edabit")
  }, 1000)
})
setTimeout is a browser API that is very commonly used in tutorials to represent async operations. After 1000ms has passed, we call the callback function in setTimeout() and pass a string "edabit" to the resolve function.

Create a simple promise and pass the resolve function a string value of your choice. Use the setTimeout function as your asynchronous operation. Your setTimeout() function should not exceed 1000ms. Store the promise inside a variable named promise. */

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve = ('britt')
  }, 1000)
  });
  