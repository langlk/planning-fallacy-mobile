import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';

import styles from '../styles/styles.js';
import BackendService from '../services/BackendService.js';
import CheckIn from './CheckIn.js';
import Events from './Events.js';
import MenuToggle from './MenuToggle.js';
import LoadingDisplay from './LoadingDisplay';

export default class Dashboard extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  };

  constructor(props) {
    super(props);
    this.state = {
      user: this.props.navigation.state.params.user,
      events: null,
      eventsLoading: true
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    this.getEvents(this.state.user.token);
  }

  async getEvents(token) {
    try {
      let response = await BackendService.getEvents(token);
      this.setState({
        events: response.events,
        eventsLoading: false
      });
    } catch (error) {
      console.log(error);
      this.setState({ eventsLoading: false });
    }
  }

  toggleMenu() {
    this.props.navigation.navigate('DrawerToggle');
  }

  render() {
    const content = this.state.eventsLoading ? (
      <View style={styles.centeredContainer}>
        <LoadingDisplay text="Loading Your Events" />
      </View>
    ) : (
      <View>
        <CheckIn
          events={this.state.events}
          token={this.state.user.token}
        />
        <Events events={this.state.events} />
      </View>
    );

    return (
      <View style={styles.container}>
        <Header
          leftComponent={<MenuToggle onMenuPress={this.toggleMenu} />}
          centerComponent={{ text: 'DASHBOARD', style: { color: '#fff' } }}
          outerContainerStyles={styles.appHeader}
        />
        {content}
      </View>
    );
  }
}
