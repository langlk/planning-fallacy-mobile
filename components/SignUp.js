import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
      <View>
        <Text>Sign Up</Text>
        <TextInput
          placeholder="Username"
          onChangeText={(name) => this.setState({name})}
        />
        <TextInput
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
        <TextInput
          placeholder="Password Confirmation"
          secureTextEntry={true}
          onChangeText={(passwordConfirmation) => this.setState({passwordConfirmation})}
        />
        <Button
          title="Submit"
          onPress={() => this.signUp(this.state.name, this.state.email, this.state.password, this.state.passwordConfirmation) }
        />
      </View>
    );
  }
}
