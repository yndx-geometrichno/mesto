export const validationSettings = {
  formSelector: "popup__form",
  inputSelector: "popup__input",
  submitButtonSelector: "popup__save-btn",
  inactiveButtonClass: "popup__save-btn_type_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export class FormValidator {
  constructor(data, formSelector) {
    this._formSelector = formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._inputList = Array.from(
      document.querySelectorAll(`.${this._inputSelector}`)
    );
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _showInputError = () => {
    const errorElement = this._formSelector.querySelector(`.${this._inputSelector.id}-error`);
    this._inputSelector.classList.add(this._inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError = (formElement, inputElement) => {
    const errorElement = document.querySelector(`.${formElement}`).querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _isValid(inputElement) {

    console.log(inputElement);
    if (!inputElement.validity.valid) {
      inputElement._showInputError(
        this._formElement,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      inputElement.this._hideInputError(this._formElement, inputElement);
    }
  }

  disableSubmitButton() {
    this._submitButtonSelector.classList.add(this._inactiveButtonClass);
    this._submitButtonSelector.setAttribute("disabled", false);
  }

  _enableSubmitButton() {
    this._submitButtonSelector.classList.remove(this._inactiveButtonClass);
    this._submitButtonSelector.removeAttribute("disabled", true);
  }

  _toggleSubmitButton() {
    if (this._inputList._hasInvalidInput()) {
      this._submitButtonSelector.disableSubmitButton();
    } else {
      this._submitButtonSelector.enableSubmitButton();
    }
  }

  _setEventListeners() {
    // console.log(this._inputList);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        // console.log(this);
        this._isValid(inputElement);
        let buttonElement = inputElement.querySelector(`.${this._inputList._submitButtonSelector}`)
        buttonElement._toggleButtonState();
      });
    });
  }

  _getForm() {
    const formElement = document.querySelector(`.${this._formSelector}`);
    return formElement;
  }

  enableValidation() {
    this._formElement = this._getForm();
    // console.log(this._formElement);
    // console.log(this._setEventListeners)
    this._setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    return this._formElement;
  }
}



