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
  slidesPerView: 3,
  spaceBetween: 55,
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQodC70LDQudC00LXRgCDQsiDQv9C10YDQstC+0Lwg0Y3QutGA0LDQvdC1INCz0LvQsNCy0L3QvtC5INGB0YLRgNCw0L3QuNGG0YtcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyXCIsIHtcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICB9LFxuICBhdXRvSGVpZ2h0OiB0cnVlLFxuICAvKiBhdXRvcGxheToge1xuICAgIGRlbGF5OiAyNTAwLFxuICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgfSwgKi9cbn0pO1xuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlci0yXCIsIHtcbiAgc2xpZGVzUGVyVmlldzogMyxcbiAgc3BhY2VCZXR3ZWVuOiA1NSxcbiAgZnJlZU1vZGU6IHRydWUsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAyNTA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDBcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XG4gICAgNjAwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjQwcHhcbiAgICA5MDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDU1XG4gICAgfVxuICB9XG59KTtcbiJdfQ==
