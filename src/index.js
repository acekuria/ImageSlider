const buttons = document.querySelectorAll('[data-carousel-button]');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
    const slides = button.closest('[data-carousel]').querySelectorAll('.slide');
  })
})