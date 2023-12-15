//hamburger menu
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    menuToggle.addEventListener("click", function () {
        mainNav.classList.toggle("show");
        header.classList.toggle("unset");
    });
});

//carousel
let currentIndex = 0;

function showSlide(index) {
    const carouselContent = document.querySelector('.carousel-content');
    const newPosition = -index * getItemWidth();
    carouselContent.style.transform = `translateX(${newPosition}px)`;
}

function getItemWidth() {
    const carousel = document.querySelector('.carousel');
    const carouselItem = document.querySelector('.carousel-item');
    const marginRight = parseInt(getComputedStyle(carouselItem).marginRight, 10);
    return (carousel.clientWidth - marginRight) / Math.floor((carousel.clientWidth - marginRight) / carouselItem.clientWidth);
}

function nextSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    const totalSlides = document.querySelectorAll('.carousel-item').length;
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

window.addEventListener('resize', () => {
    showSlide(currentIndex);
});

showSlide(currentIndex);

//calculator
const typesPrice = {
    "pipe-round" : 150,
    "pipe-square" : 170,
    "circle": 340,
    "square": 350
}

const sizesPrice = {
    "44x4": 1,
    "48x6": 1.5,
    "82x7": 2.5,
    "104x8": 3
}


const calculator = document.getElementById("calculator-wrapper");
calculator.addEventListener("change", function () {
    const type = document.getElementById("type").value;
    const size = document.getElementById("size").value;
    const length = document.getElementById("length").value;
    const amount = document.getElementById("amount").value;

    const priceSpan = document.getElementById("price");
    priceSpan.innerHTML = (typesPrice[type] * sizesPrice[size] * length * amount).toFixed(2);
});
