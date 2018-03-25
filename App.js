import React from 'react';
import { SwitchNavigator } from 'react-navigation';

import LoadingScreen from './components/LoadingScreen.js';
import LoggedOut from './components/LoggedOut.js';
import LoggedIn from './components/LoggedIn.js';

export default SwitchNavigator(
  {
    Loading: LoadingScreen,
    App: LoggedIn,
    Auth: LoggedOut
  },
  {
    initialRouteName: 'Loading'
  }
);
