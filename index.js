const menuArrows = document.querySelectorAll('.menu__list li');
if (menuArrows.length > 0) {
  [...menuArrows].forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
}

const burgerIcon = document.querySelector('.menu__icon');
const burgerMenuBody = document.querySelector('.menu__body');
const headerContainer = document.querySelector('.header__container');
burgerIcon.addEventListener('click', () => {
  document.body.classList.toggle('lock');
  burgerIcon.classList.toggle('active');
  burgerMenuBody.classList.toggle('active');
  //   headerContainer.classList.toggle('shift');
  burgerIcon.children[0].classList.toggle('fa-xmark');

  const shiftWidth = burgerMenuBody.clientWidth;
  if ([...burgerIcon.classList].includes('active')) {
    headerContainer.style.left = shiftWidth + 'px';
    headerContainer.style.transition = 'left 0.5s ease 0s';
  } else {
    headerContainer.style.left = 0 + 'px';
  }
});
