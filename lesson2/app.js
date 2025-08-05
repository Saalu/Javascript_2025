
try {
    something()
} catch (err) {
    console.log(err.message);
    
}


function getClient(){
    console.log('Downloading......');

    setTimeout(()=>{
        console.log('Complete...');
        
    }, 3000)
    
}

getClient()