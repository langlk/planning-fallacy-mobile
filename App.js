import React from 'react';
import { AsyncStorage } from 'react-native';

import IP_ADDRESS from './secrets.js';
import LoggedOut from './components/LoggedOut.js';
import LoggedIn from './components/LoggedIn.js';

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
        <LoggedIn
          user={this.state.user}
        />
      );
    } else {
      return(
        <LoggedOut
          onSignIn={this.setToken}
        />
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

  async setToken(token) {
    try {
      await AsyncStorage.setItem('userToken', token);
      this.getUser(token);
    } catch (error) {
      console.error('Could not access storage.');
    }
  }
}
