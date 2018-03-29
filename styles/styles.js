import React from 'react';
import { StyleSheet } from 'react-native';

import vars from './vars.js';

const styles = StyleSheet.create({
  container: {
    flex: vars.flex
  },
  centeredContainer: {
    flex: vars.flex,
    justifyContent: "center"
  },
  formContainer: {
    alignItems: "stretch",
    paddingBottom: 50
  },
  contentContainer: {
    padding: vars.padding,
    paddingBottom: parseInt(vars.responsiveHeight / 6)
  },
  signUpContainer: {
    paddingBottom: 250,
    paddingTop: 15
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
    marginVertical: vars.padding,
    marginHorizontal: 30
  },
  pickerContainer: {
    width: vars.responsiveWidth - 60,
    borderRadius: vars.borderRadius,
    borderWidth: 1,
    borderColor: vars.appLightAccent,
    height: vars.inputHeight,
    marginVertical: vars.padding,
    marginHorizontal: 30,
    paddingHorizontal: vars.padding
  },
  inputIcon: {
    color: vars.appLightAccent,
    width: 50
  },
  button: {
    width: vars.responsiveWidth - 60,
    marginVertical: vars.padding,
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
  },
  header1: {
    fontSize: 34,
    fontWeight: 'normal',
    textAlign: 'center',
    margin: vars.padding
  },
  header2: {
    fontSize: 24,
    fontWeight: 'normal',
    textAlign: 'center',
    marginVertical: vars.padding
  },
  header5: {
    fontSize: 16,
    fontWeight: 'normal',
    textAlign: 'center',
    marginVertical: vars.padding
  },
  loadingHeader: {
    fontSize: 24,
    fontWeight: 'normal',
    textAlign: 'center',
    marginVertical: vars.padding  * 2
  },
  listContainer: {
    width: vars.responsiveWidth - 60,
    marginHorizontal: 30,
    marginTop: 0,
    borderColor: vars.appBackgroundColor
  },
  listItemContainer: {
    borderBottomColor: vars.appBackgroundColor
  },
  listTitle: {
    fontSize: 16,
    color: vars.appPrimaryColor
  },
  listSubtitle: {
    fontSize: 16,
    fontWeight: 'normal',
    color: vars.appAccentColor
  }
});

export default styles;
