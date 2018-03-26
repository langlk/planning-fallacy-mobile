import React from 'react';
import { View, Text } from 'react-native';

export default class Events extends React.Component {

  render() {
    const events = this.props.events ? this.props.events.map((event) => {
      return (
        <Text key={event.id}>{event.summary}</Text>
      );
    }) : (
      <Text>Loading Events</Text>
    );

    return (
      <View>
        <Text>Events</Text>
        {events}
      </View>
    );
  }
}
