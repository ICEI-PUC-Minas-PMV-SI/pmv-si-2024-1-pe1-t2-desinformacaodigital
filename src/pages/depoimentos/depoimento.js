const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    console.log(name);
    const message = document.querySelector('#message').value;
    console.log(message);
    console.log(form); 
});


// POPUP

const popupdep = document.querySelector("#pop");
const overlay = document.querySelector(".overlay");

function openP() {
    popupdep.classList.add("open");
    overlay.classList.add("open");
}

function closeP() {
    popupdep.classList.remove("open");
    overlay.classList.remove("open");
}