import React from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { ScrollView, Text } from 'react-native';

import Profile from './Profile.js';
import navStyles from '../styles/nav-styles.js';
export default class AppDrawerContent extends React.Component {

  render() {
    return (
      <ScrollView>
        <SafeAreaView>
          <Profile />
          <DrawerItems
            {...this.props}
            activeTintColor={navStyles.drawerNav.activeItemColor}
            activeBackgroundColor={navStyles.drawerNav.activeItemBackground}
          />
        </SafeAreaView>
      </ScrollView>
    );
  }
}
