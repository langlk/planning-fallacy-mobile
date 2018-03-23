import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class LoggedIn extends React.Component {

  render() {
    return (
      <View>
        <Text>{this.props.user.name} is Logged In!</Text>
        <TouchableHighlight
          onPress={ () => this.props.onSignOut() }
          >
          <Text>Sign Out</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
