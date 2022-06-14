const menuArrows = document.querySelectorAll('.menu__list li');
if (menuArrows.length > 0) {
  [...menuArrows].forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!item.contains(e.target)) {
        item.classList.remove('active');
      }
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
  burgerIcon.children[0].classList.toggle('fa-xmark');

  const shiftWidth = burgerMenuBody.clientWidth;
  if ([...burgerIcon.classList].includes('active')) {
    headerContainer.style.left = shiftWidth + 'px';
    headerContainer.style.transition = 'left 0.5s ease 0s';
  } else {
    headerContainer.style.left = 0 + 'px';
  }
});

const logoImg = document.querySelector('.header__logo');
const fromSearch = document.querySelector('.menu__form--mobile');
const menuIconSearch = document.querySelector('.menu__icon--mobile .menu__icon-search');
menuIconSearch.addEventListener('click', () => {
  console.log('click');
  fromSearch.classList.toggle('menu__form--active');
});

window.onresize = () => {
  if (window.innerWidth <= 500) {
    fromSearch.style.width = window.innerWidth + 'px';
  }
};

const mobileLists = document.querySelectorAll('.menu__item--mobile');
const mobileSearchField = document.querySelector('.menu__form--mobile .menu__search');
document.addEventListener('click', (e) => {
  if (!burgerIcon.contains(e.target) && !burgerMenuBody.contains(e.target)) {
    document.body.classList.remove('lock');
    burgerIcon.classList.remove('active');
    burgerMenuBody.classList.remove('active');
    burgerIcon.children[0].classList.remove('fa-xmark');
    headerContainer.style.left = 0 + 'px';
  }

  [...mobileLists][0].classList.add('active');
  if (!menuIconSearch.contains(e.target) && !mobileSearchField.contains(e.target)) {
    fromSearch.classList.remove('menu__form--active');
  }
});
