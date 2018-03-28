import React from 'react';
import { Platform, StatusBar, Dimensions } from 'react-native';

const vars = {
  responsivePaddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
  responsiveWidth: Dimensions.get('window').width,
  responsiveHeight: Dimensions.get('window').height,
  flex: 1,
  padding: 10,
  borderRadius: 40,
  inputHeight: 50,
  appBackgroundColor: 'white',
  appPrimaryColor: '#000',
  appAccentColor: '#606060',
  appLightAccent: '#aaaaaa'
};

export default vars;
