import React from 'react';
import { AsyncStorage } from 'react-native';

import BackendService from './services/BackendService.js';
import StorageService from './services/StorageService.js';
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
      let tokenValue = await StorageService.getToken();
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
      await StorageService.setToken(token);
      this.setState({ token: token });
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
      await StorageService.clearToken();
    } catch (error) {
      console.log(error);
    }
  }
}
