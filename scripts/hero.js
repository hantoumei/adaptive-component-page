// Initializing hero section swiper
const heroSwiper = new Swiper('.hero-swiper', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  spaceBetween: 10,
  simulateTouch: true,
  grabCursor: true,
  mousewheel: {
    sensitivity: 1,
    eventsTarget: ".hero-swiper"
  },
  breakpoints: {
    530: {
      spaceBetween: 16
    }
  }
});

// Media query for changing search placeholder on small width
const searchInput = document.querySelector('.hero__search-wrapper .custom-input__input');
const searchBarMediaQueryList = window.matchMedia('(max-width: 450px)');

document.addEventListener('DOMContentLoaded', () => {
  if (searchBarMediaQueryList.matches) {
    searchInput.placeholder = 'Search locations!'
  } else {
    searchInput.placeholder = 'Search for the location you want!'
  }
})

searchBarMediaQueryList.addEventListener('change', event => {
  if (event.matches) {
    searchInput.placeholder = 'Search locations!'
  } else {
    searchInput.placeholder = 'Search for the location you want!'
  }
})