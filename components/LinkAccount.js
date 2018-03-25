import React from 'react';
import { View, Text, Linking } from 'react-native';

import IP_ADDRESS from '../secrets.js';

export default class LinkAccount extends React.Component {

  render() {
    return (
      <View>
        <Text>It looks like you have not linked your Google Calendar yet.</Text>

        <Text
          onPress={() => Linking.openURL(`http://${IP_ADDRESS}:3000?token=${this.props.token}`)}
          >
            Link Google Calendar
          </Text>
      </View>
    );
  }
}
