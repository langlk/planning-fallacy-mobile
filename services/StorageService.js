import React from 'react';
import { AsyncStorage } from 'react-native';

const ASYNC_PREFIX = '@planningFallacy';
const KEYS = {
  token: `${ASYNC_PREFIX}:userToken`
};

export default class StorageService {

  static async getToken() {
    let tokenValue = await AsyncStorage.getItem(KEYS.token);
    return tokenValue;
  }

  static async setToken(tokenValue) {
    await AsyncStorage.setItem(KEYS.token, tokenValue);
  }

  static async clearToken() {
    await AsyncStorage.setItem(KEYS.token, null);
  }
}
