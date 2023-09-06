import Popup from "./Popup";

export default class PopupWithButton extends Popup {
  constructor(popupSelector, { submitCallback }) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__form");
    this._submitBtn = this._form.querySelector(".popup__save-btn");
    this._submitCallback = submitCallback;
  }

  confirmSettings(settings) {
    this._confirmSettings = settings;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._submitCallback(this._confirmSettings, this._submitBtn);
    });
  }
}
