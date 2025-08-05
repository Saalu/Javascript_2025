
// const main = document.querySelector('#main')
// const section = document.querySelector('#main section:nth-child(2)')
// const section = document.querySelector('#main section:last-child')
const section = document.querySelectorAll('#main section:nth-child(even)')
// const firstsection = document.querySelector('#main section:first-child')
// const items = document.querySelectorAll('#main section')

// const oddItems = Array.from(items).filter((_, index) => index % 2 == 0);
// oddItems.forEach(item => item.style.color = 'orangered');

// const links = document.querySelectorAll('#navigation .link:nth-child(odd)')
// section.classList.add('active')
// firstsection.classList.add('test')
// console.log(links[2].style.color = 'blue');

// const navLinks = Array.from(links)
// navLinks.forEach((link) =>{
//     console.log(link.textContent);   
// })

const secondaryNav = document.querySelector('#secondary')
secondaryNav.style.backgroundColor = '#777'

const links = document.querySelectorAll('#secondary .link:nth-child(odd)')




section.forEach(function(odd){
    odd.style.backgroundColor = '#ccc'
    odd.style.color = 'orangered'
})


