// Initializing tabs in featured section
const tabs = new Tabby('[data-tabs]');

// Initializing featured section swiper
const featuredSwiper = new Swiper('.featured-swiper', {
  direction: 'horizontal',
  loop: false,
  stopOnLastSlide: true,
  slidesPerView: 'auto',
  spaceBetween: 10,
  simulateTouch: true,
  grabCursor: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    900: {
      spaceBetween: 40,
    },
    530: {
      spaceBetween: 25
    }
  },
  autoHeight: true,
});