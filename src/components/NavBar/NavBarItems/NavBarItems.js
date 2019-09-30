import React from 'react';
import {Text, StyleSheet} from 'react-native';

const navBarItems = props => <Text style={styles.container}>{props.name}</Text>;

const styles = StyleSheet.create({
  container: {
    color: 'white',
    paddingRight: 5,
  },
});

export default navBarItems;
