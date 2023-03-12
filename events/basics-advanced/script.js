const body = document.querySelector('body');
//Create a div container
const divContainer = document.createElement('div');
//Give the div an id
divContainer.setAttribute('id', 'div-container');
divContainer.setAttribute('style', 'border: solid; border-width: 2px; border-radius: 5px; padding: 5px');
divContainer.style.gap = "5px"

//Create button1
const button1 = document.createElement('button');
button1.textContent = "Button 1";
button1.classList.add('button1', 'button');
divContainer.appendChild(button1);

// Place a div inside a body
body.appendChild(divContainer);

// Create button2
const button2 = document.createElement('button');
button2.classList.add('button2', 'button');
button2.textContent = "Button 2";
//button2.style.flexGrow = "1";
divContainer.appendChild(button2);

// Create button3
const button3 = document.createElement('button');
button3.classList.add('button3', 'button');
button3.textContent = "Button 3";
divContainer.appendChild(button3);

// Create a flex container
flexContainer = document.getElementById('div-container');
flexContainer.style.display = 'flex';


// Set attributes to the buttons
const divButtons = document.querySelectorAll('.button');
divButtons.forEach(element => {element.style.flexGrow = "1",
element.style.padding = "10px"})


// Add functionality to the buttons
divButtons[0].addEventListener(
    'click',
    () => {alert("This is the first button")}
);
divButtons[1].addEventListener(
    'click',
    () => {alert("This is the second button")}
);
divButtons[2].addEventListener(
    'click',
    () => {alert("This is the third button")}
);

