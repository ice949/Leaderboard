import "./style.css";
import { scores, displayScores } from "./modules/component.js";
const form = document.getElementById("form");

addEventListener("DOMContentLoaded", () => {
  scores.forEach(displayScores);
});
