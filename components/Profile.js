import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

import navStyles from '../styles/nav-styles';
import StorageService from '../services/StorageService.js';

export default class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user: null };
    this.getUser();
  }

  async getUser() {
    try {
      let user = await StorageService.getUser();
      this.setState({user: user});
    } catch (error) {
      console.log(error);
    }
  }

  isLate(user) {
    if (user.lateness) {
      return user.lateness > 0;
    } else {
      return false;
    }
  }

  latenessString(lateness) {
    let minutesLate = parseInt(lateness / 60);
    if (minutesLate <= 0) {
      return `On average ${Math.abs(minutesLate)} minutes early`;
    } else {
      return `On average ${minutesLate} minutes late`
    }
  }

  render() {
    return this.state.user ? (
      <View style={navStyles.drawerHeader}>
        <Text h1 style={navStyles.drawerH1}>
          Planning Fallacy
        </Text>
        <Text h3 style={navStyles.drawerH3}>
          {this.state.user.name}
        </Text>
        <Text>
          {this.state.user.email}
        </Text>
        <Text style={ this.isLate(this.state.user) ? navStyles.drawerLate : navStyles.drawerEarly }>
          {this.state.user.lateness ? this.latenessString(this.state.user.lateness) : null}
        </Text>
      </View>
    ) : (
      <View style={navStyles.drawerHeader}>
        <Text h1 style={navStyles.drawerH1}>
          Planning Fallacy
        </Text>
      </View>
    );
  }
}
