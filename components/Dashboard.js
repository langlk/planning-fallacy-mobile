import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

import styles from '../styles/styles.js';
import BackendService from '../services/BackendService.js';
import CheckIn from './CheckIn.js';
import Events from './Events.js';
import MenuToggle from './MenuToggle.js';

export default class Dashboard extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  };

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.navigation.state.params.user,
      events: null
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    this.getEvents(this.state.user.token);
  }

  async getEvents(token) {
    try {
      let response = await BackendService.getEvents(token);
      this.setState({ events: response.events });
    } catch (error) {
      console.log(error);
    }
  }

  toggleMenu() {
    this.props.navigation.navigate('DrawerToggle');
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          leftComponent={<MenuToggle onMenuPress={this.toggleMenu} />}
          centerComponent={{ text: 'DASHBOARD', style: { color: '#fff' } }}
          outerContainerStyles={styles.appHeader}
        />
        <CheckIn
          events={this.state.events}
          token={this.state.user.token}
        />
        <Events events={this.state.events} />
      </View>
    );
  }
}
