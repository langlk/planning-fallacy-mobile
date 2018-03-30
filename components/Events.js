import React from 'react';
import { View } from 'react-native';
import { List, ListItem, Text } from 'react-native-elements';

import styles from '../styles/styles.js';

export default class Events extends React.Component {
  timeString(event) {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    let eventDate = new Date(Date.parse(event.start.date_time || event.start.date));
    let eventTimeString = event.start.date_time ? `${eventDate.getHours()}:${eventDate.getMinutes() == 0 ? '00' : eventDate.getMinutes()} on` : "All day";
    return `${eventTimeString} ${days[eventDate.getDay()]}`;
  }

  render() {
    const events = this.props.events ? this.props.events.map((event) => {
      return (
        <ListItem
          key={event.id}
          title={event.summary}
          subtitle={this.timeString(event)}
          leftIcon={{
            name: 'event',
            color: '#606060'
          }}
          hideChevron={true}
          containerStyle={styles.listItemContainer}
          titleStyle={styles.listTitle}
          subtitleStyle={styles.listSubtitle}
        />
      );
    }) : (
      <ListItem
        title='No Upcoming Events Found'
        hideChevron={true}
        containerStyle={styles.listItemContainer}
        titleStyle={styles.listTitle}
      />
    );

    return (
      <View>
        <Text h2 style={styles.header2}>Upcoming Events</Text>
        <List containerStyle={styles.listContainer}>
          {events}
        </List>
      </View>
    );
  }
}
