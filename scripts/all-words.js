import { wordsA1, wordsA2, wordsB1 } from "./words.js";
const clickedLink = localStorage.getItem('listLevel');
let renderedData = []; 


if (clickedLink) {
  if (clickedLink === 'A1') {
    renderedData = wordsA1.map(word => [word.german, word.english, word.example])
  } else if (clickedLink === 'A2') {
    renderedData = wordsA2.map(word => [word.german, word.english, word.example])
  } else if (clickedLink === 'B1') {
    renderedData = wordsB1.map(word => [word.german, word.english, word.example])
  } else if (clickedLink === 'WHOLE') {
    renderedData = wordsA1.map(word => [word.german, word.english, word.example]).concat(wordsA2.map(word => [word.german, word.english, word.example]).concat(wordsB1.map(word => [word.german, word.english, word.example])))
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