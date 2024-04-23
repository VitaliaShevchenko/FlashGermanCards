import { wordsA1, wordsA2 } from "./cards.js";

const contentContainer = document.querySelector('.js-content-container');

function renderAllWordsInArray(wordsArray) {
  for (let i = 0; i < wordsArray.length; i++) {
    const wordDiv = document.createElement('div');
    wordDiv.textContent = renderCard();
    greeting.append(wordDiv);
    wordDiv.classList.add('styles');
  }
}

console.log(wordsA1[10])