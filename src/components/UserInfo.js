export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._nameEl = document.querySelector(nameSelector);
    this._aboutEl = document.querySelector(aboutSelector);
    this._avatarEl = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    //возвращает объект с данными пользователя
    return {
      name: this._nameEl.textContent,
      about: this._aboutEl.textContent,
    };
  }

  setUserInfo({ name, about, avatar }) {
    //принимает новые данные пользователя и добавляет их на страницу
    this._nameEl.textContent = name;
    this._aboutEl.textContent = about;
    this._avatarEl.src = avatar;
  }
}
