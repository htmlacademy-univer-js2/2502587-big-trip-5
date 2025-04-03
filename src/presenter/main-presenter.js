import Filters from '../view/filters-view.js';
import RoutePointList from '../view/route-point-list-view.js';
import Sorting from '../view/sorting-view.js';
import { render } from '../framework/render.js';
import EmptyListView from '../view/empty-list-view.js';
import { generateFilter } from '../mock/filters-mock.js';
import PointPresenter from './point-presenter.js';

export default class Presenter {
  #pointsModel = null;
  #destinationsModel = null;
  #offerModel = null;
  #tripEvents = null;
  #tripControlFilters = null;

  #points = [];

  #sortComponent = new Sorting();
  #eventListComponent = new RoutePointList();

  constructor({pointsModel, offerModel, destinationsModel}) {
    this.#pointsModel = pointsModel;
    this.#destinationsModel = destinationsModel;
    this.#offerModel = offerModel;
    this.#points = this.#pointsModel.points;

    this.#tripEvents = document.querySelector('.trip-events');
    this.#tripControlFilters = document.querySelector('.trip-controls__filters');
  }

  init() {
    const filters = generateFilter(this.#points);
    render(new Filters({filters}), this.#tripControlFilters);

    this.#renderBoard();

    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderBoard() {
    if (this.#points.length === 0) {
      render(new EmptyListView(), this.#tripEvents);
      return;
    }

    render(this.#sortComponent, this.#tripEvents);
    render(this.#eventListComponent, this.#tripEvents);
  }

  #renderPoint = (point) => {
    const pointPresenter = new PointPresenter({
      pointListContainer: this.#eventListComponent,
      destinationModel: this.#destinationsModel
    });

    pointPresenter.init(point);
  };
}
