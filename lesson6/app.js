const applyDiscount = new Promise(function(resolve, reject){
    const discount = true

    if(discount){
        resolve('Discount Applied')
    }else{
        reject('Discount failed...')
    }
})

applyDiscount.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
    
})