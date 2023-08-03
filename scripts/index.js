import { Card } from "./card.js";

const editProfileBtn = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__job");
const popupList = document.querySelectorAll(".popup");
const popupProfile = document.querySelector(".popup_type_profile");
const popupCard = document.querySelector(".popup_type_card");
const popupCloseBtns = document.querySelectorAll(".popup__close-btn");
const popupProfileForm = document.querySelector(".popup__form-profile");
const popupCardForm = document.querySelector(".popup__form-card");
const inputProfileName = document.querySelector(  ".popup__input_type_profile-name");
const inputJob = document.querySelector(".popup__input_type_job");
const inputUrl = document.querySelector(".popup__input_type_url");
const addCardBtn = document.querySelector(".profile__add-pic-btn");
const cardsContainer = document.querySelector(".cards");
const templateCard = document.querySelector(".template-card");
const popupPhoto = document.querySelector(".popup_type_photo");
const cardName = popupCard.querySelector(".popup__input_type_card-name");
const cardLink = popupCard.querySelector(".popup__input_type_url");
const popupImg = popupPhoto.querySelector(".photo-popup__photo");
const popupImgHeader = popupPhoto.querySelector(".photo-popup__header");

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
  profileName.textContent = inputProfileName.value;
  profileJob.textContent = inputJob.value;
  disableSubmitButton(popupProfile.querySelector('.popup__save-btn'));
  closePopup(popupProfile);
}

function handleCardFormSubmit() {
  const name = cardName.value;
  const link = cardLink.value;
  const item = { name, link };
  const card = new Card(item, ".template-card");
  const cardElem = card.createCard();
  cardsContainer.prepend(cardElem);
  popupCardForm.reset();
  disableSubmitButton(popupCardForm.querySelector('.popup__save-btn'));
  closePopup(popupCard);
}

initialCards.forEach((item) => {
  const card = new Card(item, ".template-card");
  const cardElem = card.createCard();
  cardsContainer.append(cardElem);
});

editProfileBtn.addEventListener("click", () => {
  inputProfileName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfile);
});

popupList.forEach((popup) => {
  popup.addEventListener('mouseup', (event) => {
    const targetClassList = event.target.classList;
    if (targetClassList.contains('popup') || targetClassList.contains('popup__close-btn')) {
      closePopup(popup);
    }
  })
})

addCardBtn.addEventListener("click", () => {
  openPopup(popupCard);
});

popupProfileForm.addEventListener("submit", handleProfileFormSubmit);

popupCardForm.addEventListener("submit", handleCardFormSubmit);
