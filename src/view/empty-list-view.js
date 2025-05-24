import AbstractView from '../framework/view/abstract-view.js';
import { MessageNoPoint } from '../consts.js';

function createEmptyListTemplate(filterType) {
  return `<p class="trip-events__msg">${MessageNoPoint[filterType.toUpperCase()]}</p>`;
}

export default class EmptyListView extends AbstractView {
  #filterType = null;

  constructor(filterType) {
    super();
    this.#filterType = filterType;
  }

  get template() {
    return createEmptyListTemplate(this.#filterType.filterType);
  }
}
