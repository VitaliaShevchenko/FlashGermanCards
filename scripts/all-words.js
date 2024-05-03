import { wordsA1, wordsA2 } from "./words.js";
const clickedLink = localStorage.getItem('clickedLink');
let renderedData = []; 


if (clickedLink) {
  if (clickedLink === 'a1Link') {
    renderedData = wordsA1.map(word => [word.german, word.english, word.example])
  } else if (clickedLink === 'a2Link') {
    renderedData = wordsA2.map(word => [word.german, word.english, word.example])
  } else if (clickedLink === 'wholeListLink') {
    renderedData = wordsA1.map(word => [word.german, word.english, word.example]).concat(wordsA2.map(word => [word.german, word.english, word.example]))
  }
}

new gridjs.Grid({
  columns: ["German", "English", "Example sentence"],
  data: renderedData,
  pagination: {
    limit: 10
  },
  sort: {
    multiColumn: false
  },
  autoWidth: true,
  search: {
    keyword: ""
  }
}).render(document.getElementById("wrapper"));