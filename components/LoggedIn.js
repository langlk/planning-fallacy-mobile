import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import BackendService from '../services/BackendService.js';
import StorageService from '../services/StorageService.js';
import LinkAccount from './LinkAccount.js';
import Dashboard from './Dashboard.js';
import styles from '../styles/styles.js';

export default class LoggedIn extends React.Component {
  constructor(props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }

  signOut(token) {
    this.clearSession(token);
    this.clearUser();
    this.props.navigation.navigate('Auth');
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
    let user = this.props.navigation.state.params.user;
    let content = null;

    if (!user.has_account) {
      content = (
        <LinkAccount
          token={user.token}
        />
      );
    } else {
      content = <Dashboard
        user={user}
        token={user.token}
      />;
    }

    return (
      <View style={styles.mainContainer}>
        {content}
        <TouchableHighlight
          onPress={ () => this.signOut(user.token) }
          >
          <Text>Sign Out</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
