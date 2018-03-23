import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
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
          onPress={() => this.props.onSignIn(this.state.email, this.state.password) }
          title="Submit"
        />
      </View>
    );
  }
}
