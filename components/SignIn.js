import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

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
      <View>
        <Text>Sign In</Text>
        <TextInput
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
        <Button
          onPress={() => this.signIn(this.state.email, this.state.password) }
          title="Submit"
        />
      </View>
    );
  }
}
