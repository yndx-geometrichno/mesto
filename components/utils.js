export const popupPhoto = document.querySelector('.popup_type_photo');
export const popupOpenedPhoto = popupPhoto.querySelector('.photo-popup__photo');
export const popupPhotoHeader = popupPhoto.querySelector('.photo-popup__header');

export function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closeEscPopup);
}

export function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEscPopup);
}

export function closeEscPopup(e) {
  if (e.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
}
