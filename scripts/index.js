let editProfileBtn = document.querySelector('.profile__edit-btn');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popupProfile = document.querySelector('.popup_type_profile');
let popupCard = document.querySelector('.popup_type_card');
let popupCloseBtn = document.querySelectorAll('.popup__close-btn');
let popupProfileForm = document.querySelector('.popup__form-profile');
let popupCardForm = document.querySelector('.popup__form-card');
let inputProfileName = document.querySelector('.popup__input_type_profile-name');
let inputJob = document.querySelector('.popup__input_type_job');
let inputCardName = document.querySelector('.popup__input_type_card-name');
let inputUrl = document.querySelector('.popup__input_type_url');
let addCardBtn = document.querySelector('.profile__add-pic-btn');
let cardsContainer = document.querySelector('.cards');
let templateCard = document.querySelector('.template-card');
let popupPhoto = document.querySelector('.popup_type_photo');



function popupProfileOpen () {
  inputProfileName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popupProfile.style = 'visibility: visible; opacity: 1;';
}

function popupCardOpen () {
  popupCard.style = 'visibility: visible; opacity: 1;';
}


function popupClose () {
  let popup = document.querySelectorAll('.popup');
  for (let i = 0; i < popup.length; i++) {
    popup[i].style = 'opacity: 0;';
    const visibility = () => {
      popup[i].style = 'visibility: hidden;'
    }
    setTimeout(visibility, 100);
  }
}

editProfileBtn.addEventListener('click', popupProfileOpen);

for (i = 0; i < popupCloseBtn.length; i++) {
  popupCloseBtn[i].addEventListener('click', popupClose);

}

addCardBtn.addEventListener('click', popupCardOpen);


function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileJob.textContent = inputJob.value;
  popupClose();
}

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

function handleCardFormSubmit (evt) {
  evt.preventDefault();
  const name = popupCard.querySelector('.popup__input_type_card-name').value;
  const link = popupCard.querySelector('.popup__input_type_url').value;
  cardsContainer.prepend(createCard({name, link}));
  popupCard.querySelector('.popup__input_type_card-name').value = '';
  popupCard.querySelector('.popup__input_type_url').value = '';
  popupClose();
}

popupCardForm.addEventListener('submit', handleCardFormSubmit);

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

  const likeBtn = cardElem.querySelector('.card__like-btn');
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('card__like-btn_active');
  })

  const cardPhoto = cardElem.querySelector('.card__img');
  cardPhoto.addEventListener('click', () => {
    popupPhoto.querySelector('.photo-popup__photo').src = link;
    popupPhoto.querySelector('.photo-popup__photo').alt = name;
    popupPhoto.querySelector('.photo-popup__header').textContent = name;

    popupPhoto.style = 'visibility: visible; opacity: 1;';
  })

  return cardElem;
};


initialCards.forEach((item) => {
  const cardElem = createCard(item);
  cardsContainer.append(cardElem);
})

