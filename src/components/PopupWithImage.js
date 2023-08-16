import Popup from "./Popup.js";
import { popupOpenedPhoto, popupPhotoHeader } from "./utils.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    popupOpenedPhoto.src = link;
    popupOpenedPhoto.alt = name;
    popupPhotoHeader.textContent = name;
    this._popup.classList.add("popup_opened");
    super.setEventListeners();
    document.addEventListener("keydown", this._handleEscClose);
  }
}
