import React from 'react';
import { Keyboard, ScrollView, View } from 'react-native';
import { Button, Icon, Input, Text } from 'react-native-elements';

import styles from '../styles/styles.js';
import BackendService from '../services/BackendService.js';
import StorageService from '../services/StorageService.js';

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

  async signUp(name, email, password, passwordConfirmation) {
    try {
      let response = await BackendService.signUp(name, email, password, passwordConfirmation);
      await StorageService.setUser(response);
      this.props.navigation.navigate('LinkAccount', { user: response });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return(
      <View style={styles.centeredContainer}>
        // Currently using this sol'n but will likely switch to android-specific option on eject.
        <ScrollView
          ref="scrollView"
          scrollEnabled={false}
        >
          <View style={styles.signUpContainer}>
            <Text h1 style={styles.header1}>Sign Up</Text>
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
  }
}
