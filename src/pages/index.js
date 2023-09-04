import Api from "../components/Api.js";
import { FormValidator } from "../components/FormValidator.js";
import { validationSettings } from "../utils/constants.js";
import Section from "../components/section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import {
  cardsContainerSelector,
  popupProfileSelector,
  popupCardSelector,
  popupChangeAvatarSelector,
} from "../utils/utils.js";
import "./index.css";
import PopupWithButton from "../components/PopupWithButton.js";

const popupPhoto = document.querySelector(".popup_type_photo");
export const popupOpenedPhoto = popupPhoto.querySelector(".photo-popup__photo");
export const popupPhotoHeader = popupPhoto.querySelector(
  ".photo-popup__header"
);
const buttonOpenPopupAvatar = document.querySelector(
  ".profile__edit-avatar-btn"
);
const buttonOpenPopupProfile = document.querySelector(".profile__edit-btn");
const inputProfileName = document.querySelector(
  ".popup__input_type_profile-name"
);
const inputJob = document.querySelector(".popup__input_type_about");
const buttonOpenPopupCard = document.querySelector(".profile__add-pic-btn");
const popupProfileForm = document.querySelector(".popup__form-profile");
const popupCardForm = document.querySelector(".popup__form-card");
const popupAvatarForm = document.querySelector(".popup__form-avatar");
const popupDeleteCardSelector = ".popup_type_delete-card-confirmation";

const apiConfig = {
  url: "https://mesto.nomoreparties.co/v1/cohort-74",
  headers: {
    authorization: "1a4f8f06-b6f0-4df4-84b8-b4034a99d943",
    "Content-type": "application/json",
  },
};

const api = new Api(apiConfig);

let myId = "";

Promise.all([api.getUserInfo(), api.getInitialCards()]).then(
  ([getUserInfo, getInitialCards]) => {
    userInfo.setUserInfo(getUserInfo);
    myId = getUserInfo._id;
    cardsSection.renderItems(getInitialCards);
  }
);

const cardsSection = new Section(
  {
    renderer: (item) => {
      const cardElem = newCardClass(item);
      cardsSection.addItem(cardElem);
    },
  },
  cardsContainerSelector
);

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__about",
  avatarSelector: ".profile__avatar",
});

const popupChangeAvatar = new PopupWithForm(popupChangeAvatarSelector, {
  submitCallback: (newValues, submitBtn) => {
    changeSubmitBtnStatus(submitBtn, 'Сохранение...');
    api.updateAvatar(newValues);
    api.getUserInfo().then((data) => {
      userInfo.setUserInfo(data);
    }).finally(() => {
        setTimeout(changeSubmitBtnStatus, 1000, submitBtn, 'Сохранить');
        popupChangeAvatar.close();
      });
  },
});

buttonOpenPopupAvatar.addEventListener("click", () => {
  popupChangeAvatar.open();

  validateProfileForm.resetInputErrors();
});

popupChangeAvatar.setEventListeners();

const popupProfileOpened = new PopupWithForm(popupProfileSelector, {
  submitCallback: (newValues, submitBtn) => {
    changeSubmitBtnStatus(submitBtn, 'Сохранение...');
    api.updateUserInfo(newValues);
    api.getUserInfo().then((data) => {
      userInfo.setUserInfo(data);
    }).finally(() => {
        setTimeout(changeSubmitBtnStatus, 1000, submitBtn, 'Сохранить');
        popupProfileOpened.close();
      });
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
  submitCallback: (newValues, submitBtn) => {
    changeSubmitBtnStatus(submitBtn, 'Сохранение...');
    const name = newValues.cardName;
    const link = newValues.url;
    const info = { name, link };
    api.addNewCard(info).then((data) => {
      const cardElem = newCardClass(data);
      cardsSection.addItem(cardElem);
    }).finally(() => {
      setTimeout(changeSubmitBtnStatus, 1000, submitBtn, 'Сохранить');
      popupCardOpened.close();
    })
  },
});

popupCardOpened.setEventListeners();

buttonOpenPopupCard.addEventListener("click", () => {
  popupCardOpened.open();
  validateCardForm.resetInputErrors();
});

const popupDeleteCardOpened = new PopupWithButton(popupDeleteCardSelector, {
  submitCallback: (id, deleteElem, submitBtn) => {
    handleDeleteCard(id, deleteElem, submitBtn);
  },
});

popupDeleteCardOpened.setEventListeners();

const validateProfileForm = new FormValidator(validationSettings, popupProfileForm);

validateProfileForm.enableValidation();

const validateCardForm = new FormValidator(validationSettings, popupCardForm);

validateCardForm.enableValidation();

const validateAvatarForm = new FormValidator(validationSettings, popupAvatarForm);

validateAvatarForm.enableValidation();

const popupOpenedImage = new PopupWithImage(".popup_type_photo");

popupOpenedImage.setEventListeners();

function newCardClass(item) {
  const card = new Card(
    item,
    ".template-card",
    handleCardClick,
    handleDeleteBtnClick,
    apiSetLike,
    apiRemoveLike,
    myId
  );
  const cardElem = card.createCard();
  return cardElem;
}

function handleCardClick(name, link) {
  popupOpenedImage.open(name, link);
}

function handleDeleteCard(id, deleteElem, submitBtn) {
  submitBtn.value = 'Удаление...';
  api.deleteCard(id)
    .then(() => {
      deleteElem.closest(".card").remove();
      popupDeleteCardOpened.close();
    }).finally(() => {
      setTimeout(changeSubmitBtnStatus, 1000, submitBtn, 'Да');
    })
}

function changeSubmitBtnStatus(submitBtn, value) {
  submitBtn.value = value;
}

function handleDeleteBtnClick(id, deleteElem) {
  popupDeleteCardOpened.open();
  popupDeleteCardOpened.setData(id, deleteElem);
}

function apiSetLike(cardId, likeCounter) {
  api.setLike(cardId).then((item) => {
    likeCounter.textContent = item.likes.length;
  });
}

function apiRemoveLike(cardId, likeCounter) {
  api.removeLike(cardId).then((item) => {
    likeCounter.textContent = item.likes.length;
  });
}
