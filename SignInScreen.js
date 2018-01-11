import React from 'react';
import { View, Text, TextInput, Button, AsyncStorage, StyleSheet } from 'react-native';

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  signInUser() {
    console.log(this.state);
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
          onPress={() => this.signInUser() }
          title="Submit"
        />
      </View>
    );
  }
}
