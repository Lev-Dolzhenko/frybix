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

const staticRed = document.getElementById("structStaticRed")

window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  if (scrollY >= 495) {
    staticRed.classList.add('animationStatic')
  } else {
    staticRed.classList.remove('animationStatic')
  }
})

/* AOS Init */

AOS.init();
