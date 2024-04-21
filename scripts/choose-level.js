const a1Btn = document.querySelector('.js-A1-btn');
const a2Btn = document.querySelector('.js-A2-btn');

window.onload = () => {
  localStorage.clear();
}

a1Btn.addEventListener('click', () => {
  localStorage.setItem('clickedButton', 'a1Btn');
});

a2Btn.addEventListener('click', () => {
  localStorage.setItem('clickedButton', 'a2Btn');
})