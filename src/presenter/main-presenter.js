import Filters from '../view/filters-view.js';
import FormCreation from '../view/form-creation-view.js';
import FormEditing from '../view/form-editing-view.js';
import RoutePointList from '../view/route-point-list-view.js';
import RoutePoint from '../view/route-point-view.js';
import Sorting from '../view/sorting-view.js';
import { render } from '../render.js';

const NUMBER_ROUTE_POINT = 3;

export default class Presenter {
  RoutePointListComponent = new RoutePointList();

  constructor() {
    this.tripEvents = document.querySelector('.trip-events');
    this.tripControlFilters = document.querySelector('.trip-controls__filters');
  }

  init() {
    render(new Filters(), this.tripControlFilters);
    render(new Sorting(), this.tripEvents);
    render(this.RoutePointListComponent, this.tripEvents);
    render(new FormEditing(), this.RoutePointListComponent.getElement());

    for (let i = 0; i < NUMBER_ROUTE_POINT; i++) {
      render(new RoutePoint(), this.RoutePointListComponent.getElement());
    }

    render(new FormCreation(), this.RoutePointListComponent.getElement());
  }
}
