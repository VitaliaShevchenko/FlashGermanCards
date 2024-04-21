const mainContainer = document.querySelector('.js-main-container');
const a1Btn = document.querySelector('.js-A1-btn');
const a2Btn = document.querySelector('.js-A2-btn');

function chooseLevel(button) {
  button.addEventListener('click', () => {
    console.log('it works')
  })
}

chooseLevel(a1Btn);
chooseLevel(a2Btn);