import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import AppDrawerContent from './AppDrawerContent.js';
import LinkAccount from './LinkAccount.js';
import SignOut from './SignOut.js';

export default DrawerNavigator({
  LinkAccount: {
    screen: LinkAccount
  },
  SignOut: {
    screen: SignOut
  }
}, {
  contentComponent: AppDrawerContent
});
