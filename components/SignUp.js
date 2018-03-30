import React from 'react';
import { Keyboard, ScrollView, View } from 'react-native';
import { Button, Icon, Input, Text } from 'react-native-elements';

import styles from '../styles/styles.js';
import BackendService from '../services/BackendService.js';
import StorageService from '../services/StorageService.js';
import LoadingDisplay from './LoadingDisplay.js';

export default class SignUp extends React.Component {
  static navigationOptions =  {
    title: 'Sign Up'
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      signingUp: false,
      errorMessage: null
    };
    this.formFocused = false;

    this.signUp = this.signUp.bind(this);
    this.inputFocused = this.inputFocused.bind(this);
    this.inputBlurred = this.inputBlurred.bind(this);
    this.formBlurred = this.formBlurred.bind(this);
  }

  componentWillMount() {
    this.keyboardHideListener = Keyboard.addListener('keyboardDidHide', this.formBlurred);
  }

  componentWillUnmount() {
    this.keyboardHideListener.remove();
  }

  // Currently using this sol'n but will likely switch to android-specific option on eject.
  inputFocused(inputName) {
    this.formFocused = true;
    const heights = {
      'name': 0,
      'email': 60,
      'password': 120,
      'passwordConfirmation': 180
    };
    this.refs.scrollView.scrollTo({x: 0 , y: heights[inputName], animated: true});
  }

  inputBlurred() {
    this.formFocused = false;
    setTimeout(() => {
      this.formBlurred()
    }, 100);
  }

  formBlurred() {
    if (!this.formFocused) {
      this.refs.scrollView.scrollTo({x: 0 , y: 0, animated: true});
    }
  }

  checkValues() {
    const vals = ['name', 'email', 'password', 'passwordConfirmation'];
    const names = ['Username', 'Email', 'Password', 'Password confirmation'];
    for (let i = 0; i < vals.length; i++) {
      if (this.state[vals[i]].length == 0) {
        throw `${names[i]} cannot be blank`;
      }
    }
    if (this.state.password != this.state.passwordConfirmation) {
      throw "Password and confirmation must match";
    }
  }

  async signUp(name, email, password, passwordConfirmation) {
    try {
      await this.setState({
        signingUp: true,
        errorMessage: null
      });
      this.checkValues();
      let user = await BackendService.signUp(name, email, password, passwordConfirmation);
      if (user.errors == null) {
        await StorageService.setUser(user);
        this.props.navigation.navigate('LinkAccount', { user: user });
      } else {
        this.setState({
          signingUp: false,
          errorMessage: user.errors.length > 0 ? user.errors[0].detail : "Something went wrong"
        });
      }
    } catch (error) {
      this.setState({
        signingUp: false,
        errorMessage: error.message || error
      });
    }
  }

  render() {
    const content = this.state.signingUp ? (
      <View style={styles.centeredContainer}>
        <LoadingDisplay text="Signing Up" />
      </View>
    ) : (
      <View style={styles.centeredContainer}>
        <ScrollView
          ref="scrollView"
          scrollEnabled={false}
        >
          <View style={styles.signUpContainer}>
            <Text h1 style={styles.header1}>Sign Up</Text>
            <Text style={styles.errorText}>{this.state.errorMessage}</Text>
            <Input
              ref={input => (this.nameInput = input)}
              onFocus={() => this.inputFocused('name')}
              onChangeText={(name) => this.setState({name})}
              returnKeyType='next'
              onSubmitEditing={() => this.emailInput.focus()}
              onBlur={() => this.inputBlurred()}
              placeholder="Username"
              leftIcon={
                <Icon
                  name='person'
                  size={24}
                  color='#aaa'
                />
              }
              containerStyle={styles.inputContainer}
              leftIconContainerStyle={{
                width: styles.inputIcon.width
              }}
              placeholderTextColor='#aaa'
            />
            <Input
              onFocus={() => this.inputFocused('email')}
              onChangeText={(email) => this.setState({email})}
              ref={input => (this.emailInput = input)}
              returnKeyType='next'
              onSubmitEditing={() => this.passwordInput.focus()}
              onBlur={() => this.inputBlurred()}
              placeholder="Email"
              leftIcon={
                <Icon
                  name='email'
                  size={24}
                  color='#aaa'
                />
              }
              containerStyle={styles.inputContainer}
              leftIconContainerStyle={{
                width: styles.inputIcon.width
              }}
              placeholderTextColor='#aaa'
              autoCapitalize='none'
              keyboardType='email-address'
            />
            <Input
              onFocus={() => this.inputFocused('password')}
              onChangeText={(password) => this.setState({password})}
              ref={input => (this.passwordInput = input)}
              returnKeyType='next'
              onSubmitEditing={() => this.confirmationInput.focus()}
              onBlur={() => this.inputBlurred()}
              placeholder="Password"
              leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  color='#aaa'
                />
              }
              containerStyle={styles.inputContainer}
              leftIconContainerStyle={{
                width: styles.inputIcon.width
              }}
              placeholderTextColor='#aaa'
              secureTextEntry={true}
            />
            <Input
              onFocus={() => this.inputFocused('passwordConfirmation')}
              onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
              ref={input => (this.confirmationInput = input)}
              returnKeyType='next'
              onSubmitEditing={() => this.signUp(this.state.name, this.state.email, this.state.password, this.state.passwordConfirmation)}
              onBlur={() => this.inputBlurred()}
              placeholder="Password Confirmation"
              leftIcon={
                <Icon
                  name='lock'
                  size={24}
                  color='#aaa'
                />
              }
              containerStyle={styles.inputContainer}
              leftIconContainerStyle={{
                width: styles.inputIcon.width
              }}
              placeholderTextColor='#aaa'
              secureTextEntry={true}
            />
            <Button
              containerStyle={styles.buttonContainer}
              buttonStyle={styles.button}
              title="Submit"
              titleStyle={styles.buttonTitle}
              onPress={() => this.signUp(this.state.name, this.state.email, this.state.password, this.state.passwordConfirmation)}
            />
          </View>
        </ScrollView>
      </View>
    );
    return content;
  }
}
