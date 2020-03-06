//Section 13
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
	phrases: ['literally', 'cray cray', "I cant't even", 'Totes', 'YOLO', "Can't stop won't stop"],
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

/**
 * * 127Putting it all together: Deck of Cards
 * 
 */
function makeDeck() {
	const deck = [];
}

function drawCard(deck) {
	return deck.pop();
}

// const myDeck = makeDeck();
// const card1 = drawCard(myDeck);

const myDeck = {
	deck: [],
	drawnCards: [],
	suits: ['hearts', 'diamons', 'spades', 'clubs'],
	values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',

	initDeck() {
		const {suits, values, deck} = this;
		for (let value of values.split(',')) {
			for (let suit of suits) {
				deck.push({
					value,
					suit
				});
			}
		}
	},
	drawCard() {
		const card = this.deck.pop();
		this.drawnCards.push(card);
		return card;
	},
	drawMultiple(numCards) {
		const cards = [];
		for (let i = 0; i < numCards; i++) {
			cards.push(this.drawCards());
		}
		return cards;
	},
	shuffle() {
		const {deck} = this;
		for (let i = deck.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			[deck[i], deck[j]] = [deck[j], deck[i]];
		}
	}
};

myDeck.initDeck();
myDeck.shuffle();
const h1 = myDeck.drawCard();
const h2 = myDeck.drawCard();
const h3 = myDeck.drawCard();
