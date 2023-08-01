/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const buttons = document.querySelectorAll('[data-slider-button]');
const navigationDots = document.querySelector('.navigation-dots');
let slideInterval;

function updateNavigationDots() {
  const slides = document.querySelectorAll('[data-slides] .slide');
  navigationDots.innerHTML = '';

  slides.forEach((slide) => {
    const dot = document.createElement('span');
    dot.classList.add('dots');
    if (slide.dataset.active) {
      dot.classList.add('active');
    }

    dot.addEventListener('click', () => {
      const activeSlide = document.querySelector('[data-slides] [data-active]');

      delete activeSlide.dataset.active;
      slide.dataset.active = true;
      updateNavigationDots();
    });

    navigationDots.appendChild(dot);
  });
}


function startSlideInterval() {
  slideInterval = setInterval(() => {
    const nextButton = document.querySelector('[data-slider-button="next"]');
    nextButton.click();
  }, 5000);
}

window.addEventListener('load', () => {
  updateNavigationDots();
  startSlideInterval(); // Call the function to start the slide interval
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLEdBQUc7QUFDSDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZXNsaWRlci8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2xpZGVyLWJ1dHRvbl0nKTtcbmNvbnN0IG5hdmlnYXRpb25Eb3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hdmlnYXRpb24tZG90cycpO1xubGV0IHNsaWRlSW50ZXJ2YWw7XG5cbmZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb25Eb3RzKCkge1xuICBjb25zdCBzbGlkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zbGlkZXNdIC5zbGlkZScpO1xuICBuYXZpZ2F0aW9uRG90cy5pbm5lckhUTUwgPSAnJztcblxuICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUpID0+IHtcbiAgICBjb25zdCBkb3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZG90LmNsYXNzTGlzdC5hZGQoJ2RvdHMnKTtcbiAgICBpZiAoc2xpZGUuZGF0YXNldC5hY3RpdmUpIHtcbiAgICAgIGRvdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG5cbiAgICBkb3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBhY3RpdmVTbGlkZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlc10gW2RhdGEtYWN0aXZlXScpO1xuXG4gICAgICBkZWxldGUgYWN0aXZlU2xpZGUuZGF0YXNldC5hY3RpdmU7XG4gICAgICBzbGlkZS5kYXRhc2V0LmFjdGl2ZSA9IHRydWU7XG4gICAgICB1cGRhdGVOYXZpZ2F0aW9uRG90cygpO1xuICAgIH0pO1xuXG4gICAgbmF2aWdhdGlvbkRvdHMuYXBwZW5kQ2hpbGQoZG90KTtcbiAgfSk7XG59XG5cblxuZnVuY3Rpb24gc3RhcnRTbGlkZUludGVydmFsKCkge1xuICBzbGlkZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zbGlkZXItYnV0dG9uPVwibmV4dFwiXScpO1xuICAgIG5leHRCdXR0b24uY2xpY2soKTtcbiAgfSwgNTAwMCk7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICB1cGRhdGVOYXZpZ2F0aW9uRG90cygpO1xuICBzdGFydFNsaWRlSW50ZXJ2YWwoKTsgLy8gQ2FsbCB0aGUgZnVuY3Rpb24gdG8gc3RhcnQgdGhlIHNsaWRlIGludGVydmFsXG59KTtcblxuYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IG9mZnNldCA9IGJ1dHRvbi5kYXRhc2V0LnNsaWRlckJ1dHRvbiA9PT0gJ25leHQnID8gMSA6IC0xO1xuICAgIGNvbnN0IHNsaWRlcyA9IGJ1dHRvblxuICAgICAgLmNsb3Nlc3QoJ1tkYXRhLXNsaWRlcl0nKSAvLyB0aGlzIGlzIHNvIHdlIGFyZSBhYmxlIHRvIGhhdmUgbXVsdGlwbGUgc2xpZGVycyBvbiBhIHBhZ2Ugd29ya2luZ1xuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXNsaWRlc10nKTtcblxuICAgIGNvbnN0IGFjdGl2ZVNsaWRlID0gc2xpZGVzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdGl2ZV0nKTtcbiAgICBsZXQgbmV3SW5kZXggPSBbLi4uc2xpZGVzLmNoaWxkcmVuXS5pbmRleE9mKGFjdGl2ZVNsaWRlKSArIG9mZnNldDtcbiAgICBpZiAobmV3SW5kZXggPCAwKSBuZXdJbmRleCA9IHNsaWRlcy5jaGlsZHJlbi5sZW5ndGggLSAxO1xuICAgIGlmIChuZXdJbmRleCA+PSBzbGlkZXMuY2hpbGRyZW4ubGVuZ3RoKSBuZXdJbmRleCA9IDA7XG5cbiAgICBzbGlkZXMuY2hpbGRyZW5bbmV3SW5kZXhdLmRhdGFzZXQuYWN0aXZlID0gdHJ1ZTtcbiAgICBkZWxldGUgYWN0aXZlU2xpZGUuZGF0YXNldC5hY3RpdmU7XG5cbiAgICB1cGRhdGVOYXZpZ2F0aW9uRG90cygpO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9