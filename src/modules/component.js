const scoreList = document.getElementById('score-list');
const scores = [
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

const displayScores = (person) => {
  const indScore = document.createElement('h3');
  indScore.classList.add('ind-score');
  indScore.innerHTML = person.name + ':' + person.score;
  scoreList.appendChild(indScore);
};

export { scores, displayScores };
