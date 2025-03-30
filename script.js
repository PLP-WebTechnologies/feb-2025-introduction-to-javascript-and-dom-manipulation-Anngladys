// script.js

// Change Text Content
const changeTextButton = document.getElementById('change-text-button');
const dynamicText = document.getElementById('dynamic-text');

changeTextButton.addEventListener('click', () => {
    dynamicText.textContent = 'Text Changed Dynamically!';
});

// Modify CSS Styles
const styledDiv = document.getElementById('styled-div');

styledDiv.addEventListener('mouseover', () => {
    styledDiv.style.backgroundColor = 'lightgreen';
    styledDiv.style.color = 'darkblue';
});

styledDiv.addEventListener('mouseout', () => {
    styledDiv.style.backgroundColor = 'lightblue';
    styledDiv.style.color = 'black';
});

// Add or Remove Element
const addRemoveButton = document.getElementById('add-remove-button');
const elementContainer = document.getElementById('element-container');
let elementAdded = false;

addRemoveButton.addEventListener('click', () => {
    if (elementAdded) {
        // Remove the element
        const newElement = document.getElementById('new-element');
        elementContainer.removeChild(newElement);
        elementAdded = false;
        addRemoveButton.textContent = 'Add Element';
    } else {
        // Add the element
        const newElement = document.createElement('p');
        newElement.textContent = 'New Element Added!';
        newElement.id = 'new-element';
        elementContainer.appendChild(newElement);
        elementAdded = true;
        addRemoveButton.textContent = 'Remove Element';
    }
});