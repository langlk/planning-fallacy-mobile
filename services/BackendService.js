import React from 'react';

import IP_ADDRESS from '../secrets.js';

export default class BackendService {

  static async signUp(name, email, password, passwordConfirmation) {
    let response = await fetch(`http://${IP_ADDRESS}:3000/api/v1/signup?name=${name}&email=${email}&password=${password}&password_confirmation=${passwordConfirmation}`, {
      method: 'POST'
    });
    let responseJson = await response.json();
    if (response.status === 200) {
      return responseJson;
    } else {
      this.throwException(response.status, responseJson);
    }
  }

  static async signIn(email, password) {
    let response = await fetch(`http://${IP_ADDRESS}:3000/api/v1/signin?email=${email}&password=${password}`, {
      method: 'POST'
    });
    let responseJson = await response.json();
    if (response.status === 200) {
      return responseJson;
    } else {
      this.throwException(response.status, responseJson);
    }
  }

  static async getUser(token) {
    let response = await fetch(`http://${IP_ADDRESS}:3000/api/v1/user`, {
      method: 'GET',
      headers: {
        Authorization: `Token ${token}`
      },
    });
    let responseJson = await response.json();
    if (response.status === 200) {
      return responseJson;
    } else {
      this.throwException(response.status, responseJson);
    }
  }

  static async clearSession(token) {
    let response = await fetch(`http://${IP_ADDRESS}:3000/api/v1/signout`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${token}`
      },
    });
    let responseJson = await response.json();
    if (response.status !== 200) {
      this.throwException(response.status, responseJson);
    }
  }

  static throwException(status, responseJson) {
    let message = `API Error Code: ${status}`;
    responseJson.errors.forEach((error) => {
      message += `\n${error.detail}`;
    });
    throw message;
  }
}
