/* Imports */
const nameInput = document.getElementById('name-input');
const submitBtn = document.getElementById('submit-button');
const nameDisplay = document.getElementById('name');

/* Get DOM Elements */

/* State */

/* Events */
submitBtn.addEventListener('click', () => {
    nameDisplay.textContent = nameInput.value;
    nameInput.value = '';
});

/* Display Functions */

// (don't forget to call any display functions you want to run on page load!)
