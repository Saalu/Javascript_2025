
const button = document.querySelector('#btn')
const form = document.querySelector('#form')
form.addEventListener('submit', (e) =>{

    let element ;
    element = button
    element = e.target.className
    element = e.target.innerText

    
    
    console.log(element);
} )
