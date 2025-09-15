// document.getElementById('btn1').addEventListener('click', loadText)
// document.getElementById('btn2').addEventListener('click', loadJSON)
// document.getElementById('btn3').addEventListener('click', loadAPI)

const output = document.getElementById('result')

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
            html += `<li class='output'>
                    Agent: ${element.name} - <a href='#'>${element.position}</a>  
            </li>`
        })

        output.innerHTML = html
    })
    } catch (err) {
        console.log(err.message)
    } 
   
})