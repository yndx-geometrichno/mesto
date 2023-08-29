export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject(new Error('There is an error'))
    })
  }

  // другие методы работы с API
}

