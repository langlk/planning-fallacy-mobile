import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import BackendService from '../services/BackendService.js';
import StorageService from '../services/StorageService.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

export default class LoggedOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signInPage: true };

    this.togglePress = this.togglePress.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  togglePress() {
    this.setState((prevState, props) => {
      return { signInPage: !prevState.signInPage };
    });
  }

  async signIn(email, password) {
    try {
      let response = await BackendService.signIn(email, password);
      await StorageService.setUser(response);
      this.props.navigation.navigate('App', { user: response });
    } catch (error) {
      console.log(error);
    }
  }

  async signUp(name, email, password, passwordConfirmation) {
    try {
      let response = await BackendService.signUp(name, email, password, passwordConfirmation);
      await StorageService.setUser(response);
      this.props.navigation.navigate('App', { user: response });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    let text = this.state.signInPage ? 'Sign Up' : 'Sign In';
    let page = this.state.signInPage ? (
      <SignIn
        onSignIn={this.signIn}
      />
    ) : (
      <SignUp
        onSignUp={this.signUp}
      />
    );
    
    return (
      <View>
        {page}
        <TouchableHighlight
          onPress={() => this.togglePress()}
          >
          <Text>{text}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
