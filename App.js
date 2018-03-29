import React from 'react';
import { SwitchNavigator } from 'react-navigation';

import UserLoadingScreen from './components/UserLoadingScreen.js';
import LoggedOut from './components/LoggedOut.js';
import LoggedIn from './components/LoggedIn.js';

export default SwitchNavigator(
  {
    Loading: UserLoadingScreen,
    App: LoggedIn,
    Auth: LoggedOut
  },
  {
    initialRouteName: 'Loading'
  }
);
