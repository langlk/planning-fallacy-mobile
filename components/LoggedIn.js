import React from 'react';
import { SwitchNavigator } from 'react-navigation';

import NoAccount from './NoAccount.js';
import HasAccount from './HasAccount.js';

export default SwitchNavigator({
  NoAccount: NoAccount,
  HasAccount: HasAccount
});
