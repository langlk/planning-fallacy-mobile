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
      user: null
    };

    this.signOut = this.signOut.bind(this);
    this.signIn = this.signIn.bind(this);
  }

  componentDidMount() {
    this.getToken();
  }

  render() {
    if (this.state.user) {
      return(
        <LoggedIn
          user={this.state.user}
          token={this.state.user.token}
          onSignOut={this.signOut}
        />
      );
    } else {
      return(
        <LoggedOut
          onSignIn={this.signIn}
        />
      );
    }
  }

  async getToken() {
    try {
      let userData = await StorageService.getUser();
      if (userData !== null){
        this.setState({ user: userData });
        this.updateUser(userData.token);
      } else {
        console.log('No user data stored.');
      }
    } catch (error) {
      console.log(error);
    }
  }

  async updateUser(token) {
    try {
      let userResponse = await BackendService.getUser(token);
      this.setState({ user: userResponse });
    } catch (error) {
      console.log(error);
    }
  }

  async signIn(userData) {
    try {
      await StorageService.setUser(userData);
      this.setState({ user: userData });
    } catch (error) {
      console.log(error);
    }
  }

  signOut() {
    this.clearSession(this.state.token);
    this.clearUser();
    this.setState({
      user: null
    });
  }

  async clearSession(token) {
    try {
      let response = await BackendService.clearSession(token);
    } catch (error) {
      console.log(error);
    }
  }

  async clearUser() {
    try {
      await StorageService.clearUser();
    } catch (error) {
      console.log(error);
    }
  }
}
