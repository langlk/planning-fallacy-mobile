import React from 'react';
import { Platform, StatusBar, Dimensions } from 'react-native';

const vars = {
  responsivePaddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  responsiveWidth: Dimensions.get('window').width,
  flex: 1,
  padding: 10,
  appPrimaryColor: '#000',
  appAccentColor: '#606060',
  appLightAccent: '#aaaaaa'
};

export default vars;
