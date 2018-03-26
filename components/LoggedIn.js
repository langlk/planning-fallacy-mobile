import React from 'react';
import { SwitchNavigator } from 'react-navigation';

import NoAccount from './NoAccount.js';
import Dashboard from './Dashboard.js';

export default SwitchNavigator({
  NoAccount: NoAccount,
  Dashboard: Dashboard
});
