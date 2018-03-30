import React from 'react';

import BackendService from '../services/BackendService.js';
import CheckInForm from './CheckInForm.js';

export default class CheckIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkInLoading: false,
      checkInMessage: null,
      checkInError: null
    }
    this.checkIn = this.checkIn.bind(this);
  }

  async checkIn(eventId) {
    await this.setState({
      checkInLoading: true,
      checkInMessage: null,
      checkInError: null
    });
    let response = await BackendService.checkIn(this.props.token, eventId);
    if (response.message) {
      this.setState({
        checkInMessage: response.message,
        checkInLoading: false
      });
    } else {
      this.setState({
        checkInError: response.error,
        checkInLoading: false
      });
    }
  }

  render() {
    return (
      <CheckInForm
        events={this.props.events}
        onCheckIn={this.checkIn}
        checkInLoading={this.state.checkInLoading}
        checkInMessage={this.state.checkInMessage}
        checkInError={this.state.checkInError}
      />
    );
  }
}
