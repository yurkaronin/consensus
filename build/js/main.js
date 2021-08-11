// Слайдер лучшие выиграные дела - темный фон
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoHeight: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

// Слайдер Примеры работ и выигранных дел
var swiper = new Swiper(".mySwiper-2", {
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoHeight: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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
// Слайдер Видео с ютуба
var swiper = new Swiper(".mySwiper-3", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
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
// Отзывы о нас
var swiper = new Swiper(".mySwiper-4", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoHeight: true,
  loop: true,
  /* autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  }, */
  breakpoints: {
    // when window width is >= 480px
    210: {
      slidesPerView: 1,
      spaceBetween: 0
    },
    // when window width is >= 640px
    970: {
      slidesPerView: 2,
      spaceBetween: 70,
    }
  }
});

var swiper = new Swiper(".mySwiper-5", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    autoHeight: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQodC70LDQudC00LXRgCDQu9GD0YfRiNC40LUg0LLRi9C40LPRgNCw0L3Ri9C1INC00LXQu9CwIC0g0YLQtdC80L3Ri9C5INGE0L7QvVxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXJcIiwge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICBhdXRvSGVpZ2h0OiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiAyNTAwLFxuICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgfSxcbn0pO1xuXG4vLyDQodC70LDQudC00LXRgCDQn9GA0LjQvNC10YDRiyDRgNCw0LHQvtGCINC4INCy0YvQuNCz0YDQsNC90L3Ri9GFINC00LXQu1xudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXItMlwiLCB7XG4gIGZyZWVNb2RlOiB0cnVlLFxuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICBhdXRvSGVpZ2h0OiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiAyNTAwLFxuICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgIDI1MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICA2MDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDMwXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxuICAgIDkwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogNTVcbiAgICB9XG4gIH1cbn0pO1xuLy8g0KHQu9Cw0LnQtNC10YAg0JLQuNC00LXQviDRgSDRjtGC0YPQsdCwXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlci0zXCIsIHtcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgbG9vcDogdHJ1ZSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgIDIxMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICB9LFxuICAgIDkwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XG4gICAgMTM1MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNDUsXG4gICAgfVxuICB9XG59KTtcbi8vINCe0YLQt9GL0LLRiyDQviDQvdCw0YFcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyLTRcIiwge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICBhdXRvSGVpZ2h0OiB0cnVlLFxuICBsb29wOiB0cnVlLFxuICAvKiBhdXRvcGxheToge1xuICAgIGRlbGF5OiAyNTAwLFxuICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgfSwgKi9cbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgIDIxMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjQwcHhcbiAgICA5NzA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDcwLFxuICAgIH1cbiAgfVxufSk7XG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyLTVcIiwge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBhdXRvcGxheToge1xuICAgICAgZGVsYXk6IDI1MDAsXG4gICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXG4gICAgfSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgIDIxMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICB9LFxuICAgIDkwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XG4gICAgMTM1MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogNSxcbiAgICAgIHNwYWNlQmV0d2VlbjogNDUsXG4gICAgfVxuICB9XG59KTtcblxuLy8g0LLRgdGC0LDQstC60LAg0LLQuNC00LXQviDRgSDRjtGC0YPQsdCwXG5mdW5jdGlvbiBmaW5kVmlkZW9zKCkge1xuICBsZXQgZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudmlkZW8tYmxvY2tcIilcbiAgZm9yIChsZXQgdCA9IDA7IHQgPCBlLmxlbmd0aDsgdCsrKSBzZXR1cFZpZGVvKGVbdF0pXG59XG5mdW5jdGlvbiBzZXR1cFZpZGVvKGUpIHtcbiAgbGV0IHQgPSBlLnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tYmxvY2tfX2xpbmtcIiksXG4gICAgciA9IGUucXVlcnlTZWxlY3RvcihcIi52aWRlby1ibG9ja19fbWVkaWFcIiksXG4gICAgaSA9IGUucXVlcnlTZWxlY3RvcihcIi52aWRlby1ibG9ja19fYnV0dG9uXCIpLFxuICAgIG8gPSBwYXJzZU1lZGlhVVJMKHIpXG4gIGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBsZXQgciA9IGNyZWF0ZUlmcmFtZShvKVxuICAgIHQucmVtb3ZlKCksIGkucmVtb3ZlKCksIGUuYXBwZW5kQ2hpbGQocilcbiAgfSksXG4gICAgdC5yZW1vdmVBdHRyaWJ1dGUoXCJocmVmXCIpLFxuICAgIGUuY2xhc3NMaXN0LmFkZChcInZpZGVvLWJsb2NrLS1lbmFibGVkXCIpXG59XG5mdW5jdGlvbiBwYXJzZU1lZGlhVVJMKGUpIHtcbiAgcmV0dXJuIGUuc3JjLm1hdGNoKFxuICAgIC9odHRwczpcXC9cXC9pXFwueXRpbWdcXC5jb21cXC92aVxcLyhbYS16QS1aMC05Xy1dKylcXC9tYXhyZXNkZWZhdWx0XFwuanBnL2lcbiAgKVsxXVxufVxuZnVuY3Rpb24gY3JlYXRlSWZyYW1lKGUpIHtcbiAgbGV0IHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpXG4gIHJldHVybiAoXG4gICAgdC5zZXRBdHRyaWJ1dGUoXCJhbGxvd2Z1bGxzY3JlZW5cIiwgXCJcIiksXG4gICAgdC5zZXRBdHRyaWJ1dGUoXCJhbGxvd1wiLCBcImF1dG9wbGF5XCIpLFxuICAgIHQuc2V0QXR0cmlidXRlKFwic3JjXCIsIGdlbmVyYXRlVVJMKGUpKSxcbiAgICB0LmNsYXNzTGlzdC5hZGQoXCJ2aWRlby1ibG9ja19fbWVkaWFcIiksXG4gICAgdFxuICApXG59XG5mdW5jdGlvbiBnZW5lcmF0ZVVSTChlKSB7XG4gIHJldHVybiBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL1wiICsgZSArIFwiP3JlbD0wJnNob3dpbmZvPTAmYXV0b3BsYXk9MVwiXG59XG5maW5kVmlkZW9zKCk7XG5cbiJdfQ==
