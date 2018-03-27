import React from 'react';
import { StyleSheet } from 'react-native';

import vars from './vars.js';

const styles = StyleSheet.create({
  container: {
    flex: vars.flex,
    padding: vars.padding
  },
  centeredContainer: {
    flex: vars.flex,
    justifyContent: "center"
  },
  formContainer: {
    alignItems: "stretch",
    paddingBottom: 50
  },
  appHeader: {
    paddingTop: vars.responsivePaddingTop,
    height: 70,
    backgroundColor: vars.appPrimaryColor
  },
  inputContainer: {
    width: vars.responsiveWidth - 60,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: vars.appLightAccent,
    height: 50,
    marginVertical: 10,
    marginHorizontal: 30
  },
  inputIcon: {
    color: vars.appLightAccent,
    width: 50
  }
});

export default styles;
