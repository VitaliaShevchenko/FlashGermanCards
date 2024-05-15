import { wordsA1, wordsA2, wordsB1 } from "./words.js";

const germanWord = document.querySelector('.word');
const exampleSentance = document.querySelector('.example');
const translation = document.querySelector('.translation');
const nextWordButton = document.querySelector('.next-word-button');
const showAnswerButton = document.querySelector('.js-show-answer-button');
const previousCardButton = document.querySelector('.js-previous-card-button');
const clickedButton = localStorage.getItem('level');
const answerContainer = document.querySelector('.german-answer-hidden');
const cardPic = document.querySelector('.card-picture');
let picWord;
let firstLoadedCard;
let currentlyLoadedCard;
const shownCardsIndexes = [];

function getRandomIndex(wordsArray) {
  const randomWordIndex = Math.floor(Math.random() * wordsArray.length);
  return randomWordIndex;
}

const randomPicIndex = () => {
  return Math.floor(Math.random() * 10)
}

function renderCard(isPreviousCard = false) {
  let index;

  if (isPreviousCard) {
    if (shownCardsIndexes.length > 1) {
      index = shownCardsIndexes[shownCardsIndexes.length - 2];
      shownCardsIndexes.pop();
    }
  } else {
    if (clickedButton === 'A1') {
      index = getRandomIndex(wordsA1);
    } else if (clickedButton === 'A2') {
      index = getRandomIndex(wordsA2);
    } else if (clickedButton === 'B1') {
      index = getRandomIndex(wordsB1);
    }
  }

  if (index) {
    if (clickedButton === 'A1') {
      renderWord(wordsA1[index]);
      currentlyLoadedCard = index;
      picWord = wordsA1[index].english;
    } else if(clickedButton === 'A2') {
      renderWord(wordsA2[index]);
      currentlyLoadedCard = index;
      picWord = wordsA2[index].english;
    } else if(clickedButton === 'B1') {
      renderWord(wordsB1[index]);
      currentlyLoadedCard = index;
      picWord = wordsB1[index].english;
    }

    answerContainer.classList.add('german-answer-hidden');

    if (!isPreviousCard) {
      shownCardsIndexes.push(index);
    }

    if (!firstLoadedCard) {
      firstLoadedCard = index;
      localStorage.setItem('firstLoadedCardIndex', firstLoadedCard);
    }
  }
}

if (clickedButton) {
  renderCard();
} else {
  translation.innerHTML = `
  <p>You have to choose your level</p>
  <button class="btn btn-primary link-btn not-chosen-level-btn"><a href="index.html">Choose level</a></button>
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
  getData(picWord);
})

showAnswerButton.addEventListener('click', () => {
  answerContainer.classList.remove('german-answer-hidden');
})

previousCardButton.addEventListener('click', () => {
  renderCard(true);
  if (currentlyLoadedCard === firstLoadedCard) {
    previousCardButton.setAttribute('disabled', '');
    previousCardButton.classList.add('disabled-previous-card');
  }
  getData(picWord);
})

async function getData(searchedPic) {
  const response = await fetch(`https://pixabay.com/api/?key=43577378-80b187136468c26eeafed5a0f&q=${searchedPic}`);
  if (response.status === 200) {
      const data = await response.json();
      if (!data.hits[0]) {
        cardPic.setAttribute('src', `../images/default-pic.jpg`);
      } else {
        cardPic.setAttribute('src', `${data.hits[randomPicIndex()].webformatURL}`);
      }
  } else {
      alert('there is error calling api ' + response.status )
  }  
}

getData(picWord);