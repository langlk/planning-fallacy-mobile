import React from 'react';
import { View, Text, Picker, Button } from 'react-native';

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

    return events ? (
      <View>
        <Text>CheckIn</Text>
        <Picker
          selectedValue={this.state.eventId}
        >
          {events}
        </Picker>
        <Button
          onPress={() => this.props.onCheckIn(this.state.eventId) }
          title="Check In"
        />
      </View>
    ) : (
      <View>
        <Text>CheckIn</Text>
        <Text>No events to check into.</Text>
      </View>
    );
  }
}
