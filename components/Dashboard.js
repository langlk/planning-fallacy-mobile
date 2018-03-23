import React from 'react';
import { View, Text } from 'react-native';

import IP_ADDRESS from '../secrets.js'
import CheckIn from './CheckIn.js';
import Events from './Events.js';
import Profile from './Profile.js';

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'checkin',
      events: null
    };

    this.setPage = this.setPage.bind(this);
  }

  componentDidMount() {
    this.getEvents();
  }

  async getEvents() {
    try {
      let response = await fetch(`http://${IP_ADDRESS}:3000/api/v1/events`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${this.props.token}`
        },
      });
      let responseJson = await response.json();
      this.setState({ events: responseJson.events });
    } catch (error) {
      console.error(error);
    }
  }

  setPage(newPage) {
    this.setState({ page: newPage });
  }

  render() {
    const pages = {
      'checkin': <CheckIn events={this.state.events} token={this.props.token} />,
      'events': <Events events={this.state.events} />,
      'profile': <Profile user={this.props.user} />
    };
    return (
      <View>
        <Text onPress={() => this.setPage('checkin')}>CheckIn</Text>
        <Text onPress={() => this.setPage('events')}>Events</Text>
        <Text onPress={() => this.setPage('profile')}>Profile</Text>

        {pages[this.state.page]}
      </View>
    );
  }
}
