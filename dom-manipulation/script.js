                // Add title
//Get H1 tag
const h1Tag = document.querySelector("h1");
h1Tag.textContent = "THE TITLE OF YOUR WEBPAGE";
h1Tag.style.backgroundColor = 'blue';

// Create a div container with id "container"
// Create a div
const divContainer = document.createElement('div');
// Give it an ID
divContainer.setAttribute('id', 'container');
//Place div inside body
body = document.querySelector('body');
body.appendChild(divContainer);

// Add a div child with class 'content'
// Create a div
const divChild = document.createElement('div');
// Give it a class name
divChild.classList.add('content');
// Place the child inside the parent container
divContainer.appendChild(divChild);

// Add a paragraph with red text
const pChild = document.createElement('p');
// Add text
pChild.textContent = "Hey I'm red!";
// Make the text red
pChild.style.color = 'red';
// Place the paragraph in the container
divContainer.appendChild(pChild);

// H3 with text
const h3Child = document.createElement('h3');
h3Child.textContent = "I'm a blue h3!";
h3Child.style.color = 'blue';
divContainer.appendChild(h3Child);

// Div
const divSibling = document.createElement('div');
divSibling.setAttribute('style', 'border-style: solid; border-color: black; background: pink');


//Add h1 and p in the div
const pGrandChild = document.createElement('p');
pGrandChild.textContent = "ME TOO!";
divSibling.appendChild(pGrandChild);

const h1GrandChild = document.createElement('h1');
h1GrandChild.textContent = "I'm a div";
divSibling.insertBefore(h1GrandChild, pGrandChild);


divContainer.appendChild(divSibling);
