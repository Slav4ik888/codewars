import { createElement } from './index.js';


export const addLabel = ($row, label, lengthLabel) => {

  const $spanLabel = createElement(`span`, `logger-label`);
  if (lengthLabel) {
    $spanLabel.style.width = lengthLabel + `px`;
    $spanLabel.style.display = `inline-block`;
  }
  $row.insertAdjacentElement(`beforeend`, $spanLabel);
  $spanLabel.textContent = `[${label}]`;
};