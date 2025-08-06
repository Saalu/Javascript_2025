
const shopingCart = document.querySelector('.testing')

shopingCart.addEventListener('click', function(e){

    if(e.target.classList.contains('remove')){
        e.target.parentElement.remove()
    }

    console.log(e.target);
    
})