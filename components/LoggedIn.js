import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import styles from '../styles.js';
import LinkAccount from './LinkAccount.js';

export default class LoggedIn extends React.Component {
  render() {
    let content = null;

    if (!this.props.user.hasAccount) {
      content = (
        <LinkAccount
          token={this.props.token}
          onAccountLink={this.props.onAccountLink()}
        />
      );
    } else {
      content = <Text>Welcome, {this.props.user.name}</Text>
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
