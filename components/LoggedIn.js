import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from '../styles.js';
import LinkAccount from './LinkAccount.js';
import Dashboard from './Dashboard.js';

export default class LoggedIn extends React.Component {

  render() {
    let content = null;

    if (!this.props.user.has_account) {
      content = (
        <LinkAccount
          token={this.props.token}
        />
      );
    } else {
      content = <Dashboard
        user={this.props.user}
        token={this.props.token}
      />;
    }

    return (
      <View style={styles.mainContainer}>
        {content}
        <TouchableHighlight
          onPress={ () => this.props.onSignOut() }
          >
          <Text>Sign Out</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
