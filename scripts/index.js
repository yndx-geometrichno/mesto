let editProfileBtn = document.querySelector('.profile__edit-btn');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup__close-btn');
let popupSaveBtn = document.querySelector('.popup__save-btn');
let popupForm = document.querySelector('.popup__form');
let inputName = document.querySelector('.popup__input_type_name');
let inputJob = document.querySelector('.popup__input_type_job');
let cardsContainer = document.querySelector('.cards');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

inputName.value = profileName.textContent;
inputJob.value = profileJob.textContent;

function popupOpCl () {
  popup.classList.toggle('popup_opened');
}

editProfileBtn.addEventListener('click', popupOpCl);

popupCloseBtn.addEventListener('click', popupOpCl);


function handleFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileJob.textContent = inputJob.value;
  popupOpCl();
}

popupForm.addEventListener('submit', handleFormSubmit);


// Достаем из документа заготовку для карточки с фото
let templateCard = document.querySelector('.template-card');

// Функция, добавляющая новую карточку
const addCard = ({name, link}) => {
  let clone = templateCard.content.cloneNode(true);
  let cardElem = clone.querySelector('.card');
  cardElem.querySelector('.card__img').src = link;
  cardElem.querySelector('.card__img').alt = name;
  cardElem.querySelector('.card__name').textContent = name;
  return cardElem;
};


// Добавляем на страницу заготовки карточек
initialCards.forEach((item) => {
  const cardElement = addCard(item);
  cardsContainer.append(cardElement);
});
