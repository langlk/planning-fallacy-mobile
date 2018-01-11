import React from 'react';
import { View, Text, TextInput, AsyncStorage, Button } from 'react-native';

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
  }

  registerUser() {
    console.log(this.state);
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
          onPress={() => this.registerUser() }
          title="Submit"
        />
      </View>
    );
  }
}
