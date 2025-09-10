
document.body.addEventListener('click', testFunc)


function testFunc (e){
    console.log(e.target);
    
    if(e.target.classList.contains('remove')){

        console.log(e.target.parentElement.remove());
        

    }else{
        console.log('NO');
        
    }
}