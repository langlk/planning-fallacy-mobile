import React from 'react';
import { TabNavigator } from 'react-navigation';

import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import navStyles from '../styles/nav-styles.js';

export default TabNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
}, {
  tabBarOptions: {
    indicatorStyle: navStyles.tabNav.indicator,
    style: navStyles.tabNav.styles
  }
});
