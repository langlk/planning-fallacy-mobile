import React from 'react';
import { View, Text } from 'react-native';

import IP_ADDRESS from '../secrets.js'
import CheckInForm from './CheckInForm.js';

export default class CheckIn extends React.Component {
  constructor(props) {
    super(props);
    this.checkIn = this.checkIn.bind(this);
  }

  async checkIn(eventId) {
    try {
      let response = await fetch(`http://${IP_ADDRESS}:3000/api/v1/checkins?event_id=${eventId}`, {
        method: 'POST',
        headers: {
          Authorization: `Token ${this.props.token}`
        },
      });
    } catch (error) {
      console.error(error);
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
