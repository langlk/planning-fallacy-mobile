import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Text } from 'react-native-elements';

import styles from '../styles/styles.js';

const LoadingDisplay = (props) => {
  return (
    <View style={styles.centeredContainer}>
      <ActivityIndicator
        size="large"
        color='#606060'
      />
      { props.text ? (
        <Text h2 style={styles.loadingHeader}>
          {props.text}
        </Text> ) : null
      }
    </View>
  );
};

export default LoadingDisplay;
