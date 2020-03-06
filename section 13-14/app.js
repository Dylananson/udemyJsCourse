/** 
 * *Section 13	
 * *The DOM
 * *Document Object Model
 * *Selecting
 * !getElementById()
-returns an element object if there is a match
* !getElementsByTagName()
-returns a HTMLCollection of elements by tag name if there is a match this is an array like object
some array methods can work but it is not an array. you can access elements using indices and iterate over it
tag name are html tags such as h1 and p and li, ul, input, etc
* !getElementsByClassName()
- returns a HTMLcollection based on the class name entered similar to getElementsByTagName() except uses different params

These methods can be used in conjuction with each other, for instance you can getElementsByTagName('ul')[0] and the store that in const ul, then ul.getElementsByClassName('classname') will return the elements with the specified classname within the selected tag

* !querySelector()
- a newer, all-in-one method to select a single element,will return the first element found
-Pass in a CSS selector
*?Examples	
- document.querySelector('input')
-document.querySelector('tag')
-document.querySelector('#id')
-document.querySelector('.clasname')
-document.querySelector('tag.clasname')
-document.querySelector('body section ul li.special')
-document.querySelector('input[type='password']')
* !querySelectorAll()
- used to select a elements and returns them in a NodeList, Nodelist is an array like object
- same syntax
*/

/** 
 * * Section 14
 * ?Manipulation
 * 
 *   * ?The important methods
 * !classList
 * !getAttribute
 * !setAttribute
 * !appendChild
 * !append
 * !preprend
 * !removeChild
 * !remove
 * !createElement
 * !innerText
 * !textContent
 * !innerHtml
 * !value
 * !parentElement
 * !Children
 * !nextSibling
 * !previousSibling
 * !style
 * 
 * !innerText
 * 	- contains the text within the tags of an element, this will return all the text from the tags, this includes nested tags and there content(it wont have the tag names only content)
 * 	- only returns the text, with no formatting, whereas textContent contains the formatting
 * 	- wont show hidden text from styles
 * !textContent
 * 	- conatins the text content, it is different from inner text
 * 	- even returns tags as text
 * 	-will show everything regardless of if it is hidden or not
 * 
 * !innerHTML
 * - will grab all elements between 2 tags, including the tags
 *  - can be used to update content
 * - if just setting text most of the time use innerText
 * - if you want to add HTML element this can be used
 * - not that commonly used
 * 
 * !140,
 * !value, src and more
 * 	- these are html attributes
 * 	- we can change them using querySelector and assign these attributes new values
 * !141 Properies and Methods
 * !Getting and Setting
 * !getAttribute Method(attr)
 *  - returns the attribute specified
 * !setAttribute(type, attr)
 * - can change the type of input and the contents
 * 
 * !141 
 * !sibling, parent, child
 * 
 *  - can be used to access parent and children elements of a certain element based on the html tags and where they are nested
 * - to find the lis of a ul, enter ul.children, assuming the ul in qeustion is saved to a ul const
 * nextElementSibling, moves along to the next element within the element in question
 * 
 * !142 Changing Multiple elements
 * Examples
 */
const allLis = document.querySelectorAll('li');
// for (let i = 0; i < allLis.length; i++) {
// 	allLis[i].innerText = 'we are the champions';
// }

// for (let li of allLis) {
// 	li.innerHTML = 'WE ARE THE <b>THE CHAMPIONS</b>';
// }

/** 
 * !Changing styles
 * - the style can be accessed by using the style property, this only contains styles set in line
 * - all styles in JS are camalCase
 *  -inline styles win vs class styles or element styles
 */

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

// allLis.forEach((li, i) => {
// 	const color = colors[i];
// 	li.style.color = color;
// });

/**
 * !getComputedStyle()
 * returns an object call a css style declaration, it returns every property that has been calculated in css
 * this will return the computed styles in real time
 */

/**
  * !Manipulating Classes
  * rather than changing 1 property per line
  * using the setAttibute will replace the current class which isnt always wanted
  * write a class in css, then  change or add that class using js
  * !classList
  * returns the list of classes that an element has
  * it also has methods
  * for instance
  * element.classList.remove('class')
  * element.classList.add('class')
  * element.classList.toggle('class')
  * 
  * 
  * !Creating Elements
  * !createElement('h1'), this would create a new h1 element
  * to add content to this you can use innerText
  * !appendChild(), used to append an element to a parent as a child of that parent, it will go to the end of the element
  */
//example of adding a elements to the webpage
const newH2 = document.createElement('h2');
newH2.innerText = 'I like animals';
newH2.classList.add('special');
const section = document.querySelector('section');
section.appendChild(newH2);

const newImg = document.createElement('img');
newImg.src =
	'https://images.unsplash.com/photo-1583131455094-37bdbd8d0ec6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1426&q=80';

newImg.style.width = '300px';
document.body.appendChild(newImg);

const newLink = document.createElement('a');
newLink.innerText = 'Video added with js! CLICK ME!';
newLink.href = 'https://www.youtube.com/watch?v=egEraZP9yXQ';

const para = document.querySelector('p');
para.appendChild(newLink);

/** 
 * !148 Append, Prepend, and insertBefore
 * append and prepend are newer, they dont work in IE but they are a little simplier to use than appendChild, and you can pass in multiple elements
 */

const parentUl = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = 'I AM A NEW LI';
parentUl.appendChild(newLi);
const firstLi = document.querySelector('li.todo');
parentUl.insertBefore(newLi, firstLi);
const lastTodo = document.querySelectorAll('li.todo')[2];
parentUl.insertBefore(newLi, lastTodo);
/**
  * !Removing object
  * remove and removeChild
  * remove is newer and doesnt work in IE
  * 
  * to use removeChild, you need the parent element of what you want to remove and the element you want to remove
  */
