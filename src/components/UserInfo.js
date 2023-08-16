export default class UserInfo {
  constructor({ nameSelector, aboutSelector }) {
    this._nameEl = document.querySelector(nameSelector);
    this._aboutEl = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    //возвращает объект с данными пользователя
    return {
      name: this._nameEl.textContent,
      about: this._aboutEl.textContent,
    };
  }

  setUserInfo(newValues) {
    //принимает новые данные пользователя и добавляет их на страницу
    this._nameEl.textContent = newValues.profileName;
    this._aboutEl.textContent = newValues.job;
  }
}
