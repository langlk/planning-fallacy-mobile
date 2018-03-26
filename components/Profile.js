import React from 'react';
import { View, Text } from 'react-native';

import StorageService from '../services/StorageService.js';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user: null };
    this.getUser();
  }

  async getUser() {
    try {
      let user = await StorageService.getUser();
      this.setState({user: user});
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return this.state.user ? (
      <View>
        <Text>Planning Fallacy</Text>
        <Text>{this.state.user.name}</Text>
        <Text>{this.state.user.email}</Text>
        <Text>{this.state.user.lateness ? `Average Lateness: ${this.state.user.lateness / 60} minutes` : null}</Text>
      </View>
    ) : <View><Text>Planning Fallacy</Text></View>;
  }
}
