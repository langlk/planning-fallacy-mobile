import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
    };
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
          onPress={() => this.props.onSignUp(this.state.name, this.state.email, this.state.password, this.state.passwordConfirmation) }
        />
      </View>
    );
  }
}
