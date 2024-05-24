const form = document.querySelector('form');

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const name = document.querySelector('#nome').value;
    console.log(name);
    const message = document.querySelector('#telefone').value;
    console.log(message);
    console.log(form); 
});


// POPUP

const popupdep = document.querySelector("#pop");
const overlay = document.querySelector(".overlay");

function openP() {
    popupdep.classList.add("open");
}

function closeP() {
    popupdep.classList.remove("open");
}