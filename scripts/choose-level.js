function handleLevelChoice(level) {
  localStorage.clear();
  localStorage.setItem('level', level);
  window.location.href="./cards-page.html"
}

function handleNavClick(level) {
  localStorage.clear();
  localStorage.setItem('listLevel', level);
  window.location.href="./all-words.html"
}