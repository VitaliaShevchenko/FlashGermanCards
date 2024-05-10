const a1Btn = document.querySelector('.js-A1-btn');
const a2Btn = document.querySelector('.js-A2-btn');
const b1Btn = document.querySelector('.js-B1-btn')

const a1Link = document.querySelector('.js-a1-list-link');
const a2Link = document.querySelector('.js-a2-list-link');
const b1Link = document.querySelector('.js-b1-list-link');
const wholeList = document.querySelector('.js-whole-list-link');

window.onload = () => {
  localStorage.clear();
}


if (a1Btn && a2Btn && b1Btn) {
  a1Btn.addEventListener('click', () => {
    localStorage.setItem('clickedButton', 'a1Btn');
});
  a2Btn.addEventListener('click', () => {
    localStorage.setItem('clickedButton', 'a2Btn');
})
  b1Btn.addEventListener('click', () => {
    localStorage.setItem('clickedButton', 'b1Btn');
  })
}


a1Link.addEventListener('click', () => {
  localStorage.setItem('clickedLink', 'a1Link');
});

a2Link.addEventListener('click', () => {
  localStorage.setItem('clickedLink', 'a2Link');
});

b1Link.addEventListener('click', () => {
  localStorage.setItem('clickedLink', 'b1Link');
});

wholeList.addEventListener('click', () => {
  localStorage.setItem('clickedLink', 'wholeListLink');
});