import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import AppDrawerContent from './AppDrawerContent.js';
import Dashboard from './Dashboard.js';
import SignOut from './SignOut.js';

export default DrawerNavigator({
  Dashboard: {
    screen: Dashboard
  },
  SignOutDash: {
    screen: SignOut
  }
}, {
  contentComponent: AppDrawerContent
});
