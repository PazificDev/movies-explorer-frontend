import token from "./Token";

export const BASE_URL = 'https://api.diplomafilms.nomoreparties.sbs';

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email, password})
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
}; 

export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
  .then((res) => {
    if (res.token){
      token.setAccessToken(res.token);
      return res;
    }
  })
}; 

export const getUserData = () => {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      'authorization': `Bearer ${token.getAccessToken()}` 
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      return data;
    });
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      'Authorization': `Bearer ${token}`,
    }
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  })
} 

export const patchUserInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      'authorization': `Bearer ${token.getAccessToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({name, email}),
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
  })
  .then((data) => {
    return data;
  });
}
