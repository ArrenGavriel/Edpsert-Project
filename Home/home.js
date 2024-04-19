const myCarouselElement = document.querySelector('#my-carousel');

const carousel = new bootstrap.carousel(myCarouselElement, {
    interval: 2000,
    touch: false
})