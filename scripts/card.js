import { popupPhoto, popupOpenedPhoto, popupPhotoHeader, openPopup } from './utils.js';

export class Card {
  constructor(data, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElem = document
      .querySelector(this._templateSelector)
      .content.cloneNode(true);
    return cardElem;
  }

  _setEventListeners() {
    const deleteElem = this._element.querySelector('.card__delete-btn');
    deleteElem.addEventListener('click', () => {
      deleteElem.closest('.card').remove();
    });

    const likeBtn = this._element.querySelector('.card__like-btn');
    likeBtn.addEventListener('click', () => {
      likeBtn.classList.toggle('card__like-btn_active');
    });

    const cardPhoto = this._element.querySelector('.card__img');
    cardPhoto.addEventListener('click', () => {
      popupOpenedPhoto.src = this._link;
      popupOpenedPhoto.alt = this._name;
      popupPhotoHeader.textContent = this._name;
      openPopup(popupPhoto);
    });
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.card__name').textContent = this._name;
    this._element.querySelector('.card__img').src = this._link;
    this._element.querySelector('.card__img').alt = this._name;

    return this._element;
  }
}
