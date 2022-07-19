import './style.css';

import { scores, displayScores, addScore } from './modules/component.js';

const form = document.getElementById('form');
const name = document.getElementById('name');
const score = document.getElementById('score');

window.addEventListener('DOMContentLoaded', () => {
  scores.forEach(displayScores);
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(name, score, displayScores);
});
