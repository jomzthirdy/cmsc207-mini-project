

const buttonTravelling = document.getElementById('button-travelling');
const buttonMovies = document.getElementById('button-movies');
const buttonMusic = document.getElementById('button-music');
const textTravelling = document.getElementById('text-travelling');
const textMovies = document.getElementById('text-movies');
const textMusic = document.getElementById('text-music');

buttonTravelling.addEventListener('click', () => {
  textTravelling.classList.toggle('hai-text');
  
  if (textTravelling.classList.contains('hai-text')) {
    buttonTravelling.textContent = 'Travelling';
  } else {
    buttonTravelling.textContent = 'Hide';
  }
} );

buttonMovies.addEventListener('click', () => {
  textMovies.classList.toggle('hai-text');
  
  if (textMovies.classList.contains('hai-text')) {
    buttonMovies.textContent = 'Movies';
  } else {
    buttonMovies.textContent = 'Hide';
  }
} );

buttonMusic.addEventListener('click', () => {
  textMusic.classList.toggle('hai-text');
  
  if (textMusic.classList.contains('hai-text')) {
    buttonMusic.textContent = 'Music';
  } else {
    buttonMusic.textContent = 'Hide';
  }
} );