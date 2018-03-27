import React from 'react';
import { Platform, StatusBar } from 'react-native';

const vars = {
  responsivePaddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  flex: 1,
  padding: 10,
  appPrimaryColor: '#000',
  appAccentColor: '#606060'
};

export default vars;
