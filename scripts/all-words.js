import { wordsA1, wordsA2 } from "./words.js";
const allWordsContainer = document.querySelector('.all-words-container')

function renderAllWords(wordsArray) {
  for(let i = 0; i < wordsArray.length; i++) {
    const wordEl = document.createElement('div');
    wordEl.classList.add('word-container');
    wordEl.textContent = `
    ${wordsArray[i].german}
    ${wordsArray[i].english}
    ${wordsArray[i].example}
    `;
    allWordsContainer.append(wordEl);
  }
}
renderAllWords(wordsA1);
renderAllWords(wordsA2);