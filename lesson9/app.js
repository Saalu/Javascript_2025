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

function reservation(complete, 
    {
     paymentMethod = 'cash',
     amount = 0,
     days = 0   
    } = {}
){
    // options = options || {}
    // let {paymentMethod,amount,days} = options

    console.log(paymentMethod, amount, days);
    
}

reservation(
    true,
    {
        // paymentMethod: 'creditCard',
        amount: 3000,
        days: 20
    }
)