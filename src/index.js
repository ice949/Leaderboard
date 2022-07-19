import './style.css';

import { scores, displayScores } from './modules/component.js';

window.addEventListener('DOMContentLoaded', () => {
  scores.forEach(displayScores);
});
