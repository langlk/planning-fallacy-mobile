import React from 'react';
import { View, Text } from 'react-native';

import IP_ADDRESS from '../secrets.js';
import BackendService from '../services/BackendService.js';
import CheckIn from './CheckIn.js';
import Events from './Events.js';
import Profile from './Profile.js';

export default class Dashboard extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  };

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.navigation.state.params.user,
      events: null
    };

    this.setPage = this.setPage.bind(this);
  }

  componentDidMount() {
    this.getEvents(this.state.user.token);
  }

  async getEvents(token) {
    try {
      let response = await BackendService.getEvents(token);
      this.setState({ events: response.events });
    } catch (error) {
      console.log(error);
    }
  }

  setPage(newPage) {
    this.setState({ page: newPage });
  }

  render() {
    return (
      <View>
        <CheckIn
          events={this.state.events}
          token={this.state.user.token}
        />
        <Events events={this.state.events} />
      </View>
    );
  }
}
