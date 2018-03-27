import React from 'react';
import { View, Text, Linking } from 'react-native';
import { Header } from 'react-native-elements';

import IP_ADDRESS from '../secrets.js';
import styles from '../styles/styles.js';
import MenuToggle from './MenuToggle.js';

export default class LinkAccount extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  };

  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.props.navigation.navigate('DrawerToggle');
  }

  render() {
    let user = this.props.navigation.state.params.user;
    return (
      <View>
        <Header
          leftComponent={<MenuToggle onMenuPress={this.toggleMenu} />}
          centerComponent={{ text: 'DASHBOARD', style: { color: '#fff' } }}
          outerContainerStyles={styles.appHeader}
        />
        <Text>It looks like you have not linked your Google Calendar yet.</Text>

        <Text
          onPress={() => Linking.openURL(`http://${IP_ADDRESS}:3000?token=${user.token}`)}
          >
            Link Google Calendar
          </Text>
      </View>
    );
  }
}
