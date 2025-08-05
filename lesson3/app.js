//=====Let create an element
const navLink = document.createElement('a')
navLink.className = 'link-post'
navLink.href = '#'
navLink.appendChild(document.createTextNode('JavaScript'))

document.querySelector('#navigation').appendChild(navLink)

//=====Let replace the heading
const newHeading = document.createElement('h1')
newHeading.classList.add('home-heading')
newHeading.id = 'heading'
newHeading.appendChild(document.createTextNode('Portfolio Website Live'))
// 
const home = document.querySelector('#home')
const oldHeading = document.getElementById('heading')
home.replaceChild(newHeading, oldHeading)

// newHeading.classList.remove('home-heading')
// console.log(newHeading);


//Let remove an item
const section = document.getElementById('section')
const subChildren = document.querySelectorAll('#section .sub')
const sectionElements = document.querySelectorAll('section')
// remove - first method
subChildren[0].remove()
// remove - second method
// section.removeChild(subChildren[2])



console.log(subChildren);
// console.log(subChildren);


