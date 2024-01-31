/* counter of customizers */

const counterOfCustomizers = document.getElementById("counterOfCustomizers");

let counter = 2991;
counterOfCustomizers.textContent = counter;

let addCount = setInterval(() => {
  counter++;
  counterOfCustomizers.textContent = counter;
}, 2000);

setTimeout(() => {
  clearInterval(addCount);
}, 10000);

/* swiper sponsors */

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

/* turn on animation on defenitely sroll level */

const staticRed = document.getElementById("structStaticRed");

const purplePoligon = document.getElementById("purplePoligon");
const pinkPoligon = document.getElementById("pinkPoligon");
const orangePoligon = document.getElementById("orangePoligon");
const yellowPoligon = document.getElementById("yellowPoligon");

const benefitsBoard = document.getElementById("benefits__elem_image_board");
const benefitsBoardTrack = document.getElementById(
  "benefits__elem_image_boardTrack"
);
const benefitsBoardKeep = document.getElementById(
  "benefits__elem_image_boardKeep"
);

window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  if (scrollY >= 495) {
    staticRed.classList.add("animationStatic");
  } else {
    staticRed.classList.remove("animationStatic");
  }

  if (scrollY >= 4945) {
    purplePoligon.classList.add("animationPurplePoligon");
    pinkPoligon.classList.add("animationPinkPoligon");
    orangePoligon.classList.add("animationOrangePoligon");
    yellowPoligon.classList.add("animationYellowPoligon");
  }

  if (scrollY >= 1472) {
    benefitsBoard.classList.add("benefits__elem_image_board_showDashboard");
  } else {
    benefitsBoard.classList.remove("benefits__elem_image_board_showDashboard");
  }

  if (scrollY >= 2133) {
    benefitsBoardTrack.classList.add("benefits__elem_image_board_boardTrack");
  } else {
    benefitsBoardTrack.classList.remove(
      "benefits__elem_image_board_boardTrack"
    );
  }

  if (scrollY >= 2815) {
    benefitsBoardKeep.classList.add("benefits__elem_image_board_boardKeep");
  } else {
    benefitsBoardKeep.classList.remove("benefits__elem_image_board_boardKeep");
  }
});

/* close/open mobile nav */

navIconWrapper = document.querySelector(".nav_icon");
const navIcon = document.getElementById("burgerButton");
const overlay = document.querySelector(".overlay");
const navMenu = document.querySelector(".nav_mobile");

navIcon.addEventListener("click", function () {
  overlay.classList.toggle("showCloseMenu");
  overlay.classList.toggle("zIndex");
  navMenu.classList.toggle("showCloseMenu");
  navMenu.classList.toggle("zIndex");
  navIconWrapper.classList.toggle("nav_icon_active");
  document.querySelector("body").classList.toggle("scrollY");
});

/* copyright year */

const yearCR = document.getElementById("year");
let now = new Date();

yearCR.textContent = now.getFullYear();

/* clients  */

const clientOne = document.getElementById("clientOne");
const clientComOne = document.getElementById("clientOneComment");

clientOne.addEventListener("click", function () {
  clientComOne.classList.toggle("opasityOne");
});

const clientTwo = document.getElementById("clientTwo");
const clientComTwo = document.getElementById("clientTwoComment");

clientTwo.addEventListener("click", function () {
  clientComTwo.classList.toggle("opasityOne");
});

const clientThree = document.getElementById("clientThree");
const clientComThree = document.getElementById("clientThreeComment");

clientThree.addEventListener("click", function () {
  clientComThree.classList.toggle("opasityOne");
});

const clientFive = document.getElementById("clientFive");
const clientComFive = document.getElementById("clientFiveComment");

clientFive.addEventListener("click", function () {
  clientComFive.classList.toggle("opasityOne");
});
/* AOS Init */

AOS.init();
