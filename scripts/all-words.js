import { wordsA1, wordsA2 } from "./words.js";
const allWordsContainer = document.querySelector('.all-words-container');
const listTitle = document.querySelector('.js-list-title');

document.addEventListener("DOMContentLoaded", function() {
  const allWordsContainer = document.querySelector('.all-words-container');

  function renderAllWords(wordsArray) {
    for(let i = 0; i < wordsArray.length; i++) {
      const wordEl = document.createElement('div');
      wordEl.classList.add('word-container');

      const levelSign = document.createElement('p');
      levelSign.classList.add('level-sign');
      if(wordsArray == wordsA1) {
        levelSign.textContent = 'A1';
      } else if (wordsArray == wordsA2) {
        levelSign.textContent == 'A2';
      }
      wordEl.append(levelSign);
      
      const germanEl = document.createElement('p');
      germanEl.classList.add('german-word');
      germanEl.textContent = wordsArray[i].german;
      wordEl.append(germanEl);
      const englishEl = document.createElement('p');
      englishEl.classList.add('english-word');
      englishEl.textContent = wordsArray[i].english;
      wordEl.append(englishEl);
      const exampleEl = document.createElement('p');
      exampleEl.classList.add('example-line');
      exampleEl.textContent = wordsArray[i].example;
      wordEl.append(exampleEl);
      allWordsContainer.append(wordEl);
    }
  }

  const linkA1list = document.querySelector('.js-a1-list-link');
  const linkA2list = document.querySelector('.js-a2-list-link');
  const linkWholeList = document.querySelector('.js-whole-list-link');

  linkA1list.addEventListener('click', (event) => {
    event.preventDefault();
    allWordsContainer.innerHTML = "";
    renderAllWords(wordsA1);
  })

  linkA2list.addEventListener('click', (event) => {
    event.preventDefault();
    allWordsContainer.innerHTML = "";
    renderAllWords(wordsA2);
  })

  linkWholeList.addEventListener('click', (event) => {
    event.preventDefault();
    allWordsContainer.innerHTML = "";
    renderAllWords(wordsA1);
    renderAllWords(wordsA2);
  })
});
