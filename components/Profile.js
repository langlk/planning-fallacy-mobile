import React from 'react';
import { View, Text } from 'react-native';

export default class Profile extends React.Component {

  render() {
    const user = this.props.user;
    return (
      <View>
        <Text>Name: {user.name}</Text>
        <Text>Email: {user.email}</Text>
        <Text>User Since: {user.created_at}</Text>
        <Text>Average Lateness: {user.lateness / 60} minutes</Text>
      </View>
    );
  }
}
