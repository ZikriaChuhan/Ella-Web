const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');

// Define the number of slides to show and the number to scroll at a time
const slidesToShow = 5;
const slidesToScroll = 1;
let currentIndex = 0;

const updateCarouselPosition = () => {
    const slideWidth = carouselSlides[0].clientWidth + parseInt(window.getComputedStyle(carouselSlides[0]).marginRight); // Include gap between slides
    const offset = slideWidth * currentIndex;
    carouselContainer.style.transform = `translateX(-${offset}px)`;
};

nextButton.addEventListener('click', () => {
    if (currentIndex < carouselSlides.length - slidesToShow) {
        currentIndex += slidesToScroll;
    } else {
        currentIndex = 0; // Loop back to the first slide
    }
    updateCarouselPosition();
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= slidesToScroll;
    } else {
        currentIndex = carouselSlides.length - slidesToShow; // Loop to the last slide
    }
    updateCarouselPosition();
});

// Initialize the carousel position
updateCarouselPosition();



