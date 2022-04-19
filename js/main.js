// Navbar: Menu Btn
let menuBtn = document.querySelector('#menu-btn');
let navbarMenuEle = document.querySelector('.navbar');

menuBtn.onclick = () => {
    navbarMenuEle.classList.toggle('active');
    menuBtn.classList.toggle('fa-xmark');
}

// User Account
let accountBtnEle = document.querySelector('#account-btn');
let userAccountEle = document.querySelector('.user-account');
let closeAccountBtnEle = document.querySelector('#close-account');

accountBtnEle.onclick = () => {
    userAccountEle.classList.add('active');
}

closeAccountBtnEle.onclick = () => {
    userAccountEle.classList.remove('active');
}

// My Orders
let orderBtnEle = document.querySelector('#order-btn');
let myOrdersEle = document.querySelector('.my-orders');
let closeOrdersBtnEle = document.querySelector('#close-orders');

orderBtnEle.onclick = () => {
    myOrdersEle.classList.add('active');
}

closeOrdersBtnEle.onclick = () => {
    myOrdersEle.classList.remove('active');
}

// Shopping Cart
let cartBtnEle = document.querySelector('#cart-btn');
let shoppingCartEle = document.querySelector('.shopping-cart');
let closeCartBtnEle = document.querySelector('#close-cart');

cartBtnEle.onclick = () => {
    shoppingCartEle.classList.add('active');
}

closeCartBtnEle.onclick = () => {
    shoppingCartEle.classList.remove('active');
}

// OnScroll
window.onscroll = () => {
    navbarMenuEle.classList.remove('active');
}


// Home Slides
let slides = document.querySelectorAll('.home-bg .home .slide-container .slide');
let index = 0;

const nextSlide = () => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

const prevSlide = () => {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// FAQ Accordion
let accordionList = document.querySelectorAll('.faq .accordion-container .accordion-box');

accordionList.forEach(item => {
    item.onclick = () => {
        accordionList.forEach(itemRemove => itemRemove.classList.remove('active'));
        item.classList.toggle('active');
    }
})