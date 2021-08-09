// Слайдер в первом экране главной страницы
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoHeight: true,
  /* autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
});

var swiper = new Swiper(".mySwiper-2", {
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    250: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 480px
    600: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    900: {
      slidesPerView: 3,
      spaceBetween: 55
    }
  }
});

var swiper = new Swiper(".mySwiper-3", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 480px
    210: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1350: {
      slidesPerView: 2,
      spaceBetween: 45,
    }
  }
});
