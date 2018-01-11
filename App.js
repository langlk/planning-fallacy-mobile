import React from 'react';
import { AsyncStorage, View, Text } from 'react-native';

import Authorization from './Authorization.js';
import { IP_ADDRESS } from './secrets.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: null };
  }

  componentDidMount() {
    this.getToken();
  }

  render() {
    if (this.state.user) {
      return(
        <Text>We have a user!</Text>
      );
    } else {
      return(
        <Authorization />
      );
    }
  }

  async getToken() {
    try {
      let tokenValue = await AsyncStorage.getItem('userToken');
      if (tokenValue !== null){
        this.getUser(tokenValue);
      } else {
        console.log('No token stored.');
      }
    } catch (error) {
      console.error('Could not access storage.');
    }
  }

  async getUser(token) {
    try {
      let response = await fetch(`http://${IP_ADDRESS}:3000/api/v1/user`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      let responseJson = await response.json();
      this.setState({ user: responseJson });
    } catch (error) {
      console.error(error);
    }
  }
}
