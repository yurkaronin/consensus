// Слайдер лучшие выиграные дела - темный фон
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
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
    // clickable: true,
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
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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
// Отзывы о нас
var swiper = new Swiper(".mySwiper-4", {
  pagination: {
    el: ".swiper-pagination",
  },
  autoHeight: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyDQodC70LDQudC00LXRgCDQu9GD0YfRiNC40LUg0LLRi9C40LPRgNCw0L3Ri9C1INC00LXQu9CwIC0g0YLQtdC80L3Ri9C5INGE0L7QvVxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXJcIiwge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gIH0sXG4gIGF1dG9IZWlnaHQ6IHRydWUsXG4gIGxvb3A6IHRydWUsXG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDI1MDAsXG4gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICB9LFxufSk7XG5cbi8vINCh0LvQsNC50LTQtdGAINCf0YDQuNC80LXRgNGLINGA0LDQsdC+0YIg0Lgg0LLRi9C40LPRgNCw0L3QvdGL0YUg0LTQtdC7XG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlci0yXCIsIHtcbiAgZnJlZU1vZGU6IHRydWUsXG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICAvLyBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIGF1dG9IZWlnaHQ6IHRydWUsXG4gIGxvb3A6IHRydWUsXG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDI1MDAsXG4gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDMyMHB4XG4gICAgMjUwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAwXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgIDYwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMzBcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XG4gICAgOTAwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA1NVxuICAgIH1cbiAgfVxufSk7XG4vLyDQodC70LDQudC00LXRgCDQktC40LTQtdC+INGBINGO0YLRg9Cx0LBcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyLTNcIiwge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gICAgY2xpY2thYmxlOiB0cnVlLFxuICB9LFxuICBsb29wOiB0cnVlLFxuICBhdXRvcGxheToge1xuICAgIGRlbGF5OiAyNTAwLFxuICAgIGRpc2FibGVPbkludGVyYWN0aW9uOiBmYWxzZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgIDIxMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICB9LFxuICAgIDkwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XG4gICAgMTM1MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNDUsXG4gICAgfVxuICB9XG59KTtcbi8vINCe0YLQt9GL0LLRiyDQviDQvdCw0YFcbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyLTRcIiwge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gIH0sXG4gIGF1dG9IZWlnaHQ6IHRydWUsXG4gIGxvb3A6IHRydWUsXG4gIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDI1MDAsXG4gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICB9LFxuICBicmVha3BvaW50czoge1xuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDQ4MHB4XG4gICAgMjEwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAxLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgIH0sXG4gICAgOTAwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiAyMFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNjQwcHhcbiAgICAxMzUwOiB7XG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgc3BhY2VCZXR3ZWVuOiA3MCxcbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlci01XCIsIHtcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgICBhdXRvSGVpZ2h0OiB0cnVlLFxuICAgIGxvb3A6IHRydWUsXG4gICAgYXV0b3BsYXk6IHtcbiAgICAgIGRlbGF5OiAyNTAwLFxuICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICAgIH0sXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICAyMTA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDIwXG4gICAgfSxcbiAgICA5MDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgICBzcGFjZUJldHdlZW46IDIwXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxuICAgIDEzNTA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDUsXG4gICAgICBzcGFjZUJldHdlZW46IDQ1LFxuICAgIH1cbiAgfVxufSk7XG5cbi8vINCy0YHRgtCw0LLQutCwINCy0LjQtNC10L4g0YEg0Y7RgtGD0LHQsFxuZnVuY3Rpb24gZmluZFZpZGVvcygpIHtcbiAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpZGVvLWJsb2NrXCIpXG4gIGZvciAobGV0IHQgPSAwOyB0IDwgZS5sZW5ndGg7IHQrKykgc2V0dXBWaWRlbyhlW3RdKVxufVxuZnVuY3Rpb24gc2V0dXBWaWRlbyhlKSB7XG4gIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvLWJsb2NrX19saW5rXCIpLFxuICAgIHIgPSBlLnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tYmxvY2tfX21lZGlhXCIpLFxuICAgIGkgPSBlLnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tYmxvY2tfX2J1dHRvblwiKSxcbiAgICBvID0gcGFyc2VNZWRpYVVSTChyKVxuICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHIgPSBjcmVhdGVJZnJhbWUobylcbiAgICB0LnJlbW92ZSgpLCBpLnJlbW92ZSgpLCBlLmFwcGVuZENoaWxkKHIpXG4gIH0pLFxuICAgIHQucmVtb3ZlQXR0cmlidXRlKFwiaHJlZlwiKSxcbiAgICBlLmNsYXNzTGlzdC5hZGQoXCJ2aWRlby1ibG9jay0tZW5hYmxlZFwiKVxufVxuZnVuY3Rpb24gcGFyc2VNZWRpYVVSTChlKSB7XG4gIHJldHVybiBlLnNyYy5tYXRjaChcbiAgICAvaHR0cHM6XFwvXFwvaVxcLnl0aW1nXFwuY29tXFwvdmlcXC8oW2EtekEtWjAtOV8tXSspXFwvbWF4cmVzZGVmYXVsdFxcLmpwZy9pXG4gIClbMV1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZShlKSB7XG4gIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKVxuICByZXR1cm4gKFxuICAgIHQuc2V0QXR0cmlidXRlKFwiYWxsb3dmdWxsc2NyZWVuXCIsIFwiXCIpLFxuICAgIHQuc2V0QXR0cmlidXRlKFwiYWxsb3dcIiwgXCJhdXRvcGxheVwiKSxcbiAgICB0LnNldEF0dHJpYnV0ZShcInNyY1wiLCBnZW5lcmF0ZVVSTChlKSksXG4gICAgdC5jbGFzc0xpc3QuYWRkKFwidmlkZW8tYmxvY2tfX21lZGlhXCIpLFxuICAgIHRcbiAgKVxufVxuZnVuY3Rpb24gZ2VuZXJhdGVVUkwoZSkge1xuICByZXR1cm4gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIiArIGUgKyBcIj9yZWw9MCZzaG93aW5mbz0wJmF1dG9wbGF5PTFcIlxufVxuZmluZFZpZGVvcygpO1xuXG4iXX0=
