import React from 'react';
import { StyleSheet, Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';

import SignInScreen from './SignInScreen.js';
import SignUpScreen from './SignUpScreen.js';

const Authorization = TabNavigator(
  {
    Home: {
      screen: SignInScreen,
      navigationOptions: {
        tabBarLabel: 'Sign In',
      },
    },
    SignUp: {
      screen: SignUpScreen,
      navigationOptions: {
        tabBarLabel: 'Sign Up',
      },
    },
  },
  {
    tabBarOptions: { style: { backgroundColor: 'blue', paddingTop: Expo.Constants.statusBarHeight }, }
  }
);

export default Authorization;
