function isValidPassword(username, password) {
	if (
		password.length < 8 ||
		password.includes(' ') ||
		password.includes(username)
	) {
		return false;
	}
	return true;
}

function avg(arr) {
	let sum = 0;
	for (let num of arr) {
		sum += num;
	}
	console.log(arr);
	return sum / arr.length;
}

function isPangram(string) {
	let alphabet = 'abcdefghijklmnopqrxtuvwyz';
	string = string.toLowerCase();
	for (let letter of alphabet) {
		if (string.indexOf(letter) === -1) {
			return false;
		}
	}

	return true;
}

function getCard() {
	const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
	const suits = ['clubs', 'spades', 'hearts', 'diamonds'];
	let randValues = Math.floor(Math.random() * values.length);
	let randSuits = Math.floor(Math.random() * suits.length);

	const card = {
		value: values[randValues],
		suit: suits[randSuits]
	};
	return card;
}

function makeBetween(x, y) {
	return function(num) {
		return num >= x && num <= y;
	};
}
const isChild = makeBetween(0, 18);
const isInNineties = makeBetween(1990, 2000);

const btn = document.querySelector('button');
btn.addEventListener('click', function() {
	alert("Who's a Cutie?");
});

//The Ternary Operator
//constiion ? expIfTrue: expIfFalse

//map
//has the followig syntax: array = array.map(function())
//the map function allows you to map an arry to a new array
//examples are below.
const numbers = [12, 23, 53, 52, 78, 5, 252];
const words = ['asap', 'byob', 'tsvp', 'diy'];

//creates new array doubleNumbers with values created from the return function
const doubleNumbers = numbers.map(function(num) {
	return num * 2;
});
/* creates new array numDetail that contains objects with 2 values,
 the value of the numbers and whether or not that number is even
*/
const numDetail = numbers.map(function(n) {
	return {
		value: n,
		isEven: n % 2 === 0
	};
});

/*creates a new array format that contains the words
 array where each word is formatted with capital letters 
 and . between each letter
*/
const format = words.map(function(word) {
	return word.toUpperCase().split('').join('.');
});

//Arrow functions allows functions to be written in a more compact manner

// const square = function(x) {
// 	return x * x;
// };

//some examples
const square = x => {
	return x * x;
};

const isEven = num => {
	return num % 2 === 0;
};

const multiply = (x, y) => {
	return x * y;
};

//parens are optional if thers only one parameter:
const square2 = x => {
	return x * x;
};

//Use empty parens for functions w/ no parameters:
const singASong = () => {
	return 'LA LA LA LA LA';
};

/*
Arrow functions can have implicit returns
the following is an example of an arrow function with an implict return
the function squareImplicitReturn accepts one argument n and returns n*n
*/

const squareImplicitReturn = n => n * n;

//parens can be used if the return is longer than one line
//implicit returns can only return one thing umplicitly

//some more examples
const nums = [1, 2, 3, 4, 5, 6, 7, 8];

//map array using inline function
const double1 = nums.map(function(n) {
	return n * 2;
});
//map array using arrow function
const doubles2 = nums.map(n => {
	return n * 2;
});
//map array using explicit return arrow function
const doubles3 = nums.map(n => n * 2);

//more exmaples
const paritylist = nums.map(function(n) {
	if (n % 2 === 0) return 'even';
	return 'odd';
});

const paritylist2 = nums.map(n => {
	if (n % 2 === 0) return 'even';
	return 'odd';
});

//uses ternary operator to have a conditional in a arrow implict return
const parityList3 = nums.map(n => (n % 2 === 0 ? 'even' : 'odd'));

// the find function

let movies = [
	'The Fantasitic Mr. Fox',
	'Mr. and Mrs. Smith',
	'Mrs. Doubtfire',
	'Mr Deeds'
];

//This will return the first movie in the list that contains 'Mrs'
const movie = movies.find(movie => {
	return movie.includes('Mrs');
});

//this will return the first movie that strts with 'Mrs'
const movie2 = movies.find(m => m.indexOf('Mrs') == 0);

//the filter function

const filterNums = [34, 35, 67, 54, 109, 102, 32, 9];
//note filter returns the values that pass the test
const odds = filterNums.filter(n => n % 2 === 1);
//map returns the boolean value of the test.
const odds2 = filterNums.map(n => n % 2 === 1);

