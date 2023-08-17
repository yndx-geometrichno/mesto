export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  setItems() {
    this._renderer(item);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  renderItems(items) {
    items.forEach((item) => {
      const cardElem = this._renderer(item);
    });
  }
}
