import React from 'react';
import { View, Text } from 'react-native';

import IP_ADDRESS from '../secrets.js';
import BackendService from '../services/BackendService.js';
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
    this.getEvents(this.props.token);
  }

  componentWillReceiveProps(nextProps) {
    this.getEvents(nextProps);
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