//the every function
/* 
tests whether all elements in the array pass the provided
function. it returns a boolean value.
*/

const wordsEvery = ['dog', 'dig', 'log', 'bag', 'wag'];
const all3Lets = wordsEvery.every(word => word.length === 3);

const allEngInG = wordsEvery.every(word => {
	const last = word.length - 1;
	return word[last] == 'g';
});

//the some function
/*
tests whether some of the elements in the array pass the 
provided function. it returns a boolean value.
*/
//some returns true
const someStartWithD = wordsEvery.some(word => word[0] === 'd');
//every returns false.
const everyStartsWithD = wordsEvery.every(word => word[0] === 'd');

//the sort method
const prices = [400.5, 3000, 99.99, 35.99, 12.0, 9500];
//doesnt work the way we want
prices.sort();

//arr.sort(compareFunc(a,b))
/*
If compareFunc(a,b) reutrns less than 0
	- Sort a before b
If compareFunc(a,b) returns 0
	- Leave a and b unchanged with respect to each other
If comapre Func(a,b) returns greater than 0
	- Sort b before a 
*/

//below is an example of ascending and descding sort,
//sort is one of the few methods that updates an array instead of
//creating a new array, the slice method is added as it
//creates a copy of the array

const badSort = prices.slice().sort();
const ascSort = prices.slice().sort((a, b) => a - b);
const descSort = prices.slice().sort((a, b) => b - a);

//the Reduce Method
/*
Executes a reducer functions on each element
of the array, resulting in a single value

summing an array
arr.reduce((accumulator, currentValue)) => {
	return accumulator + currentValue;
}
*/

const numsReduce = [3, 4, 5, 6, 7];
//finding the product of all values in an array
const product = nums.reduce((total, currentVal) => {
	return total * currentVal;
});

const grades = [87, 64, 96, 92, 88, 99, 73, 70, 63];
//return the maxGrade
const maxGrade = grades.reduce((max, currentVal) => {
	if (max > currentVal) return max;
	return currentVal;
});
//same thing using the math.max instead
const maxGrade2 = grades.reduce((max, currentVal) => Math.max(max, currentVal));
const minGrade = grades.reduce((min, currentVal) => Math.min(min, currentVal));

/* 
with the reduce function you have the option to add an intial value
as an extra argument.
See the following:
	const sum = [10,20,30,40,50].reduce((sum,currVal) =>{
		return sum + currVal;
	}, 1000)
*/

/*
Tallying using the reduce function

*/

const votes = ['y', 'y', 'n', 'y', 'n', 'y', 'n', 'y', 'n', 'n', 'n', 'y', 'y'];

const results = votes.reduce((tally, val) => {
	if (tally[val]) tally[val]++;
	else tally[val] = 1;
	return tally;
}, {});

const results2 = votes.reduce((tally, val) => {
	tally[val] = (tally[val] || 0) + 1;
	return tally;
});

//default parameters
/*
to make a defualt parameter you can do the following 
function multiple(x, y=1) {
	return x * y;
}
*/

// example
const greet = (person = ' ', greeting = 'hi') => {
	console.log(`${greeting} ${person}`);
};

//Spread
/* 
Allows arrays to be passed in as numbers by essentially 
removing the brackets and adding in the arrays values into
a functions as singular values
...array
*/
//example
function giveMeFour(a, b, c, d) {
	console.log('a', a);
	console.log('b', b);
	console.log('c', c);
	console.log('d', d);
}
const colors = ['red', 'orange', 'yellow', 'green'];
//this will pass each string as an argument
giveMeFour(...colors);

//same can be done using strings
const str = 'GOAT';
giveMeFour(...str);

/* 
Spread can also be used to create new arrays were the elements
passed in can be copied from an using the spread sytax
*/

//Spread in object literals
const feline = {
	legs: 4,
	family: 'Felidae'
};

const canine = {
	family: ' Caninae',
	furry: true
};

const dog = {
	...canine,
	isPet: true,
	adorable: true
};

const houseCat = {
	...feline,
	isGrumpy: true,
	personality: 'unpredictable'
};

