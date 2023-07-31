const buttons = document.querySelectorAll('[data-slider-button]');

const navigationDots = document.querySelector('.navigation-dots');

function updateNavigationDots() {
  const slides = document.querySelectorAll('[data-slides] .slide');
  navigationDots.innerHTML = '';

  slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (slide.dataset.active) {
      dot.classList.add('active');
    }

    dot.addEventListener('click', () => {
      const activeSlide = document.querySelector('[data-slides] [data-active]');
      if (activeSlide) {
        activeSlide.dataset.active = false;
      }
      slide.dataset.active = true;
      updateNavigationDots();
    });

    navigationDots.appendChild(dot);
  });
}

window.addEventListener('load', updateNavigationDots());

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.sliderButton === 'next' ? 1 : -1;
    const slides = button
      .closest('[data-slider]') // this is so we are able to have multiple sliders on a page working
      .querySelector('[data-slides]');

    const activeSlide = slides.querySelector('[data-active]');
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;

    updateNavigationDots();
  });
});
