
const button = document.querySelector('#btn')
const searchInput = document.querySelector('input')
const form = document.querySelector('#form')
form.addEventListener('submit', (e) =>{

    let element ;
    e.preventDefault()
   
    
    console.log(searchInput.value);
    console.log(`Type: ${e.type}`);
} )
