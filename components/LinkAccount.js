import React from 'react';
import { View, Linking } from 'react-native';
import { Button, Header, Text } from 'react-native-elements';

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
      <View style={styles.container}>
        <Header
          leftComponent={<MenuToggle onMenuPress={this.toggleMenu} />}
          centerComponent={{ text: 'LINK ACCOUNT', style: { color: '#fff' } }}
          outerContainerStyles={styles.appHeader}
        />
        <View style={styles.centeredContainer}>
          <View style={styles.contentContainer}>
            <Text h2 style={styles.header2}>
              Link Your Google Account
            </Text>

            <Text h5 style={styles.header5}>
              This app uses your Google Calendar to track when and where your events are happening. You'll need to link your Google account through the Planning Fallacy site.
            </Text>

            <Button
              title='Link Google Calendar'
              buttonStyle={styles.button}
              titleStyle={styles.buttonTitle}
              onPress={() => Linking.openURL(`http://${IP_ADDRESS}:3000?token=${user.token}`)}
            />
          </View>
        </View>
      </View>
    );
  }
}
