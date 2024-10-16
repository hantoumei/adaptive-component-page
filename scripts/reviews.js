// Initializing reviews section swiper
const reviewSwiper = new Swiper('.review-swiper', {
  direction: 'horizontal',
  loop: false,
  stopOnLastSlide: true,
  slidesPerView: 1.1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
    el: '.swiper-pagination',
  },
  initialSlide: 1,
  centeredSlides: true,
  simulateTouch: true,
  grabCursor: true,
  autoHeight: true,
  breakpoints: {
    1800: {
      slidesPerView: 3,
    },
    1500: {
      slidesPerView: 2,
    },
    1250: {
      spaceBetween: 56,
      slidesPerView: 1.58,
    },
    700: {
      slidesPerView: 1.58,
    },
    500: {
      slidesPerView: 1.2,
    },
  }
});