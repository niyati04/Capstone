var slider = tns({
  container: ".customer_review_slider",
  items: 2,
  gutter: 20,
  slideBy: 1,
  controlsPosition: "bottom",
  navPosition: "bottom",
  mouseDrag: true,
  autoplay: true,
  autoplayButtonOutput: false,
  controlsContainer: "#custom-control",
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    768: {
      items: 2,
      nav: true
    },
    1440: {
      items: 2,
      nav: false

    }
  }
});



const menuBtn = document.querySelector(".menu_btn");
const menuContainer = document.querySelector(".navs_container");

let isMenuOpen = false; // Initially, the menu is closed

function toggleMenu() {
  const checkbox = document.getElementById("check");
  isMenuOpen = checkbox.checked;
  if (isMenuOpen) {
    menuContainer.style.left = "-100%"; // Close the menu
  } else {
    menuContainer.style.left = "0"; // Open the menu
  }
}

menuBtn.addEventListener("click", toggleMenu);

// swiper js

function initializeSwiper() {
  var swiper = new Swiper(".heroSlider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const nextButton = document.querySelector('.next-and-prev-buttons .next');
  const prevButton = document.querySelector('.next-and-prev-buttons .prev');

  nextButton.addEventListener('click', function () {
    swiper.slideNext();
  });

  prevButton.addEventListener('click', function () {
    swiper.slidePrev();
  });
}

// Call the function to initialize Swiper when the DOM is ready
document.addEventListener('DOMContentLoaded', initializeSwiper);


// customer review slider
