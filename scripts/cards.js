import { wordsA1, wordsA2 } from "./words.js";

const germanWord = document.querySelector('.word');
const exampleSentance = document.querySelector('.example');
const translation = document.querySelector('.translation');
const nextWordButton = document.querySelector('.next-word-button');
const showAnswerButton = document.querySelector('.js-show-answer-button');
const previousCardButton = document.querySelector('.js-previous-card-button');
const clickedButton = localStorage.getItem('clickedButton');
const answerContainer = document.querySelector('.german-answer-hidden');
const shownCardsIndexes = [];

// function to get a random number to pick a random word out of an array of words
function getRandomIndex(wordsArray) {
  const randomWordIndex = Math.floor(Math.random() * wordsArray.length);
  return randomWordIndex;
}

function renderCard(isPreviousCard = false) {
  let index;

  if (isPreviousCard) {
    if (shownCardsIndexes.length > 1) {
      index = shownCardsIndexes[shownCardsIndexes.length - 2];
      shownCardsIndexes.pop();
    }
  } else {
    if (clickedButton === 'a1Btn') {
      index = getRandomIndex(wordsA1);
    } else if (clickedButton === 'a2Btn') {
      index = getRandomIndex(wordsA2);
    }
  }

  if (index) {
    if (clickedButton === 'a1Btn') {
      renderWord(wordsA1[index]);
    } else if(clickedButton === 'a2Btn') {
      renderWord(wordsA2[index]);
    }

    answerContainer.classList.add('german-answer-hidden');

    if (!isPreviousCard) {
      shownCardsIndexes.push(index);
    }
  }
}

if (clickedButton) {
  renderCard();
} else {
  translation.innerHTML = `
  <p>You have to choose your level</p>
  <button class="btn btn-primary link-btn not-chosen-level-btn"><a href="choose-level.html">Choose level</a></button>
  `;
}

function renderWord(word) {
    germanWord.textContent = word.german;
    translation.textContent = word.english;
    exampleSentance.textContent = word.example;
}

nextWordButton.addEventListener('click', (event) => {
  renderCard();
  previousCardButton.removeAttribute('disabled');
  previousCardButton.classList.remove('disabled-previous-card');
})

showAnswerButton.addEventListener('click', () => {
  answerContainer.classList.remove('german-answer-hidden');
})


previousCardButton.addEventListener('click', () => {
  renderCard(true);
})
