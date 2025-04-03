import RoutePoint from '../view/route-point-view.js';
import FormEditing from '../view/form-editing-view.js';
import {render, replace} from '../framework/render.js';
import { isEscapeKey } from '../utils.js';

export default class PointPresenter {
  #destinationModel = null;
  #pointListContainer = null;
  #pointComponent = null;
  #pointEditComponent = null;
  #destinations = null;

  constructor({pointListContainer, destinationModel}) {
    this.#pointListContainer = pointListContainer;
    this.#destinationModel = destinationModel;
    this.#destinations = this.#destinationModel.destinations;
  }

  init(point) {

    const escKeyHandler = (event) => {
      if (isEscapeKey(event)) {
        event.preventDefault();
        replace(this.#pointComponent, this.#pointEditComponent);
        document.removeEventListener('keydown', escKeyHandler);
      }
    };

    this.#pointComponent = new RoutePoint({point, destinations: this.#destinations,
      onRollButtonClick: () => {
        replace(this.#pointEditComponent, this.#pointComponent);
        document.addEventListener('keydown', escKeyHandler);
      }
    });

    this.#pointEditComponent = new FormEditing ({point, destinations: this.#destinations,
      onSubmitClick: () => {
        replace(this.#pointComponent, this.#pointEditComponent);
        document.removeEventListener('keydown', escKeyHandler);
      },
      onRollButtonClick: () => {
        replace(this.#pointComponent, this.#pointEditComponent);
        document.removeEventListener('keydown', escKeyHandler);
      }
    });

    render(this.#pointComponent, this.#pointListContainer.element);
  }
}
