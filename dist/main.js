/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZXNsaWRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2xpZGVyLWJ1dHRvbl0nKTtcblxuY29uc3QgbmF2aWdhdGlvbkRvdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2aWdhdGlvbi1kb3RzJyk7XG5cbmZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb25Eb3RzKCkge1xuICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zbGlkZXNdIC5zbGlkZScpO1xuICBuYXZpZ2F0aW9uRG90cy5pbm5lckhUTUwgPSAnJztcblxuICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGluZGV4KSA9PiB7XG4gICAgY29uc3QgZG90ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdkb3QnKTtcbiAgICBpZiAoc2xpZGUuZGF0YXNldC5hY3RpdmUpIHtcbiAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlc10gW2RhdGEtYWN0aXZlXScpO1xuICAgICAgaWYgKGFjdGl2ZVNsaWRlKSB7XG4gICAgICAgIGFjdGl2ZVNsaWRlLmRhdGFzZXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBzbGlkZS5kYXRhc2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB1cGRhdGVOYXZpZ2F0aW9uRG90cygpO1xuICAgIH0pO1xuXG4gICAgbmF2aWdhdGlvbkRvdHMuYXBwZW5kQ2hpbGQoZG90KTtcbiAgfSk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgdXBkYXRlTmF2aWdhdGlvbkRvdHMoKSk7XG5cbmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBvZmZzZXQgPSBidXR0b24uZGF0YXNldC5zbGlkZXJCdXR0b24gPT09ICduZXh0JyA/IDEgOiAtMTtcbiAgICBjb25zdCBzbGlkZXMgPSBidXR0b25cbiAgICAgIC5jbG9zZXN0KCdbZGF0YS1zbGlkZXJdJykgLy8gdGhpcyBpcyBzbyB3ZSBhcmUgYWJsZSB0byBoYXZlIG11bHRpcGxlIHNsaWRlcnMgb24gYSBwYWdlIHdvcmtpbmdcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZXNdJyk7XG5cbiAgICBjb25zdCBhY3RpdmVTbGlkZSA9IHNsaWRlcy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hY3RpdmVdJyk7XG4gICAgbGV0IG5ld0luZGV4ID0gWy4uLnNsaWRlcy5jaGlsZHJlbl0uaW5kZXhPZihhY3RpdmVTbGlkZSkgKyBvZmZzZXQ7XG4gICAgaWYgKG5ld0luZGV4IDwgMCkgbmV3SW5kZXggPSBzbGlkZXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICBpZiAobmV3SW5kZXggPj0gc2xpZGVzLmNoaWxkcmVuLmxlbmd0aCkgbmV3SW5kZXggPSAwO1xuXG4gICAgc2xpZGVzLmNoaWxkcmVuW25ld0luZGV4XS5kYXRhc2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgZGVsZXRlIGFjdGl2ZVNsaWRlLmRhdGFzZXQuYWN0aXZlO1xuXG4gICAgdXBkYXRlTmF2aWdhdGlvbkRvdHMoKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==