import {
  FormValidator,
  validationSettings,
} from "../components/FormValidator.js";
import { initialCards } from "../components/constants.js";
import Section from "../components/section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  cardsContainerSelector,
  popupProfileSelector,
  buttonOpenPopupCard,
  buttonOpenPopupProfile,
  popupCardSelector,
  formList,
  cardsContainer,
  inputProfileName,
  inputJob,
  newCardClass
} from "../components/utils.js";
import "./index.css";

const cardList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElem = newCardClass(item);
      cardList.addItem(cardElem);
    },
  },
  cardsContainerSelector
);

cardList.setItems();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__job",
});

const popupProfileOpened = new PopupWithForm(popupProfileSelector, {
  submitCallback: (newValues) => {
    console.log(newValues.profileName);
    userInfo.setUserInfo(newValues);
  },
});

buttonOpenPopupProfile.addEventListener("click", () => {
  popupProfileOpened.open();

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
    cardsContainer.prepend(cardElem);
  },
});

popupCardOpened.setEventListeners();

buttonOpenPopupCard.addEventListener("click", () => {
  popupCardOpened.open();
});

formList.forEach((formElement) => {
  const validationItem = new FormValidator(validationSettings, formElement);
  validationItem.enableValidation();
});
