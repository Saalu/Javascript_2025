// Event bubbling
const card = document.querySelector('.card')
     addCart = document.querySelector('.cart-btn')
     infoCard = document.querySelector('.info-card')

card.addEventListener('click',function (e) {
    e.stopPropagation()
    console.log('CARD');
    
})
addCart.addEventListener('click', function(e){
    e.stopPropagation()
    
    console.log(`Add to Cart `);
    
})
infoCard.addEventListener('click', (e) =>{
    e.stopPropagation()
    
    console.log('INFO-CARD');
    
})

 