let editProfileBtn = document.querySelector('.profile__edit-btn');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');
let popup = document.querySelector('.popup');
let popupCloseBtn = document.querySelector('.popup__close-btn');
let popupSaveBtn = document.querySelector('.popup__save-btn');
let popupForm = document.querySelector('.popup__form');
let inputName = document.querySelector('.popup__input_type_name');
let inputJob = document.querySelector('.popup__input_type_job');

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
