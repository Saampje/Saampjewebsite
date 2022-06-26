//To toggle the burger menu
let navOpen = false;
const links = document.querySelector('.navLinks');
const burgerIcon = document.querySelector('.hamburger');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');

burgerIcon.addEventListener('click', () => {
    links.classList.toggle('open');
    burgerIcon.classList.toggle('clicked');
    
})
