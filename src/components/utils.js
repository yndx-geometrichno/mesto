import Card from "./Card.js";
import PopupWithImage from "./PopupWithImage.js";

export const popupPhoto = document.querySelector('.popup_type_photo');
export const popupOpenedPhoto = popupPhoto.querySelector('.photo-popup__photo');
export const popupPhotoHeader = popupPhoto.querySelector('.photo-popup__header');
export const buttonOpenPopupProfile = document.querySelector('.profile__edit-btn');
export const inputProfileName = document.querySelector(  '.popup__input_type_profile-name');
export const inputJob = document.querySelector('.popup__input_type_job');
export const buttonOpenPopupCard = document.querySelector('.profile__add-pic-btn');
export const cardsContainer = document.querySelector('.cards');
export const cardsContainerSelector = '.cards';
export const popupProfileSelector = '.popup_type_profile';
export const popupCardSelector = '.popup_type_card';
export const formList = Array.from(document.querySelectorAll('.popup__form'));

export function newCardClass(item) {
  const card = new Card(item, ".template-card", handleCardClick);
  const cardElem = card.createCard();
  return cardElem;
}

function handleCardClick(name, link) {
  const popupOpenedImage = new PopupWithImage(".popup_type_photo");
  popupOpenedImage.open(name, link);
}
