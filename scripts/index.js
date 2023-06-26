let editProfileBtn = document.querySelector('.profile__edit-btn');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup__close-btn');
let popupForm = document.querySelector('.popup__form');
let inputName = document.querySelector('.popup__input_type_name');
let inputJob = document.querySelector('.popup__input_type_job');



function popupOpCl () {
  if (popup.classList.contains('popup_opened')) {
    popup.classList.remove('popup_opened')
  } else {
    inputName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    popup.classList.add('popup_opened')
  };
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
let cardsContainer = document.querySelector('.cards');
let templateCard = document.querySelector('.template-card');

const createCard = ({name, link}) => {
  const clone = templateCard.content.cloneNode(true);
  const cardElem = clone.querySelector('.card');
  cardElem.querySelector('.card__img').src = link;
  cardElem.querySelector('.card__img').alt = name;
  cardElem.querySelector('.card__name').textContent = name;

  const deleteElem = cardElem.querySelector('.card__delete-btn');
  deleteElem.addEventListener('click', () => {
    cardElem.remove();
  });

  return cardElem;
};


initialCards.forEach((item) => {
  const cardElem = createCard(item);
  cardsContainer.append(cardElem);
})


