const editProfileBtn = document.querySelector('.profile__edit-btn');

const profileName = document.querySelector('.profile__name');

const profileJob = document.querySelector('.profile__job');

const popupProfile = document.querySelector('.popup_type_profile');

const popupCard = document.querySelector('.popup_type_card');

const popupCloseBtns = document.querySelectorAll('.popup__close-btn');

const popupProfileForm = document.querySelector('.popup__form-profile');

const popupCardForm = document.querySelector('.popup__form-card');

const inputProfileName = document.querySelector('.popup__input_type_profile-name');

const inputJob = document.querySelector('.popup__input_type_job');

const inputUrl = document.querySelector('.popup__input_type_url');

const addCardBtn = document.querySelector('.profile__add-pic-btn');

const cardsContainer = document.querySelector('.cards');

const templateCard = document.querySelector('.template-card');

const popupPhoto = document.querySelector('.popup_type_photo');

const cardName = popupCard.querySelector('.popup__input_type_card-name');

const cardLink = popupCard.querySelector('.popup__input_type_url');

const popupImg = popupPhoto.querySelector('.photo-popup__photo');

const popupImgHeader = popupPhoto.querySelector('.photo-popup__header');

function openPopup (popup) {
  switch (popup) {
  case 'profile':
    inputProfileName.value = profileName.textContent;
    inputJob.value = profileJob.textContent;
    popupProfile.classList.add('popup_opened');
    break;
  case 'card':
    popupCard.classList.add('popup_opened');
    break;
  case 'photo':
    popupPhoto.classList.add('popup_opened');
  }
}

function closePopup () {
  const popup = document.querySelectorAll('.popup');
  for (let i = 0; i < popup.length; i++) {
    popup[i].classList.remove('popup_opened');
  }
}

function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = inputProfileName.value;
  profileJob.textContent = inputJob.value;
  closePopup();
}

function handleCardFormSubmit (evt) {
  evt.preventDefault();
  const name = cardName.value;
  const link = cardLink.value;
  cardsContainer.prepend(createCard({name, link}));
  cardName.value = '';
  cardLink.value = '';
  closePopup();
}

const createCard = ({name, link}) => {
  const clone = templateCard.content.cloneNode(true);
  const cardElem = clone.querySelector('.card');
  const cardImg = cardElem.querySelector('.card__img');
  cardImg.src = link;
  cardImg.alt = name;
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
    popupImg.src = link;
    popupImg.alt = name;
    popupImgHeader.textContent = name;
    openPopup('photo');
  })

  return cardElem;
};

initialCards.forEach((item) => {
  const cardElem = createCard(item);
  cardsContainer.append(cardElem);
})

editProfileBtn.addEventListener('click', () => {
  openPopup('profile');
});

for (i = 0; i < popupCloseBtns.length; i++) {
  popupCloseBtns[i].addEventListener('click', closePopup);
}

addCardBtn.addEventListener('click', () => {
  openPopup('card');
});

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

popupCardForm.addEventListener('submit', handleCardFormSubmit);







