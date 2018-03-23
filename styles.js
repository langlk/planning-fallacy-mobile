import React from 'react';
import { StyleSheet } from 'react-native';

const defaults = {
  flex: 1,
  padding: 10
};

const styles = StyleSheet.create({
  container: {
    flex: defaults.flex,
    padding: defaults.padding
  },
  mainContainer: {
    flex: defaults.flex,
    padding: defaults.padding,
    marginTop: 20
  }
});

export default styles;
