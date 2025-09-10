
document.getElementById('btn1').addEventListener('click', loadText)
document.getElementById('btn2').addEventListener('click', loadJSON)
document.getElementById('btn3').addEventListener('click', loadRest)

function loadText(){
    fetch('data.txt')
    .then(function(res){
        return res.text()  
    })
    .then((data)=>{
        document.querySelector('#result').innerHTML = data
    })
    .catch((err)=>{
        console.log(err);     
    })
}

function loadJSON(){
    fetch('data.json')
    .then(function(res){
        return res.json() 
    })
    .then((data)=>{
        console.log(data);
        let html = '';
        data.forEach(item => {
            html += `<li>${item.name} -- ${item.position} </li>`
        });
        document.querySelector('#result').innerHTML = html
    })
    .catch((err)=>{
        console.log(err);     
    })
}

// https://picsum.photos/list
function loadRest(){
    fetch('https://picsum.photos/list')
    .then((res) => res.json() )
    .then((data)=>{
        let html = '';
        const limitedData = data.slice(0, 10);
        console.log(limitedData);
        
        limitedData.forEach(image => {
            html += `
            <div>
            <li><a href =${image.author_url}>View Image</a> ${image.author}</li>
            <img src=${image.filename} alt="">
            </div>
            `
        });
        document.querySelector('#result').innerHTML = html
    })
    .catch((err)=>{
        console.log(err);     
    })
}
