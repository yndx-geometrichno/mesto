export default class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    handleDeleteBtnClick,
    apiSetLike,
    apiRemoveLike,
    myId
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardId = data._id;
    this._userId = data.owner._id;
    this._myId = myId;
    this._serverLikes = data.likes.length;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteBtnClick = handleDeleteBtnClick;
    this._apiRemoveLike = apiRemoveLike;
    this._apiSetLike = apiSetLike;
    this._handleLikeBtnClick = this._handleLikeBtnClick.bind(this);
    this._likeBtnIsPressed = this._likeBtnIsPressed.bind(this);
  }

  _getTemplate() {
    const cardElem = document
      .querySelector(this._templateSelector)
      .content.cloneNode(true);
    return cardElem;
  }

  _likeBtnIsPressed() {
    if (this._data.likes.some((like) => like._id === this._myId)) {
      this._likeBtn.classList.add("card__like-btn_active");
    }
  }

  _handleLikeBtnClick() {
    if (this._likeBtn.classList.contains("card__like-btn_active")) {
      this._apiRemoveLike(this._cardId, this._likeCounter);
      this._likeBtn.classList.remove("card__like-btn_active");
    } else {
      this._apiSetLike(this._cardId, this._likeCounter);
      this._likeBtn.classList.add("card__like-btn_active");
    }
  }

  _setEventListeners() {
    this._deleteElement = this._element.querySelector(".card__delete-btn");
    this._deleteElement.addEventListener("click", () => {
      this._handleDeleteBtnClick(this._cardId, this._deleteElement);
    });

    this._likeBtn = this._element.querySelector(".card__like-btn");
    this._likeBtn.addEventListener("click", () => {
      this._handleLikeBtnClick(this._likeBtn, this._cardId);
    });

    const cardPhoto = this._element.querySelector(".card__img");
    cardPhoto.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  createCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._likeBtnIsPressed();
    if (this._userId !== this._myId) {
      this._element.querySelector(".card__delete-btn").remove();
    }
    this._likeCounter = this._element.querySelector(".card__like-counter");
    this._element.querySelector(".card__like-counter").textContent =
      this._serverLikes;
    this._element.querySelector(".card__name").textContent = this._name;
    this._element.querySelector(".card__img").src = this._link;
    this._element.querySelector(".card__img").alt = this._name;

    return this._element;
  }
}
