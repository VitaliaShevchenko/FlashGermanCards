import { wordsA1, wordsA2 } from "./words.js";
const allWordsContainer = document.querySelector('.all-words-container')

function renderAllWords(wordsArray) {
  for(let i = 0; i < wordsArray.length; i++) {
    const wordEl = document.createElement('div');
    wordEl.classList.add('word-container');
    const germanEl = document.createElement('p')
    germanEl.classList.add('german-word');
    germanEl.textContent = wordsArray[i].german;
    wordEl.append(germanEl);
    const englishEl = document.createElement('p')
    englishEl.classList.add('english-word');
    englishEl.textContent = wordsArray[i].english;
    wordEl.append(englishEl);
    const exampleEl = document.createElement('p')
    exampleEl.classList.add('example-line');
    exampleEl.textContent = wordsArray[i].example;
    wordEl.append(exampleEl);
    allWordsContainer.append(wordEl);
  }
}

renderAllWords(wordsA1)