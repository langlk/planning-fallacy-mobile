import React from 'react';
import { View } from 'react-native';
import { Button, Icon, Input, Text } from 'react-native-elements';

import styles from '../styles/styles.js';
import BackendService from '../services/BackendService.js';
import StorageService from '../services/StorageService.js';

export default class SignIn extends React.Component {
  static navigationOptions = {
    title: 'Sign In'
  };

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };

    this.signIn = this.signIn.bind(this);
  }

  async signIn(email, password) {
    try {
      let user = await BackendService.signIn(email, password);
      await StorageService.setUser(user);
      let routeName = user.has_account ? 'Dashboard' : 'LinkAccount';
      this.props.navigation.navigate(routeName, { user: user });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return(
      <View style={styles.centeredContainer}>
        <View style={styles.formContainer}>
          <Text h1 style={styles.header1}>Sign In</Text>
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
          <Button
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.button}
            titleStyle={styles.buttonTitle}
            onPress={() => this.signIn(this.state.email, this.state.password) }
            title="Submit"
          />
        </View>
      </View>
    );
  }
}
