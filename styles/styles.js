import React from 'react';
import { StyleSheet } from 'react-native';

import vars from './vars.js';

const styles = StyleSheet.create({
  container: {
    flex: vars.flex,
    padding: vars.padding
  },
  mainContainer: {
    flex: vars.flex,
    padding: vars.padding,
    marginTop: 20
  },
  loadingContainer: {
    flex: vars.flex,
    justifyContent: "center"
  },
  appHeader: {
    paddingTop: vars.responsivePaddingTop,
    height: 70,
    backgroundColor: vars.appPrimaryColor
  }
});

export default styles;
