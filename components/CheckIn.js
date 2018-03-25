import React from 'react';
import { View, Text } from 'react-native';

import BackendService from '../services/BackendService.js';
import CheckInForm from './CheckInForm.js';

export default class CheckIn extends React.Component {
  constructor(props) {
    super(props);
    this.checkIn = this.checkIn.bind(this);
  }

  async checkIn(eventId) {
    try {
      let response = await BackendService.checkIn(this.props.token, eventId);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <View>
        <CheckInForm
          events={this.props.events}
          onCheckIn={this.checkIn}
        />
      </View>
    );
  }
}
