
document.getElementById('btn1').addEventListener('click', loadText)
document.getElementById('btn2').addEventListener('click', loadJSON)
document.getElementById('btn3').addEventListener('click', loadText)

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