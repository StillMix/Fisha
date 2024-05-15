class Api {
    constructor(config) {
        this._url = config.url;
    }
    _check(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject("Произошла ошибка");
        }
    }
    getCards() {
        return fetch(`${this._url}/cards/`, {
          credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
        }).then((res) => {
            return this._check(res)

        });
    }

    addCard(balance) {
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                balance: balance
            }),
        }).then((res) => {
            return this._check(res)
        });
    }

    backUser() {
      return fetch(`${this._url}/users/backuser`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
      }).then((res) => {
          return this._check(res)
      });
  }


    setUserInfo(balance) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                balance:balance }),
        }).then((res) => {
            return this._check(res)
        });
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
          credentials: 'include',
                headers: {
                  'Content-Type': 'application/json',
                },
            })
            .then((res) => {
                return this._check(res)
            })
    }

    changeLikeCardStatus(id){
      return fetch(`${this._url}/users/cards/${id}/like`, {
        method: 'PUT' ,
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
      },
    }).then((res) => {
        return this._check(res)
    });
    }
}

const api = new Api({
    url: 'https://server-fish.netlify.app/.netlify/functions/api',
})

export default api;