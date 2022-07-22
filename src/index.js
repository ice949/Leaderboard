import './style.css';

const refresh = document.getElementById('refresh-btn');
const gameContainer = document.getElementById('form');
const newScoreler = document.getElementById('name');
const scores = document.getElementById('score');
const listContainer = document.querySelector('.score-list');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bNJs0tzt8gXgsvp6cV0o/scores/';

const renderScore = (gameUsers) => {
  const gamers = (gameUsers.result);
  gamers.forEach((gameUser) => {
    const indScore = document.createElement('h3');
    indScore.classList.add('ind-score');
    indScore.innerHTML = `${gameUser.user}:${gameUser.score}`;
    listContainer.appendChild(indScore);
  });
};
const getScores = async () => {
  const res = await fetch(url);
  const data = await res.json();
  renderScore(data);
};
refresh.addEventListener('click', () => {
  listContainer.innerHTML = ' ';
  getScores();
});
const addScoreForm = async () => {
  const res = fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: newScoreler.value,
      score: scores.value,
    }),
  });
  const data = await (await res).json();
  newScoreler.value = '';
  scores.value = '';
  return data;
};
gameContainer.addEventListener('submit', (e) => {
  e.preventDefault();
  addScoreForm();
});
