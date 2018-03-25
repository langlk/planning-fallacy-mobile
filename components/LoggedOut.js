import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import BackendService from '../services/BackendService.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

export default class LoggedOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signInPage: true };

    this.togglePress = this.togglePress.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  togglePress() {
    this.setState((prevState, props) => {
      return { signInPage: !prevState.signInPage };
    });
  }

  async handleSignIn(email, password) {
    try {
      let response = await BackendService.signIn(email, password);
      this.props.onSignIn(response);
    } catch (error) {
      console.log(error);
    }
  }

  async handleSignUp(name, email, password, passwordConfirmation) {
    try {
      let response = await BackendService.signUp(name, email, password, passwordConfirmation);
      this.props.onSignIn(response);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.signInPage) {
      return (
        <View>
          <SignIn
            onSignIn={this.handleSignIn}
          />
          <TouchableHighlight
            onPress={() => this.togglePress()}
            >
            <Text>Sign Up</Text>
          </TouchableHighlight>
        </View>
      );
    } else {
      return (
        <View>
          <SignUp
            onSignUp={this.handleSignUp}
          />

          <TouchableHighlight
              onPress={() => this.togglePress()}
            >
            <Text>Sign In</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }
}
