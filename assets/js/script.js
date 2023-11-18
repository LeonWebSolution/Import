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
  $(".eleven .item").click(function(){
      $(this).find(".text").slideToggle();
      $(".eleven .text").not($(this).find(".text")).slideUp();
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

$(document).ready(function(){
  $(".four .item").click(function(){
    $(".four .item").removeClass('active');
    $(this).addClass('active');
  });
});

if (!isMobile) {
  const spaceHolder = document.querySelector('.space-holder');
  const horizontal = document.querySelector('.horizontal');
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
  
  function calcDynamicHeight(ref) {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const objectWidth = ref.scrollWidth;
    return objectWidth - vw + vh + 0; // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
  }
  
  window.addEventListener('scroll', () => {
    const sticky = document.querySelector('.sticky');
    horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
  });
  
  window.addEventListener('resize', () => {
    spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
  });
}

$('.popup-back').click(function (e) {
  // Check if the clicked element is not a child of .popup
  if (!$(e.target).closest('.popup').length) {
      // If not a child of .popup, fade out the .popup-back
      $('.popup-back').fadeOut();
  }
});


$('.five .item').click(function (e) {
  $('.popup-back').fadeIn();
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 60,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
    draggable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    1000: {
      slidesPerView: 3,
    },
  },
});

$(document).ready(function() {
  var header = $("#header");
  var headerOffset = header.offset().top;

  $(window).scroll(function() {
    if (window.pageYOffset > headerOffset) {
      header.addClass("fixed");
      $('.main').css('margin-top', '8rem')
    } else {
      header.removeClass("fixed");
      $('.main').css('margin-top', '0')
    }
  });
});