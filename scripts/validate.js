// const validationSettings = {
//   formSelector: "popup__form",
//   inputSelector: "popup__input",
//   submitButtonSelector: "popup__save-btn",
//   inactiveButtonClass: "popup__save-btn_type_disabled",
//   inputErrorClass: "popup__input_type_error",
//   errorClass: "popup__error_visible",
// };

// const toggleButtonState = (inputList, buttonElement, obj) => {
//   if (hasInvalidInput(inputList)) {
//     disableSubmitButton(buttonElement, obj);
//   } else {
//     enableSubmitButton(buttonElement, obj);
//   }
// };

// const enableSubmitButton = (buttonElement, obj) => {
//   buttonElement.classList.remove(obj.inactiveButtonClass);
//   buttonElement.removeAttribute("disabled", true);
// }

// const disableSubmitButton = (buttonElement, obj = validationSettings) => {
//   buttonElement.classList.add(obj.inactiveButtonClass);
//   buttonElement.setAttribute("disabled", false);
// }

// const hasInvalidInput = (inputList) => {
//   return inputList.some((inputElement) => {
//     return !inputElement.validity.valid;
//   });
// };

const isValid = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showInputError(
      obj,
      formElement,
      inputElement,
      inputElement.validationMessage
    );
  } else {
    hideInputError(obj, formElement, inputElement);
  }
};

const showInputError = (obj, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorClass);
};

const hideInputError = (obj, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.errorClass);
  errorElement.textContent = "";
};

// const setEventListeners = (formElement, obj) => {
//   const inputList = Array.from(
//     formElement.querySelectorAll(`.${obj.inputSelector}`)
//   );
//   let buttonElement = formElement.querySelector(`.${obj.submitButtonSelector}`)

//   inputList.forEach((inputElement) => {
//     inputElement.addEventListener("input", () => {
//       isValid(formElement, inputElement, obj);
//       toggleButtonState(inputList, buttonElement, obj);
//     });
//   });
// };

// const enableValidation = (obj) => {
//   const formList = Array.from(
//     document.querySelectorAll(`.${obj.formSelector}`)
//   );
//   formList.forEach((formElement) => {
//     setEventListeners(formElement, obj);
//     formElement.addEventListener("submit", (evt) => {
//       evt.preventDefault();
//     });
//   });
// };

// enableValidation(validationSettings);
