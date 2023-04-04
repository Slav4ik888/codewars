import { getNode, createElement, addLabel, addContent } from './index.js';


export class HtmlLogger {

  private _width: number;
  private _$root: HTMLElement;
  private _$container: HTMLElement;

  constructor(target: string, width?: number) {
    this._width = width || 600;
    this._$root = getNode(target);

    this._$container = createElement(`div`, `logger-container`);
    this._$container.style.width = this._width + `px`;
    this._$root.insertAdjacentElement(`afterbegin`, this._$container);
  }

  addRow(content: string, label?: string, lengthLabel?: number) {
    const $row: HTMLElement = createElement(`div`, `logger-row`);
    this._$container.insertAdjacentElement(`beforeend`, $row);

    // Label
    if (label) addLabel($row, label, lengthLabel);

    // Content
    addContent($row, content);
  }
}