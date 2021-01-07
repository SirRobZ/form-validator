const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');




// Process Form
function processFormData(e) {
    console.log(e);
}



//Event Listener
form.addEventListener('submit', processFormData);