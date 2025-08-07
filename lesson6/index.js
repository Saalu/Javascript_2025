const cities = ['Tamale', 'Techiman', 'Accra', 'Kumasi']

// Inline Callback --
// cities.forEach((c) =>{
//     console.log(c); 
// })


// callback with func declaration
const callback = (c) => {
    console.log(c);
}

// cities.forEach(callback)


// testing
const cities = ['Tamale', 'Techiman', 'Accra', 'Kumasi']


const displayCities = (c) => {
    setTimeout(function(){
        let html ='';
        cities.forEach((city) => html += `<li>${city}</li>`)
        document.querySelector('#items').innerHTML = html
    },1000)
}

displayCities()