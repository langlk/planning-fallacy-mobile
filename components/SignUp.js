import React from 'react';
import { View, Text } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';

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
          <Text>Sign Up</Text>
          <Input
            containerStyle={styles.inputContainer}
            placeholder="Username"
            leftIcon={
              <Icon
                name='person'
                size={24}
                color='#aaa'
              />
            }
            leftIconContainerStyle={{
              width: styles.inputIcon.width
            }}
            placeholderTextColor='#aaa'
            onChangeText={(name) => this.setState({name})}
          />
          <Input
            containerStyle={styles.inputContainer}
            placeholder="Email"
            leftIcon={
              <Icon
                name='email'
                size={24}
                color='#aaa'
              />
            }
            leftIconContainerStyle={{
              width: styles.inputIcon.width
            }}
            placeholderTextColor='#aaa'
            onChangeText={(email) => this.setState({email})}
          />
          <Input
            containerStyle={styles.inputContainer}
            placeholder="Password"
            leftIcon={
              <Icon
                name='lock'
                size={24}
                color='#aaa'
              />
            }
            leftIconContainerStyle={{
              width: styles.inputIcon.width
            }}
            placeholderTextColor='#aaa'
            secureTextEntry={true}
            onChangeText={(password) => this.setState({password})}
          />
          <Input
            containerStyle={styles.inputContainer}
            placeholder="Password Confirmation"
            leftIcon={
              <Icon
                name='lock'
                size={24}
                color='#aaa'
              />
            }
            leftIconContainerStyle={{
              width: styles.inputIcon.width
            }}
            placeholderTextColor='#aaa'
            secureTextEntry={true}
            onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
          />
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            title="Submit"
            titleStyle={styles.buttonTitle}
            onPress={() => this.signUp(this.state.name, this.state.email, this.state.password, this.state.passwordConfirmation) }
          />
        </View>
      </View>
    );
  }
}
