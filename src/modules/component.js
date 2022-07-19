const scoreList = document.getElementById('score-list');
const scores = JSON.parse(localStorage.getItem('tasks')) || [
  {
    name: 'Ice',
    score: 99,
  },
  {
    name: 'Chilu',
    score: 100,
  },
  {
    name: 'Justin',
    score: 76,
  },
  {
    name: 'Anelise',
    score: 21,
  },
  {
    name: 'Vuthiwe',
    score: 45,
  },
];

const addScore = (name, score, displayScores) => {
  const person = {
    name: name.value,
    score: score.value,
  };
  scores.push(person);
  localStorage.setItem('scores', JSON.stringify(scores));
  displayScores(person);
};

const displayScores = (person) => {
  const indScore = document.createElement('h3');
  indScore.classList.add('ind-score');
  indScore.innerHTML = `${person.name}:${person.score}`;
  scoreList.appendChild(indScore);
};

export { scores, displayScores, addScore };
