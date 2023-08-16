import Card from '../components/Card.js';
import { FormValidator, validationSettings } from '../components/FormValidator.js';
import { initialCards } from '../components/constants.js';
import Section from '../components/section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const buttonOpenPopupProfile = document.querySelector('.profile__edit-btn');
const inputProfileName = document.querySelector(  '.popup__input_type_profile-name');
const inputJob = document.querySelector('.popup__input_type_job');
const buttonOpenPopupCard = document.querySelector('.profile__add-pic-btn');
const cardsContainer = document.querySelector('.cards');
const cardsContainerSelector = '.cards';
const popupProfileSelector = '.popup_type_profile';
const popupCardSelector = '.popup_type_card';
const formList = Array.from(document.querySelectorAll('.popup__form'));

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '.template-card');
    const cardElem = card.createCard();

    cardList.addItem(cardElem);
    }
  }, cardsContainerSelector);

  cardList.setItems();

const userInfo = new UserInfo({
  nameSelector: '.profile__name',
  aboutSelector: '.profile__job'
})

const popupProfileOpened = new PopupWithForm(
  popupProfileSelector,
  { submitCallback: (newValues) => {
    console.log(newValues.profileName);
    userInfo.setUserInfo(newValues)
    }
  }
)

buttonOpenPopupProfile.addEventListener('click', () => {
  popupProfileOpened.open();

  const items = userInfo.getUserInfo();
  inputProfileName.value = items.name;
  inputJob.value = items.about;
});

popupProfileOpened.setEventListeners();

const popupCardOpened = new PopupWithForm(
  popupCardSelector,
  { submitCallback: (newValues) => {
    const name = newValues.cardName;
    const link = newValues.url;
    const data = { name, link };
    const cardElem = newCardClass(data);
    cardsContainer.prepend(cardElem);
    }
  }
)

popupCardOpened.setEventListeners();

buttonOpenPopupCard.addEventListener('click', () => {
  popupCardOpened.open();
});

function newCardClass(item) {
  const card = new Card(item, '.template-card');
  const cardElem = card.createCard();
  return cardElem;
}

formList.forEach((formElement) => {
  const validationItem = new FormValidator(validationSettings, formElement);
  validationItem.enableValidation();
})
