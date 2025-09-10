const client = {
    name: "Saalu",
    membership: "Premium",
    data:{
        name:"Stanley",
        lastName:"Banks", 
        living:{
            city:"Accra",
            country:"Ghana"
        },
    account: {
        memberSince: "2021-08-22",
        balance: 68600,
        position: "Design Engineer"
    }

    },
    regions: ['Tamale', 'Accra', 'Kumasi', 'Wa']

}

console.log(client);


// let {data:{clientLocation:{city,country}}} = client
// let {account: {balance,position}} = client
// let [, , a ,last] =regions
// console.log(a + '-' + last);

// regions.map(item => console.log(item))


// =========Destructuring with Func==========
function reservation(complete, options){
    options = options || {}
    let {paymentMethod,amount,days} = options

    console.log(options);
    
}

reservation(
    true,
    {
        paymentMethod: 'creditCard',
        amount: 3000
    }
)