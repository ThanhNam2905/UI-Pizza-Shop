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