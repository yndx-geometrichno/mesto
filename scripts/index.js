import { Card } from './card.js';
import { FormValidator, validationSettings } from './formValidator.js';
import { initialCards } from './constants.js';
import { openPopup, closePopup, closeEscPopup } from './utils.js';

const buttonOpenPopupProfile = document.querySelector('.profile__edit-btn');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__job');
const popupList = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_profile');
const popupCard = document.querySelector('.popup_type_card');
const popupProfileForm = document.querySelector('.popup__form-profile');
const popupCardForm = document.querySelector('.popup__form-card');
const inputProfileName = document.querySelector(  '.popup__input_type_profile-name');
const inputJob = document.querySelector('.popup__input_type_job');
const buttonOpenPopupCard = document.querySelector('.profile__add-pic-btn');
const cardsContainer = document.querySelector('.cards');
const cardName = popupCard.querySelector('.popup__input_type_card-name');
const cardLink = popupCard.querySelector('.popup__input_type_url');
const formList = Array.from(document.querySelectorAll('.popup__form'));

function handleProfileFormSubmit() {
  profileName.textContent = inputProfileName.value.trim();
  profileJob.textContent = inputJob.value.trim();

  popupProfileForm.reset();
  closePopup(popupProfile);
}

function handleCardFormSubmit() {
  const name = cardName.value;
  const link = cardLink.value;
  const data = { name, link };
  const cardElem = newCardClass(data);
  cardsContainer.prepend(cardElem);
  popupCardForm.reset();

  closePopup(popupCard);
}

function newCardClass(item) {
  const card = new Card(item, '.template-card');
  const cardElem = card.createCard();
  return cardElem;
}

formList.forEach((formElement) => {
  const validationItem = new FormValidator(validationSettings, formElement);
  validationItem.enableValidation();
})

initialCards.forEach((item) => {
  const cardElem = newCardClass(item);
  cardsContainer.append(cardElem);
});

popupList.forEach((popup) => {
  popup.addEventListener('mouseup', (event) => {
    const targetClassList = event.target.classList;
    if (targetClassList.contains('popup') || targetClassList.contains('popup__close-btn')) {
      closePopup(popup);
    }
  })
})

buttonOpenPopupProfile.addEventListener('click', () => {
  inputProfileName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfile);
});

buttonOpenPopupCard.addEventListener('click', () => {
  openPopup(popupCard);
});

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

popupCardForm.addEventListener('submit', handleCardFormSubmit);


