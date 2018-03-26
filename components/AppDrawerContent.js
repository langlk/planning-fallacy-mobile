import React from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { ScrollView, Text } from 'react-native';

import Profile from './Profile.js';

export default class AppDrawerContent extends React.Component {

  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <Profile />
          <DrawerItems {...this.props} />
        </SafeAreaView>
      </ScrollView>
    );
  }
}
