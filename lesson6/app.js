const storageContent = localStorage.getItem('names')

let names;
if(storageContent === null){
    names = []
}else{
    names = JSON.parse(storageContent)
}


names.push('Saalu')
names.push('Walter')
names.push('Brown')


localStorage.setItem('names', JSON.stringify(names))