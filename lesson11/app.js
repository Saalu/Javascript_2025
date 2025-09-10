document.getElementById('btn1').addEventListener('click', loadText)
document.getElementById('btn2').addEventListener('click', loadJSON)
document.getElementById('btn3').addEventListener('click', loadAPI)

const result = document.getElementById('result')

function loadText(){
    fetch('data.txt')
    .then(res =>  {
        return res.text()
        console.log(res.text());
        
    }).then(data =>{
        console.log(data);
        result.innerHTML = data
    })
}

function loadJSON ()  {
    fetch('data.json')
    .then(res => res.json())
    .then(data => {   

        let html = ''

        data.forEach(element => {
            html += `<li> ${element.name}  - ${element.position}</li>`
        });
        result.innerHTML = html
    }).catch(err => console.log(err.message))

}

async function loadAPI () {
   const res = await fetch('https://picsum.photos/list')

    try {
      const data = res.json()
      .then(data => {
        const limitData = data.slice( 173, 178); 
        console.log(limitData)

        let html = '';
        limitData.forEach(element =>{

            html += `<li>Author: ${element.author}  <a href=${element.post_url}>View </a> </li>`
        })
        result.innerHTML = html
      })
      
    } catch (err) {
        console.log(err.message)    
    }
}