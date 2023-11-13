gsap.registerPlugin(ScrollTrigger);

// Проверка, является ли устройство мобильным
const isMobile = window.matchMedia("(max-width: 1000px)").matches;

if (!isMobile) {
  gsap.to("#scrollImage", {
    scrollTrigger: {
      trigger: ".five",
      start: "top 70%",
      end: "top 10%",
      scrub: true
    },
    width: "30%",
    x: "100%",
    y: "45%",
    duration: 1
  });

  var animationTimeline = gsap.timeline();

  animationTimeline.to(".back-main", {
    scrollTrigger: {
      trigger: ".parallax",
      start: "top 100%",
      end: "bottom center",
      scrub: true
    },
    width: "60%",
    duration: 1
  });

  animationTimeline.to(".iphone", {
    scrollTrigger: {
      trigger: ".parallax",
      start: "top 100%",
      end: "bottom center",
      scrub: true
    },
    width: "30%",
    duration: 1
  }, "-=1");

  animationTimeline.to(".hand", {
    scale: 2,
    scrollTrigger: {
      trigger: ".eig",
      start: "top 0%",
      end: "bottom center",
      markers: true,
      scrub: true
    },
    duration: 1
  }, "-=1");
}

$(document).ready(function(){
  $(".title").click(function(){
      $(this).next(".text").slideToggle();
      $(".text").not($(this).next(".text")).slideUp();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const el = document.querySelector(".left");
  const content = document.querySelector(".el");

  let elScrolled = false;

  window.addEventListener("scroll", function () {
      const scrollPos = window.scrollY;

      // Если блок el еще не проскроллен
      if (!elScrolled && scrollPos > el.clientHeight) {
          el.style.top = `-${el.clientHeight}px`;
          elScrolled = true;
      }

      // Если блок el уже проскроллен и страница продолжает прокручиваться
      if (elScrolled && scrollPos < el.clientHeight) {
          el.style.top = "0";
          elScrolled = false;
      }
  });
});