// Navbar: Menu Btn
let menuBtn = document.querySelector('#menu-btn');
let navbarMenuEle = document.querySelector('.navbar');

menuBtn.onclick = () => {
    navbarMenuEle.classList.toggle('active');
    menuBtn.classList.toggle('fa-xmark');
}

window.onscroll = () => {
    navbarMenuEle.classList.remove('active');
}