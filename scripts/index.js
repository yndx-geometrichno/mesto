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



function popupProfileOpen () {
  inputProfileName.value = profileName.textContent;
  inputJob.value = profileJob.textContent;
  popupProfile.style = 'visibility: visible; opacity: 1;';
}

function popupCardOpen () {
  popupCard.style = 'visibility: visible; opacity: 1;';
}


function popupClose () {
  const popup = document.querySelectorAll('.popup');
  for (let i = 0; i < popup.length; i++) {
    popup[i].style = 'opacity: 0;';
    const visibility = () => {
      popup[i].style = 'visibility: hidden;'
    }
    setTimeout(visibility, 100);
  }
}

editProfileBtn.addEventListener('click', popupProfileOpen);

for (i = 0; i < popupCloseBtns.length; i++) {
  popupCloseBtns[i].addEventListener('click', popupClose);

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

