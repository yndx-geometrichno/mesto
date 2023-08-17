import Popup from "./Popup.js";
import { popupOpenedPhoto, popupPhotoHeader } from "../pages/index.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link) {
    super.open();
    popupOpenedPhoto.src = link;
    popupOpenedPhoto.alt = name;
    popupPhotoHeader.textContent = name;
  }
}
