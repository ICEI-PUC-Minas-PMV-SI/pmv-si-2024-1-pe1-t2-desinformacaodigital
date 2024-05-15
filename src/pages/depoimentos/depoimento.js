const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    console.log(name);
    const message = document.querySelector('#message').value;
    console.log(message);
    console.log(form); 
});