const catDog = {
	...canine,
	...feline
};
/*
above are examples of using the
the spread operator in objects
note that if there are conflicting 
properties they will be overwritten with 
the last property, ORDER MATTERS!
*/

//Rest Params
/* 
Collects all remaining arguments into an actual array

This allows the creation of functions with unlimited params
*/
function sumAll(...nums) {
	return nums.reduce((total, currVal) => {
		return total + currVal;
	});
}

function fullName(first, last, ...titles) {
	console.log('first', first);
	console.log('last', last);
	console.log('titles', titles);
}

//Destructering

/*
short clean syntac to unpack
	- values from arrays 
	- properties from arrays

*/

const raceResults = [
	'Eluid Kipchoge',
	'Feyisa Leisa',
	'Galen Rupp',
	'Ghirmay Ghebreslassie',
	'Alphonce Sumbu',
	'Jared Ward'
];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];

// const [gold, silver, bronze] = raceResults;
// const [first, , , fourth] = raceResults;
// const [winner, ...others] = raceResults;

//Object Destructuring

const runner = {
	first: 'Eluid',
	last: 'Kipchoge',
	country: ' Kenya',
	title: 'Elder of the Order of the Golden Heart of kenya'
};

//can create variables from object properties
// const {first, last, time} = runner;

//can also use keys to assign new variables
const {country: nation, title: honorific} = runner;

//can use spread to save all remaining in a new variable
const {first, last, ...others} = runner;

//can do similar things with functions

// function print(person) {
// 	const {first, last, title} = person;
// 	console.log(`${first} ${last} ${title}`);
// }

//you can destructer in the params instead this is cleaner
function print({first, last, title}) {
	console.log(`${first} ${last} ${title}`);
}

//same can be done with arrays

const respone = ['HTTP/1.1', '200 OK', 'application/json'];
function parseRespone([protocol, statusCode, contentType]) {
	console.log(`Status: ${statusCode}`);
}

// OBJECT METHODS AND THE 'This' KEYWORD
//Computed Properies
const role = 'host';
const person = 'Jools Holland';
const role2 = 'Diretor';
const person2 = 'James Cameron';

const team = {
	[role]: person,
	[role2]: person2
};
//functions can be properties within objects aka methods
/*
const math = {
	add: function (x,y){
		return x + y;
	}
} 
*/

//Method syntax shorthand
const auth = {
	username: 'TommyBot',
	login() {
		console.log('LOGGED YOU IN!');
	},
	logout() {
		console.log('GOODBYE');
	}
};

//the keyword 'this'
/*
'this' is an object and it refers to the current execution 
scope

function sayHi(){
	console.log('hi')
	console.log(this)
}

the above will log 'hi and the window object because the
function is in the gloabl scope
*/

//the following fullName method will log 'this'
// in this case 'this; is the object person
//without the this keyword on fullName in print bio method
//will return an error because fullName doesnt exist in
//that scope
const person1 = {
	first: 'Cherily',
	last: 'Sarkisian',
	nickName: ' Cher',
	fullName() {
		const {first, last, nickName} = this; //destructuring
		return `${first} ${last} AKA ${nickName}`;
	},
	printBio() {
		const fullName = this.fullName();
		console.log(`${fullName} is a person!`);
	}
};
//the value of this depends on the invocation context
//it changes based on wheres its called not where its writen
//that is where this is executed.
/*
arrow functions will not work the same they dont get there
own this 
*/
//they are ussualy not used as methods because of this
//

//Annoymatic Demo
const annoyer = {
	phrases: [
		'literally',
		'cray cray',
		"I cant't even",
		'Totes',
		'YOLO',
		"Can't stop won't stop"
	],
	pickPhrase() {
		const {phrases} = this;
		const idx = Math.floor(Math.random() * phrases.length);
		return phrases[idx];
	},
	//the following doesnt work because the callback will change the this
	//object
	// start() {
	// 	setInterval(function() {
	// 		console.log(this.pickPhrase());
	// 	}, 3000);
	// }
	//arrow functions can be used because they dont get there own this
	start() {
		this.timerId = setInterval(() => {
			console.log(this.pickPhrase());
		}, 3000);
	},

	stop() {
		clearInterval(this.timerId);
	}
};
