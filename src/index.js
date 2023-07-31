const buttons = document.querySelectorAll('[data-slider-button]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const offset = button.dataset.sliderButton === 'next' ? 1 : -1;
    const slides = button.closest('[data-slider]').querySelectorAll('.slide');
  });
});
