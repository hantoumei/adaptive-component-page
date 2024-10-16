// Function for stopping video on modal closing or changing slides
const stopVideo = function (element) {
  const iframe = element.querySelector('iframe');
  const video = element.querySelector('video');
  if (iframe) {
    const iframeSrc = iframe.src;
    iframe.src = iframeSrc;
  }
  if (video) {
    video.pause();
  }
};

// Initializing modal window swiper
const modalSwiper = new Swiper('.modal-swiper', {
  direction: 'horizontal',
  loop: false,
  stopOnLastSlide: true,
  slidesPerView: 1,
  spaceBetween: 10,
  hashNavigation: {
    watchState: true
  },
  navigation: {
    nextEl: '.swiper-button-next-modal',
    prevEl: '.swiper-button-prev-modal'
  },
  on: {
    slideChange: function () {
      const previousSlide = this.slides[this.previousIndex];
      stopVideo(previousSlide);
    },
  },
  keyboard: {
    onlyInViewport: true
  },
  autoHeight: true
});


const links = document.querySelectorAll('.gallery__photo-link');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal__close-btn');

// Function for removing hash from url on modal close
function removeHash() {
  var scrollV, scrollH, loc = window.location;
  if ("pushState" in history)
    history.pushState("", document.title, loc.pathname + loc.search);
  else {
    scrollV = document.body.scrollTop;
    scrollH = document.body.scrollLeft;

    loc.hash = "";

    document.body.scrollTop = scrollV;
    document.body.scrollLeft = scrollH;
  }
}

// Listener for opening modal
links.forEach(link => {
  link.addEventListener('click', function (e) {
    modal.classList.add('modal--active');
  })
})

// Listeners for closing modal
closeBtn.addEventListener('click', function () {
  removeHash();
  const activeSlide = modalSwiper.slides[modalSwiper.activeIndex];
  stopVideo(activeSlide);
  modal.classList.remove('modal--active');
})

document.addEventListener('keydown', (event) => {
  if (event.key === "Escape") {
    removeHash();
    const activeSlide = modalSwiper.slides[modalSwiper.activeIndex];
    stopVideo(activeSlide);
    modal.classList.remove('modal--active');
  }
})