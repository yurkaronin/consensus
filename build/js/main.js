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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vINCh0LvQsNC50LTQtdGAINCyINC/0LXRgNCy0L7QvCDRjdC60YDQsNC90LUg0LPQu9Cw0LLQvdC+0Lkg0YHRgtGA0LDQvdC40YbRi1xudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXJcIiwge1xuICBwYWdpbmF0aW9uOiB7XG4gICAgZWw6IFwiLnN3aXBlci1wYWdpbmF0aW9uXCIsXG4gIH0sXG4gIGF1dG9IZWlnaHQ6IHRydWUsXG4gIC8qIGF1dG9wbGF5OiB7XG4gICAgZGVsYXk6IDI1MDAsXG4gICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxuICB9LCAqL1xufSk7XG5cbnZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKFwiLm15U3dpcGVyLTJcIiwge1xuICBmcmVlTW9kZTogdHJ1ZSxcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAzMjBweFxuICAgIDI1MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMFxuICAgIH0sXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICA2MDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDMwXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxuICAgIDkwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMyxcbiAgICAgIHNwYWNlQmV0d2VlbjogNTVcbiAgICB9XG4gIH1cbn0pO1xuXG52YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcIi5teVN3aXBlci0zXCIsIHtcbiAgcGFnaW5hdGlvbjoge1xuICAgIGVsOiBcIi5zd2lwZXItcGFnaW5hdGlvblwiLFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcbiAgfSxcbiAgYnJlYWtwb2ludHM6IHtcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA0ODBweFxuICAgIDIxMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICB9LFxuICAgIDkwMDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogMjBcbiAgICB9LFxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDY0MHB4XG4gICAgMTM1MDoge1xuICAgICAgc2xpZGVzUGVyVmlldzogMixcbiAgICAgIHNwYWNlQmV0d2VlbjogNDUsXG4gICAgfVxuICB9XG59KTtcblxudmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXCIubXlTd2lwZXItNFwiLCB7XG4gIHBhZ2luYXRpb246IHtcbiAgICBlbDogXCIuc3dpcGVyLXBhZ2luYXRpb25cIixcbiAgICBjbGlja2FibGU6IHRydWUsXG4gIH0sXG4gIGJyZWFrcG9pbnRzOiB7XG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gNDgwcHhcbiAgICAyMTA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICBzcGFjZUJldHdlZW46IDIwXG4gICAgfSxcbiAgICA5MDA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDIwXG4gICAgfSxcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSA2NDBweFxuICAgIDEzNTA6IHtcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXG4gICAgICBzcGFjZUJldHdlZW46IDQ1LFxuICAgIH1cbiAgfVxufSk7XG5cbi8vINCy0YHRgtCw0LLQutCwINCy0LjQtNC10L4g0YEg0Y7RgtGD0LHQsFxuZnVuY3Rpb24gZmluZFZpZGVvcygpIHtcbiAgbGV0IGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnZpZGVvLWJsb2NrXCIpXG4gIGZvciAobGV0IHQgPSAwOyB0IDwgZS5sZW5ndGg7IHQrKykgc2V0dXBWaWRlbyhlW3RdKVxufVxuZnVuY3Rpb24gc2V0dXBWaWRlbyhlKSB7XG4gIGxldCB0ID0gZS5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvLWJsb2NrX19saW5rXCIpLFxuICAgIHIgPSBlLnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tYmxvY2tfX21lZGlhXCIpLFxuICAgIGkgPSBlLnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW8tYmxvY2tfX2J1dHRvblwiKSxcbiAgICBvID0gcGFyc2VNZWRpYVVSTChyKVxuICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbGV0IHIgPSBjcmVhdGVJZnJhbWUobylcbiAgICB0LnJlbW92ZSgpLCBpLnJlbW92ZSgpLCBlLmFwcGVuZENoaWxkKHIpXG4gIH0pLFxuICAgIHQucmVtb3ZlQXR0cmlidXRlKFwiaHJlZlwiKSxcbiAgICBlLmNsYXNzTGlzdC5hZGQoXCJ2aWRlby1ibG9jay0tZW5hYmxlZFwiKVxufVxuZnVuY3Rpb24gcGFyc2VNZWRpYVVSTChlKSB7XG4gIHJldHVybiBlLnNyYy5tYXRjaChcbiAgICAvaHR0cHM6XFwvXFwvaVxcLnl0aW1nXFwuY29tXFwvdmlcXC8oW2EtekEtWjAtOV8tXSspXFwvbWF4cmVzZGVmYXVsdFxcLmpwZy9pXG4gIClbMV1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUlmcmFtZShlKSB7XG4gIGxldCB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlmcmFtZVwiKVxuICByZXR1cm4gKFxuICAgIHQuc2V0QXR0cmlidXRlKFwiYWxsb3dmdWxsc2NyZWVuXCIsIFwiXCIpLFxuICAgIHQuc2V0QXR0cmlidXRlKFwiYWxsb3dcIiwgXCJhdXRvcGxheVwiKSxcbiAgICB0LnNldEF0dHJpYnV0ZShcInNyY1wiLCBnZW5lcmF0ZVVSTChlKSksXG4gICAgdC5jbGFzc0xpc3QuYWRkKFwidmlkZW8tYmxvY2tfX21lZGlhXCIpLFxuICAgIHRcbiAgKVxufVxuZnVuY3Rpb24gZ2VuZXJhdGVVUkwoZSkge1xuICByZXR1cm4gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9cIiArIGUgKyBcIj9yZWw9MCZzaG93aW5mbz0wJmF1dG9wbGF5PTFcIlxufVxuZmluZFZpZGVvcygpO1xuXG4iXX0=
