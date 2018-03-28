import React from 'react';
import { View } from 'react-native';
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

    this.signUp = this.signUp.bind(this);
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
        <View style={styles.formContainer}>
          <Text h1 style={styles.header1}>Sign Up</Text>
          <Input
            onChangeText={(name) => this.setState({name})}
            ref={input => (this.nameInput = input)}
            returnKeyType='next'
            onSubmitEditing={() => {this.emailInput.focus()}}
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
            onChangeText={(email) => this.setState({email})}
            ref={input => (this.emailInput = input)}
            returnKeyType='next'
            onSubmitEditing={() => {this.passwordInput.focus()}}
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
            onChangeText={(password) => this.setState({password})}
            ref={input => (this.passwordInput = input)}
            returnKeyType='next'
            onSubmitEditing={() => {this.confirmationInput.focus()}}
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
            onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
            ref={input => (this.confirmationInput = input)}
            returnKeyType='next'
            onSubmitEditing={() => this.signUp(this.state.name, this.state.email, this.state.password, this.state.passwordConfirmation)}
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
      </View>
    );
  }
}
