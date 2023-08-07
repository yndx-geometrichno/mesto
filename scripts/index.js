import { Card } from "./card.js";
import { FormValidator, validationSettings } from "./formValidator.js";

const editProfileBtn = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupList = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const popupProfileForm = document.querySelector(".popup__form-profile");
const popupCardForm = document.querySelector(".popup__form-card");
const inputProfileName = document.querySelector(  ".popup__input_type_profile-name");
const inputJob = document.querySelector(".popup__input_type_job");
const addCardBtn = document.querySelector(".profile__add-pic-btn");
const cardsContainer = document.querySelector(".cards");
const cardName = popupCard.querySelector(".popup__input_type_card-name");
const cardLink = popupCard.querySelector(".popup__input_type_url");
const formList = Array.from(document.querySelectorAll(".popup__form"));

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEscPopup);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEscPopup);
}

function closeEscPopup(e) {
  if (e.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}

function handleProfileFormSubmit() {
  profileName.textContent = inputProfileName.value.trim();
  profileJob.textContent = inputJob.value.trim();
  const disableSubmitBtn = new FormValidator(validationSettings, popupProfileForm);
  disableSubmitBtn.disableSubmitButton();
  closePopup(popupProfile);
}

function handleCardFormSubmit() {
  const name = cardName.value;
  const link = cardLink.value;
  const data = { name, link };
  const card = new Card(data, ".template-card");
  const cardElem = card.createCard();
  cardsContainer.prepend(cardElem);
  popupCardForm.reset();
  const disableSubmitBtn = new FormValidator(validationSettings, popupCardForm);
  disableSubmitBtn.disableSubmitButton();
  closePopup(popupCard);
}

initialCards.forEach((item) => {
  const card = new Card(item, ".template-card");
  const cardElem = card.createCard();
  cardsContainer.append(cardElem);
});

formList.forEach((formElement) => {
  const validationItem = new FormValidator(validationSettings, formElement)
  validationItem.enableValidation();
})

popupList.forEach((popup) => {
  popup.addEventListener('mouseup', (event) => {
    const targetClassList = event.target.classList;
    if (targetClassList.contains('popup') || targetClassList.contains('popup__close-btn')) {
      closePopup(popup);
    }
  })
})

editProfileBtn.addEventListener("click", () => {
  inputProfileName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfile);
});

addCardBtn.addEventListener("click", () => {
  openPopup(popupCard);
});

popupProfileForm.addEventListener("submit", handleProfileFormSubmit);

popupCardForm.addEventListener("submit", handleCardFormSubmit);


