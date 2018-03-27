import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import BackendService from '../services/BackendService.js';
import StorageService from '../services/StorageService.js';
import styles from '../styles/styles.js';

export default class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.authenticate();
  }

  async authenticate() {
    let user = await this.getUser();
    if (user !== null) {
      let userUpdate = await this.updateUser(user.token);
      if (userUpdate !== null) {
        user = userUpdate;
        await StorageService.setUser(userUpdate);
      }
      let routeName = user.has_account ? 'Dashboard' : 'LinkAccount';
      this.props.navigation.navigate(routeName, { user: user });
    } else {
      // No saved user, go to login
      this.props.navigation.navigate('Auth');
    }
  }

  async getUser() {
    try {
      let userData = await StorageService.getUser();
      return userData;
    } catch (error) {
      // TODO: Display error when storage cannot be accessed vs no user stored.
      console.log(error);
      return null;
    }
  }

  async updateUser(token) {
    try {
      let userResponse = await BackendService.getUser(token);
      return userResponse;
    } catch (error) {
      // TODO: CHECK IF ERROR DUE TO OFFLINE/SITE DOWN VS UNAUTHORIZED
      console.log(error);
      return null;
    }
  }

  render() {
    return (
      <View style={styles.centeredContainer}>
        <ActivityIndicator
          size="large"
        />
      </View>
    );
  }
}
