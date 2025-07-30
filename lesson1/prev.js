const today = new Date()

// console.log(today)

// const birthday = new Date('April 11, 1988')
// console.log(birthday)

const score = 1000
if(score == '100'){
    console.log('Yes, they\'re the same'); 
}else{
    console.log('No, they\'re different');
}

// check odd or even

for (let i = 0; i < 11; i++){
    if(i % 2){
        console.log(`Odd Number: ${i}`);

    }else{
        console.log(`Even Number: ${i}`);
    }   
}

// ==================OBJECTS===========
const fruits = ['mango', 'orange', 'pineapple', 'apple']

fruits.forEach(function(juice, index){
    // console.log(`${[index]} : ${juice}`);  
})

const person = {
  name: "Kwame",
  age: 30,
  location: "Accra",
  occupation: "Developer",
  hobbies: ["coding", "cycling", "chess"]
};

// console.log(person.hobbies);
for (let key in person){
    console.log(`${person[key]}`);
    
}
