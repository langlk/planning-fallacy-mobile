import React from 'react';

const API_ADDRESS = 'https://planningfallacy.herokuapp.com'

export default class BackendService {

  static async signUp(name, email, password, passwordConfirmation) {
    let response = await fetch(`${API_ADDRESS}/api/v1/signup?name=${name}&email=${email}&password=${password}&password_confirmation=${passwordConfirmation}`, {
      method: 'POST'
    });
    let responseJson = await response.json();
    return responseJson;
  }

  static async signIn(email, password) {
    let response = await fetch(`${API_ADDRESS}/api/v1/signin?email=${email}&password=${password}`, {
      method: 'POST'
    });
    let responseJson = await response.json();
    return responseJson;
  }

  static async getUser(token) {
    let response = await fetch(`${API_ADDRESS}/api/v1/user`, {
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

  static async getEvents(token) {
    let response = await fetch(`${API_ADDRESS}/api/v1/events`, {
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

  static async checkIn(token, eventId) {
    let response = await fetch(`${API_ADDRESS}/api/v1/checkins?event_id=${eventId}`, {
      method: 'POST',
      headers: {
        Authorization: `Token ${token}`
      },
    });
    if (response.status !== 200) {
      let responseJson = await response.json();
      this.throwException(status, responseJson);
    }
  }

  static async clearSession(token) {
    let response = await fetch(`${API_ADDRESS}/api/v1/signout`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${token}`
      },
    });
    if (response.status !== 200) {
      let responseJson = await response.json();
      this.throwException(response.status, responseJson);
    }
  }

  static throwException(status, responseJson) {
    let message = `API Error Code: ${status}`;
    message += this.getErrorMessage(responseJson)
    throw message;
  }

  static getErrorMessage(responseJson) {
    let message = '';
    responseJson.errors.forEach((error) => {
      message += `\n${error.detail}`;
    });
    return message;
  }
}
