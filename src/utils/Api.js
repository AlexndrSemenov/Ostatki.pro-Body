class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
      }
      return Promise.reject('Произошла ошибка');
  }

  getInitialTools() {
    console.log(`${this._url}/tools`);
    return fetch(`${this._url}/tools`)
      .then(this._checkResponse);
  }

  createTool(task) {
    return fetch(`${this._url}/tools`, {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify(task)
    })
      .then(this._checkResponse);
  }

}

const api = new Api({
  url: 'http://localhost:3001',
});

export default api;
