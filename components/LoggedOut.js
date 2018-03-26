import React from 'react';
import { TabNavigator } from 'react-navigation';

import SignIn from './SignIn.js';
import SignUp from './SignUp.js';

export default TabNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp }
});
