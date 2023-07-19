const editProfileBtn = document.querySelector('.profile__edit-btn');

const profileName = document.querySelector('.profile__name');

const profileJob = document.querySelector('.profile__job');

const popups = document.querySelectorAll('.popup');

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
  popup.classList.add('popup_opened');
  addPopupEventListeners(popup);
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('click', closeClickPopup);
  document.removeEventListener('keydown', closeEscPopup);
}

function addPopupEventListeners(popup) {
  popup.addEventListener('click', closeClickPopup);
  document.addEventListener('keydown', closeEscPopup);
}

function closeClickPopup (e) {
  if (e.target === e.currentTarget) {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}

function closeEscPopup (e) {
  if (e.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  };
}

function handleProfileFormSubmit (evt) {
  profileName.textContent = inputProfileName.value;
  profileJob.textContent = inputJob.value;
  closePopup(popupProfile);
}

function handleCardFormSubmit (evt) {
  const name = cardName.value;
  const link = cardLink.value;
  cardsContainer.prepend(createCard({name, link}));
  cardName.value = '';
  cardLink.value = '';
  closePopup(popupCard);
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
    openPopup(popupPhoto);
  })

  return cardElem;
};

initialCards.forEach((item) => {
  const cardElem = createCard(item);
  cardsContainer.append(cardElem);
})

editProfileBtn.addEventListener('click', () => {
  inputProfileName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  openPopup(popupProfile);
  disableBtn(popupProfile);
});

popupCloseBtns.forEach(element => element.addEventListener('click', () => {
  closePopup(element.closest('.popup'));
}));

addCardBtn.addEventListener('click', () => {
  openPopup(popupCard);
  disableBtn(popupCard);
});

popupProfileForm.addEventListener('submit', handleProfileFormSubmit);

popupCardForm.addEventListener('submit', handleCardFormSubmit);

const disableBtn = (item) => {
  item.querySelector('.popup__save-btn').classList.add('popup__save-btn_type_disabled');
  item.querySelector('.popup__save-btn').setAttribute('disabled', true);
}
