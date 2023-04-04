import { getNode, createElement, addLabel, addContent } from './index.js';


export class HtmlLogger {

  constructor(target, width) {
    this._width = width || 600;
    this._$root = getNode(target);

    this._$container = createElement(`div`, `logger-container`);
    this._$container.style.width = this._width + `px`;
    this._$root.insertAdjacentElement(`afterbegin`, this._$container);
  }

  addRow(content, label, lengthLabel) {
    const $row = createElement(`div`, `logger-row`);
    this._$container.insertAdjacentElement(`beforeend`, $row);

    // Label
    if (label) addLabel($row, label, lengthLabel);

    // Content
    addContent($row, content);
  }
}