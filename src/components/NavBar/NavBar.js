import React from 'react';
import {View, StyleSheet} from 'react-native';
import NavbarItems from './NavBarItems/NavBarItems';

const navBar = () => (
  <View style={styles.container}>
    <NavbarItems name="Home" />
    <NavbarItems name="Completed" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: '100%',
    backgroundColor: 'grey',
    flexDirection: 'row',
  },
});

export default navBar;
