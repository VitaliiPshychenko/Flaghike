const arrowLink = document.querySelector('.arrow-outer');
const serviceList = document.querySelector('.service-list');
const header = document.querySelector('.intro');
const upButton = document.querySelector('.up-button');
let elem = header.getBoundingClientRect().height;

const scrollBanner = () => {
  const scrollPos = window.scrollY;

  if (scrollPos <= elem) {
    header.style.transform = `translateY(-${scrollPos / 3}'px')`;
    header.style.opacity = 1 - scrollPos / elem;
  }
};

const showElements = () => {
  if (window.scrollY >= elem) {
    serviceList.classList.add('display');
    upButton.classList.add('show-button');
  } else {
    upButton.classList.remove('show-button');
  }
};

arrowLink.addEventListener('click', event => {
  event.preventDefault();
  window.scrollTo(0, elem);
});

upButton.addEventListener('click', event => {
  event.preventDefault();
  window.scrollTo(0, 0);
});

window.addEventListener('scroll', scrollBanner);
document.addEventListener('scroll', showElements);
