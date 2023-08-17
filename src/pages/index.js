import { FormValidator } from "../components/FormValidator.js";
import { validationSettings, initialCards } from "../utils/constants.js";
import Section from "../components/section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import {
  cardsContainerSelector,
  popupProfileSelector,
  popupCardSelector,
} from "../utils/utils.js";
import "./index.css";

const popupPhoto = document.querySelector(".popup_type_photo");
export const popupOpenedPhoto = popupPhoto.querySelector(".photo-popup__photo");
export const popupPhotoHeader = popupPhoto.querySelector(".photo-popup__header");
const buttonOpenPopupProfile = document.querySelector(".profile__edit-btn");
const inputProfileName = document.querySelector(".popup__input_type_profile-name");
const inputJob = document.querySelector(".popup__input_type_job");
const buttonOpenPopupCard = document.querySelector(".profile__add-pic-btn");
const popupProfileForm = document.querySelector(".popup__form-profile");
const popupCardForm = document.querySelector(".popup__form-card");

const cardsSection = new Section(
  {
    renderer: (item) => {
      const cardElem = newCardClass(item);
      cardsSection.addItem(cardElem);
    },
  },
  cardsContainerSelector
);

cardsSection.renderItems(initialCards);

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__job",
});

const popupProfileOpened = new PopupWithForm(popupProfileSelector, {
  submitCallback: (newValues) => {
    userInfo.setUserInfo(newValues);
    popupProfileOpened.close();
  },
});

buttonOpenPopupProfile.addEventListener("click", () => {
  popupProfileOpened.open();

  validateProfileForm.resetInputErrors();

  const items = userInfo.getUserInfo();
  inputProfileName.value = items.name;
  inputJob.value = items.about;
});

popupProfileOpened.setEventListeners();

const popupCardOpened = new PopupWithForm(popupCardSelector, {
  submitCallback: (newValues) => {
    const name = newValues.cardName;
    const link = newValues.url;
    const data = { name, link };
    const cardElem = newCardClass(data);
    cardsSection.addItem(cardElem);
    popupCardOpened.close();
  },
});

popupCardOpened.setEventListeners();

buttonOpenPopupCard.addEventListener("click", () => {
  popupCardOpened.open();
  validateCardForm.resetInputErrors();
});

const validateProfileForm = new FormValidator(validationSettings, popupProfileForm);

validateProfileForm.enableValidation();

const validateCardForm = new FormValidator(validationSettings, popupCardForm);

validateCardForm.enableValidation();

const popupOpenedImage = new PopupWithImage(".popup_type_photo");

popupOpenedImage.setEventListeners();

function newCardClass(item) {
  const card = new Card(item, ".template-card", handleCardClick);
  const cardElem = card.createCard();
  return cardElem;
}

function handleCardClick(name, link) {
  popupOpenedImage.open(name, link);
}
