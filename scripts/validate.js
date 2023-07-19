const toggleButtonState = (inputList, buttonElement, arr) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(arr.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(arr.inactiveButtonClass);
    buttonElement.removeAttribute('disabled', false);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
}

const isValid = (formElement, inputElement, arr) => {
  if (!inputElement.validity.valid) {
    showInputError(arr, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(arr, formElement, inputElement);
  }
};

const showInputError = (arr, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(arr.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(arr.errorClass);
};

const hideInputError = (arr, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(arr.inputErrorClass);
  errorElement.classList.remove(arr.errorClass);
  errorElement.textContent = '';
};

const setEventListeners = (formElement, arr) => {
  const inputList = Array.from(formElement.querySelectorAll(`.${arr.inputSelector}`));
  const buttonElements = Array.from(formElement.querySelectorAll(`.${arr.submitButtonSelector}`));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, arr);
      buttonElements.forEach((buttonElement) => {
        toggleButtonState(inputList, buttonElement, arr);
      })
    });
  });
};

const enableValidation = (arr) => {
  const formList = Array.from(document.querySelectorAll(`.${arr.formSelector}`));
  formList.forEach((formElement) => {
    setEventListeners(formElement, arr);
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
  });
};

enableValidation({
  formSelector: 'popup__form',
  inputSelector: 'popup__input',
  submitButtonSelector: 'popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_type_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

