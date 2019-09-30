import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform} from 'react-native';

const capitalizer = phrase => {
  return phrase.charAt(0).toUpperCase() + phrase.slice(1);
};

const todoListItems = props => (
  <View style={styles.container}>
    <TouchableOpacity onPress={props.removeTodo.bind(this, props.id)}>
      <View style={styles.item}>
        <Text>{capitalizer(props.name)}</Text>
      </View>
    </TouchableOpacity>
    <View style={styles.quantity}>
      <Text>{props.quantity}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: 'row',
  },
  item: {
    marginLeft: 19,
    width: 205,
    marginRight: Platform.OS === 'ios' ? 18 : 28,
  },
  quantity: {
    width: 80,
  },
});

export default todoListItems;
