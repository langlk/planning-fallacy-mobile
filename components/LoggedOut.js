import React from 'react';
import { View } from 'react-native';

import IP_ADDRESS from '../secrets.js';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

export default class LoggedOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signInPage: true };

    this.handleSignIn = this.handleSignIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  async handleSignIn(email, password) {
    try {
      let response = await fetch(`http://${IP_ADDRESS}:3000/api/v1/signin?email=${email}&password=${password}`, {
        method: 'POST'
      });
      console.log(IP_ADDRESS);
      let responseJson = await response.json();
      console.log("RESPONSE RECEIVED");
      console.log(responseJson);
      this.props.onSignIn(responseJson.token);
    } catch (error) {
      console.error(error);
    }
  }

  async handleSignUp(name, email, password, passwordConfirmation) {
    try {
      let response = await fetch(`http://${IP_ADDRESS}:3000/api/v1/signup?name=${name}&email=${email}&password=${password}&password_confirmation=${passwordConfirmation}`, {
        method: 'POST'
      });
      let responseJson = await response.json();
      this.props.onSignIn(responseJson.token);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    if (this.state.signInPage) {
      return (
        <View>
          <SignIn
            onSignIn={this.handleSignIn}
          />
        </View>
      );
    } else {
      return (
        <View>
          <SignUp
            onSignUp={this.handleSignUp}
          />
        </View>
      );
    }
  }
}
