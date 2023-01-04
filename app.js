/* Imports */
const nameInput = document.getElementById('name-input');
const submitBtn = document.getElementById('submit-button');
const nameDisplay = document.getElementById('name');

console.log('nameInput', nameInput);
console.log('submitBtn', submitBtn);
console.log('nameDisplay', nameDisplay);

/* Get DOM Elements */

/* State */

/* Events */
submitBtn.addEventListener('click', () => {
    console.log('clicking the button');
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
