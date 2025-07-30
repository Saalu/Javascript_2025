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
