import React from 'react';
import { View, Picker } from 'react-native';
import { Button, Text } from 'react-native-elements';

import styles from '../styles/styles.js';

export default class CheckInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eventId: null };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.events && nextProps.events.length > 0) {
      this.setState({ eventId: nextProps.events[0].id });
    }
  }

  render() {
    const events = this.props.events ? this.props.events.map((event) => {
      return (
        <Picker.Item
          label={event.summary}
          value={event.id}
          key={event.id}
        />
      );
    }) : null;

    let notification = null;
    if (this.props.checkInError) {
      notification = <Text style={styles.errorText}>{this.props.checkInError}</Text>;
    } else if (this.props.checkInMessage) {
      notification = <Text style={styles.successText}>{this.props.checkInMessage}</Text>;
    }
    return events ? (
      <View>
        <Text h2 style={styles.header2}>Check in to an Event</Text>
        {notification}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={this.state.eventId}
          >
            {events}
          </Picker>
        </View>

        <Button
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          titleStyle={styles.buttonTitle}
          onPress={() => this.props.onCheckIn(this.state.eventId) }
          title="Check In"
        />
      </View>
    ) : (
      <View>
        <Text h2 style={styles.header2}>Check in to an Event</Text>
        <Text h5 style={styles.header5}>No events to check into.</Text>
      </View>
    );
  }
}
