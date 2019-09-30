import React from 'react';
import {View, StyleSheet} from 'react-native';
import Navbar from '../components/NavBar/NavBar';

const layout = props => (
  <View>
    <Navbar />
    {props.children}
  </View>
);

// const styles = StyleSheet.create({
//   container: {
//     margin: 10,
//   },
// });

export default layout;
