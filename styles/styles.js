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
    borderRadius: vars.borderRadius,
    borderWidth: 1,
    borderColor: vars.appLightAccent,
    height: vars.inputHeight,
    marginVertical: 10,
    marginHorizontal: 30
  },
  inputIcon: {
    color: vars.appLightAccent,
    width: 50
  },
  button: {
    width: vars.responsiveWidth - 60,
    marginVertical: 10,
    marginHorizontal: 30,
    height: vars.inputHeight,
    borderRadius: vars.borderRadius,
    borderColor: vars.appLightAccent,
    borderWidth: 1,
    backgroundColor: vars.appBackgroundColor,
    shadowColor: vars.appBackgroundColor,
    shadowOpacity: 0,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 0,
    elevation: 0
  },
  buttonTitle: {
    color: vars.appAccentColor,
    fontWeight: 'normal',
    fontSize: 18
  }
});

export default styles;
