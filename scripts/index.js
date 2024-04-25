const linkA1list = document.querySelector('.js-a1-list-link');
const linkA2list = document.querySelector('.js-a2-list-link');
const linkWholeList = document.querySelector('.js-whole-list-link');

window.onload = () => {
  localStorage.clear();
}

linkA1list.addEventListener('click', () => {
  localStorage.setItem('clickedLink', 'a1-list-link');
});

linkA2list.addEventListener('click', () => {
  localStorage.setItem('clickedLink', 'a2-list-link');
});

linkWholeList.addEventListener('click', () => {
  localStorage.setItem('clickedLink', 'whole-list-link');
});
