import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import BackendService from '../services/BackendService.js';
import StorageService from '../services/StorageService.js';
import styles from '../styles/styles.js';

export default class SignOut extends React.Component {
  static navigationOptions = {
    drawerLabel: "Sign Out"
  };

  constructor(props) {
    super(props);
    this.signOut();
  }

  async signOut() {
    try {
      let user = await StorageService.getUser();
      this.clearSession(user.token);
      this.clearUser();
      console.log("finished signingout, navigating to auth");
      this.props.navigation.navigate('Auth');
    } catch (error) {
      console.log(error);
    }
  }

  async clearSession(token) {
    try {
      let response = await BackendService.clearSession(token);
    } catch (error) {
      console.log(error);
    }
  }

  async clearUser() {
    try {
      await StorageService.clearUser();
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text>Signing Out</Text>
        <ActivityIndicator />
      </View>
    );
  }
}
