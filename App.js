import React from 'react';
import { AsyncStorage } from 'react-native';

import IP_ADDRESS from './secrets.js';
import BackendService from './services/BackendService.js'
import LoggedOut from './components/LoggedOut.js';
import LoggedIn from './components/LoggedIn.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      token: null
    };

    this.signOut = this.signOut.bind(this);
    this.setToken = this.setToken.bind(this);
  }

  componentDidMount() {
    this.getToken();
  }

  render() {
    if (this.state.user) {
      return(
        <LoggedIn
          user={this.state.user}
          token={this.state.token}
          onSignOut={this.signOut}
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
        this.setState({ token: tokenValue });
        this.getUser(tokenValue);
      } else {
        console.log('No token stored.');
      }
    } catch (error) {
      console.error(error);
    }
  }

  async getUser(token) {
    try {
      let userResponse = await BackendService.getUser(token);
      this.setState({ user: userResponse });
    } catch (error) {
      console.log(error);
    }
  }

  async setToken(token) {
    try {
      await AsyncStorage.setItem('userToken', token);
      this.getUser(token);
    } catch (error) {
      console.error(error);
    }
  }

  signOut() {
    this.clearSession(this.state.token);
    this.clearToken();
    this.setState({
      user: null,
      token: null
    });
  }

  async clearSession(token) {
    try {
      let response = await BackendService.clearSession(token);
    } catch (error) {
      console.log(error);
    }
  }

  async clearToken() {
    try {
      await AsyncStorage.setItem('userToken', null);
    } catch (error) {
      console.error(error);
    }
  }
}
