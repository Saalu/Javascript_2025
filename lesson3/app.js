
const navLink = document.createElement('a')
navLink.className = 'link-post'
navLink.href = '#'
navLink.appendChild(document.createTextNode('JavaScript'))

document.querySelector('#navigation').appendChild(navLink)

// Let replace the heading
const newHeading = document.createElement('h1')
newHeading.classList.add('home-heading')
newHeading.id = 'heading'
newHeading.appendChild(document.createTextNode('Portfolio Website Live'))


const home = document.querySelector('#home')
const oldHeading = document.getElementById('heading')

home.replaceChild(newHeading, oldHeading)


console.log(newHeading);

