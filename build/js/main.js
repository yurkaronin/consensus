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

var swiper = new Swiper(".mySwiper-4", {
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

var swiper = new Swiper(".mySwiper-5", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 480px
    210: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1350: {
      slidesPerView: 5,
      spaceBetween: 45,
    }
  }
});

// вставка видео с ютуба
function findVideos() {
  let e = document.querySelectorAll(".video-block")
  for (let t = 0; t < e.length; t++) setupVideo(e[t])
}
function setupVideo(e) {
  let t = e.querySelector(".video-block__link"),
    r = e.querySelector(".video-block__media"),
    i = e.querySelector(".video-block__button"),
    o = parseMediaURL(r)
  e.addEventListener("click", () => {
    let r = createIframe(o)
    t.remove(), i.remove(), e.appendChild(r)
  }),
    t.removeAttribute("href"),
    e.classList.add("video-block--enabled")
}
function parseMediaURL(e) {
  return e.src.match(
    /https:\/\/i\.ytimg\.com\/vi\/([a-zA-Z0-9_-]+)\/maxresdefault\.jpg/i
  )[1]
}
function createIframe(e) {
  let t = document.createElement("iframe")
  return (
    t.setAttribute("allowfullscreen", ""),
    t.setAttribute("allow", "autoplay"),
    t.setAttribute("src", generateURL(e)),
    t.classList.add("video-block__media"),
    t
  )
}
function generateURL(e) {
  return "https://www.youtube.com/embed/" + e + "?rel=0&showinfo=0&autoplay=1"
}
findVideos();


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQodC70LDQudC00LXRgCDQsiDQv9C10YDQstC+0Lwg0Y3QutGA0LDQvdC1INCz0LvQsNCy0L3QvtC5INGB0YLRgNCw0L3QuNGG0YtcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyXCIsIHtcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICB9LFxuICBhdXRvSGVpZ2h0OiB0cnVlLFxuICAvKiBhdXRvcGxheToge1xuICAgIGRlbGF5OiAyNTAwLFxuICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgfSwgKi9cbn0pO1xuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlci0yXCIsIHtcbiAgZnJlZU1vZGU6IHRydWUsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMzIwcHhcbiAgICAyNTA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDBcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XG4gICAgNjAwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjQwcHhcbiAgICA5MDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDU1XG4gICAgfVxuICB9XG59KTtcblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXItM1wiLCB7XG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICAyMTA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDIwXG4gICAgfSxcbiAgICA5MDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDIwXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxuICAgIDEzNTA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDQ1LFxuICAgIH1cbiAgfVxufSk7XG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyLTRcIiwge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XG4gICAgMjEwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgIH0sXG4gICAgOTAwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjQwcHhcbiAgICAxMzUwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA0NSxcbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlci01XCIsIHtcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgIDIxMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICB9LFxuICAgIDkwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XG4gICAgMTM1MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICAgIHNwYWNlQmV0d2VlbjogNDUsXG4gICAgfVxuICB9XG59KTtcblxuLy8g0LLRgdGC0LDQstC60LAg0LLQuNC00LXQviDRgSDRjtGC0YPQsdCwXG5mdW5jdGlvbiBmaW5kVmlkZW9zKCkge1xuICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmlkZW8tYmxvY2tcIilcbiAgZm9yIChsZXQgdCA9IDA7IHQgPCBlLmxlbmd0aDsgdCsrKSBzZXR1cFZpZGVvKGVbdF0pXG59XG5mdW5jdGlvbiBzZXR1cFZpZGVvKGUpIHtcbiAgbGV0IHQgPSBlLnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tYmxvY2tfX2xpbmtcIiksXG4gICAgciA9IGUucXVlcnlTZWxlY3RvcihcIi52aWRlby1ibG9ja19fbWVkaWFcIiksXG4gICAgaSA9IGUucXVlcnlTZWxlY3RvcihcIi52aWRlby1ibG9ja19fYnV0dG9uXCIpLFxuICAgIG8gPSBwYXJzZU1lZGlhVVJMKHIpXG4gIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgciA9IGNyZWF0ZUlmcmFtZShvKVxuICAgIHQucmVtb3ZlKCksIGkucmVtb3ZlKCksIGUuYXBwZW5kQ2hpbGQocilcbiAgfSksXG4gICAgdC5yZW1vdmVBdHRyaWJ1dGUoXCJocmVmXCIpLFxuICAgIGUuY2xhc3NMaXN0LmFkZChcInZpZGVvLWJsb2NrLS1lbmFibGVkXCIpXG59XG5mdW5jdGlvbiBwYXJzZU1lZGlhVVJMKGUpIHtcbiAgcmV0dXJuIGUuc3JjLm1hdGNoKFxuICAgIC9odHRwczpcXC9cXC9pXFwueXRpbWdcXC5jb21cXC92aVxcLyhbYS16QS1aMC05Xy1dKylcXC9tYXhyZXNkZWZhdWx0XFwuanBnL2lcbiAgKVsxXVxufVxuZnVuY3Rpb24gY3JlYXRlSWZyYW1lKGUpIHtcbiAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpXG4gIHJldHVybiAoXG4gICAgdC5zZXRBdHRyaWJ1dGUoXCJhbGxvd2Z1bGxzY3JlZW5cIiwgXCJcIiksXG4gICAgdC5zZXRBdHRyaWJ1dGUoXCJhbGxvd1wiLCBcImF1dG9wbGF5XCIpLFxuICAgIHQuc2V0QXR0cmlidXRlKFwic3JjXCIsIGdlbmVyYXRlVVJMKGUpKSxcbiAgICB0LmNsYXNzTGlzdC5hZGQoXCJ2aWRlby1ibG9ja19fbWVkaWFcIiksXG4gICAgdFxuICApXG59XG5mdW5jdGlvbiBnZW5lcmF0ZVVSTChlKSB7XG4gIHJldHVybiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiICsgZSArIFwiP3JlbD0wJnNob3dpbmZvPTAmYXV0b3BsYXk9MVwiXG59XG5maW5kVmlkZW9zKCk7XG5cbiJdfQ==
