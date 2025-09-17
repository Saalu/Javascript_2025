// document.getElementById('btn1').addEventListener('click', loadText)
// document.getElementById('btn2').addEventListener('click', loadJSON)
document.getElementById('close-form').addEventListener('click', toggleClass)
 
    function toggleClass(){
      const el =  document.getElementById('close-form')
      const form =  document.getElementById('form-container')

      form.style.display = "none"
    
    }


const output = document.getElementById('container')

const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')

btn1.addEventListener('click', function(){
    // console.log('Hello world');
    fetch('data.txt')
    .then((res) => res.text())
    .then(data => console.log(data))
    .catch(err => console.log(err.message))  
})

// btn2.addEventListener('click', function(){
//     console.log('Fetching JSON data...');
    
//     fetch('data.json')
//     .then(res => res.json() )
//     .then(data =>{ 
//         let html = '';
//         data.forEach(element => {
//             // console.log(element.position)
//             html += `<li class='output'>
//                     Name: ${element.name} - <a href='#'>${element.position}</a>  
//             </li>`
//         })

//         output.innerHTML = html
//     })
//     .catch(err => console.log(err.message))
// })

 btn2.addEventListener('click', async function(){
    console.log(' Refactoring the Fetching JSON data...');
    
    const res = await fetch('data.json')
    try {
       const data = res.json()
       .then( data => data)
    .then(data =>{ 
        let html = '';
        data.forEach(element => {
            // console.log(element.position)
            html += `
                <div class="wrapper">
                    <div id="result">
                        <div class="img-container">
                        <img src="sample.png" alt="img  here">
                        </div>
                    <div class="details">
                        <div class="vital">
                        <h3>${element.name}</h3>
                        <p>${element.title}</p>
                    </div>
                    <div class="add-on">
                        </div>
                        <li>Employee ID  : 12345678</li>
                        <li>Issue Date   : 01/01/2050</li>
                        <li>Valid until  : 01/01/2051</li>
                    </div>
                    </div>
                </div>
            `
        })

        output.innerHTML = html
    })
    } catch (err) {
        console.log(err.message)
    } 
   
})