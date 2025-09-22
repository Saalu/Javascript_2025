let lastScrollTop = 0;
const navbar = document.querySelector(".header .navigation");

window.addEventListener("scroll", function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        console.log('Go Down');
        // Scroll down, hide the navbar
        navbar.classList.remove('active')
        navbar.style.top = "-8.5rem"; // Height of the navbar
    
    } else {
        console.log('Go Up');
        // Scroll up, show the navbar
        navbar.classList.add('active')
        navbar.style.top = "0";
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
