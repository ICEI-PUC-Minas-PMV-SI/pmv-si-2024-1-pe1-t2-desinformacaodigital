const form = document.querySelector('#form'); 

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const name = document.querySelector('#name');
    console.log(name.value);
    const message = document.querySelector('#message');
    console.log(message.value);
console.log(form); 