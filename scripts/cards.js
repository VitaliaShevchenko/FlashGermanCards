class Word {
  constructor(german, english, example) {
    this.german = german;
    this.english = english;
    this.example = example;
  }
}

const wordsA1 = [
  new Word("Hallo", "Hello", "Hallo! Wie geht es dir?"),
  new Word("Ja", "Yes", "Ja, ich verstehe."),
  new Word("Nein", "No", "Nein, danke."),
  new Word("Danke", "Thank you", "Danke für deine Hilfe."),
  new Word("Bitte", "Please/You're welcome", "Bitte schön!"),
  new Word("Tschüss", "Goodbye", "Tschüss! Bis bald."),
  new Word("Guten Morgen", "Good morning", "Guten Morgen! Wie war deine Nacht?"),
  new Word("Guten Tag", "Good day", "Guten Tag! Wie kann ich Ihnen helfen?"),
  new Word("Guten Abend", "Good evening", "Guten Abend! Wie war Ihr Tag?"),
  new Word("Wie geht's?", "How are you?", "Hallo! Wie geht's?")
];

const wordsA2 = [
  new Word("schön", "beautiful/nice", "Das ist ein sehr schönes Bild."),
  new Word("vielleicht", "maybe/perhaps", "Vielleicht gehe ich später ins Kino."),
  new Word("immer", "always", "Meine Mutter ist immer nett."),
  new Word("dann", "then", "Wir essen zuerst und dann gehen wir spazieren."),
  new Word("oft", "often", "Ich gehe oft ins Kino."),
  new Word("manchmal", "sometimes", "Manchmal bin ich müde."),
  new Word("fast", "almost", "Es ist fast neun Uhr."),
  new Word("früh", "early", "Ich stehe immer früh auf."),
  new Word("spät", "late", "Es ist schon spät."),
  new Word("gut", "good", "Das Essen schmeckt gut.")
];

const cards = document.querySelectorAll('.card');
const germanWord = document.querySelector('.word');
const exampleSentance = document.querySelector('.example');
const translation = document.querySelector('.translation');
const nextWordButton = document.querySelector('.next-word-button');
const showAnswerButton = document.querySelector('.js-show-answer-button');
const clickedButton = localStorage.getItem('clickedButton');
const answerContainer = document.querySelector('.german-answer-hidden');

// function to get a random number to pick a random word out of an array of words
function getRandomIndex(wordsArray) {
  const randomWordIndex = Math.floor(Math.random() * wordsArray.length);
  return randomWordIndex;
}

if (clickedButton === 'a1Btn') {
  renderWord(wordsA1);
} else if(clickedButton === 'a2Btn') {
  renderWord(wordsA2);
} else {

}

function renderWord(wordsArray) {
  const randomIndex = getRandomIndex(wordsArray);
  germanWord.textContent = wordsArray[randomIndex].german;
  translation.textContent = wordsArray[randomIndex].english;
  exampleSentance.textContent = wordsArray[randomIndex].example;
}

function renderAnswer(wordsArray) {
  const randomIndex = getRandomIndex(wordsArray);
  germanWord.textContent = wordsArray[randomIndex].german;
  exampleSentance.textContent = wordsArray[randomIndex].example;
}

nextWordButton.addEventListener('click', () => {
  if (clickedButton === 'a1Btn') {
    renderWord(wordsA1);
  } else if(clickedButton === 'a2Btn') {
    renderWord(wordsA2);
  }
  answerContainer.classList.add('german-answer-hidden');
})

showAnswerButton.addEventListener('click', function () {
  answerContainer.classList.remove('german-answer-hidden');
})
