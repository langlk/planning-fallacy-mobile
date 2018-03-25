import React from 'react';
import { AsyncStorage } from 'react-native';

const ASYNC_PREFIX = '@planningFallacy';
const KEYS = {
  user: `${ASYNC_PREFIX}:userData`
};

export default class StorageService {

  static async getUser() {
    let userData = await AsyncStorage.getItem(KEYS.user);
    let user = JSON.parse(userData);
    return user;
  }

  static async setUser(user) {
    let userData = JSON.stringify(user);
    await AsyncStorage.setItem(KEYS.user, userData);
  }

  static async clearUser() {
    await AsyncStorage.removeItem(KEYS.user);
  }
}
