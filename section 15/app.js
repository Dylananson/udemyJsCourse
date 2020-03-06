/** 
 * !EVNENTS SECTION 152
 * !Commonly Used Events
 * ?clicks, drags, drops, hovers, scrolls, form submission, key presses, focus/blur
 * ?mouse wheel, double click, copying, pasting, audio start, screen resize, printing
 * 
 * ?MDN, event reference contains all the event names
 * 
 * !the thing   the event     the code to run
 * !button      click         change the color
 * !input       hits return   get search results
 * 
 */
//the following code is frowned upon and there are better ways of creating events, the problem with this is the fact that you are overriding the old property with the new one property
// const btn = document.querySelector('#clicker');
// btn.onclick = function() {
// 	console.log('YOU CLICKED ME GO AWAY!');
// };

/**
 * !addEventListener 
 * ?THIS IS WHAT YOU SHOULD USE
 * you can created more than one eventListeners and not override the property it instead adds an event listener
 */

// btn.addEventListener('click', function() {
// 	alert('CLICKED!');
// });

// btn.addEventListener('mouseover', function() {
// 	btn.innerText = 'STOP TOUCHING ME!';
// });

// btn.addEventListener('mouseout', function() {
// 	btn.innerText = 'CLICK ME!';
// });

//you can also add events to the window
//window.addEventListener

// const btn = document.querySelector('button');

// btn.addEventListener('mouseover', function() {
// 	const height = Math.floor(Math.random() * window.innerHeight);
// 	const width = Math.floor(Math.random() * window.innerWidth);
// 	btn.style.left = `${width}px`;
// 	btn.style.top = `${height}px`;
// });

// btn.addEventListener('click', function() {
// 	btn.innerText = 'YOU GOT ME';
// 	document.body.style.backgroundColor = 'green';
// });

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'indigo', 'violet'];

const changeColor = function(evt) {
	console.log(evt);
	const h1 = document.querySelector('h1');
	h1.style.color = this.style.backgroundColor;
};
const container = document.querySelector('#boxes');

for (let color of colors) {
	const box = document.createElement('div');
	box.style.backgroundColor = color;
	box.classList.add('box');
	container.appendChild(box);
	box.addEventListener('click', changeColor);
}

/**
 * !The Event Object
 * the event object is automatically passed in to the callback function with the addEventListener 
 */

const addItemInput = document.querySelector('#addItem');
const itemsUl = document.querySelector('#items');

addItemInput.addEventListener('keypress', function(e) {
	if (e.key === 'Enter') {
		if (!this.value) return;
		const newItemText = this.value;
		const newItem = document.createElement('li');
		newItem.innerText = newItemText;
		itemsUl.appendChild(newItem);
		this.value = '';
	}
});
