import React from 'react';
import { View, Text } from 'react-native';

export default class LoggedIn extends React.Component {

  render() {
    return (
      <View>
        <Text>{this.props.user.name} is Logged In!</Text>
      </View>
    );
  }
}
