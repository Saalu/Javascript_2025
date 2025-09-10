// Callbacks

const countries = ['Ghana', 'Chad', 'Nigeria', 'Somalia', 'Liberia']
const result = document.getElementById('result')

function newCountry(country, callback){
    setTimeout(() => {
        countries.push(country)
        callback()
    }, 2000);
}

function displayCountry(){

    setTimeout(function(){
        let html = '';

        countries.forEach(country => {
            html += `<li>${country}</li>`
        });
        document.getElementById('result').innerHTML = html
    },1000)
    // result.appendChild = html
}

newCountry('Togo', displayCountry)

displayCountry()

