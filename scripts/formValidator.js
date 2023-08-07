export const validationSettings = {
  formSelector: "popup__form",
  inputSelector: "popup__input",
  submitButtonSelector: "popup__save-btn",
  inactiveButtonClass: "popup__save-btn_type_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export class FormValidator {
  constructor(validationSettings, formElement) {
    this._formElement = formElement;
    this._formSelector = validationSettings.formSelector;
    this._inputSelector = validationSettings.inputSelector;
    this._submitButtonSelector = validationSettings.submitButtonSelector;
    this._inactiveButtonClass = validationSettings.inactiveButtonClass;
    this._inputErrorClass = validationSettings.inputErrorClass;
    this._errorClass = validationSettings.errorClass;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(`.${this._inputSelector}`)
    );
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        let buttonElement = this._formElement.querySelector(
          `.${this._submitButtonSelector}`
        );
        this._toggleSubmitButton(buttonElement);
      });
    });
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _showInputError = (inputElement) => {
    const errorElement = inputElement
      .closest("label")
      .querySelector(`.${inputElement.id}-error`);

    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElement = inputElement
      .closest("label")
      .querySelector(`.${inputElement.id}-error`);

    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  };

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }

  disableSubmitButton() {
    const submitButton = this._formElement.querySelector(
      `.${this._submitButtonSelector}`
    );

    submitButton.classList.add(this._inactiveButtonClass);
    submitButton.setAttribute("disabled", false);
  }

  _enableSubmitButton() {
    const submitButton = this._formElement.querySelector(
      `.${this._submitButtonSelector}`
    );

    submitButton.classList.remove(this._inactiveButtonClass);
    submitButton.removeAttribute("disabled", true);
  }

  _toggleSubmitButton() {
    if (this._hasInvalidInput(this._inputList)) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  enableValidation() {
    this._setEventListeners();

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    return this._formElement;
  }
}
